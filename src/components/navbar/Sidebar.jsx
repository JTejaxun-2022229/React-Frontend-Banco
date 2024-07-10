import { useEffect, useState } from 'react';
import { AdminSidebar } from '../form/AdminForm.jsx';
import { UserSidebar } from '../form/UserForm.jsx';
import logo from "../../assets/img/LogoQuetzalito_Principal.png"
import { useUserDetails } from '../../shared/hooks/useUserDetails.jsx';


const Logo = () => {
    return (
        <img src={logo} alt="Logo Principal" className="sidebar-logo" />
    );
}

const Name = ({ name }) => {
    return (
        <div className="name-container">
            <h1>Welcome!</h1>
            <h3>{name}</h3>
        </div>
    );
}

export const Sidebar = () => {

    const {username, role} = useUserDetails();

    return (
        <div className="sidebar-container">
            <div className="sidebar-logo-container">
                <Logo />
            </div>
            <div className="sidebar-title-name-container">
                <Name name={username} />
            </div>
            <div className="sidebar-menu">
                {role === 'ADMIN_ROLE' ? (
                    <AdminSidebar />
                ) : role === 'USER_ROLE' ? (
                    <UserSidebar />
                ) : (
                    <div>Rol not found, please Login</div>
                )}
            </div>
        </div>
    );
};