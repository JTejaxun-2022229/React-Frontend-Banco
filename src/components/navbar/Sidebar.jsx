import{ useEffect, useState } from 'react';
import { AdminSidebar } from '../form/AdminForm.jsx';
import { UserSidebar } from '../form/UserForm.jsx';

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
