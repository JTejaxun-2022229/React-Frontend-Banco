import { useEffect, useState } from 'react';
import { AdminSidebar } from '../form/AdminForm.jsx';
import { UserSidebar } from '../form/UserForm.jsx';
import logo from "../../assets/img/LogoQuetzalito_Principal.png"

const Logo = () => {
    return (
        <img src={logo} alt="Logo Principal" />
    )
}

const Name = ({ name }) => {
    console.log(name)
    return (
        <>
            <h1>Welcome</h1>
            <h3>{name}</h3>
        </>
    )
}

export const Sidebar = () => {
    const [role, setRole] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.role && user.name) {
            setRole(user.role);
            setName(user.name)
        }
    }, []);

    return (
        <div className="sidebar-container">
            <div className='Sidebar-logo-container'>
                <Logo />
            </div>
            <div className='Sidebar-TitleName-Container'>
                <Name name={name} />
            </div>
            {role === 'ADMIN_ROLE' ? (
                <AdminSidebar />
            ) : role === 'USER_ROLE' ? (
                <UserSidebar />
            ) : (
                <div>No se encontró el rol del usuario</div>
            )}
        </div>
    );
};
