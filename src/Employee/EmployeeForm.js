import { func } from "prop-types";
import React, { useState } from "react";
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import '../style/form.css';
import {checkbox,input,dropdown,choice} from "../style/JSfunc";
import EmployeeList from "./EmployeeList";

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
    {value: 1, text: "Thứ hai"},
    {value: 2, text: "Thứ ba"},
    {value: 3, text: "Thứ tư"},
    {value: 4, text: "Thứ năm"},
    {value: 5, text: "Thứ sáu"},
    {value: 6, text: "Thứ bảy"},
    {value: 7, text: "Chủ nhật"}
]
const genders = [
  {value: "male", text: "Nam"},
  {value: "female", text: "Nữ"},
  {value: "other", text: "Khác"}
]
const shifts = [
  {value: 1, text: "Ca 1"},
  {value: 2, text: "Ca 2"},
  {value: 3, text: "Ca 3"}
]
function Main (){
  const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault();
    navigate('/Employee/EmployeeList');
  }
  return(
    <div>
      <span className="function-title textxlsemibold">Thêm nhân viên</span>
      <form onSubmit={handleClick} className="main-zone">
        <div className="big-row">
          <div className="col-left">
            <div className="item-area">
              {input(2,"surname","Tên","Họ lót")}
            </div>
          </div>
          <div className="col-left">
            <div className="item-area">
              {input(2,"firstname","Tên","Tên")}
            </div>
          </div>
        </div> 
        <div className="big-row">
          <div className="col-left">
            <div className="item-area">
              {input(2,"email","Email","Email")}
            </div>
          </div>
          <div className="col-left">
            <div className="item-area">
              {input(2,"password","Mật khẩu đăng nhập lần đầu","Mật khẩu")}
            </div>
          </div>
        </div> 
        <div className="big-row">
          <div className="col-left">
            <div className="item-area">
              {choice("Giới tính","gender",genders)}
            </div>
          </div>
          <div className="col-left">
            <div className="item-area double-col">
              {input(3,"","","Ngày sinh")}<br/>
            </div>
          </div>
        </div> 
        <div className="big-row">
          <div className="col-left">
            <div className="item-area">
              <span className="form-subtitle textmdsemibold">Công việc</span>
              <div className="item-area double-col">
                  {input(1,"salary","Lương", "Lương")}
                <span className="add-employee-screen-text09 textmd">triệu đồng</span>
              </div>
              <div className="item-area double-col">
                  {input(1,"welfare","Phúc lợi","Phúc lợi")}
                <span className="add-employee-screen-text09 textmd">triệu đồng</span>
              </div>
              <div className="item-area double-col">
                {dropdown("Chức vụ","role",roles)}
                {dropdown("Vị trí","position",positions)}
              </div>
            </div>
          </div>
          <div className="col-left">
          <span className="form-subtitle textmdsemibold">Thời gian làm việc</span>
          <div className="item-area double-col">
              {dropdown("Từ","work-start",workdays)}
              {dropdown("Đến","work-end",workdays)}
          </div>
          <div className="item-area double-col">
            {input(1,"offday","Ngày nghỉ","Ngày nghỉ tối đa")}<div/>
          </div>
          <div className="item-area">
            {choice("Ca làm việc","shift",shifts)}
          </div>
          </div>
        </div>
        <div className="submit-area">
          <button type="submit" className="submit-button">
            <span className="submit-btntxt textsmsemibold">Thêm nhân viên</span>
          </button>
        </div>
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