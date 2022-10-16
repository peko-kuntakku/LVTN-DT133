import { func } from "prop-types";
import React, { useState } from "react";
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import VoucherForm from "./VoucherForm";
import ReactDOM from "react-dom";
import '../style/main.css';
import { table } from "../style/JSfunc";

const colname = 
[
  {width: "13%", title: "Tên mã"},
  {width: "20%", title: "Bắt đầu"},
  {width: "20%", title: "Kết thúc"},
  {width: "12%", title: "Tổng"},
  {width: "11%", title: "Còn lại"},
  {width: "12%", title: "Chi tiết"},
  {width: "14%", title: "Cập nhật / Xoá"}
]
const tbcontent = 
[[
  "MGG502704P",
  "21  thg 4, 2022 00:00",
  "21  thg 4, 2022 00:00",
  "50",
  "50",
  <Link to='/BuildingDetail'>Xem chi tiết</Link>,
  <><img alt="edit4140" src="/icon/edit-icon.svg" className="edit-icon" />
    <img alt="trashalt4140" src="/icon/delete-icon.svg" className="trash-icon" /></>
],
[
  "MGG502704P",
  "21  thg 4, 2022 00:00",
  "21  thg 4, 2022 00:00",
  "50",
  "50",
  <Link to='/BuildingDetail'>Xem chi tiết</Link>,
  <><img alt="edit4140" src="/icon/edit-icon.svg" className="edit-icon" />
    <img alt="trashalt4140" src="/icon/delete-icon.svg" className="trash-icon" /></>
]]

function Main (){
  const navigate = useNavigate();
  const handleClick = (event) =>
  {
    event.preventDefault();
    navigate('/VoucherForm');
  }
  return(
    <div>
      <span class="function-title textxlsemibold">Mã giảm giá</span>
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
              <span class="addbutton-text textsmsemibold">Thêm mã</span>
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

export default function VoucherList ()
{
  return(
    <div>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/VoucherForm" element={<VoucherForm />} />
    </Routes>
    </div>
  )
}