import React,{ useEffect, useState } from 'react';
import { loadItem, deleteItem, loadLocation } from '../../control';
import {useNavigate} from 'react-router-dom';
import { IconButton, TableFooter, TablePagination, Typography, useTheme } from "@mui/material";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import Button from '@mui/material/Button';
import Box, { BoxProps } from '@mui/material/Box';
import Grid2 from '@mui/material/Unstable_Grid2';
import { AddBtn } from '../../common/Inputs/Buttons';
import { DelConfirm } from '../../common/Inputs/Popup';
import Link from '@mui/material/Link'
import { KeyboardArrowRight, KeyboardArrowLeft } from '@mui/icons-material';
import { TablePaginationActionsProps } from '@mui/material/TablePagination/TablePaginationActions';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';

export let buildingID : number

interface BuildingItem {
  id: number;
  name: string;
  floor: number;
  province: number;
  district: number;
  edit: any;
  detail: any;
  condelete: any
}

const header = ["Mã tòa nhà", "Tên tòa nhà", "Số tầng", "Địa chỉ", "Chi tiết", "Cập nhật / Xoá"]

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

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: '#f2f2f2',
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function Rows({id, name, floor, province, district, edit, detail, condelete}: BuildingItem)
{
  const [provincename, setProvince] = useState()
  const [districtname, setDistrict] = useState()
  if (province!=0) loadLocation('p',province,setProvince)
  if (district!=0) loadLocation('d',district,setDistrict)
  return(
    <StyledTableRow key={id}>
      <StyledTableCell>{id}</StyledTableCell>
      <StyledTableCell>{name}</StyledTableCell>
      <StyledTableCell>{floor}</StyledTableCell>
      <StyledTableCell>{districtname}{((province!=0)&&(district!=0)) ? ',' : ''} {provincename}</StyledTableCell>
      <StyledTableCell><Link component="button" variant="body2" onClick={detail}>Xem chi tiết</Link></StyledTableCell>
      <StyledTableCell>
        <Button onClick={edit}>
          <DriveFileRenameOutlineIcon style={{fill: '#CCAA10'}}/>
        </Button>
        <Button onClick={condelete}>
          <DeleteIcon style={{fill: '#DD1010'}}/>
        </Button>
      </StyledTableCell>
    </StyledTableRow>
  )
}

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

export default function BuildingList() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);

  const [itemID, setID] = useState();
  const [itemName, setName] = useState();
  const [itemFloor, setFloor] = useState();
  const [popup, setPopup] = useState(0);
  const [buildings, loadBuildings] = useState([]);
  let apartments = []
  useEffect(() => {loadItem('buildings','',loadBuildings,'*')}, [buildings,popup])
  const handleDetail = (id: number) => {
    buildingID = id
    navigate('/building/detail');
  };
  const handleEdit = (id: number) => {
    buildingID = id
    navigate(`/building/add`);
  };
  const confirmDelete = (id: any, name: any, floor: any) => {
    setPopup(1)
    setID(id)
    setName(name)
    setFloor(floor)
  }

  const handleDelete = async (Id: any) =>
  {
    const a: any = buildings.find(({id}) => id == Id)
    apartments = a.attributes.apartments.data
    deleteItem('buildings', Id)
    apartments.map(({id}:any)=>{deleteItem('apartments', id)})
  }
  const emptyRows =
  page > 0 ? Math.max(0, (1 + page) * rowsPerPage - buildings.length) : 0;

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
    <Typography variant="h6" fontWeight="600">Tòa nhà</Typography>
    <Grid2 container sx={{ width: '100%', m: 1, height: '95px'}}>
      <Box component="span" sx={{ p: 2 }}>
        
      </Box>
      <Box component="span" sx={{ p: 2, position: "absolute", right: 10}}>
        <Box component="span" sx={{ p: 2 }}>
          <AddBtn buttonName='Thêm tòa nhà' category='building'/>
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
          {(rowsPerPage > 0
            ? buildings.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : buildings
          ).map(({id, attributes: {Building_Name, Num_of_Floors, 
          location}}: any) =>     
            <Rows 
              id = {id}
              name = {Building_Name}
              floor = {Num_of_Floors}
              province = {(location.data!=null) ? location.data.attributes.Province : 0}
              district = {(location.data!=null) ? location.data.attributes.District : 0}
              detail = {() => handleDetail(id)}
              edit = {() => handleEdit(id)}
              condelete = {() => confirmDelete(id, Building_Name, Num_of_Floors)}
            />)}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[3, 5, 10, { label: 'All', value: -1 }]}
              colSpan={3}
              count={buildings.length}
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
    <DelConfirm
      id={itemID} setTrigger={setPopup} state={popup} Delete={handleDelete} category="tòa nhà" 
      details={
        [
          {key: "Tên tòa nhà", value: itemName},
          {key: "Số tầng", value: itemFloor},
        ]
      }
    />
    </>
  );
}