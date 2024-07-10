import React, { useState, useEffect } from "react";
import {
  Paper,
  Table,
  IconButton,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
<<<<<<< HEAD
} from "@mui/material";
import axios from "axios";
import { EditOutlined, DeleteForeverOutlined } from "@mui/icons-material";
import { Modal } from "../../manage/Modal"; // Adjust the import path as needed
=======
  TableSortLabel,
} from "@mui/material";
import axios from "axios";
import { EditOutlined } from "@mui/icons-material";
import { Modal } from "../../manage/Modal";
import "./clients.css";
>>>>>>> develop

export const Clients = () => {
  const [userList, setUserList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
<<<<<<< HEAD

  const toggleModal = () => setIsOpen(!isOpen);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:4000/quetzalito/v1/user"
        );
        console.log(response, "response completa");
        console.log(response.data, "response.data");

        if (Array.isArray(response.data.users)) {
          console.log("Setting user list:", response.data.users);
          setUserList(response.data.users); // Asignar correctamente el array de usuarios
        } else {
          console.error("Response data is not an array:", response.data.users);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    getUsers();
  }, []);
=======
  const [sortOrder, setSortOrder] = useState("desc");
  const [movements, setMovements] = useState([]);
  const [isMovementsOpen, setIsMovementsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);
  const toggleMovementsModal = () => setIsMovementsOpen(!isMovementsOpen);

  const getUsers = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:4000/quetzalito/v1/user/orderByMovements?sort=${sortOrder}`
      );
      console.log(response, "response completa");
      console.log(response.data, "response.data");

      if (Array.isArray(response.data.users)) {
        console.log("Setting user list:", response.data.users);
        setUserList(response.data.users);
      } else {
        console.error("Response data is not an array:", response.data.users);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [sortOrder]);
>>>>>>> develop

  const handleEditClick = (user) => {
    setSelectedUser(user);
    toggleModal();
  };

<<<<<<< HEAD
  return (
    <div>
      <TableContainer component={Paper} elevation={2}>
=======
  const handleSortClick = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  const getMovements = async (userId) => {
    try {
      const response = await axios.get(`http://127.0.0.1:4000/quetzalito/v1/user/getMovements/${userId}`);
      setMovements(response.data.movements);
    } catch (error) {
      console.error("Error fetching movements data:", error);
    }
  };

  const handleMovementsClick = async (user) => {
    await getMovements(user._id);
    toggleMovementsModal();
  };

  return (
    <div className="Tabla">
      <TableContainer component={Paper} elevation={2} className="TableContainer">
>>>>>>> develop
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Account</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Work Place</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>Balance</TableCell>
<<<<<<< HEAD
=======
              <TableCell sortDirection={sortOrder}>
                <TableSortLabel
                  active={true}
                  direction={sortOrder}
                  onClick={handleSortClick}
                >
                  Movements
                </TableSortLabel>
              </TableCell>
>>>>>>> develop
              <TableCell>Manage</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(userList) &&
              userList.map((user, index) => (
                <TableRow key={index}>
                  <TableCell>{user.account}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.workPlace}</TableCell>
                  <TableCell>{user.salary}</TableCell>
                  <TableCell>{user.balance}</TableCell>
                  <TableCell>
                    <IconButton
<<<<<<< HEAD
=======
                      onClick={() => handleMovementsClick(user)}
                      size="small"
                      color="primary"
                    >
                      {user.totalCount}
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <IconButton
>>>>>>> develop
                      onClick={() => handleEditClick(user)}
                      size="small"
                      color="primary"
                    >
                      <EditOutlined />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
<<<<<<< HEAD
      <Modal isOpen={isOpen} toggleModal={toggleModal} user={selectedUser} />
    </div>
  );
};
=======
      <Modal
        isOpen={isOpen}
        toggleModal={toggleModal}
        user={selectedUser}
        refreshUsers={getUsers}
      />
      <MovementsModal
        isOpen={isMovementsOpen}
        toggleModal={toggleMovementsModal}
        movements={movements}
      />
    </div>
  );
};


const MovementsModal = ({ isOpen, toggleModal, movements }) => (
  <div className={`modal-2-overlay ${isOpen ? "open" : ""}`} onClick={toggleModal}>
    <div className="modal-2-modal" onClick={(e) => e.stopPropagation()}>
      <div className="modal-2-content">
        <span className="modal-2-close" onClick={toggleModal}>
          &times;
        </span>
        <h3>Últimos 5 Movimientos</h3>
        <ul>
          {movements.map((movement, index) => (
            <li key={index}>
              {movement.type}: {movement.amount} (Fecha: {new Date(movement.date).toLocaleDateString()})
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

>>>>>>> develop
