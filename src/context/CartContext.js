import React, {useContext, useState, createContext} from 'react'

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children}) =>{
    const [cart, setCart] = useState([]);

    const isInCart = (id) => cart.some((item) =>  item.id === id);

    const addToCart = (item, quantity) =>{
        if(isInCart(item.id)){
            const newCart = cart.map((cartElement) => {
                if(cartElement.id === item.id){
                    return { ...cartElement, quantity: cartElement.quantity + quantity };
                } else return cartElement;
            });
            setCart(newCart);
        }else {
            setCart((prev) => [ ...prev, { ...item, quantity}]);
        }
    };

    const getQuantityByItem = itemId =>{
        return cart.reduce((acc, item) => {
            if(item.id === itemId) {
                return acc + item.quantity;
            } else return acc;
        },0);
    }


    const removeCart = (itemId)=> {
        setCart(cart.filter((elem) => elem.id !== itemId));
    }
    const clear = () => setCart([]);
    return (
        <CartContext.Provider value={{ cart, addToCart, removeCart, clear, getQuantityByItem }}>
            {children}
        </CartContext.Provider>
    )
}
