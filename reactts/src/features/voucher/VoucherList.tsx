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

export let voucherID : any = 0;

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

const header = ["Tên mã", "Ngày bắt đầu", "Ngày kết thúc", "Số lượng", "Còn lại", "Chi tiết", "Cập nhật / Xoá"]

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: '#f2f2f2',
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function ApartmentList() {
  const navigate = useNavigate();

  const [popup, setPopup] = useState(0);
  const [vouchers, setVouchers] = useState([]);
  const [itemID, setID] = useState();
  const [itemName, setName] = useState();
  const [itemAmount, setAmount] = useState()

  useEffect(() => {loadItem('vouchers','',setVouchers,'')}, [popup,vouchers])
  const handleEdit = (id: number) => {
    voucherID = id
    navigate(`/voucher/add`);
  };
  const handleDelete = async (Id: number) =>
  {
    deleteItem('vouchers', Id)
  }
  const confirmDelete = (id: any, name: any, amount: any) => 
  {
    setPopup(1)
    setID(id)
    setAmount(amount)
  }
  const showDateTime = (str: any) =>
  {
    return str.slice(11,16) + ' ' + str.slice(8,10) + '/' + str.slice(5,7) + '/' + str.slice(0,4)
  }
  return (
    <>
    <Typography variant="h6" fontWeight="600">Mã giảm giá</Typography>
    <Grid2 container sx={{ width: '100%', m: 1, height: '95px', backgroundColor: 'white'}}>
      <Box component="span" sx={{ p: 2 }}>
        
      </Box>
      <Box component="span" sx={{ p: 2, position: "absolute", right: 10}}>
        <Box component="span" sx={{ p: 2 }}>
          <AddBtn buttonName='Thêm mã' category='voucher' />
        </Box>
      </Box>
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
            {vouchers.map(({id, attributes: {Voucher_Name, Start_at, Expired_at, Amount, Remained}}:any) => 
            <StyledTableRow>
              <StyledTableCell>{Voucher_Name}</StyledTableCell>
              <StyledTableCell>{showDateTime(Start_at)}</StyledTableCell>
              <StyledTableCell>{showDateTime(Expired_at)}</StyledTableCell>
              <StyledTableCell>{Amount}</StyledTableCell>
              <StyledTableCell>{Remained}</StyledTableCell>
              <StyledTableCell>Chi tiết</StyledTableCell>
              <StyledTableCell>
                <Button onClick={() => handleEdit(id)}>
                  <DriveFileRenameOutlineIcon style={{fill: '#CCAA10'}}/>
                </Button>
                <Button onClick={() => confirmDelete(id, Voucher_Name, Amount)}>
                  <DeleteIcon style={{fill: '#DD1010'}}/>
                </Button>
              </StyledTableCell>
            </StyledTableRow> 
            )}
          </TableBody>
        </Table>
      </TableContainer>
      </Grid2>
      <DelConfirm
      id={itemID} setTrigger={setPopup} state={popup} Delete={handleDelete} category="căn hộ" 
      details={
        [
          {key: "Tên mã", value: itemName},
          {key: "Số lượng", value: itemAmount},
        ]
      }
    />
    </>
  );
}