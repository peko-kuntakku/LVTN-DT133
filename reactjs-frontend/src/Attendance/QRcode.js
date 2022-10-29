import React from 'react'
import './QRCode.css'
import {input, submitbtn} from "../style/JSfunc"
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import '../style/form.css'
import {addNewItem} from '../control';


export default function QRCode () {
  const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault();
    let {QR_Text, Date} = document.forms[0];
    const data = {
      'data': {
          "QR_Text": QR_Text.value,
          "Date": Date.value,
      }
    }
    addNewItem("qr-codes", data)
    
  }
  return (
    <div>
      <span className="function-title textxlsemibold">Tạo mã QR</span>
      <div class="main-zone">
        <form onSubmit={handleClick}>
          <div className="big-row">
            <div className="col-third-left">
              <div className="item-area">
                {input(1,"Văn bản","QR_Text",true,"Nhập văn bản",null,null,1,80,null)}
              </div>
            </div>
            <div className="col-third-right">
              <div className="item-area">
                {input(2,"Ngày","Date",true,"Ngày",null,null,"2022-01-01","2100-12-31",null)}
              </div>
            </div>
          </div>
          <div className="submit-area">
            <button type="submit" className="submit-button">
              <span className="submit-btntxt textsmsemibold">Tạo mã</span>
            </button>
          </div>
        </form>
        <div className="QR-img">
            <img
            src="./QR.png"
            alt="apartmentphoto114251"
            className="create-q-r-screen-apartmentphoto11"
            />
        </div>
        <form method="get" action="./QR.png">
              <button type="submit" className="submit-button">
                <span className="submit-btntxt textsmsemibold">Tải xuống</span>
              </button>
            </form>
        </div>
    </div>
  )
}
