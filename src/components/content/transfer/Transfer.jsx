import React, { useState } from 'react';
import { Input } from "../../Input.jsx";
import './transfer.css';
import useUserAccount from '../../../shared/hooks/useUserAccount';

export const Transfer = () => {
  const [formData, setFormData] = useState({
    emisor: '',
    receptor: '',
    amount: '',
    description: ''
  });

  const [viewTransfers, setViewTransfers] = useState(false);
  const [transfers, setTransfers] = useState([]);
  const { fetchUserIdByAccount, transferFunds, fetchTransfers, error } = useUserAccount();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Form data:', formData);
      const emisorId = await fetchUserIdByAccount(formData.emisor);
      const receptorId = await fetchUserIdByAccount(formData.receptor);

      const transferData = {
        emisor: emisorId,
        amount: formData.amount,
        receptor: receptorId,
        description: formData.description
      };

      console.log('Transfer data:', transferData);
      const response = await transferFunds(transferData);
      console.log('Transfer response:', response);
      setFormData({
        emisor: '',
        amount: '',
        receptor: '',
        description: ''
      });
    } catch (error) {
      console.error('Error creating transfer', error);
    }
  };

  const handleViewTransfers = async () => {
    setViewTransfers(!viewTransfers);
    if (!viewTransfers) {
      const userId = await fetchUserIdByAccount(formData.emisor);
      const userTransfers = await fetchTransfers(userId);
      if (Array.isArray(userTransfers)) {
        setTransfers(userTransfers);
      } else {
        setTransfers([]);
        console.error('Fetched transfers are not an array');
      }
    }
  };

  return (
    <div className="main-content">
      <div className="container">
        <div className="button-switch-container">
          <label className="toggle-switch">
            <input type="checkbox" checked={viewTransfers} onChange={handleViewTransfers} />
            <div className="toggle-switch-background">
              <div className="toggle-switch-handle"></div>
            </div>
          </label>
        </div>
        {!viewTransfers ? (
          <>
            <h1>Transaction</h1>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="emisor">Number account</label>
                <input
                  type="text"
                  id="emisor"
                  name="emisor"
                  placeholder="Numero de cuenta"
                  value={formData.emisor}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="amount">Amount</label>
                <input
                  type="text"
                  id="amount"
                  name="amount"
                  placeholder="Amount"
                  value={formData.amount}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="receptor">Receptor</label>
                <input
                  type="text"
                  id="receptor"
                  name="receptor"
                  placeholder="Receptor"
                  value={formData.receptor}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  placeholder="Description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="submit-button">Solicitar</button>
            </form>
            {error && <p className="error">{error}</p>}
          </>
        ) : (
          <>
            <h1>Transferencias</h1>
            <table className="transfers-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Emisor</th>
                  <th>Receptor</th>
                  <th>Monto</th>
                  <th>Descripción</th>
                  <th>Fecha</th>
                </tr>
              </thead>
              <tbody>
                {transfers.map((transfer) => (
                  <tr key={transfer.id}>
                    <td>{transfer.id}</td>
                    <td>{transfer.emisor}</td>
                    <td>{transfer.receptor}</td>
                    <td>{transfer.amount}</td>
                    <td>{transfer.description}</td>
                    <td>{new Date(transfer.date).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};