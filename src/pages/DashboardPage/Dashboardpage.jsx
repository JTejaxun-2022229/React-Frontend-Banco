import { useEffect } from "react";
import { useUserDetails } from "../../shared/hooks";
import { Sidebar } from "../../components/navbar/Sidebar";
import { Outlet } from 'react-router-dom';
import "./dashboardpage.css";

export const DashboardPage = () => {
  const { isLogged } = useUserDetails();

  useEffect(() => {
    (isLogged);
  }, []);

  return (
    <div className="dashboard-container">
      <div className="Marco">
        <Sidebar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};