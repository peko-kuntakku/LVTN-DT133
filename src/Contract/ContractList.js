import { func } from "prop-types";
import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import ReactDOM from "react-dom";
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import '../style/main.css';
import '../style/list.css';
import { table } from "../style/JSfunc";

const col_width = [172, 328, 555, 810, 990]

const colname = 
[
  {width: "14%", title: "Mã hợp đồng"},
  {width: "14%", title: "Căn hộ"},
  {width: "20%", title: "Người tạo"},
  {width: "24%", title: "Thời gian tạo"},
  {width: "16%", title: "Trạng thái"},
  {width: "12%", title: "Chi tiết"},
]
const tbcontent = [
  [
    "CO_A112",
    "A.112",
    "Nguyễn Văn A",
    "21  thg 4, 2022 00:00",
    "Chờ xác nhận",
    <Link to='/BuildingDetail'>Xem chi tiết</Link>,
  ],
  [
    "CO_A112",
    "A.112",
    "Nguyễn Văn A",
    "21  thg 4, 2022 00:00",
    "Chờ xác nhận",
    <Link to='/BuildingDetail'>Xem chi tiết</Link>,
  ]
]

export default function ContractList (){
  const [contracts, setContracts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:1337/api/contracts')
      .then((response) => response.json())
      .then(({ data }) => setContracts(data));
  }, []);

  return(
    <div>
      <span class="function-title textxlsemibold">Hợp đồng</span>
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
        </div>
        <div className="table-area">
          <table>
            <tr className="rowtitle">
              {colname.map((a)=><th className="textsm" style={{width: a.width}}>{a.title}</th>)}
            </tr>
              {contracts.map(data => 
            <tr>
              <td className="textsm">{data.id}</td>
              <td className="textsm">{}</td>
              <td className="textsm">{}</td>
              <td className="textsm">{data.attributes.Start_Date}</td>
              <td className="textsm">{}</td>
              <td className="textsm"><Link to='/BuildingDetail'>Xem chi tiết</Link></td>
            </tr>)}
          </table>
        </div>
      </div>
    </div>
  )
}