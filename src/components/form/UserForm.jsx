import iconStore from "../../assets/img/iconStore.png";
import IconTransaction from "../../assets/img/IconTransaction.png";
import iconCredit from "../../assets/img/IconCredit.png";
import iconFavorite from "../../assets/img/iconFavorite.png";
import iconHome from "../../assets/img/IconHome.png";

import { NavLink } from "react-router-dom";
import { useState } from "react";

/**Retorna el formulalio del las opciones de Usuario*/
export const UserSidebar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="button-sidebar-container">
      <ul>
        <li
          className={`button-sidebar-container ${
            activeIndex === 0 ? "active" : ""
          }`}
          onClick={() => handleClick(0)}
        >
          <img src={iconHome} alt="iconClients" />
          <NavLink to="/dashboard/home">Home</NavLink>
        </li>
        <li
          className={`button-sidebar-container ${
            activeIndex === 1 ? "active" : ""
          }`}
          onClick={() => handleClick(1)}
        >
          <img src={iconStore} alt="iconClients" />
          <NavLink to="/dashboard/Store">Store</NavLink>
        </li>
        <li
          className={`button-sidebar-container ${
            activeIndex === 2 ? "active" : ""
          }`}
          onClick={() => handleClick(2)}
        >
          <img src={iconCredit} alt="iconCreateClient" />
          <NavLink to="/dashboard/applyCredit">Credit</NavLink>
        </li>
        <li
          className={`button-sidebar-container ${
            activeIndex === 3 ? "active" : ""
          }`}
          onClick={() => handleClick(3)}
        >
          <img src={IconTransaction} alt="iconCreateAdmin" />
          <NavLink to="/dashboard/Transaction">Transaction</NavLink>
        </li>
        <li
          className={`button-sidebar-container ${
            activeIndex === 4 ? "active" : ""
          }`}
          onClick={() => handleClick(4)}
        >
          <img src={iconFavorite} alt="iconProductList" />
          <NavLink to="/dashboard/products">Favorite</NavLink>
        </li>
      </ul>
    </div>
  );
};

export const UserSidebarRight = () => {
  return (
    <div className="input-sidebar-container">
      <ul>
        <input className="form-sidebar-button" type="button" value="Profile" />
        <input className="form-sidebar-button" type="button" value="Setting" />
        <input className="form-sidebar-button" type="button" value="History" />
        <input className="form-sidebar-button" type="button" value="Help" />
      </ul>
    </div>
  );
};
