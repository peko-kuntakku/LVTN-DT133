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
    {title: "Số lượng", placeholder: "Nhập số lượng", value: Amount, setVal: setAmount, unit: undefined, min: 1, max: 1000, step: 1},
    {title: "Giá trị trong", placeholder: "Nhập số ngày", value: Valid, setVal: setValid, unit: "ngày", min: 1, max: 20, step: 1},
    {title: "Phần trăm giảm", placeholder: "Phần trăm giảm", value: Percentage, setVal: setPercentage, unit: "%", min: 5, max: 95, step: 1},
    {title: "Giảm tối đa", placeholder: "Nhập số tiền", value: MaxDiscount, setVal: setMaxDiscount, unit: "nghìn đồng", min: 5, max: 1000, step: 1},
  ]
  return (
    <>
    <Typography variant="h6" fontWeight="600">Thêm căn hộ</Typography>
    <form onSubmit={handleClick}>
    <Grid2 container sx={{ width: '100%', m: 1}} spacing={1}>
      <Grid2 sm={12} md={6} xl={6}>
        <NameField required
          label="Tên mã"
          placeholder="Nhập tên"
          value={VoucherName}
          setValue={setVoucherName}
        />
        <TextField
          required
          type="date"
          sx={formwidth(2)}
          label="Ngày bắt đầu"
          value={startday}
          onChange={(e : any) => setStartday(e.target.value)}
        />
        <TextField
          required
          type="time"
          sx={formwidth(2)}
          label="Giờ bắt đầu"
          value={starttime}
          onChange={(e : any) => setStarttime(e.target.value)}
        />
        <TextField
          required
          type="date"
          sx={formwidth(2)}
          label="Ngày kết thúc"
          value={endday}
          onChange={(e : any) => setEndday(e.target.value)}
        />
        <TextField
          required
          type="time"
          sx={formwidth(2)}
          label="Giờ kết thúc"
          value={endtime}
          onChange={(e : any) => setEndtime(e.target.value)}
        />
      </Grid2>
      <Grid2 sm={12} md={6} xl={6}>
        <Box sx={formwidth(1)}>
          <FormLabel id="ApplyToAll">Áp dụng cho</FormLabel>
          <RadioGroup row
            defaultValue="false"
            name="ApplyToAll"
            value={ApplyToAll}
            onChange={(e : any) => setApplyToAll(e.target.value)}
          >
            <FormControlLabel value="true" control={<Radio />} label="Tất cả khách hàng" />
            <FormControlLabel value="false" control={<Radio />} label="Khách hàng mới" />
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
    <AddBtnGroup category='voucher' name='mã' id={0}/>
    </form>
    </>
  )
}