import { func } from "prop-types";
import React, { useState } from "react";
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import ReactDOM from "react-dom";
import '../style/main.css';
import '../style/list.css';
import EmployeeForm from "./EmployeeForm";
import { table } from "../style/JSfunc";

const colname = 
[
  {width: "10%", title: "Mã nhân viên"},
  {width: "18%", title: "Họ lót"},
  {width: "10%", title: "Tên"},
  {width: "20%", title: "Email"},
  {width: "16%", title: "Công việc"},
  {width: "12%", title: "Chi tiết"},
  {width: "14%", title: "Cập nhật / Xoá"}
]
const tbcontent = [
[
  "CUS_001",
  "Nguyễn Văn",
  "A",
  "nguyena@gmail.com<",
  "Sửa chữa",
  <Link to='/BuildingDetail'>Xem chi tiết</Link>,
  <><img alt="edit4140" src="/icon/edit-icon.svg" className="edit-icon" />
  <img alt="trashalt4140" src="/icon/delete-icon.svg" className="trash-icon" /></>
],
[
  "CUS_001",
  "Nguyễn Văn",
  "A",
  "nguyena@gmail.com<",
  "Sửa chữa",
  <Link to='/BuildingDetail'>Xem chi tiết</Link>,
  <><img alt="edit4140" src="/icon/edit-icon.svg" className="edit-icon" />
  <img alt="trashalt4140" src="/icon/delete-icon.svg" className="trash-icon" /></>
]]

function Main ()
{
  // const [employees, setBuilding] = useState([]);
  // useEffect(() => {
  //   fetch('http://localhost:1337/api/employees')
  //     .then((response) => response.json())
  //     .then(({ data }) => setBuilding(data)); // <-- save the data array
  // }, []);
  const navigate = useNavigate();
  const handleClick = (event) =>
  {
    event.preventDefault();
    navigate('/Employee/EmployeeForm');
  }
  return(
    <div>
      <span class="function-title textxlsemibold">Nhân viên</span>
      <div class="main-zone">
        <div class="main-head">
          <div class="main-head-center">
              <input
                type="text"
                placeholder="Tìm kiếm"
                className="searchbar"
              />
              <img
                alt="searchI414"
                src="/icon/search-icon.svg"
                className="search-icon"
              /> 
            <button class="addbutton" onClick={handleClick}>
              <span class="addbutton-text textsmsemibold">Thêm nhân viên</span>
              <img
                src="./icon/add-icon.svg"
                class="pluscircle"
              />
            </button>
          </div>
        </div>
        <div className="table-area">{table(colname, tbcontent)}</div>
      </div>
    </div>
  )
}

export default function EmployeeList ()
{
  return(
    <div>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Employee/EmployeeForm" element={<EmployeeForm />} />
    </Routes>
    </div>
  )
}