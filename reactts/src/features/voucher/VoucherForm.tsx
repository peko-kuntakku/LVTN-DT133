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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';

const filterOptions = createFilterOptions({
  stringify: (option: any) => option.attributes.Building_Name,
});

export default function VoucherForm (){
  const navigate = useNavigate();
  const [voucher, loadVoucher]= useState();
  const [apartments, loadApartments] = useState([]);
  const [ApartmentCheck, setApartmentCheck] = useState([]);
  const [ApplyToAll,setApplyToAll] = useState();
  const [VoucherName, setVoucherName]= useState();
  const [startday, setStartday]= useState();
  const [starttime, setStarttime]= useState();
  const [endday, setEndday]= useState();
  const [endtime, setEndtime]= useState();
  const [Amount, setAmount]= useState();
  const [Valid, setValid]= useState();
  const [Percentage, setPercentage]= useState();
  const [MaxDiscount, setMaxDiscount]= useState();
  const [Remained, setRemained]= useState();

  const handleClick = (event: any) => {
    event.preventDefault();
    const data = {
      'data': {
        "Voucher_Name": VoucherName,
        "Start_at": startday+'T'+starttime+':00.000Z',
        "Expired_at":endday+'T'+endtime+':00.000Z',
        "Amount": Number(Amount),
        "Remained": Number(Amount),
        "Percentage": Number(Percentage),
        "Max_Discount": Number(MaxDiscount),
        "isApplyToAll": Boolean(ApplyToAll),
      }
    }
    console.log(data)
    addNewItem("vouchers", data)
    navigate('/voucher/list')
  }

  let arr = 
  [
    {title: "S??? l?????ng", placeholder: "Nh???p s??? l?????ng", value: Amount, setVal: setAmount, unit: undefined, min: 1, max: 1000, step: 1},
    {title: "Gi?? tr??? trong", placeholder: "Nh???p s??? ng??y", value: Valid, setVal: setValid, unit: "ng??y", min: 1, max: 20, step: 1},
    {title: "Ph???n tr??m gi???m", placeholder: "Ph???n tr??m gi???m", value: Percentage, setVal: setPercentage, unit: "%", min: 5, max: 95, step: 1},
    {title: "Gi???m t???i ??a", placeholder: "Nh???p s??? ti???n", value: MaxDiscount, setVal: setMaxDiscount, unit: "ngh??n ?????ng", min: 5, max: 1000, step: 1},
  ]
  return (
    <>
    <Typography variant="h6" fontWeight="600">Th??m c??n h???</Typography>
    <form onSubmit={handleClick}>
    <Grid2 container sx={{ width: '100%', m: 1}} spacing={1}>
      <Grid2 sm={12} md={6} xl={6}>
        <NameField required
          label="T??n m??"
          placeholder="Nh???p t??n"
          value={VoucherName}
          setValue={setVoucherName}
        />
        <TextField
          required
          type="date"
          sx={formwidth(2)}
          label="Ng??y b???t ?????u"
          value={startday}
          onChange={(e : any) => setStartday(e.target.value)}
        />
        <TextField
          required
          type="time"
          sx={formwidth(2)}
          label="Gi??? b???t ?????u"
          value={starttime}
          onChange={(e : any) => setStarttime(e.target.value)}
        />
        <TextField
          required
          type="date"
          sx={formwidth(2)}
          label="Ng??y k???t th??c"
          value={endday}
          onChange={(e : any) => setEndday(e.target.value)}
        />
        <TextField
          required
          type="time"
          sx={formwidth(2)}
          label="Gi??? k???t th??c"
          value={endtime}
          onChange={(e : any) => setEndtime(e.target.value)}
        />
      </Grid2>
      <Grid2 sm={12} md={6} xl={6}>
        <Box sx={formwidth(1)}>
          <FormLabel id="ApplyToAll">??p d???ng cho</FormLabel>
          <RadioGroup row
            defaultValue="false"
            name="ApplyToAll"
            value={ApplyToAll}
            onChange={(e : any) => setApplyToAll(e.target.value)}
          >
            <FormControlLabel value="true" control={<Radio />} label="T???t c??? kh??ch h??ng" />
            <FormControlLabel value="false" control={<Radio />} label="Kh??ch h??ng m???i" />
          </RadioGroup>
        </Box>
        {arr.map(({title, placeholder, value, setVal, unit, min, max, step}) => 
          <NumberField required
            label={title}
            placeholder={placeholder}
            value={value}
            min={min} max={max} step={step}
            setValue={setVal}
            unit={{post: unit}}
          />
        )}
      </Grid2>
    </Grid2>
    <AddBtnGroup category='voucher' name='m??' id={0}/>
    </form>
    </>
  )
}