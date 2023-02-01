import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  sector: string,
  interactions: number,
  percentage: number,
) {
  return { sector, interactions, percentage };
}

export default function TableSector( { data }) {

  const rows = data.map(interaction=> createData(interaction.sector, interaction.number_interactions, interaction.percentage))
  
  return (
    <TableContainer component={Paper} style= {{width: 500}}>
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Sector</StyledTableCell>
            <StyledTableCell align="center">Interactions</StyledTableCell>
            <StyledTableCell align="center">Percentage</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.sector}>
              <StyledTableCell component="th" scope="row">
                {row.sector}
              </StyledTableCell>
              <StyledTableCell align="center">{row.interactions}</StyledTableCell>
              <StyledTableCell align="center">{row.percentage}%</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
