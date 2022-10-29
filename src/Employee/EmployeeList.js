import axios from 'axios';
import React,{ useEffect, useState } from 'react';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import ReactDOM from "react-dom";
import '../style/main.css';
import '../style/list.css';
import EmployeeForm from "./EmployeeForm";
import {deleteItem, loadItem } from '../control';
import { setEmployeeID } from './EmployeeForm';

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

function Main ()
{
  const [employees, setEmployees] = useState([]);
  useEffect(() => {loadItem('employees','',setEmployees)}, [])
  const navigate = useNavigate();
  const handleEdit = (id) => {
    setEmployeeID(id)
    navigate('/Employee/EmployeeForm');
  };
  const handleAdd = (event) =>
  {
    event.preventDefault();
    setEmployeeID(0)
    navigate('/Employee/EmployeeForm');
  }
  return(
    <div>
      <span class="function-title textxlsemibold">Nhân viên</span>
      <div class="main-zone">
        <div class="main-head">
          <div class="search-list">
            <input
              type="text"
              placeholder="Tìm kiếm"
              className="searchbar"
            />
            <img
              src="/icon/search-icon.svg"
              className="search-icon"
            /> 
          </div>
          <button class="addbutton" onClick={handleAdd}>
            <span class="addbutton-text textsmsemibold">Thêm nhân viên</span>
            <img
              src="./icon/add-icon.svg"
              class="pluscircle"
            />
          </button>
        </div>
        <div className="table-area">
          <table>
            <tr className="rowtitle">
              {colname.map((a)=><th className="textsm" style={{width: a.width}}>{a.title}</th>)}
            </tr>
            {employees.map(({id, attributes}) => 
            <tr>
              <td className="textsm">{id}</td>
              <td className="textsm">{attributes.Lastname}</td>
              <td className="textsm">{attributes.Firstname}</td>
              <td className="textsm">{attributes.Email}</td>
              <td className="textsm">{attributes.Role}</td>
              <td className="textsm"><Link to='/Apartment/ApartmentDetail'>Xem chi tiết</Link></td>
              <td className="textsm"><img alt="edit4140" src="/icon/edit-icon.svg" className="edit-icon" onClick={()=>handleEdit(id)}/>
                <img alt="trashalt4140" src="/icon/delete-icon.svg" className="trash-icon" onClick={()=>deleteItem('employees', id)}/>
              </td>
            </tr>)}
          </table>
        </div>
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