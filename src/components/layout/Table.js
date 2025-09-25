import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const SimpleTable = ({ columns, data }) => (
  <TableContainer component={Paper} sx={{ m: 2 }}>
    <Table>
      <TableHead>
        <TableRow>
          {columns.map((col) => (
            <TableCell key={col.field}>{col.headerName}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row, idx) => (
          <TableRow key={idx}>
            {columns.map((col) => (
              <TableCell key={col.field}>{row[col.field]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default SimpleTable;
