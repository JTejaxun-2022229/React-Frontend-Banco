import React, { useEffect, useState, useRef } from 'react';
import iconStore from "../../assets/img/iconStore.png"
import IconTransaction from "../../assets/img/IconTransaction.png"
import iconCredit from "../../assets/img/IconCredit.png"
import iconFavorite from "../../assets/img/iconFavorite.png"
import IconUser from "../../assets/img/User.png"
import Trist from "../../assets/img/Trist1.webp"

/**Retorna el formulalio del las opciones de Usuario*/
/**Agregar opciones segun necesite */
export const UserSidebar = () => {
    return(
        <div className='button-sidebar-container'>
        <ul>
            <li><img src={iconStore} alt="iconStore" /><a>Store</a></li>
            <li><img src={iconCredit} alt="iconCredit" /><a>Credit</a></li>
            <li><img src={IconTransaction} alt="iconTransaction" /><a>Transaction</a></li>
            <li><img src={iconFavorite} alt="iconFavorite" /><a>Favorite</a></li>
        </ul>
    </div>
    )
}

export const UserNavbar = () => {
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

export const UserSidebarRight = () => {
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
