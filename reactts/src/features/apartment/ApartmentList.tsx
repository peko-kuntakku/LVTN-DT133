import React,{ useEffect, useState } from 'react';
import { loadItem, deleteItem, loadLocation } from '../../control';
import {useNavigate} from 'react-router-dom';
import { Button, Typography, Chip, IconButton, useTheme, TableFooter, TablePagination } from "@mui/material";
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
import Link from '@mui/material/Link'
import { KeyboardArrowRight, KeyboardArrowLeft } from '@mui/icons-material';
import { TablePaginationActionsProps } from '@mui/material/TablePagination/TablePaginationActions';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';

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

const header = ["Mã căn hộ", "Tên căn hộ", "Số phòng", "Diện tích", "Trạng thái", "Chi tiết", "Cập nhật / Xoá"]

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: '#f2f2f2',
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

export default function ApartmentList() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);

  const [popup, setPopup] = useState(0);
  const [itemID, setID] = useState();
  const [itemName, setName] = useState();
  const [itemSize, setSize] = useState();
  const [itemRoom, setRoom] = useState();

  const [apartments, loadApartments] = useState([]);
  useEffect(() => {loadItem('apartments','',loadApartments,'*')}, [])
  const handleEdit = (id: number) => {
    apartmentID = id
    navigate(`/apartment/add`);
  };
  const handleDetail = (id: number) => {
    apartmentID = id
    navigate('/apartment/detail');
  };
  const handleDelete = async (Id: number) =>
  {
    deleteItem('apartments', Id)
  }
  const confirmDelete = (id: any,name: any, size: any, room: any) => 
  {
    setPopup(1)
    setID(id)
    setName(name)
    setSize(size)
    setRoom(room)
  }
  const emptyRows =
  page > 0 ? Math.max(0, (1 + page) * rowsPerPage - apartments.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <>
    <Typography variant="h6" fontWeight="600">Căn hộ</Typography>
    <Grid2 container sx={{ width: '100%', m: 1, height: '95px', backgroundColor: 'white'}}>
      <Box component="span" sx={{ p: 2 }}>
        
      </Box>
      <Box component="span" sx={{ p: 2, position: "absolute", right: 10}}>
        <Box component="span" sx={{ p: 2 }}>
          <AddBtn buttonName='Thêm căn hộ' category='apartment'/>
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
            {(rowsPerPage > 0
            ? apartments.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : apartments
            ).map(({id, attributes: {Apartment_Name, Size, Livingroom, Bedroom, Kitchen, Restroom, contracts}}: any) => 
            <StyledTableRow>
              <StyledTableCell>{id}</StyledTableCell>
              <StyledTableCell>{Apartment_Name}</StyledTableCell>
              <StyledTableCell>{Livingroom+Bedroom+Kitchen+Restroom}</StyledTableCell>
              <StyledTableCell>{Size} m²</StyledTableCell>
              <StyledTableCell>
                {(contracts.data.length==0) ? <Chip label="Trống" color="success"/> : <Chip label="Hết chỗ" color="error"/>}
              </StyledTableCell>
              <StyledTableCell><Link component="button" variant="body2" onClick={()=>handleDetail(id)}>Xem chi tiết</Link></StyledTableCell>
              <StyledTableCell>
                <Button onClick={() => handleEdit(id)}>
                  <DriveFileRenameOutlineIcon style={{fill: '#CCAA10'}}/>
                </Button>
                <Button onClick={() => confirmDelete(id, Apartment_Name, Size, Livingroom+Bedroom+Kitchen+Restroom)}>
                  <DeleteIcon style={{fill: '#DD1010'}}/>
                </Button>
              </StyledTableCell>
            </StyledTableRow> 
            )}
          </TableBody>
          <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[3, 5, 10, { label: 'All', value: -1 }]}
              colSpan={3}
              count={apartments.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>          
        </Table>
      </TableContainer>
      </Grid2>
      <DelConfirm
      id={itemID} setTrigger={setPopup} state={popup} Delete={handleDelete} category="căn hộ" 
      details={
        [
          {key: "Tên căn hộ", value: itemName},
          {key: "Diện tích", value: `${itemSize} m²`},
          {key: "Số phòng", value: itemRoom},
        ]
      }
    />
    </>
  );
}