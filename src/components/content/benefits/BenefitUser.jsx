import React, { useState, useEffect } from "react";
import axios from "axios";
import { BenefitCardUser } from "./BenefitCardUser";
import "./benefit.css";

export const BenefitUser = () => {

    const [benefits, setBenefits] = useState([]);

    useEffect(() => {
        const fetchBenefits = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:4000/quetzalito/v1/benefit/benefits");
                setBenefits(response.data.benefits);
            } catch (error) {
                console.error("Error fetching benefits:", error);
            }
        };
        fetchBenefits();
    }, []);

    return (
        <div className="benefits-container">
            <div className="sidebar">
            </div>
            <div className="main-content">
                <div className="navbar">
                </div>
                <div className="benefits-header">
                    <h1>Benefits</h1>
                </div>
                <div className="benefits-list">
                    {benefits.map((benefit) => (
                        <BenefitCardUser key={benefit.id} benefit={benefit} />
                    ))}
                </div>
            </div>
        </div>
    );
};