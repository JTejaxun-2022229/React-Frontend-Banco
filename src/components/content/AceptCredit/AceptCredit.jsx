import React, { useState } from 'react';
import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button
} from "@mui/material";
import { CheckCircle, Verified } from "@mui/icons-material";
import { Modal } from "../../manage/Modal";
import { useCredit } from '../../../shared/hooks';
import { useAuthorisation } from '../../../shared/hooks';  

export const AceptCredit = () => {
  const { isFetching, credits } = useCredit();
  const { Authentication, isLoading } = useAuthorisation();
  const [selectedUser, setSelectedUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleCredit = async (creditId, status, event) => {
    event.preventDefault();
    Authentication(creditId, status);
  };

  return (
    <div className="Tabla">
      <TableContainer component={Paper} elevation={2}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Cuenta</TableCell>
              <TableCell>Monto</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Fecha</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Opciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!isFetching && Array.isArray(credits) && credits.map((credit, index) => (
              <TableRow key={credit.id || index}>
                <TableCell>{credit.account}</TableCell>
                <TableCell>{`${credit.amount}.00 Q`}</TableCell>
                <TableCell>{credit.description}</TableCell>
                <TableCell>{credit.date}</TableCell>
                <TableCell>{credit.status}</TableCell>
                <TableCell>
                  <Button
                    onClick={(event) => handleCredit(credit.id, 'accepted', event)}
                    size="small"
                    color="info"
                    startIcon={<CheckCircle />}
                    disabled={isLoading}
                  >
                    Aprobado
                  </Button>
                  <Button
                    onClick={(event) => handleCredit(credit.id,'denied', event)}
                    size="small"
                    color="secondary"
                    startIcon={<Verified />}
                    style={{ marginLeft: '10px' }}
                    disabled={isLoading}
                  >
                    Denegado
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal isOpen={isOpen} toggleModal={toggleModal} user={selectedUser} />
    </div>
  );
};
