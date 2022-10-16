import { func } from "prop-types";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import '../style/list.css'
import { table } from "../style/JSfunc";

const colname = 
[
  {width: "14%", title: "Mã khách hàng"},
  {width: "18%", title: "Họ lót"},
  {width: "10%", title: "Tên"},
  {width: "20%", title: "Email"},
  {width: "10%", title: "Năm sinh"},
  {width: "14%", title: "Trạng thái"},
  {width: "14%", title: "Chi tiết"}
]
const tbcontent = [
  [
    "CUS_001",
    "Nguyễn Văn",
    "A",
    "nguyena@gmail.com",
    "1989",
    "Đã có hợp đồng",
    <Link to='/BuildingDetail'>Xem chi tiết</Link>,
  ],
  [
    "CUS_001",
    "Nguyễn Văn",
    "A",
    "nguyena@gmail.com",
    "1989",
    "Đã có hợp đồng",
    <Link to='/BuildingDetail'>Xem chi tiết</Link>,
  ]]
export default function CustomerList (){
    return(
      <div>
        <span class="function-title textxlsemibold">Khách hàng</span>
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
            </div>
          </div>
          <div className="table-area">{table(colname, tbcontent)}</div>
        </div>
      </div>
    )
}
  