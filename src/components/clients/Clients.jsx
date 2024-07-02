import React, { useState, useEffect } from 'react';
import { Typography, Paper, Table, Avatar, IconButton, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import axios from 'axios';
import { EditOutlined, DeleteForeverOutlined } from '@mui/icons-material';

export const Clients = () => {
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:4000/quetzalito/v1/user');
                console.log(response, 'response completa');
                console.log(response.data, 'response.data');

                // Ajuste basado en la estructura real de los datos
                if (Array.isArray(response.data.users)) {
                    console.log('Setting user list:', response.data.users);
                    setUserList(response.data.users); // Asignar correctamente el array de usuarios
                } else {
                    console.error('Response data is not an array:', response.data.users);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        getUsers();
    }, []);

    return (
        <TableContainer component={Paper} elevation={2}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Work Place</TableCell>
                        <TableCell>Salary</TableCell>
                        <TableCell>Balance</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Array.isArray(userList) && userList.map((user, index) => (
                        <TableRow key={index}>
                            <TableCell>{user.uid}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.workPlace}</TableCell>
                            <TableCell>{user.salary}</TableCell>
                            <TableCell>{user.balance}</TableCell>
                            <TableCell>
                                <IconButton onClick={() => alert(`Edit ${user.uid}`)} size='small' color='primary'>
                                    <EditOutlined />
                                </IconButton>
                                <IconButton onClick={() => alert(`Delete ${user.uid}`)} size='small' color='secondary'>
                                    <DeleteForeverOutlined />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
