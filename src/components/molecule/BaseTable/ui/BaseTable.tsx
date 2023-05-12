import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(
  enterprise: string,
  quantity: number,
  paymentType: string,
  sum: number,
) {
  return {
    enterprise, quantity, paymentType, sum,
  };
}

const rows = [
  createData('Enterprise-1', 3, 'card', 345),
  createData('Enterprise-2', 6, 'cash', 1345),
  createData('Enterprise-3', 1, 'card', 2345),
];

const BaseTable: React.FC = () => (
  <TableContainer
    sx={{
      textAlign: 'center',
    }}
  >
    <Table
      size="small"
      aria-label="simple table"
    >
      <TableHead>
        <TableRow>
          <TableCell>Enterprise</TableCell>
          <TableCell align="right">Quantity</TableCell>
          <TableCell align="right">Payment Type</TableCell>
          <TableCell align="right">Sum&nbsp;($)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.enterprise}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.enterprise}
            </TableCell>
            <TableCell align="right">{row.quantity}</TableCell>
            <TableCell align="right">{row.paymentType}</TableCell>
            <TableCell align="right">{row.sum}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export { BaseTable };
