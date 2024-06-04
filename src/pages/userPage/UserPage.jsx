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
    <div className="view-user-container">
        <div className="user-container">
            <div className="img-container">
                
            </div>
            <div className="info-container">
                <div className="info-user">
                <img src="../../../public/img/usuario.png" alt="" />
                  <h1>name </h1>
                  <p>email </p>
                  <p>name</p>
                  <p>phone</p>
                </div>
                <div className="info-account">
                    <h1>account:</h1>
                    <h2>Ingreso: </h2>
                    <h2>Balance: </h2>
                </div>
            </div>
            
        </div>
    </div>
  );
};