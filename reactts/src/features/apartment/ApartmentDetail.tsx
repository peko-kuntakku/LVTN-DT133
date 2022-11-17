import React,{ useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import {loadItem, addNewItem, updateItem} from '../../control';
import { Stack, Typography } from "@mui/material";
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Unstable_Grid2';
import Box, { BoxProps } from '@mui/material/Box';
import { Color } from "../../styles/GlobalStyles";
import { styled } from '@mui/material/styles';
import { apartmentID } from './ApartmentList';

interface Apartment {
  Apartment_Name: string | null,
  Capacity: number | null,
  Size: number | null,
  Rent_Fee: number | null,
  Floor: number | null,
  Description: string | null,
  Livingroom: number | null,
  Kitchen: number | null,
  Bedroom: number | null,
  Restroom: number | null,
  building: any
}

export default function ApartmentDetail (){
  const navigate = useNavigate();
  const [apartment, loadApartment] = useState<any>();
  const [attr, setAttr] = useState<Apartment>({
    Apartment_Name: null,
    Capacity: null,
    Size: null,
    Floor: null,
    Description: null,
    Livingroom: null,
    Kitchen: null,
    Bedroom: null,
    Restroom: null,
    Rent_Fee: null,
    building: null
  });
  const [BuildingName, setBuildingName] = useState();
  useEffect( ()=>{
    loadItem('apartments', apartmentID, loadApartment,'*');
  },[apartmentID]);

  useEffect( ()=>{
    if (apartment!=null) 
    {
      setAttr(apartment.attributes)
      if (attr.building!=null) setBuildingName(attr.building.data.attributes.Building_Name)
    }
  },[apartment]);

  const arr_room: any = [
    {key: " phòng ngủ", value: attr.Bedroom},
    {key: " phòng khách", value: attr.Livingroom},
    {key: " nhà vệ sinh", value: attr.Restroom},
    {key: " nhà bếp", value: attr.Kitchen}
  ]

  const rooms = () =>
  {
    return (
      <Grid2 container sx={{padding: '0px'}}>
        {
          arr_room.map(({key, value}: any) => 
          <Grid2 xs={6}>
            <Typography component="span" variant="subtitle1" fontWeight="900" color='#FAFA00'>{value}</Typography>
            {key}
          </Grid2>
        )}
      </Grid2>
    )
  }
  const arr: any = [
    {key: "Sức chứa", value: attr.Capacity +" người"},
    {key: "Diện tích", value: attr.Capacity +" m²"},
    {key: "Số phòng", value: rooms()}
  ]

  return (
    <>
    <Typography variant="h6" fontWeight="600">Chi tiết căn hộ</Typography>
    <Grid2 container sx={{ width: '100%', my: 2, backgroundColor: 'white'}} spacing={1}>
      <Grid2 sm={12} md={6} xl={6}>
        
      </Grid2>
      <Grid2 sm={12} md={6} xl={6}>
        <Typography variant="h6" fontWeight="600" sx={{ mb: 4}}>Căn hộ {attr.Apartment_Name}</Typography>
        <Grid2 container sx={{ width: '100%'}} spacing={1}>
          {arr.map(({key, value}: any) => 
            <>       
            <Grid2 xs={4} sx={{ mb: 3, padding: '0px'}}>{key}</Grid2>
            <Grid2 xs={8} sx={{ mb: 3, padding: '0px'}}>{value}</Grid2>
            </> 
          )}
        </Grid2>
        <Box sx={{ width: '100%', m: 1, backgroundColor: 'white', paddingBottom: '10px'}}>
          <Typography component="span" variant="h6" fontWeight="900" color='#2270FF'>{(attr.Rent_Fee!=null) ? attr.Rent_Fee * 1000 : null}</Typography>
          <Typography component="span" variant="h6"> đồng/tháng</Typography>
        </Box>
      </Grid2>
    </Grid2>
    <Box sx={{ width: '100%', my: 2, backgroundColor: 'white', padding: '25px'}}>
      <Typography variant="subtitle1" fontWeight="700" paddingBottom={1}>Mô tả</Typography>
      <Typography variant="subtitle1" paddingBottom={3}>{attr.Description}</Typography>
    </Box>
    <Box sx={{ width: '100%', my: 2, backgroundColor: 'white', padding: '25px'}}>
      <Typography variant="subtitle1" fontWeight="700" paddingBottom={1}>Nội thất</Typography>
      <Typography variant="subtitle1" fontWeight="700" paddingBottom={1}>Dịch vụ</Typography>
      <Typography variant="subtitle1" fontWeight="700" paddingBottom={1}>Địa chỉ</Typography>
      <Typography variant="subtitle2" fontWeight="600" paddingBottom={1}>Tầng {attr.Floor}, tòa nhà {BuildingName}</Typography>
    </Box>
    </>
  )
}