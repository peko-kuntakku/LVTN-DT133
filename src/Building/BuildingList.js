import axios from 'axios';
import React,{ useEffect, useState } from 'react';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import '../style/main.css';
import '../style/list.css';
import BuildingForm from "./BuildingForm";
import BuildingDetail from "./BuildingDetail";
import { loadList, deleteItem } from '../control';

const colname = 
[
  {width: "14%", title: "Mã tòa nhà"},
  {width: "20%", title: "Tên tòa nhà"},
  {width: "10%", title: "Số tầng"},
  {width: "24%", title: "Địa chỉ"},
  {width: "14%", title: "Chi tiết"},
  {width: "14%", title: "Cập nhật / Xoá"}
]

function Main () {
  const [buildings, setBuilding] = useState([]);
  useEffect(() => {loadList('buildings',setBuilding)}, [])
  const navigate = useNavigate();
  const handleEdit = (event) => {
    event.preventDefault();
    navigate('/Building/BuildingForm');
  };
  const handleAdd = (event) =>
  {
    event.preventDefault();
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
              <td className="textsm">{attributes.Building_Name}</td>
              <td className="textsm">{attributes.Num_of_Floors}</td>
              <td className="textsm">{}</td>
              <td className="textsm"><Link to='/Building/BuildingDetail'>Xem chi tiết</Link></td>
              <td className="textsm"><img alt="edit4140" src="/icon/edit-icon.svg" className="edit-icon" onClick={handleEdit}/>
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
  
