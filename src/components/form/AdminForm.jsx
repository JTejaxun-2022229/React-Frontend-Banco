import { NavLink } from 'react-router-dom';
import React, { useEffect, useState, useRef } from 'react';
import IconUser from "../../assets/img/User.png"
import IconUSerList from "../../assets/img/IconUSerList.png"
import IconCredit from "../../assets/img/IconCredit.png"
import IconNewAdmin from "../../assets/img/iconNewAdmin.png"
import IconProducts from "../../assets/img/IconProducts.png"

export const AdminSidebar = () => {
    return (
        <div className='button-sidebar-container'>
            <ul>
                <li>
                    <img src={IconUSerList} alt="iconClients" />
                    <NavLink to="/dashboard/clients">Clients</NavLink>
                </li>
                <li>
                    <img src={IconCredit} alt="iconCreateClient" />
                    <NavLink to="/dashboard/create-client">Create Client</NavLink>
                </li>
                <li>
                    <img src={IconNewAdmin} alt="iconCreateAdmin" />
                    <NavLink to="/dashboard/create-admin">Create Admin</NavLink>
                </li>
                <li>
                    <img src={IconProducts} alt="iconProductList" />
                    <NavLink to="/dashboard/products">Products</NavLink>
                </li>
            </ul>
        </div>
    );
};

export const AdminNavbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleClickOutside = (event) =>{
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsSidebarOpen(false);
        }
    }

    useEffect(() =>{
        document.addEventListener("mousedown", handleClickOutside);
        return () =>{
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, []);

    return (
        <div className='navbar'>
            <div className='navbar-logo'>
                <img src='logo.png' alt='Banco El Quetzalito' />
            </div>
            <div className='user-icon' onClick={toggleSidebar}>
                <img src={IconUser} alt='User Icon' />
            </div>
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <AdminSidebarRight />
            </div>
            <div ref={sidebarRef} className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <AdminSidebarRight />
            </div>
        </div>
    );
};

export const AdminSidebarRight = () => {
    return (
        <div className='input-sidebar-container'>
{/*             <div className="sidebar-header">
                <img src={Trist} alt="User Avatar" className="sidebar-avatar" />
            </div> */}
            <ul className="sidebar-menu">
                <li>Account</li>
                <li>Config</li>
                <li>Help</li>
                <li>Contact us</li>
            </ul>
        </div>
    );
};