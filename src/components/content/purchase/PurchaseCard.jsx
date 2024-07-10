import React, { useState, useEffect } from "react";
import axios from "axios";
import "./purchase.css";

export const PurchaseCard = ({ purchase }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    return (
        <div className="purchase-card">
            <h2>Purchase by: {purchase.user?.name || "Unknown User"}</h2>
            <p>Total Amount: Q{purchase.totalAmount}</p>
            <p>Date: {new Date(purchase.datePurchase).toLocaleDateString()}</p>
            <p>Status: {purchase.delivered ? "Delivered" : "Not Delivered"}</p>
            <p>Refunded: {purchase.refunded ? "Yes" : "No"}</p>
            <p>
                Benefits:
                {showFullDescription ? (
                    <span>
                        {purchase.benefits.map((benefitWrapper, index) => {
                            const benefit = benefitWrapper.benefit || {};
                            return (
                                <span key={index}>
                                    {benefit.nameBenefit || "Unknown Benefit"} (Quantity: {benefitWrapper.quantity})
                                    {index < purchase.benefits.length - 1 ? ", " : ""}
                                </span>
                            );
                        })}
                    </span>
                ) : (
                    `${purchase.benefits.slice(0, 2).map(b => b.benefit?.nameBenefit || "Unknown Benefit").join(", ")}...`
                )}
                <span className="read-more" onClick={toggleDescription}>
                    {showFullDescription ? " Show less" : " Read more"}
                </span>
            </p>
        </div>
    );
};

export const Purchase = () => {
    const [purchases, setPurchases] = useState([]);

    useEffect(() => {
        const fetchPurchases = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:4000/quetzalito/v1/purchase/purchases");
                setPurchases(response.data.purchases);
            } catch (error) {
                console.error("Error fetching purchases:", error);
            }
        };
        fetchPurchases();
    }, []);

    return (
        <div className="purchases-container">
            <div className="sidebar"></div>
            <div className="main-content">
                <div className="navbar"></div>
                <div className="purchases-header">
                    <h1>Purchases</h1>
                </div>
                <div className="purchases-list">
                    {purchases.map((purchase) => (
                        <PurchaseCard key={purchase.id} purchase={purchase} />
                    ))}
                </div>
            </div>
        </div>
    );
};