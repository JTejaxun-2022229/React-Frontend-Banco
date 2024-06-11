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
                <img src="../../../public/img/user.png" alt="" />
                  <h1>name </h1>
                  <p>email </p>
                  <p>name</p>
                  <p>phone</p>
                </div>
                <hr />
                <hr />
                <div className="info-account">
                  <h1>account: <span>4</span> </h1>
                  <h2>Ingreso: <span>Q3</span></h2>
                  <h2>Balance: <span>Q4</span></h2>
                </div>
            </div>
            
        </div>
    </div>
  );
};