import { useState,useEffect } from 'react';
import Logo from '../../assets/img/Logo_Quetzalito_Principal-removebg.png'
import { useNavigate } from 'react-router-dom';
import iconExit from "../../assets/img/IconExit.png"
import { AdminSidebarRight } from '../form/AdminForm.jsx';
import { UserSidebarRight } from "../form/UserForm.jsx";

export const Navbar = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [role, setRole] = useState('');

    const navigate = useNavigate();

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/')
    };

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.role) {
            setRole(user.role);
            console.log(user.role)
        }
    }, []);

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
                <div>
                    {role === 'ADMIN_ROLE' ? (
                        <AdminSidebarRight />
                    ) : role === 'USER_ROLE' ? (
                        <UserSidebarRight/>
                    ) : (
                        <div>User No encontrado</div>
                    )}
                </div>
                <button className='sidebar-logout' onClick={handleLogout}>
                    <img src={iconExit} alt="iconExit" /><a >Log out</a>
                </button>
            </div>
        </nav>
    );
};