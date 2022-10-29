import axios from 'axios';
import React, { useState,useEffect } from "react";
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import '../style/form.css';
import {loadItem, addNewItem, updateItem} from '../control';
import {input,dropdown,choice,submitbtn} from "../style/JSfunc";
import EmployeeList from "./EmployeeList";

let employeeID = 0;

export const setEmployeeID = (id) => 
{
  employeeID = id
  console.log(employeeID)
}

const roles = [
  {code: 1, name: "Sửa chữa"},
  {code: 2, name: "Vệ sinh"},
  {code: 3, name: "Sửa chữa"}
]
const positions = [
  {code: 1, name: "Sửa chữa"},
  {code: 2, name: "Vệ sinh"},
  {code: 3, name: "Sửa chữa"}
]
const workdays =
[
  {code: 2, name: "Thứ hai"},
  {code: 3, name: "Thứ ba"},
  {code: 4, name: "Thứ tư"},
  {code: 5, name: "Thứ năm"},
  {code: 6, name: "Thứ sáu"},
  {code: 7, name: "Thứ bảy"},
  {code: 1, name: "Chủ nhật"}
]
const genders = [
  {code: false, name: "Nam"},
  {code: true, name: "Nữ"},
]
const shifts = [
  {code: 1, name: "Ca 1"},
  {code: 2, name: "Ca 2"},
  {code: 3, name: "Ca 3"}
]
function Main (){
  const [employee, loadEmployee]= useState();
  const [daystart, setDayStart]= useState("");
  const [dayend, setDayEnd]= useState("");

  useEffect( ()=>{
    loadItem('employees', employeeID, loadEmployee);
  },[employeeID]);

  console.log(employee)
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
  const [MaxDayOff, setMaxDayOff] = useState();
  const [Shift, setShift] = useState();

  useEffect(()=>{
    if (employee!=null) {
      const attr=employee.attributes
      setLastname(attr.Lastname)
      setFirstname(attr.Firstname)
      setEmail(attr.Email)
      setPassword(attr.Password)
      setSex(attr.Sex)
      setBirthDay(attr.BirthDay)
      setPhone(attr.Phone)
      setSalary(Number(attr.Salary)/100000)
      setBenefit(attr.Benefit)
      setMaxDayOff(attr.MaxDayOff)
      setShift(attr.Shift)
    }
  },[employee]);

  const navigate = useNavigate();
  const handleDayStart=(event)=>{
    setDayStart(event.target.value);
    event.preventDefault();
  }
  const handleDayEnd=(event)=>{
    setDayEnd(event.target.value);
    event.preventDefault();
  }
  const handleRole =(event)=>{
    setRole(event.target.value);
    event.preventDefault();
  }
  const handleClick = (event) => {
    event.preventDefault();
    const data = {
      'data': {
        "Lastname": Lastname,
        "Firstname": Firstname,
        "Email": Email,
        "Password": Password,
        "Sex": Sex,
        "Phone": Phone,
        "Role": Role,
        "Salary": Number(Salary)*100000,
        "Benefit": Benefit,
        "MaxDayOff": MaxDayOff,
        "Shift": Shift,
      }
    }
    console.log(data)
    if (employeeID==0) addNewItem("employees", data)
    else updateItem("employees", employeeID, data)
    navigate('/Employee/EmployeeList');
  }
  return(
    <div>
      <span className="function-title textxlsemibold">{(employeeID==0) ? "Thêm nhân viên" : `Chỉnh sửa nhân viên EMP ${employeeID}`}</span>
      <form onSubmit={handleClick} className="main-zone">
        <div className="big-row">
          <div className="col-left">
            <div className="item-area">
              {input(7,"Họ lót","Lastname",true,"Tên",Lastname,setLastname,1,20)}
            </div>
          </div>
          <div className="col-left">
            <div className="item-area">
              {input(7,"Tên","Firstname",true,"Tên",Firstname,setFirstname,1,15)}
            </div>
          </div>
        </div> 
        <div className="big-row">
          <div className="col-left">
            <div className="item-area">
              {input(5,"Email","Email",true,"Email",Email,setEmail,1,60)}
            </div>
          </div>
          <div className="col-left">
            <div className="item-area">
              {input(6,"Mật khẩu","Password",true,"Tối thiểu 8 kí tự, ít nhất 1 chữ hoa, chữ thường và chữ số",Password,setPassword,8,30,
              "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,30}")}
            </div>
          </div>
        </div> 
        <div className="big-row">
          <div className="col-left">
            <div className="item-area">
              {choice("Giới tính","Sex",genders,Sex,setSex)}
            </div>
          </div>
          <div className="col-left">
            <div className="item-area double-col">
              {input(2,"Ngày sinh","birthday",true,"",BirthDay,setBirthDay,"","","")}
              {input(4,"Số điện thoại","Phone",true,"0123456789",Phone,setPhone,"","","0([3-5]|[7-9])[0-9]{8}")}
            </div>
          </div>
        </div> 
        <div className="big-row">
          <div className="col-left">
            <div className="item-area">
              <span className="form-subtitle textmdsemibold">Công việc</span>
              <div className="item-area double-col">
                {dropdown(1, "Chức vụ","Role",true, roles, "",
                Role, handleRole, false, "Chọn chức vụ","Chọn chức vụ")}
                {dropdown(1, "Vị trí","position",true, positions, "",
                null, null, false, "Chọn vị trí","Chọn vị trí")}
              </div>
              <div className="item-area double-col">
                {input(0,"Lương (triệu đồng)","Salary",true,"Đơn vị: triệu đồng",Salary,setSalary,1,"",0.01)}
                {input(0,"Phúc lợi","Benefit",true,"Nhập số tiền",Benefit,setBenefit,0,"",100)}
              </div>
            </div>
          </div>
          <div className="col-left">
          <span className="form-subtitle textmdsemibold">Thời gian làm việc</span>
          <div className="item-area double-col">
            {dropdown(1,"Từ","work-start",true,workdays,"",
            daystart,handleDayStart,false,"Chọn ngày","Chọn ngày")}
            {dropdown(1, "Đến","work-end",true,workdays,"",
            dayend,handleDayEnd,false,"Chọn ngày","Chọn ngày")}
          </div>
          <div className="item-area double-col">
            {input(0,"Ngày nghỉ tối đa","MaxDayOff",true,"Ngày nghỉ",MaxDayOff,setMaxDayOff,0,100,1)}<div/>
          </div>
          <div className="item-area">
            {choice("Ca làm việc","Shift",shifts,Shift,setShift)}
          </div>
          </div>
        </div>
        {submitbtn (employeeID, "nhân viên")}
      </form>
    </div>
  )
}

export default function EmployeeForm ()
{
  return(
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Employee/EmployeeList" element={<EmployeeList />} />
    </Routes>
  )
}