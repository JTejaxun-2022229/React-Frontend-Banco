import{ useEffect, useState } from 'react';

const AdminSidebar = () => (
    <div className='button-sidebar-container'>
        <ul >
            <li>Creditos</li>
            <li>Transfer</li>
            <li>Usuarios</li>
            <li>Settings</li>
        </ul>
    </div>
);

const UserSidebar = () => (
    <div className='button-sidebar-container'>
        <ul>
            <li>Transaction</li>
            <li>Transfer</li>
            <li>Credit</li>
            <li>Settings</li>
        </ul>
    </div>
);

export const Sidebar = () => {
    const [role, setRole] = useState('');

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.role) {
            setRole(user.role);
        }
    }, []);

    return (
        <div className="sidebar-container">
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
