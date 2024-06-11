import { useState } from 'react';
import Logo from '../../assets/img/Logo_Quetzalito_Principal-removebg.png'
import { Link, useNavigate } from 'react-router-dom';
//import PerfilAdmin from '../personalPerfil/PerfilAdmin.jsx'

export const Navbar = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false)
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/')
    };

    return (
        <nav className='navbar'>
            <div className='navbar-logo'>
                <span><img src={Logo} alt="" /></span>
            </div>
            <div className="navbar-bars" onClick={toggleSidebar}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                <button className="sidebar-close" onClick={toggleSidebar}>
                    &times;
                </button>
                <Link to="/profile">Profile</Link>
                <Link to="/settings">settings</Link>
                <Link to="/help">help</Link>
                <button className='sidebar-logout' onClick={handleLogout}>
                    Log out
                </button>
            </div>
          </nav>    
    );
};