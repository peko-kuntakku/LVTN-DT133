import { func } from "prop-types";
import React,{ useEffect, useState } from 'react';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import ApartmentForm from "./ApartmentForm";
import ApartmentDetail from "./ApartmentDetail";
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
  useEffect(() => {
    fetch('http://localhost:1337/api/apartments')
      .then((response) => response.json())
      .then(({ data }) => setApartments(data)); // <-- save the data array
  }, []);
  const navigate = useNavigate();
  const handleClick = (event) =>
  {
    event.preventDefault();
    navigate('/Apartment/ApartmentForm');
  }
  return(
    <div><span class="function-title textxlsemibold">Căn hộ</span>
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
        <button class="addbutton" onClick={handleClick}>
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
          {apartments.map(data => 
          <tr>
            <td className="textsm">{data.id}</td>
            <td className="textsm">{data.attributes.Apartment_Name}</td>
            <td className="textsm">{data.attributes.Livingroom + data.attributes.Bedroom + data.attributes.Kitchen + data.attributes.Restroom}</td>
            <td className="textsm">{data.attributes.Size}</td>
            <td className="textsm">{}</td>
            <td className="textsm"><Link to='/BuildingDetail'>Xem chi tiết</Link></td>
            <td className="textsm"><img alt="edit4140" src="/icon/edit-icon.svg" className="edit-icon"/>
              <img alt="trashalt4140" src="/icon/delete-icon.svg" className="trash-icon" />
            </td>
          </tr>)}
        </table>
      </div>
    </div></div>
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