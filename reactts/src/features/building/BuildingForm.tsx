import React,{ useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import {loadItem, addNewItem, updateItem} from '../../control';
import Grid2 from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField'
import { Autocomplete, createFilterOptions, Stack, Typography } from "@mui/material";
import Box, { BoxProps } from '@mui/material/Box';
import { Color } from "../../styles/GlobalStyles";
import { styled } from '@mui/material/styles';
import { FormControl } from '@mui/material';
import { formwidth } from '../../styles/GlobalStyles';
import { Field, Form, Formik } from "formik";
import {NumberField, NameField} from '../../common/Inputs/InputForm';
import { AddBtnGroup } from '../../common/Inputs/Buttons';

interface Building {
  Building_Name: string,
  Description: string,
  Num_of_Floor: number,
}

export default function BuildingForm (){
  const navigate = useNavigate();

  const [BuildingName, setBuildingName] = useState();
  const [NumFloor,setNumFloor] = useState();
  const [Description,setDescription] = useState();

  const handleClick = (event: any) => {
    const data = {
      'data': {
        "Building_Name": BuildingName,
        "Num_of_Floors": NumFloor,
        "Description": Description,
      }
    }
    addNewItem("buildings", data)
    navigate('/building/list');
  }

  return (
    <>
    <Typography variant="h6" fontWeight="600">Thêm tòa nhà</Typography>
    <form onSubmit={handleClick}>
    <Grid2 container sx={{ width: '100%', m: 1, backgroundColor: 'white'}} spacing={1}>
      <Grid2 sm={12} md={6} xl={6} >
        <NameField
          required
          label="Tên tòa nhà"
          placeholder="Nhập tên"
          value={BuildingName}
          setValue={setBuildingName}
        />
        <NumberField 
          label="Số tầng"
          placeholder="Nhập số tầng"
          value={NumFloor}
          min={1} max={80} step={1}
          setValue={setNumFloor}
          post="tầng"
        />
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
      </Grid2>
    </Grid2>
    <AddBtnGroup category='building' name='tòa nhà' id={0}/>
    </form>
    </>
  )
}