import React, { useState } from 'react';
import axios from "axios";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './conversor.css'

export const Conversor = () => {
    const [formData, setFormData] = useState({
        from: "",
        to: "",
        amount: "",
    });
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");

    const currencyCodes = ["GTQ", "EUR", "MXN", "USD", "HNL", "NIO", "CRC","CAD"];

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    //Http Request
    try {
        const response = await axios.post(
        "http://localhost:8080/api/v1/convert ", 
        formData
        );
        setResult(response?.data);
        setError("");
    } catch (error) {
        setError(
        "Error",
        error?.response ? error?.response?.data : error?.message
        );
    }
    };

    const goBack = () => {
    window.location.reload();
    };
    
    return (
        <div>
        <section className="conversor">
        <button className="close-button" onClick={goBack}>
            <FontAwesomeIcon icon={faTimes} />
        </button>
        <form onSubmit={handleSubmit}>
            <select
            name="from"
            value={formData.from}
            onChange={handleChange}
            className="input"
            >
            <option value="">Select From Currency</option>
            {currencyCodes.map((code) => (
                <option key={code} value={code}>
                {code}
                </option>
            ))}
            </select>
            <select
            name="to"
            value={formData.to}
            onChange={handleChange}
            className="input"
            >
            <option value="">Select To Currency</option>
            {currencyCodes.map((code) => (
                <option key={code} value={code}>
                {code}
                </option>
            ))}
            </select>
            <input
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Amount"
            type="number"
            className="input"
            />
            <button type="submit" className="submit-btn">
            Convert
            </button>
        </form>
        {result && (
            <div className="result">
            <p>
                Converted Amount: {result.convertedAmount} {result.target}
            </p>
            <p>Conversion Rate: {result.conversionRate}</p>
            </div>
        )}
        {error && <p className="error">Error: {error}</p>}
        </section>
    </div>
    );

};
