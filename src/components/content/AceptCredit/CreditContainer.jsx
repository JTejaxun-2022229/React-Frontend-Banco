import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

import "./aceptCredit.css";

export const CreditContainer = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="container-Credit">
      <div className="navbar-container-content">
        <ul>
          <li
            className={`navbar-ites ${
              activeIndex === 0 ? "active" : ""
            }`}
            onClick={() => handleClick(0)}
          >
            <NavLink to="/dashboard/content/accept-credit">Aceptar Crédito</NavLink>
          </li>
          <li
            className={`navbar-items ${
              activeIndex === 1 ? "active" : ""
            }`}
            onClick={() => handleClick(1)}
          >
            <NavLink to="/dashboard/content/accepted-history">Historial Aceptados</NavLink>
          </li>
          <li
            className={`navbar-items ${
              activeIndex === 2 ? "active" : ""
            }`}
            onClick={() => handleClick(2)}
          >
            <NavLink to="/dashboard/content/denied-history">Historial Denegados</NavLink>
          </li>
        </ul>
      </div>
      <div className="container-content-credit">
        <Outlet />
      </div>
    </div>
  );
};