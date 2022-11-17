import React,{ useEffect, useState } from 'react';
import { loadItem, deleteItem, loadLocation } from '../../control';
import { Box, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid2 from '@mui/material/Unstable_Grid2';
import { AddBtn } from '../../common/Inputs/Buttons';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#ccc',
    color: '#000',
    fontWeight: 800,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const header = ["Mã nhân viên", "Họ lót", "Tên", "Email", "Công việc", "Chi tiết", "Cập nhật / Xoá"]

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: '#f2f2f2',
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function InvoiceList() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {loadItem('employees','',setEmployees,'*')}, [])
  return (
    <>
    <Typography variant="h6">Nhân viên</Typography>
    <Grid2 container sx={{ width: '100%', m: 1, height: '95px'}}>
      <Box component="span" sx={{ p: 2 }}>
        
      </Box>
      <Box component="span" sx={{ p: 2, position: "absolute", right: 10}}>
        <Box component="span" sx={{ p: 2 }}>
          <AddBtn buttonName='Thêm nhân viên' category='employee'/>
        </Box>
      </Box>
    </Grid2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {header.map(x => 
              <StyledTableCell>{x}</StyledTableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map(({id, attributes: {Lastname, Firstname, Email, Role}}) => 
          <StyledTableRow>
            <StyledTableCell>{id}</StyledTableCell>
            <StyledTableCell>{Lastname}</StyledTableCell>
            <StyledTableCell>{Firstname}</StyledTableCell>
            <StyledTableCell>{Email}</StyledTableCell>
            <StyledTableCell>{Role}</StyledTableCell>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </StyledTableRow> 
          )}
        </TableBody>
      </Table>
      </TableContainer>
    </>
  );
}