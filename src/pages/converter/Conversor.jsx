import React, { useState } from 'react';
import axios from "axios";

import './conversor.css'

export const Conversor = () => {
    const [formData, setFormData] = useState({
        from: "",
        to:"",
        amount:""
    });

    const [ result, setResult ] = useState(null);
    const [error, setError ] = useState('');

    const currencyCodes = ['GTQ','EUR','MXN',"USD","HNL","NIO","CRC","CAD"]

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const respon = await axios.post(
                'http://127.0.0.1:4000/quetzalito/v1/convert/',
                formData
            );

            setResult(response?.data);
            setError('');
        }catch(error){
            setError(
                'Error',
                error?.response ? error?.response?.data : error?.message
            );
        };
    };

    return(
        <div>
            <section className='conversor'>
                <form onSubmit={handleSubmit}>
                    <select 
                        name="from"
                        value={formData.from}
                        onChange={handleChange}
                        classname='imput'
                    >
                        <option>Select from Currency</option>
                        {currencyCodes.map((code) => (
                            <option value={code} key={code}>
                                {code}
                            </option>
                        ))}
                    </select>
                    <select name="to" 
                        value={formData.to}
                        onChange={handleChange}
                        classname='imput
                    '>
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
    )

};
