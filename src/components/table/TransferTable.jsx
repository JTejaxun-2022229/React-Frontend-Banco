import React, { useState } from "react";
import './Table.css'

export const TransferTable = ({transfer}) => {
    console.log('Table de transferencias:', transfer)

    const filteredTransfer = transfer && transfer.filter(transfered => transfered.emisor === transfer);

    return(
        <table className="transfer-table">
            <thead>
                <tr>
                    <td>Recipient</td>
                    <td>Amount</td>
                    <td>Date</td>
                    <td>Description</td>
                </tr>
            </thead>
            <tbody>
                {filteredTransfer && filteredTransfer.length > 0 ? (
                    filteredTransfer.map((tr, index) => (
                    tr.emisor == transfer && (
                        <tr key={index}>
                            <td>{tr.receptor}</td>
                            <td>{tr.amount}</td>
                            <td>{tr.date}</td>
                            <td>{tr.description}</td>
                        </tr>
                    )
                    ))
                ) : (
                    
                    <tr>
                        <td colSpan="2" className="no-transfer">No se han realizado transacciones</td>
                    </tr>
                )}
                
            </tbody>
        </table>
        
    )
}