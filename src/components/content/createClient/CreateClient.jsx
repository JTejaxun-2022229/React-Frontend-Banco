import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import './createClient.css';

export const CreateClient = () => {
    const [clientData, setClientData] = useState({
        name: '',
        username: '',
        DPI: '',
        phone: '',
        address: '',
        workPlace: '',
        email: '',
        password: '',
        salary: '',
        balance: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setClientData({
            ...clientData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Sending data:", clientData);

        try {
            const response = await axios.post(
                `http://localhost:4000/quetzalito/v1/user/register`,
                clientData,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            toast.success("Cliente agregado exitosamente");
            console.log("Response received:", response);
        } catch (error) {
            toast.error("Error al registrar el cliente");
            console.error("Error al registrar el usuario:", error);
        }
    };

    return (
        <div className="form-container-CreateC">
            <form onSubmit={handleSubmit} className="client-form">
                <div className="headerClient">
                    <h2>New Client</h2>
                </div>
                <div className="form-group-container">
                    {Object.keys(clientData).map((key) => (
                        <div key={key} className="form-group">
                            <label>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                            <input
                                type={key === 'password' ? 'password' : 'text'}
                                name={key}
                                value={clientData[key]}
                                onChange={handleChange}
                            />
                        </div>
                    ))}
                </div>
                <button type="submit" className="signup-button">Create</button>
            </form>
        </div>
    );
};
