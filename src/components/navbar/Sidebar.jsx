import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/img/Logo_Quetzalito_Principal-removebg.png';

const AdminSidebar = () => (
  <div className='button-sidebar-container'>
    <ul>
      <li><Link to="/admin/creditos">Créditos</Link></li>
      <li><Link to="/admin/usuarios">Usuarios</Link></li>
      <li><Link to="/admin/settings">Settings</Link></li>
    </ul>
  </div>
);

const UserSidebar = () => (
  <div className='button-sidebar-container'>
    <ul>
      <li><Link to="/user/transaction">Transaction</Link></li>
      <li><Link to="/user/credit">Credit</Link></li>
      <li><Link to="/user/settings">Settings</Link></li>
    </ul>
  </div>
);

export const Sidebar = () => {
  const [role, setRole] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.role) {
      setRole(user.role);
    }
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
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
        {role === 'ADMIN_ROLE' ? (
          <AdminSidebar />
        ) : role === 'USER_ROLE' ? (
          <UserSidebar />
        ) : (
          <div>No se encontró el rol del usuario</div>
        )}
        <button className='sidebar-logout' onClick={handleLogout}>
          Log out
        </button>
      </div>
    </nav>
  );
};
