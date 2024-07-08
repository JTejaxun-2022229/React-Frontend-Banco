// DashboardPage.jsx
import { useEffect } from "react";
import { useUserDetails } from "../../shared/hooks";
import { Sidebar } from "../../components/navbar/Sidebar";
import { Navbar } from "../../components/navbar/Navbar"
import { Outlet } from 'react-router-dom';
import "./dashboardpage.css";

export const DashboardPage = () => {
  const { isLogged } = useUserDetails();

  useEffect(() => {
    (isLogged);
  }, []);

  return (
    <div className="dashboard-container">
        <div className='dashboard-container'>
            <Navbar />
        </div>
      <div className="Marco">
        <Sidebar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};


