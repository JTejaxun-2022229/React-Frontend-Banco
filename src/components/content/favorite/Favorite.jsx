import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import './favorite.css';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@mui/material';
import { EditOutlined } from '@mui/icons-material';

export const Favorite = () => {
    const [favoriteData, setFavoriteData] = useState({
        noAccount: '',
        DPI: '',
        alias: ''
    });
    const [idUser, setIdUser] = useState('');
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            const parsedUser = JSON.parse(user);
            setIdUser(parsedUser.uid);
            fetchFavorites(parsedUser.uid); // Llama a fetchFavorites con el idUser
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFavoriteData({
            ...favoriteData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Sending data:", { ...favoriteData, idUser });

        for (const key in favoriteData) {
            if (favoriteData[key] === '') {
                toast.error(`The ${key} field is required`);
                return;
            }
        }

        if (!idUser) {
            toast.error("User ID is missing");
            return;
        }

        try {
            const response = await axios.post(
                `http://127.0.0.1:4000/quetzalito/v1/favorite`,
                { ...favoriteData, idUser },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            toast.success("Favorite added successfully");
            setFavorites([...favorites, { ...favoriteData, idUser }]);
            console.log("Response received:", response);
        } catch (error) {
            toast.error("Error registering the favorite");
            console.error("Error registering the favorite:", error);
        }
    };

    const fetchFavorites = async (userId) => {
        try {
            const response = await axios.get(
                `http://127.0.0.1:4000/quetzalito/v1/favorite/${userId}`
            );
            setFavorites(response.data.favorites); // Asumiendo que la respuesta contiene un campo 'favorites'
        } catch (error) {
            console.error('Error fetching favorites:', error);
            toast.error('Error fetching favorites');
        }
    };

    return (
        <div>
            <div className="form-container-CreateF">
                <form onSubmit={handleSubmit} className="favorite-form">
                    <div className="headerFavorite">
                        <h2>Favorite</h2>
                    </div>
                    <div className="form-group-container">
                        {Object.keys(favoriteData).map((key) => (
                            <div key={key} className="form-group">
                                <label>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                                <input
                                    type="text"
                                    name={key}
                                    value={favoriteData[key]}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        ))}
                    </div>
                    <button type="submit" className="signup-button">Create</button>
                </form>
            </div>

            <div className="Tabela">
                <TableContainer component={Paper} elevation={2} className="TableContainer">
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>No Account</TableCell>
                                <TableCell>DPI</TableCell>
                                <TableCell>Alias</TableCell>
                                <TableCell>User ID</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {favorites.map((favorite, index) => (
                                <TableRow key={index}>
                                    <TableCell>{favorite.noAccount}</TableCell>
                                    <TableCell>{favorite.DPI}</TableCell>
                                    <TableCell>{favorite.alias}</TableCell>
                                    <TableCell>{favorite.idUser}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};
