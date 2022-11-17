import React,{ useEffect, useState } from 'react';
import { loadItem, deleteItem, loadLocation } from '../../control';
import {Link, useNavigate} from 'react-router-dom';
import { Button, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box, { BoxProps } from '@mui/material/Box';
import Grid2 from '@mui/material/Unstable_Grid2';
import { AddBtn } from '../../common/Inputs/Buttons';
import DeleteIcon from '@mui/icons-material/Delete'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { DelConfirm } from '../../common/Inputs/Popup';

export let apartmentID : any = 0;

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

const header = ["Mã hợp đồng", "Căn hộ", "Người tạo", "Thời gian tạo", "Trạng thái", "Chi tiết"]

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: '#f2f2f2',
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function ContractList() {
  const navigate = useNavigate();

  const [popup, setPopup] = useState(0);

  const [contracts, loadContract] = useState([]);
  useEffect(() => {loadItem('contracts','',loadContract,'*')}, [])

  return (
    <>
    <Typography variant="h6" fontWeight="600">Hợp đồng</Typography>
    <Grid2 container sx={{ width: '100%', m: 1, height: '95px', backgroundColor: 'white'}}>

    </Grid2>
      <Grid2 container sx={{ width: '100%', m: 1, backgroundColor: 'white'}}>
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
            {contracts.map(({id, attributes}: any) => 
            <StyledTableRow>
              <StyledTableCell>{id}</StyledTableCell>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell></StyledTableCell>
            </StyledTableRow> 
            )}
          </TableBody>
        </Table>
      </TableContainer>
      </Grid2>
    </>
  );
}