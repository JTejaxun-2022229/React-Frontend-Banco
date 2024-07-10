import { useState } from 'react';
import { getUserIdByAccount, createTransfer, getTransfersByUser } from '../../services/api';

const useUserAccount = () => {
  const [error, setError] = useState(null);

  const fetchUserIdByAccount = async (accountNumber) => {
    try {
      console.log(`Fetching user ID for account number: ${accountNumber}`);
      const userId = await getUserIdByAccount(accountNumber);
      console.log(`Fetched user ID: ${userId} for account number: ${accountNumber}`);
      return userId;
    } catch (error) {
      setError('Error fetching user ID');
      console.error('Error fetching user ID', error);
      throw error;
    }
  };

  const transferFunds = async (transferData) => {
    try {
      console.log('Transferring funds with data:', transferData);
      const response = await createTransfer(transferData);
      console.log('Transfer successful:', response);
      return response;
    } catch (error) {
      setError('Error creating transfer');
      console.error('Error creating transfer', error);
      throw error;
    }
  };

  const fetchTransfers = async (userId) => {
    try {
      const transfers = await getTransfersByUser(userId);
      return Array.isArray(transfers) ? transfers : [];
    } catch (error) {
      setError('Error fetching transfers');
      console.error('Error fetching transfers', error);
      return [];
    }
  };

  return { fetchUserIdByAccount, transferFunds, fetchTransfers, error };
};

export default useUserAccount;