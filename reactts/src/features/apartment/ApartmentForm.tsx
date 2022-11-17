import React,{ useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import {loadItem, addNewItem, updateItem} from '../../control';
import { Autocomplete, createFilterOptions, Stack, Typography } from "@mui/material";
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Unstable_Grid2';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField'
import Box, { BoxProps } from '@mui/material/Box';
import { Color } from "../../styles/GlobalStyles";
import { styled } from '@mui/material/styles';
import { FormControl } from '@mui/material';
import { formwidth } from '../../styles/GlobalStyles';
import { Field, Form, Formik } from "formik";
import {NumberField, NameField} from '../../common/Inputs/InputForm';
import { AddBtnGroup } from '../../common/Inputs/Buttons';
import { apartmentID } from './ApartmentList';

const filterOptions = createFilterOptions({
  stringify: (option: any) => option.attributes.Building_Name,
});

export default function ApartmentForm (){
  const navigate = useNavigate();
  const [apartment, loadApartment] = useState();

  const [ApartmentName,setApartmentName]= useState();
  const [Size,setSize]= useState();
  const [Capacity,setCapacity]= useState();
  const [RentFee,setRentFee]= useState();
  const [Description,setDescription]= useState();
  const [Livingroom, setLivingroom] = useState();
  const [Kitchen, setKitchen] = useState();
  const [Bedroom, setBedroom] = useState();
  const [Restroom, setRestroom] = useState();
  const [building, setBuilding]= useState();
  const [maxFloor, setMaxFloor]= useState();
  const [flagFloor, toggleFloor]= useState(true);
  const [Floor, setFloor]= useState();

  const [buildings, loadBuilding]= useState([]);

  let arr = 
  [
    {title: "Diện tích", placeholder: "Diện tích", value: Size, setVal: setSize, unit: "m²", min: 1, max: 1000, step: 0.1},
    {title: "Sức chứa", placeholder: "Nhập số người", value: Capacity, setVal: setCapacity, unit: "người", min: 1, max: 20, step: 1},
    {title: "Giá tiền", placeholder: "Nhập giá tiền", value: RentFee, setVal: setRentFee, unit: "nghìn đồng", min: 10, max: undefined, step: 1},
  ]
  let room = 
  [
    {name: "Livingroom", title: "Phòng khách", value: Livingroom, setVal: setLivingroom},
    {name: "Kitchen", title: "Phòng bếp", value: Kitchen, setVal: setKitchen},
    {name: "Bedroom", title: "Phòng ngủ", value: Bedroom, setVal: setBedroom},
    {name: "Restroom", title: "Nhà vệ sinh", value: Restroom, setVal: setRestroom}
  ]

  useEffect( ()=>{
    loadItem('apartments', apartmentID, loadApartment,'building');
  },[apartmentID]);

  useEffect(() => {loadItem('buildings','',loadBuilding,'')}, [])

  useEffect(()=>{
    if (apartment!=null) {
      const attr : any =apartment["attributes"]
      setApartmentName(attr.Apartment_Name)
      setSize(attr.Size)
      setCapacity(attr.Capacity)
      setRentFee(attr.Rent_Fee)
      setDescription(attr.Description)
      setBuilding(attr.building.data.id)
      setFloor(attr.Floor)
      room.map(x=>x.setVal(attr[x.name]))
    }
  },[apartment]);

  const handleBuildingName = (x: any) =>
  {
    if (x!=null) 
    {
      setBuilding(x.id);
      setMaxFloor(x.attributes.Num_of_Floors)
      toggleFloor(false)} 
    else {
      setBuilding(x)
      setMaxFloor(x)
      toggleFloor(true)
    }
  }
  const Total = (arr: any) =>
  {
    let total=0
    const newArr = arr.map(({value}: any)=>value)
    for (const i of newArr)
    {
      if (i!=null) total=total+Number(i)
    }
    return total
  }

  const handleSubmit = () => {
    const data = {
      'data': {
        "Apartment_Name": ApartmentName,
        "Size": Size,
        "Capacity": Capacity,
        "Rent_Fee": RentFee,
        "building": building,
        "Floor": Floor,
        "Livingroom": Livingroom,
        "Kitchen": Kitchen,
        "Bedroom": Bedroom,
        "Restroom": Restroom,
        "Description": Description,
        "isSingle": true
      }
    }
    if (apartmentID==0) addNewItem("apartments", data)
    else updateItem("apartments", apartmentID, data)
    navigate('/apartment/list');
  }
  return (
    <>
    <Typography variant="h6" fontWeight="600">Thêm căn hộ</Typography>
    <form onSubmit={handleSubmit}>
    <Grid2 container sx={{ width: '100%', m: 1, backgroundColor: 'white'}} spacing={1}>
      <Grid2 sm={12} md={6} xl={6}>
        <NameField required
          label="Tên căn hộ"
          placeholder="Nhập tên"
          value={ApartmentName}
          setValue={setApartmentName}
          min={1} max={9}
        />
        {arr.map(({title, placeholder, value, setVal, unit, min, max, step}) => 
          <NumberField required
            label={title}
            placeholder={placeholder}
            value={value}
            min={min} max={max} step={step}
            setValue={setVal}
            post={unit}
          />
        )}
        <Stack direction="row">
        <Autocomplete
          sx={{m: '25px 1.5%', width: '47%'}}
          options={buildings}
          getOptionLabel={(option: any) => option.id}
          filterOptions={filterOptions}
          value={building}
          onChange={(e, val) => handleBuildingName(val)}
          placeholder="Nhập văn bản"
          renderInput=
          {(params) => <TextField {...params} 
            required
            label="Chọn tòa nhà" 
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password'
            }}/>
          }
          renderOption={(props, option) => (
            <Box component="li" {...props}>
              <span style={{color: 'red'}}>{'['+option.id + ']'}</span>
              <span>{option.attributes.Building_Name}</span>
            </Box>
          )}
        />
        <NumberField
          disabled={flagFloor}
          required
          label="Số tầng"
          placeholder="Nhập số tầng"
          value={Floor}
          min={1} max={maxFloor} step={1}
          setValue={setFloor}
          pre="Tầng"
          comment1="Chọn tòa nhà trước"
        />
        </Stack>
        <TextField
          sx={formwidth(1)}
          label="Mô tả"
          placeholder="Nhập văn bản"
          value={Description}
          onChange={(e : any) => setDescription(e.target.value)}
          multiline minRows={4} maxRows={5}
        />
      </Grid2>
      <Grid2 sm={12} md={6} xl={6}>
        <Typography component="span" variant="subtitle2" fontWeight="600" sx={{m: '1px 1.5%', width: '45%'}}>Phòng (nhập số lượng)</Typography>
        <Typography variant="subtitle2" sx={{m: '1px 1.5%', width: '45%', float: 'right'}} align="right">
          Tổng số phòng: {Total(room)}
        </Typography>
        {room.map(({title, value, setVal}) => 
          <NumberField
            label={title}
            placeholder={title}
            value={value}
            min={0} max={10} step={1}
            setValue={setVal}
            post="phòng"
          />
        )}
        <Typography component="span" variant="subtitle2" fontWeight="600" sx={{m: '1px 1.5%', width: '90%'}}>Nội thất (nhập số lượng)</Typography>
      </Grid2>
    </Grid2>
    <AddBtnGroup category='apartment' name='căn hộ' id={0}/>
    </form>
    </>
  )
}