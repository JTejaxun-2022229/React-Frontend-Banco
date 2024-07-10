import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import './createAdmin.css';

export const CreateAdmin = () => {
    const [adminData, setAdminData] = useState({
        name: '',
        DPI: '',
        email: '',
        password: '',
        phone: '',
        address: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdminData({
            ...adminData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Sending data:", adminData);

        try {
            const response = await axios.post(
                `http://127.0.0.1:4000/quetzalito/v1/admin`,
                adminData,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            toast.success("Admin agregado exitosamente");
            console.log("Response received:", response);
        } catch (error) {
            toast.error("Error al registrar el admin");
            console.error("Error al registrar el admin:", error);
        }
    };

    return (
        <div className="form-container-CreateC">
            <form onSubmit={handleSubmit} className="client-form">
                <div className="headerClient">
                    <h2>New Admin</h2>
                </div>
                <div className="form-group-container">
                    {Object.keys(adminData).map((key) => (
                        <div key={key} className="form-group">
                            <label>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                            <input
                                type={key === 'password' ? 'password' : 'text'}
                                name={key}
                                value={adminData[key]}
                                onChange={handleChange}
                                disabled={key === 'role' || key === 'status'} // Disable fields with default values
                            />
                        </div>
                    ))}
                </div>
                <button type="submit" className="signup-button">Create</button>
            </form>
        </div>
    );
};
