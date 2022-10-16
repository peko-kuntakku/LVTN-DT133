import React from 'react'
import './QRCode.css'
import {input} from "../style/JSfunc"
import '../style/form.css'

export default function QRCode () {
  return (
    <div>
      <span className="function-title textxlsemibold">Tạo mã QR</span>
      <div class="main-zone">
        <div className="big-row">
          <div className="col-third-left">
            <div className="item-area">
              {input(2,"qrtext","Văn bản","Nhập văn bản")}
            </div>
          </div>
          <div className="col-third-right">
            <div className="item-area">
              {input(3,"dateQR","","Ngày")}
            </div>
          </div>
        </div>
        <button className="create-q-r-screen-small-secondary-button">
            <span className="create-q-r-screen-text04 textsmsemibold">Tạo mã</span>
        </button>
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
