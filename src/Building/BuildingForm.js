import { func } from "prop-types";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import '../style/form.css'
import {checkbox,input,dropdown,choice} from "../style/JSfunc";
import BuildingList from "./BuildingList";

let provinces = 
[
  {value: 1, text: "Hà Nội"},
  {value: 2, text: "Thành phố Hồ Chí Minh"},
  {value: 3, text: "Đà Nẵng"}
]
let districts = 
[
  {value: 1, text: "1"},
  {value: 2, text: "2"},
  {value: 3, text: "3"}
]
let communtes = 
[
  {value: 1, text: "1"},
  {value: 2, text: "2"},
  {value: 3, text: "3"}
]
let budget = [
  {value: "electric", text: "Điện"},
  {value: "wifi", text: "wifi"},
  {value: "water", text: "Nước"},
  {value: "park", text: "Giữ xe"}
]

function Main (){
  const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault();

    navigate('/Building/BuildingList');
  }
  const form = (
    <div>
      <span className="function-title textxlsemibold">Thêm toà nhà</span>
      <form onSubmit={handleClick} className="main-zone">
        <div className="big-row">
          <div className="col-left">
            <div className="item-area">
              {input(2,"Building_Name","Tên","Tên toà nhà")}
            </div>
            <div className="item-area double-col">
              {input(1,"Num_of_Floors","Nhập số tầng","Số tầng")}<div/>
            </div>
            <div className="item-area">
              <span className="form-subtitle textmdsemibold">Dịch vụ</span>
              <div className="checkbox-area">
                {budget.map((x) => checkbox("budget",x.value,x.text))}
              </div>
            </div>
            <div className="item-area">
              <span className="form-subtitle textmdsemibold">Mô tả</span>
              <textarea name="Description" className="text-input" placeholder="Mô tả"></textarea>
            </div>
          </div>
          <div className="col-left">
            <div className="item-area double-col">
              {dropdown("Tỉnh/Thành","province",provinces)}
              <div/>
            </div>
            <div className="item-area double-col">
              {dropdown("Quận/Huyện","district",districts)}
              {dropdown("Phường/Xã","communte",communtes)}
            </div>
            <div className="item-area">
              {input(2,"num_street","Tên","Số, đường")}
            </div>
            <div className="item-area">
              <span className="form-subtitle textmdsemibold">Thêm ảnh</span>
                <input type="file" name="myfile" id="myfile" hidden/>
                <label for="myfile" className="add-file-button">Nhấn để thêm ảnh</label>
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
    <div>{form}</div>
  )
}

export default function BuildingForm ()
{
  return(
    <div>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Building/BuildingList" element={<BuildingList />} />
    </Routes>
    </div>
  )
}