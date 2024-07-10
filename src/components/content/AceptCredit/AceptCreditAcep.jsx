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

import { useCreditHistoryAcept } from '../../../shared/hooks'; 

export const AceptCreditAcep = () => {
  const { isFetching, credits } = useCreditHistoryAcept();
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
