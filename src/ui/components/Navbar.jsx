import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { logout, startLogout } from '../../store/auth';
import { useDispatch } from 'react-redux';

//import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';


export const Navbar = () => {

 //   const { user, logout } = useContext( useCheckAuth );
    

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { displayName } = useSelector( state => state.auth );

    const onLogout = () => {
        dispatch(startLogout());

    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Inicio
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/blusas"
                    >
                        Blusas
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/calzado"
                    >
                        Calzado
                    </NavLink>
                    
                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/pantalones"
                    >
                        Pantalones
                    </NavLink>
                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/search"
                    >
                        Buscar
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                   
                    <span className="nav-item nav-link text-primary">
                        { 
                        displayName
                        }
                    </span>

                    <button
                        className="nav-item nav-link btn"
                        onClick={ onLogout }
                    >
                        Logout
                    </button>

                </ul>
            </div>
        </nav>
    )
}