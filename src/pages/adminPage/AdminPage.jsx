/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { useUserDetails } from "../../shared/hooks";
import { Navbar } from "../../components/navbar/Navbar";
import { Sidebar } from "../../components/navbar/Sidebar";
import { UserPage } from "../userPage/UserPage"
import { useLocation } from 'react-router-dom';


import "./adminPage.css";


export const AdminPage = () => {
  const { isLogged } = useUserDetails();
  const [showForm, setShowForm] = useState(false);
  
  const location = useLocation();
  const { state } = location;
  const userDetails = state && state.userDetails;

  useEffect(() => {
    if (userDetails) {
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
    }
  }, [userDetails]);

  useEffect(() => {
    console.log('usuario es:', userDetails);
  }, [userDetails]);


  const toggleForm = () => {
    setShowForm(!showForm);
    console.log('showForm:', showForm);
  };

  useEffect(() => {
    if (userDetails) {
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
    }
  }, [userDetails]);

  return (
    <div className="dashboard-container">
      <div className="Marco">
        <Navbar toggleForm={toggleForm}/> 
        <Sidebar/>
        {showForm && (
          <div className="user-container">
            <UserPage/>
          </div>
        )}
      </div>
    </div>
  );
};