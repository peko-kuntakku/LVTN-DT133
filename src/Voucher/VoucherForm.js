import React, { useState } from "react";
import ReactDOM from "react-dom";
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import '../style/form.css'
import '../style/list.css'
import {checkbox,input,dropdown,choice,table} from "../style/JSfunc";
import VoucherList from "./VoucherList";

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
const tbcontent = [
[
  "AP-001",
  "A.112",
  "3",
  "98m2",
  "Quận 1",
  <Link to='/BuildingDetail'>Xem chi tiết</Link>,
  <><img alt="edit4140" src="/icon/edit-icon.svg" className="edit-icon" />
    <img alt="trashalt4140" src="/icon/delete-icon.svg" className="trash-icon" /></>
],
[
  "AP-001",
  "A.112",
  "3",
  "98m2",
  "Quận 1",
  <Link to='/BuildingDetail'>Xem chi tiết</Link>,
  <><img alt="edit4140" src="/icon/edit-icon.svg" className="edit-icon" />
    <img alt="trashalt4140" src="/icon/delete-icon.svg" className="trash-icon" /></>
]]

const customertype = [
  {value: 1, text: "Tất cả khách hàng"},
  {value: 2, text: "Khách hàng mới"},
]

const apartmenttype = [
  {value: 1, text: "Tất cả các căn hộ"},
  {value: 2, text: "Một vài căn hộ"},
]

function Main (){
  const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault();
    navigate('/VoucherList');
  }
    return(
      <div>
        <span className="function-title textxlsemibold">Thêm mã giảm giá</span>
        <form onSubmit={handleClick} className="main-zone">
          <div className="big-row">
            <div className="col-left">
              <div className="item-area">
                {input(2,"vouchername","Tên","Tên mã")}
              </div>
              <div className="item-area double-col">
                {input(3,"startday","","Ngày bắt đầu")}
                {input(4,"starttime","","Thời gian bắt đầu")}
              </div>
              <div className="item-area double-col">
                {input(3,"endday","","Ngày kết thúc")}
                {input(4,"endtime","","Thời gian kết thúc")}
              </div>
            </div>
            <div className="col-left">
              <div className="item-area">
                {choice("Áp dụng cho","apply-customer",customertype)}
              </div>
              <div className="item-area double-col">
                {input(1,"quantity","Số lượng","Số lượng")}<div/>
              </div>
              <div className="item-area double-col">
                {input(1,"percent_off","Phần trăm","Phần trăm giảm")}
                {input(1,"max_off","Tối đa","Giảm tối đa")}
              </div>
            </div>
          </div>
          <div className="main-head">
            {choice("Các căn hộ áp dụng","apply-apartment",apartmenttype)}
          </div>
          <div className="table-area">
            {table(colname, tbcontent)}
          </div>
          <div className="submit-area">
            <button type="submit" className="submit-button">
              <span className="submit-btntxt textsmsemibold">Thêm nhân viên</span>
            </button>
          </div>
        </form>
      </div> 
    )
}

export default function VoucherForm ()
{
  return(
    <div>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/VoucherList" element={<VoucherList />} />
    </Routes>
    </div>
  )
}