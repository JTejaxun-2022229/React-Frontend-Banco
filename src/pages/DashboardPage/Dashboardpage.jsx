/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { useUserDetails } from "../../shared/hooks";
import { Navbar } from "../../components/navbar/Navbar";
import { Sidebar } from "../../components/navbar/Sidebar";
import { Content } from "../../components/content/Content";
import "./dashboardpage.css";


export const DashboardPage = () => {
  const { isLogged } = useUserDetails();

  useEffect(() => {
    (isLogged);
  }, []);

  return (
    <div className="dashboard-container">
      <div className="Marco">
        <Sidebar/>
      </div>
    </div>
  );
};