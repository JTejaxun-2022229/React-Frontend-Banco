import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../../assets/img/Logo_Quetzalito_Principal-removebg.png'
import { Link } from 'react-router-dom';

export const Navbar = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false)

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('profile');
        window.Location.href = '/';
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