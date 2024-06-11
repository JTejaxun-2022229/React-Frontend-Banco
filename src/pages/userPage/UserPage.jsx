/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useUserDetails } from "../../shared/hooks";
import { Sidebar } from "../../components/navbar/Sidebar.jsx";

import "./userPage.css";

export const UserPage = () => {
  const { isLogged } = useUserDetails();

  useEffect(() => {
    (isLogged);
  }, []);

  return (
    <div className="user-container">
      <div className="Marco">
        <Sidebar/>
      </div>
    </div>
  );
};