import { func } from "prop-types";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import ApartmentList from "./ApartmentList"
import '../style/form.css'
import {checkbox,input,dropdown,choice} from "../style/JSfunc";


let room = 
[
  {name: "livingroom", text: "Phòng khách"},
  {name: "kitchen", text: "Phòng bếp"},
  {name: "bedroom", text: "Phòng ngủ"},
  {name: "toilet", text: "Nhà vệ sinh"}
]
let funiture = 
[
  {name: "fan", text: "Quạt"},
  {name: "bedroom", text: "Tủ"},
  {name: "table", text: "Bộ bàn ghế"},
  {name: "bed", text: "Bộ giường ngủ"},
  {name: "air_conditioner", text: "Máy lạnh"},
  {name: "TV", text: "Tivi"},
  {name: "desk", text: "Bàn trang điểm"},
  {name: "sofa", text: "Sofa"}
]
let budget = [
    {value: "electric", text: "Điện"},
    {value: "wifi", text: "wifi"},
    {value: "water", text: "Nước"},
    {value: "park", text: "Giữ xe"}
]
let building_names = 
[
  {value: 1, text: "1"},
  {value: 2, text: "2"},
  {value: 3, text: "3"}
]

function Main () {
  const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault();
    navigate('/Apartment/ApartmentList');
  }
  const form = (
    <div>
      <span className="function-title textxlsemibold">Thêm căn hộ</span>
      <form onSubmit={handleClick} className="main-zone">
        <div className="big-row">
          <div className="col-left">
            <div className="item-area">
              {input(2,"apartment_name","Tên","Tên căn hộ")}
            </div>
            <div className="item-area double-col">
              {input(1,"totalroom","Nhập số phòng","Số phòng")}
              {input(1,"people","Nhập số người","Sức chứa")}
            <div/>
            </div>
            <div className="item-area double-col">
              {input(1,"cost","Nhập số tiền","Tiền thuê")}
              {dropdown("Toà nhà","building_name",building_names)}
            </div>
            <div className="item-area">
              <span className="form-subtitle textmdsemibold">Dịch vụ</span>
              <div className="checkbox-area">
                {budget.map((x) => checkbox("budget",x.value,x.text))}
              </div>
            </div>
            <div className="item-area">
              <span className="form-subtitle textmdsemibold">Mô tả</span>
              <textarea name="description" className="text-input" placeholder="Mô tả"></textarea>
            </div>
          </div>
          <div className="col-left">
            <div className="item-area">
              <span className="form-subtitle textmdsemibold">Phòng (nhập số lượng)</span>
              <div className="double-col">{room.map((x) => input(1,x.name,x.text))}</div>
            </div>
            <div className="item-area">
              <span className="form-subtitle textmdsemibold">Nội thất (nhập số lượng)</span>
              <div className="double-col">{funiture.map((x) =>input(1,x.name,x.text))}</div>
            </div>
            <div className="item-area">
              <span className="form-subtitle textmdsemibold">Thêm ảnh</span>
              <div className="add-file-area">
                <input type="file" name="myfile" id="myfile" hidden/>
                <label for="myfile" className="add-file-button">Nhấn để thêm ảnh</label>
                </div>
            </div>
          </div>
        </div>
        <div className="submit-area">
          <button type="submit" className="submit-button">
            <span className="submit-btntxt textsmsemibold">Thêm căn hộ</span>
          </button>
        </div>
      </form>
    </div>
  )
  return (
    {form}
  )
}

export default function ApartmentForm () 
{
  return(
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Apartment/ApartmentList" element={<ApartmentList />} />
    </Routes>
  )
}