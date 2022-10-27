import React,{ useEffect, useState } from 'react';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import ApartmentDetail, { setApartmentID2 } from './ApartmentDetail';
import { loadItem, deleteItem } from '../control';
import ApartmentForm, { setApartmentID } from './ApartmentForm';
import '../style/main.css';
import '../style/list.css';

const colname = 
[
  {width: "14%", title: "Mã căn hộ"},
  {width: "14%", title: "Tên căn hộ"},
  {width: "12%", title: "Số phòng"},
  {width: "12%", title: "Diện tích"},
  {width: "18%", title: "Trạng thái"},
  {width: "12%", title: "Chi tiết"},
  {width: "12%", title: "Cập nhật / Xoá"}
]

function Main () {
  const navigate = useNavigate();
  const [apartments, loadApartments] = useState([]);
  useEffect(() => {loadItem('apartments','',loadApartments)}, [])
  const handleDetail = (id) => {
    setApartmentID2(id)
    navigate('/Apartment/ApartmentDetail');
  };
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
            <td className="textsm">{attributes.ApartmentName}</td>
            <td className="textsm">{attributes.Livingroom + attributes.Bedroom + attributes.Kitchen + attributes.Restroom}</td>
            <td className="textsm">{attributes.Size}m<sup>2</sup></td>
            <td className="textsm"></td>
            <td className="textsm"><span onClick={()=>handleDetail(id)}>Xem chi tiết</span></td>
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
    <div>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Apartment/ApartmentForm" element={<ApartmentForm />} />
      <Route path="/Apartment/ApartmentDetail" element={<ApartmentDetail />} />
    </Routes>
    </div>
  )
}
