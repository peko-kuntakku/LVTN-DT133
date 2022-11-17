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
import {NumberField, NameField, Choice} from '../../common/Inputs/InputForm';
import { AddBtnGroup } from '../../common/Inputs/Buttons';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';

const filterOptions = createFilterOptions({
  stringify: (option: any) => option.attributes.Building_Name,
});

const roles = [
  {value: 1, text: "Sửa chữa"},
  {value: 2, text: "Vệ sinh"},
  {value: 3, text: "Sửa chữa"}
]
const positions = [
  {value: 1, text: "Sửa chữa"},
  {value: 2, text: "Vệ sinh"},
  {value: 3, text: "Sửa chữa"}
]
const workdays =
[
  {value: 2, text: "Thứ hai"},
  {value: 3, text: "Thứ ba"},
  {value: 4, text: "Thứ tư"},
  {value: 5, text: "Thứ năm"},
  {value: 6, text: "Thứ sáu"},
  {value: 7, text: "Thứ bảy"},
  {value: 1, text: "Chủ nhật"}
]

export default function EmployeeForm (){
  const navigate = useNavigate();
  const [employee, loadEmployee]= useState();
  const [Lastname, setLastname] = useState();
  const [Firstname, setFirstname] = useState();
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [Sex, setSex] = useState();
  const [BirthDay, setBirthDay] = useState();
  const [Phone, setPhone] = useState();
  const [Role, setRole] = useState();
  const [Salary, setSalary] = useState();
  const [Benefit, setBenefit] = useState();
  const [daystart, setDayStart]= useState("");
  const [dayend, setDayEnd]= useState("");
  const [MaxDayOff, setMaxDayOff] = useState();
  const [Shift, setShift] = useState();
  const [Position, setPosition] = useState();


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

  const handleClick = () => {
    const data = {
      'data': {
        "Lastname": Lastname,
        "Firstname": Firstname,
        "Email": Email,
        "Password": Password,
        "Sex": Boolean(Sex),
        "Phone": Phone,
        "Role": Role,
        "From_day": daystart,
        "To_day": dayend,
        "Salary": Number(Salary)*1000000,
        "Benefit": Number(Benefit)*1000,
        "Max_Leave_Day": Number(MaxDayOff),
        "Shift": Number(Shift)
      }
    }
    console.log(data)
    addNewItem("employees", data)
    navigate('/employee/list');
  }

  const handleRole = (e: any) => {
    setRole(e.target.value)
  }
  const handlePositon = (e: any) => {
    setPosition(e.target.value)
  }
  const handleStart = (e: any) => {
    setDayStart(e.target.value)
  }
  const handleEnd = (e: any) => {
    setDayEnd(e.target.value)
  }
  return (
    <>
    <Typography variant="h6" fontWeight="600">Thêm nhân viên</Typography>
    <form onSubmit={handleClick}>
    <Grid2 container sx={{ width: '100%', m: 1, backgroundColor: 'white'}} spacing={1}>
      <Grid2 sm={12} md={6} xl={6}>
        <NameField required
          label="Họ và tên đệm"
          placeholder="Nhập tên"
          value={Lastname}
          setValue={setLastname}
          min={1} max={20}
        />
      </Grid2>
      <Grid2 sm={12} md={6} xl={6}>
        <NameField required
          label="Tên"
          placeholder="Nhập tên"
          value={Firstname}
          setValue={setFirstname}
          min={1} max={20}
        />
      </Grid2>
      <Grid2 sm={12} md={6} xl={6}>
        <TextField
          required
          type="email"
          sx={formwidth(1)}
          label="Email"
          placeholder="Nhập email"
          value={Email}
          onChange={(e : any) => setEmail(e.target.value)}
        />
      </Grid2>
      <Grid2 sm={12} md={6} xl={6}>
        <TextField
          required
          type="password"
          sx={formwidth(1)}
          label="Mật khẩu"
          placeholder="Mật khẩu đăng nhập lần đầu"
          value={Password}
          onChange={(e : any) => setPassword(e.target.value)}
        />
      </Grid2>
      <Grid2 sm={12} md={6} xl={6}>
        <Box sx={formwidth(1)}>
          <FormLabel id="sex">Giới tính</FormLabel>
          <RadioGroup row
            id="sex"
            value={Sex}
            onChange={(e : any) => setSex(e.target.value)}
          >
            <FormControlLabel value="false" control={<Radio />} label="Nam" />
            <FormControlLabel value="true" control={<Radio />} label="Nữ" />
          </RadioGroup>
        </Box>
      </Grid2>
      <Grid2 sm={12} md={6} xl={6}>
        <TextField
          required
          type="date"
          sx={formwidth(2)}
          label="Ngày sinh"
          value={BirthDay}
          onChange={(e : any) => setBirthDay(e.target.value)}
        />
        <TextField
          required
          sx={formwidth(2)}
          label="Số điện thoại"
          value={Phone}
          onChange={(e : any) => setPhone(e.target.value)}
        />
      </Grid2>
    </Grid2>
    <Grid2 container sx={{ width: '100%', m: 1, backgroundColor: 'white'}} spacing={1}>
      <Grid2 sm={12} md={6} xl={6}>
        <Typography variant="subtitle1" fontWeight="600">Công việc</Typography>
        <Choice 
          label="Chức vụ"
          list={roles}
          value={Role}
          handleValue={handleRole}
        />
        <Choice 
          label="Vị trí"
          list={positions}
          value={Position}
          handleValue={handlePositon}
        />
        <NumberField 
          label="Lương"
          placeholder="Lương"
          value={Salary}
          min={1} step={0.1}
          setValue={setSalary}
          post="triệu đồng"
        />      
        <NumberField
          label="Phúc lợi"
          placeholder="Phúc lợi"
          value={Benefit}
          min={0} step={1}
          setValue={setBenefit}
          post="nghìn đồng"
        />
      </Grid2>
      <Grid2 sm={12} md={6} xl={6}>
        <Typography variant="subtitle1" fontWeight="600">Thời gian làm việc</Typography>
        <Choice 
          label="Từ ngày"
          list={workdays}
          value={daystart}
          handleValue={handleStart}
        />
        <Choice 
          label="Đến ngày"
          list={workdays}
          value={dayend}
          handleValue={handleEnd}
        />
        <NumberField
          label="Nghỉ tối đa"
          placeholder="Nhập số ngày"
          value={MaxDayOff}
          min={0} step={1}
          setValue={setMaxDayOff}
          post="ngày"
        />
        <Box sx={formwidth(1)}>
          <FormLabel id="shift">Ca làm việc</FormLabel>
          <RadioGroup row
            id="shift"
            name="shift"
            value={Shift}
            onChange={(e : any) => setShift(e.target.value)}
          >
            <FormControlLabel value={1} control={<Radio />} label="Ca 1" />
            <FormControlLabel value={2} control={<Radio />} label="Ca 2" />
            <FormControlLabel value={3} control={<Radio />} label="Ca 3" />
          </RadioGroup>
        </Box>
      </Grid2>
    </Grid2>
    <AddBtnGroup category='employee' name='nhân viên' id={0}/>
    </form>
    </>
  )
}