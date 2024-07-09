/*import { useState } from 'react';
import { axios } from 'axios';

function App() {
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

    const handleSubmit = asymc (e) => {
        e.preventDefault();

        try{
            const respon
        }
    }

}
