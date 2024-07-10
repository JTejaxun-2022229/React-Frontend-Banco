import { useEffect, useState } from "react";
import { AdminNavbar } from '../form/AdminForm.jsx';
import { UserNavbar } from '../form/UserForm.jsx';

export const Navbar = () =>{
    const [role, setRole] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setRole(user.role);
            setName(user.name)
        }
    }, []);

    return(
        <div className="navbar-container">
                <div className="sidebar-menu">
                {role === 'ADMIN_ROLE' ? (
                    <AdminNavbar />
                ) : role === 'USER_ROLE' ? (
                    <UserNavbar />
                ) : (
                    <div>Rol not found, please Login</div>
                )}
            </div>
        </div>
    );
};