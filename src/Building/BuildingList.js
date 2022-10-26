import React,{ useEffect, useState } from 'react';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import '../style/main.css';
import '../style/list.css';
import BuildingDetail,{ setBuildingID2 } from "./BuildingDetail";
import { deleteItem, loadItem, loadLocation } from '../control';
import BuildingForm, { setBuildingID } from './BuildingForm';
import axios from 'axios';

const colname = 
[
  {width: "14%", title: "Mã tòa nhà"},
  {width: "20%", title: "Tên tòa nhà"},
  {width: "10%", title: "Số tầng"},
  {width: "24%", title: "Địa chỉ"},
  {width: "14%", title: "Chi tiết"},
  {width: "14%", title: "Cập nhật / Xoá"}
]

// function showLocate(p)
// {
//   const [Province, setProvince]= useState('');
//   const [District, setDistrict]= useState('');
//   const [Ward, setWard]= useState('');
//   loadLocation('p',p.Province,setProvince)
//   loadLocation('d',p.District,setDistrict)
//   loadLocation('w',p.Ward,setWard)
//   return Province
// }

function Main () {
  const [buildings, setBuildings] = useState([]);
  useEffect(() => {loadItem('buildings','',setBuildings,'location')}, [])

  const navigate = useNavigate();
  const handleDetail = (id) => {
    setBuildingID2(id)
    navigate('/Building/BuildingDetail');
  };
  const handleEdit = (id) => {
    setBuildingID(id)
    navigate('/Building/BuildingForm');
  };
  const handleAdd = (event) =>
  {
    event.preventDefault();
    setBuildingID(0);
    navigate('/Building/BuildingForm');
  }

  return(
    <div>
      <span class="function-title textxlsemibold">Toà nhà</span>
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
              <span class="addbutton-text textsmsemibold">Thêm toà nhà</span>
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
            {buildings.map(({id, attributes}) => 
            <tr>
              <td className="textsm">{id}</td>
              <td className="textsm">{attributes.BuildingName}</td>
              <td className="textsm">{attributes.Num_of_Floors}</td>
              <td className="textsm">{/*showLocate(attributes.location.data.attributes)*/}</td>
              <td className="textsm"><span onClick={()=>handleDetail(id)}>Xem chi tiết</span></td>
              <td className="textsm"><img alt="edit4140" src="/icon/edit-icon.svg" className="edit-icon" onClick={()=>handleEdit(id)}/>
                <img alt="trashalt4140" src="/icon/delete-icon.svg" className="trash-icon" onClick={()=>deleteItem('buildings', id)}/>
              </td>
            </tr>)}
          </table>
        </div>
      </div>
    </div>
  )
}
export default function BuildingList ()
{
  return(
    <div>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Building/BuildingForm" element={<BuildingForm />} />
      <Route path="/Building/BuildingDetail" element={<BuildingDetail />} />
    </Routes>
    </div>
  )
}
  
