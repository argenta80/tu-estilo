import { CartWidget } from './CartWidget/CartWidget';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext'

const NavBar = () => {
    const { cart } = useCartContext();

    const totalItems = cart.reduce((acc, item) => {
        return acc + item.quantity
    }, 0);
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Tu Estilo</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link to="/category/hombre" className="nav-link active" aria-current="page" >Hombre</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/category/mujer"  className="nav-link" >Mujer</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/category/accesorios"  className="nav-link" >Accesorios</Link>
                    </li>
                    <li className="nav-item dropdown">
                    <Link to="/"  className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                        Categorias
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><Link to="/category/hombre"  className="dropdown-item">Ropa Hombre</Link></li>
                        <li><Link to="/category/mujer"  className="dropdown-item" >Ropa Mujer</Link></li>
                        <li><Link to="/category/accesorios"  className="dropdown-item">Accesorios </Link></li>
                    </ul>
                    </li>  
                </ul>
                        <div><CartWidget icon={faShoppingCart} />{totalItems}</div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;