import React from 'react'
import './transfer.css'

export const Transfer = () => {
  return (
    <div className="main-content">
      <div className="container">
        <h1>Deposito</h1>
        <div className="input-group">
          <label htmlFor="account-number">Name</label>
          <input type="text" id="account-number" placeholder="Numero de cuenta" />
        </div>
        <div className="input-group">
          <label htmlFor="receptor">Reseptor</label>
          <input type="text" id="receptor" placeholder="Reseptor" />
        </div>
        <div className="input-group">
          <label htmlFor="amount">amount</label>
          <input type="text" id="amount" placeholder="amount" />
        </div>
        <div className="input-group">
          <label htmlFor="description">Description</label>
          <input type="text" id="description" placeholder="uwus" />
        </div>
        <button className="submit-button">Solicitar</button>
      </div>
    </div>
  )
}