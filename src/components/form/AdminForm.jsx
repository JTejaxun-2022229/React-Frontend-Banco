import { NavLink } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import IconUser from "../../assets/img/User.png"
import IconUSerList from "../../assets/img/IconUSerList.png"
import IconCredit from "../../assets/img/IconCredit.png"
import IconNewAdmin from "../../assets/img/iconNewAdmin.png"
import IconProducts from "../../assets/img/IconProducts.png"
import IconPurchase from "../../assets/img/purchaseIcon.png"
 
 
export const AdminSidebar = () => {
  const [activeIndex, setActiveIndex] = useState(null);
 
  const handleClick = (index) => {
    setActiveIndex(index);
  };
 
  return (
    <div className="button-sidebar-container">
      <ul>
        <li
          className={`button-sidebar-container ${activeIndex === 0 ? "active" : ""
            }`}
          onClick={() => handleClick(0)}
        >
          <img src={IconUSerList} alt="iconClients" />
          <NavLink to="/dashboard/clients">Clients</NavLink>
        </li>
        <li
          className={`button-sidebar-container ${activeIndex === 1 ? "active" : ""
            }`}
          onClick={() => handleClick(1)}
        >
          <img src={IconCredit} alt="iconClients" />
          <NavLink to="/dashboard/create-client">Create Client</NavLink>
        </li>
        <li
          className={`button-sidebar-container ${activeIndex === 2 ? "active" : ""
            }`}
          onClick={() => handleClick(2)}
        >
          <img src={IconNewAdmin} alt="iconCreateClient" />
          <NavLink to="/dashboard/create-admin">Create Admin</NavLink>
        </li>
        <li
          className={`button-sidebar-container ${activeIndex === 3 ? "active" : ""
            }`}
          onClick={() => handleClick(3)}
        >
          <img src={IconProducts} alt="iconCreateAdmin" />
          <NavLink to="/dashboard/benefits">Benefit</NavLink>
        </li>
        <li
          className={`button-sidebar-container ${activeIndex === 3 ? "active" : ""
            }`}
          onClick={() => handleClick(4)}
        >
          <img src={IconNewAdmin} alt="iconCreateAdmin" />
          <NavLink to="/dashboard/create-benefit">Create Benefit</NavLink>
        </li>
        <li
          className={`button-sidebar-container ${activeIndex === 3 ? "active" : ""
            }`}
          onClick={() => handleClick(4)}
        >
          <img src={IconPurchase} alt="iconCreateAdmin" />
          <NavLink to="/dashboard/purchases">Purchases</NavLink>
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
 
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  }
 
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
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