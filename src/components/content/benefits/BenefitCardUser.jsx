import React, { useState } from "react";
import "./benefit.css";

export const BenefitCardUser = ({ benefit }) => {
    
    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    return (
        <div className="benefit-card">
            <h2>{benefit.nameBenefit}</h2>
            <p>Stock: {benefit.stock}</p>
            <p>Price: Q{benefit.price}</p>
            <p>Status: {benefit.status ? "Active" : "Inactive"}</p>
            <p>
                {showFullDescription ? benefit.descriptionBenefit : `${benefit.descriptionBenefit.slice(0, 100)}...`}
                <span className="read-more" onClick={toggleDescription}>
                    {showFullDescription ? " Show less" : " Read more"}
                </span>
            </p>
            <button className="buy-button">Comprar</button>
        </div>
    );
};