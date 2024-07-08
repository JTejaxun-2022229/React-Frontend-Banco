/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { useUserDetails } from "../../shared/hooks";
import UserImage from '../../assets/img/User.png';
import { getTransfer } from "../../services/";
import { TransferTable } from '../../components/table/TransferTable'

import "./userPage.css";

export const UserPage = () => {
  const { isLogged } = useUserDetails();

  const [transfered, setTransfered] = useState({ trans: [] });
  const [searchValue, setSearchValue] = useState('');
  const [filteredTransfer, setFilteredTransfer] = useState([]);

  const userDetails = JSON.parse(localStorage.getItem('userDetails'));

  useEffect(() => {
    console.log('El usuario es:', userDetails);
  }, [userDetails]);

  useEffect(() => {
    const fetchTransfer = async () => {
      try {
        const response = await getTransfer();
        if (!response.error) {
          setTransfered(response.data || { trans: [] });
        } else {
          console.error('Error al cargar las transferencias:', response.error);
        }
      } catch (error) {
        console.error('Error al cargar las transferencias:', error);
      }
    };

    fetchTransfer();
  }, []);

  useEffect(() => {
    if (Array.isArray(transfered.trans)) {
      const filtered = transfered.trans.filter(transfer =>
        transfer.emisor.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredTransfer(filtered);
    }
  }, [transfered, searchValue]);

  return (
    <div className="view-user-container">
      <div className="user-container">
        <div className="img-container">
          {/* Aquí podrías poner una imagen de usuario */}
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
          <div className="info-account">
            <p>account: <span>{userDetails ? userDetails.account : ''}</span> </p>
            <p>Ingreso: <span>Q{userDetails ? userDetails.salary : ''}</span></p>
            <p>Balance: <span>Q{userDetails ? userDetails.balance : ''}</span></p>
          </div>
          {searchValue.trim() === '' ?
            <TransferTable transfer={filteredTransfer} />
            : null
          }
        </div>
      </div>
    </div>
  );
};
