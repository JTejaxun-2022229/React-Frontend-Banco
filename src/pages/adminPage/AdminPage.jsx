import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useUserDetails } from "../../shared/hooks";
import { Navbar } from "../../components/navbar/Navbar";
import { Sidebar } from "../../components/navbar/Sidebar";
import "./adminPage.css";

export const AdminPage = () => {
  const { isLogged } = useUserDetails();

  useEffect(() => {
    (isLogged);
  }, []);

  return (
    <div className="dashboard-container">
      <div className="Marco">
        <Sidebar />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
