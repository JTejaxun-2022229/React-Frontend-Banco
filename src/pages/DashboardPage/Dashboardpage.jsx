import { useEffect, useState} from "react";
import { useUserDetails } from "../../shared/hooks";
import { Sidebar } from "../../components/navbar/Sidebar";
import { Outlet } from 'react-router-dom';
import { Navbar } from "../../components/navbar/Navbar";
import "./dashboardpage.css";

export const DashboardPage = () => {
  const { isLogged } = useUserDetails();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    (isLogged);
  }, []);

  const toggleForm = () => {
    setShowForm(!showForm);
    console.log('showForm:', showForm);
  };

  return (
    <div className="dashboard-container">
      <Navbar toggleForm={toggleForm}/>
      <div className="main-content">
        <Sidebar />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};



