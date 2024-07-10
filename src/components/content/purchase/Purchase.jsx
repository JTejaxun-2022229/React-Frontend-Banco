
import React, { useState, useEffect } from "react";
import axios from "axios";
import { PurchaseCard } from "./PurchaseCard";
import "./purchase.css";

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
