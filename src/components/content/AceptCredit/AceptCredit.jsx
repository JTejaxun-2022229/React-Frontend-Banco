import React, { useState } from 'react';
import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button  // Asegúrate de importar Button para los nuevos botones
} from "@mui/material";
import { EditOutlined, CheckCircle, Verified } from "@mui/icons-material";
import { Modal } from "../../manage/Modal";
import { useCredit } from '../../../shared/hooks';  // Ajusta la ruta de importación del hook

export const AceptCredit = () => {
  const { isFetching, credits, verifyCredit, approveCredit } = useCredit();
  const [selectedUser, setSelectedUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleApprove = (creditId) => {
    approveCredit(creditId);
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
                    onClick={() => handleApprove(credit.id)}
                    size="small"
                    color="info"
                    startIcon={<CheckCircle />}
                  >
                    Aprobado
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
