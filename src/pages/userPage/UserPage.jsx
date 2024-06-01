/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { useUserDetails } from "../../shared/hooks";



import "./userPage.css";

export const UserPage = () => {
  const { isLogged } = useUserDetails();

  useEffect(() => {
    (isLogged);
  }, []);

  return (
    <div className="user-container">
      <div className="Marco">
        <h1>User Page</h1>
      </div>
    </div>
  );
};