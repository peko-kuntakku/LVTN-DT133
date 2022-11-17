import React,{ useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import {loadItem, addNewItem, updateItem, loadLocation} from '../../control';
import { Button, Chip, Paper, Stack, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Unstable_Grid2';
import Box, { BoxProps } from '@mui/material/Box';
import { Color } from "../../styles/GlobalStyles";
import { styled } from '@mui/material/styles';
import {buildingID} from './BuildingList'
import Link from '@mui/material/Link'
import {apartmentID} from '../apartment/ApartmentList'

interface Building {
  Building_Name: string|null
  Description: string|null
  Num_of_Floors: number|null
  location: any
  service: any
  apartments: any
}

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

const header = ["Mã căn hộ", "Tên căn hộ", "Số phòng", "Diện tích", "Trạng thái", "Chi tiết"]

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: '#f2f2f2',
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function BuildingDetail (){
  const navigate = useNavigate();
  const [building, loadBuilding] = useState<any>();
  const [location, loadLocate] = useState<any>();
  const [apartments, loadApartments] = useState([]);
  const [services, loadServices] = useState([]);

  const [ProvinceName, setProvinceName]= useState();
  const [DistrictName, setDistrictName]= useState();
  const [WardName, setWardName]= useState();

  const [attr, setAttr] = useState<Building>({
    Building_Name: null,
    Description: null,
    Num_of_Floors: null,
    location: null,
    service: null,
    apartments: null
  });
  useEffect(() => {
    loadItem('buildings', buildingID, loadBuilding,'*');
  }, [buildingID])

  useEffect( ()=>{
    if (building!=null) {
      setAttr(building.attributes)
      if (attr.location!=null) loadLocate(attr.location.data.attributes)
      if (attr.apartments!=null)  loadApartments(attr.apartments.data)
    }
  },[building]);

  useEffect( ()=>{
    if (location!=null) {
      loadLocation('p',location.Province,setProvinceName)
      loadLocation('d',location.District,setDistrictName)
      loadLocation('w',location.Ward,setWardName)
    }
  },[location]);
  const arr: any = [
    {key: "Số tầng", value: attr.Num_of_Floors},
    {key: "Địa chỉ", value: `${WardName}, ${DistrictName}, ${ProvinceName}`},
    {key: "Dịch vụ", value: ''}
  ]

  return (
    <>
    <Typography variant="h6" fontWeight="600">Chi tiết tòa nhà</Typography>
    <Grid2 container sx={{ width: '100%', my: 2, backgroundColor: 'white'}} spacing={1}>
      <Grid2 sm={12} md={6} xl={6}>
        
      </Grid2>
      <Grid2 sm={12} md={6} xl={6}>
        <Typography variant="h6" fontWeight="600" sx={{ mb: 4}}>Tòa nhà {attr.Building_Name}</Typography>
        <Grid2 container sx={{ width: '100%'}} spacing={1}>
          {arr.map(({key, value}: any) => 
            <>       
            <Grid2 xs={4} sx={{ mb: 3, padding: '0px'}}>{key}</Grid2>
            <Grid2 xs={8} sx={{ mb: 3, padding: '0px'}}>{value}</Grid2>
            </> 
          )}
        </Grid2>
      </Grid2>
    </Grid2>
    <Box sx={{ width: '100%', my: 2, backgroundColor: 'white', padding: '25px'}}>
      <Typography variant="subtitle1" fontWeight="700" paddingBottom={1}>Mô tả</Typography>
      <Typography variant="subtitle1" paddingBottom={3}>{attr.Description}</Typography>
    </Box>
    <Box sx={{ width: '100%', my: 2, backgroundColor: 'white', padding: '25px'}}>
      <Typography variant="subtitle1" fontWeight="700" paddingBottom={1}>Các căn hộ thuộc tòa nhà</Typography>
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
            {(apartments!=null) ? (apartments.map(({id, attributes: {Apartment_Name, Size, Livingroom, Bedroom, Kitchen, Restroom, contracts}}: any) => 
            <StyledTableRow>
              <StyledTableCell>{id}</StyledTableCell>
              <StyledTableCell>{Apartment_Name}</StyledTableCell>
              <StyledTableCell>{Livingroom+Bedroom+Kitchen+Restroom}</StyledTableCell>
              <StyledTableCell>{Size} m²</StyledTableCell>
              <StyledTableCell>
                {(contracts==undefined) ? <Chip label="Trống" color="success"/> : <Chip label="Hết chỗ" color="error"/>}
              </StyledTableCell>
              <StyledTableCell>Xem chi tiết</StyledTableCell>
            </StyledTableRow> 
            )) : ''}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    </>
  )
}