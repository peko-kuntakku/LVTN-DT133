import React,{ useEffect, useState } from 'react';
import { loadItem, deleteItem, loadLocation } from '../../control';
import { Box, Typography, Chip } from "@mui/material";
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

const header = ["Mã khách hàng", "Họ lót", "Tên", "Số điện thoại", "Ngày sinh", "Trạng thái", "Chi tiết"]

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: '#f2f2f2',
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CustomerList() {
  const [customers, loadCustomer] = useState([]);
  useEffect(() => {loadItem('customers','',loadCustomer,'*')}, [])
  return (
    <>
    <Typography variant="h6" fontWeight="600">Khách hàng</Typography>
    <Grid2 container sx={{ width: '100%', m: 1, height: '95px'}}>

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
          {customers.map(({id, attributes: {Lastname, Firstname, Phone, hadContract}}: any) => 
          <StyledTableRow>
            <StyledTableCell>{id}</StyledTableCell>
            <StyledTableCell>{Lastname}</StyledTableCell>
            <StyledTableCell>{Firstname}</StyledTableCell>
            <StyledTableCell>{Phone}</StyledTableCell>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell>
              {(hadContract==false) ? <Chip label="Chưa có hợp đồng" color="warning"/> : <Chip label="Đã có hợp đồng" color="success"/>}
            </StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </StyledTableRow> 
          )}
        </TableBody>
      </Table>
      </TableContainer>
    </>
  );
}