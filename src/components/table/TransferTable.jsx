import React from "react";
import './Table.css';

export const TransferTable = ({ transfer }) => {
    const filteredTransfer = Array.isArray(transfer) ? transfer.filter(tr => tr.emisor === transfer) : [];

    const limitedTransfer = transfer.slice(0, 5);

    return (
        <table className="transfer-table">
            <thead>
                <tr>
                    <th>Recipient</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {limitedTransfer.map((tr, index) => (
                    <tr key={index}>
                        <td>{tr.receptor}</td>
                        <td>{tr.amount}</td>
                        <td>{tr.date}</td>
                        <td>{tr.description}</td>
                    </tr>
                ))}
                {transfer.length > 5 && (
                    <tr>
                        <td colSpan="4" className="more-rows">More rows available...</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};