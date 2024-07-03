/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { useUserDetails } from "../../shared/hooks";
import UserImage from '../../assets/img/User.png';



import "./userPage.css";

export const UserPage = () => {
  const { isLogged } = useUserDetails();

  const userDetails = JSON.parse(localStorage.getItem('userDetails'));

  useEffect(() => {
    console.log('El usuario es:', userDetails);
}, [userDetails]);


  console.log(userDetails, 'us')

  return (
    <div className="view-user-container">
        <div className="user-container">
            <div className="img-container">
                
            </div>
            <div className="info-container">
                <div className="info-user">
                <img src={UserImage} alt="User" />
                  <h1>User</h1>
                  <p>{userDetails ? userDetails.email : ''}</p>
                  <p>{userDetails ? userDetails.name : ''}</p>
                  <p>{userDetails ? userDetails.phone : ''}</p>
                </div>
                <hr />
                <hr />
                <div className="info-account">
                <p>account: <span>{userDetails ? userDetails.account : ''}</span> </p>
                <p>Ingreso: <span>Q{userDetails ? userDetails.salary : ''}</span></p>
                <p>Balance: <span>Q{userDetails ? userDetails.balance : ''}</span></p>
                </div>
            </div>
            
        </div>
    </div>
  );
};