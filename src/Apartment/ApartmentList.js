import axios from 'axios';
import React,{ useEffect, useState } from 'react';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import ApartmentForm from "./ApartmentForm";
import ApartmentDetail from "./ApartmentDetail";
import { loadList, deleteItem } from '../control';
import { setApartmentID } from './ApartmentForm';
import '../style/main.css';
import '../style/list.css';

const colname = 
[
  {width: "12%", title: "Mã căn hộ"},
  {width: "12%", title: "Tên căn hộ"},
  {width: "12%", title: "Số phòng"},
  {width: "12%", title: "Diện tích"},
  {width: "22%", title: "Địa chỉ"},
  {width: "12%", title: "Chi tiết"},
  {width: "12%", title: "Cập nhật / Xoá"}
]

function Main () {
  const [apartments, setApartments] = useState([]);
  useEffect(() => {loadList('apartments',setApartments)}, [])
  const navigate = useNavigate();
  const handleEdit = (id) => {
    setApartmentID(id)
    navigate('/Apartment/ApartmentForm');
  };
  const handleAdd = (event) =>
  {
    event.preventDefault();
    setApartmentID(0)
    navigate('/Apartment/ApartmentForm');
  }
  return(
    <><span class="function-title textxlsemibold">Căn hộ</span>
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
          <span class="addbutton-text textsmsemibold">Thêm căn hộ</span>
          <img
            src="./icon/add-icon.svg"
            class="pluscircle" />
        </button>
      </div>
      <div className="table-area">
        <table>
          <tr className="rowtitle">
            {colname.map((a)=><th className="textsm" style={{width: a.width}}>{a.title}</th>)}
          </tr>
          {apartments.map(({id, attributes}) => 
          <tr>
            <td className="textsm">{id}</td>
            <td className="textsm">{attributes.Apartment_Name}</td>
            <td className="textsm">{attributes.Livingroom + attributes.Bedroom + attributes.Kitchen + attributes.Restroom}</td>
            <td className="textsm">{console.log(attributes.building)}</td>
            <td className="textsm">{}</td>
            <td className="textsm"><Link to='/ApartmentDetail'>Xem chi tiết</Link></td>
            <td className="textsm"><img alt="edit4140" src="/icon/edit-icon.svg" className="edit-icon" onClick={()=>handleEdit(id)}/>
              <img alt="trashalt4140" src="/icon/delete-icon.svg" className="trash-icon" onClick={()=>deleteItem('apartments', id)}/>
            </td>
          </tr>)}
        </table>
      </div>
    </div>
    </>
  )
}

export default function ApartmentList ()
{
  return(
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Apartment/ApartmentForm" element={<ApartmentForm />} />
      <Route path="/Apartment/ApartmentDetail" element={<ApartmentDetail />} />
    </Routes>
  )
}
