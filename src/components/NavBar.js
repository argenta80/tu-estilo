import { GenericWidget } from './GenericWidget/GenericWidget';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const NavBar = () => {
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/#">Tu Estilo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="https://www.reebok.com.ar/mujer-outlet">50% OFF</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="https://ar.pinterest.com/">Products</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                        Categorias
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="/#">Ropa Hombre</a></li>
                        <li><a className="dropdown-item" href="/#">Ropa Mujer</a></li>
                        <li><a className="dropdown-item" href="/#">Accesorios Hombre</a></li>
                        <li><a className="dropdown-item" href="/#">Accesorios Mujer</a></li>
                    </ul>
                    </li>  
                </ul>
                        <div><GenericWidget icon={faShoppingCart} /></div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;