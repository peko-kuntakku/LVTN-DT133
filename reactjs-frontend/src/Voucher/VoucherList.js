import React,{ useEffect, useState } from 'react';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import VoucherForm,{setVoucherID} from "./VoucherForm";
import ReactDOM from "react-dom";
import '../style/main.css';
import { loadItem, deleteItem } from '../control';

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

function Main (){
  const [vouchers, setVouchers] = useState([]);
  useEffect(() => {loadItem('vouchers','',setVouchers)}, [])
  const navigate = useNavigate();
  const handleEdit = (id) => {
    setVoucherID(id)
    navigate('/Voucher/VoucherForm');
  };
  const handleAdd = (event) =>
  {
    setVoucherID(0)
    event.preventDefault();
    navigate('/Voucher/VoucherForm');
  }
  const showDateTime = (str) =>
  {
    return str.slice(11,16) + ' ' + str.slice(8,10) + '/' + str.slice(5,7) + '/' + str.slice(0,4)
  }
  return(
    <div>
      <span class="function-title textxlsemibold">Mã giảm giá</span>
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
            {vouchers.map(({id, attributes}) => 
            <tr>
              <td className="textsm">{attributes.Voucher_Name}</td>
              <td className="textsm">{showDateTime(attributes.Start_at)}</td>
              <td className="textsm">{showDateTime(attributes.Expired_at)}</td>
              <td className="textsm">{attributes.Amount}</td>
              <td className="textsm">{attributes.Remained}</td>
              <td className="textsm"><Link to='/Building/BuildingDetail'>Xem chi tiết</Link></td>
              <td className="textsm"><img alt="edit4140" src="/icon/edit-icon.svg" className="edit-icon" onClick={()=>handleEdit(id)}/>
                <img alt="trashalt4140" src="/icon/delete-icon.svg" className="trash-icon" onClick={()=>deleteItem('vouchers', id)}/>
              </td>
            </tr>)}
          </table>
        </div>      
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
      <Route path="/Voucher/VoucherForm" element={<VoucherForm />} />
    </Routes>
    </div>
  )
}