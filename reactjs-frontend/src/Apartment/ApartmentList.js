import React,{ useEffect, useState } from 'react';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import ApartmentDetail, { setApartmentID2 } from './ApartmentDetail';
import { loadItem, deleteItem } from '../control';
import ApartmentForm, { setApartmentID } from './ApartmentForm';
import Popup from '../Popup';
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

export default function ApartmentList () {
  const [popup, setPopup] = useState(0);
  const [itemID, setID] = useState();
  const [itemName, setName] = useState();
  const [itemSize, setSize] = useState();
  const [itemRoom, setRoom] = useState();

  const navigate = useNavigate();

  const [apartments, loadApartments] = useState([]);
  useEffect(() => {loadItem('apartments','',loadApartments)}, [])
  const calcSum = (p) => {
    return p.Livingroom + p.Bedroom + p.Kitchen + p.Restroom
  }
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
  const handleDelete = async (Id) =>
  {
    deleteItem('apartments', Id)
    loadItem('apartments','',loadApartments)
  }
  const confirmDelete = (id,name,size,room) => 
  {
    setPopup(1)
    setID(id)
    setName(name)
    setSize(size)
    setRoom(room)
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
            <td className="textsm">{calcSum(attributes)}</td>
            <td className="textsm">{attributes.Size} m²</td>
            <td className="textsm"></td>
            <td className="textsm"><span onClick={()=>handleDetail(id)}>Xem chi tiết</span></td>
            <td className="textsm"><img alt="edit4140" src="/icon/edit-icon.svg" className="edit-icon" onClick={()=>handleEdit(id)}/>
              <img alt="trashalt4140" src="/icon/delete-icon.svg" className="trash-icon" 
              onClick={()=>confirmDelete(id, attributes.ApartmentName, attributes.Size,calcSum(attributes))}/>
            </td>
          </tr>)}
        </table>
      </div>
    </div>
    <Popup trigger={popup} setTrigger={setPopup} setDelete={handleDelete} id={itemID} category="tòa nhà" 
      details={
        [
          {key: "Tên căn hộ", value: itemName},
          {key: "Diện tích", value: `${itemSize} m²`},
          {key: "Số phòng", value: itemRoom},
        ]
      }>
    </Popup>
    </>
  )
}
