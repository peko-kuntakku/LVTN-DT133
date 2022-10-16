import React from 'react'
import './BuildingDetail.css'
import ReactDOM from "react-dom";
import {Routes, Route, Link, useNavigate} from 'react-router-dom';

const col_width = [151, 301, 443, 588, 781, 967]

function ApartmentListOf () {
  const rows = () =>
  {
    return(
    <div className="row">
      <div className="row-text-area">
      <div className="row-text textsmsemibold">AP-001</div>
      <div className="row-text textsm" style={{left: col_width[0]}}>A.112</div>
      <div className="row-text textsm" style={{left: col_width[1]}}>3</div>
      <div className="row-text textsm" style={{left: col_width[2]}}>98m2</div>
      <span className="row-text textsm" style={{left: col_width[3]}}>Quận 1</span>
      <span className="row-text textsm" style={{left: col_width[4]}}>Xem chi tiết</span>
      <span className="row-text textsm" style={{left: col_width[5]}}>
      <img
        src="/icon/edit-icon.svg"
        className="edit-icon"
      />
      <img
        src="/icon/delete-icon.svg"
        className="trash-icon"
      />
      </span>
      </div>
      <img
        alt="Line144140"
        src="/playground_assets/line144140-pq.svg"
        className="buildinglist-screen-line141"
      />
    </div>
    )
  }
  return (
    <div>
      <div class="rowtitle">
        {/*
        <img
          src="/playground_assets/line144138-fo9r.svg"
          alt="Line144138"
          class="buildinglist-screen-line14"
        />
        */}
        <div class="rowtitle-txt-area">
          <span class="rowtitle-text" >Mã căn hộ</span>
          <span class="rowtitle-text textsm" style={{left: col_width[0]}}>Tên căn hộ</span>
          <span class="rowtitle-text textsm" style={{left: col_width[1]}}>Số phòng</span>
          <span class="rowtitle-text textsm" style={{left: col_width[2]}}>Diện tích</span>
          <span class="rowtitle-text textsm" style={{left: col_width[3]}}>Địa chỉ</span>
          <span class="rowtitle-text textsm" style={{left: col_width[4]}}>Chi tiết</span>
          <span class="rowtitle-text textsm" style={{left: col_width[5]}}>Cập nhật / Xoá</span>
        </div>
      </div>
      <div>
      {rows()}
      {rows()}
      {rows()}
      {rows()}
      </div>
    </div>
  )
}

function Main () {
  return (
    <div>
      <span className="function-title textxlsemibold">Chi tiết toà nhà</span>
      <div className="main-zone">
        <div className="building-detail-screen-info">
          <div className="building-detail-screen-name">
            <span className="building-detail-screen-text002 textxlsemibold">Toà nhà A</span>
          </div>
          <div className="building-detail-screen-name1">
            <div className="building-detail-screen-name2">
              <span className="building-detail-screen-text004 textmd">Số tầng:</span>
            </div>
            <span className="building-detail-screen-text006 textmd">5</span>
          </div>
          <div className="building-detail-screen-name3">
            <span className="building-detail-screen-text007 textmd">Địa chỉ:</span>
            <span className="building-detail-screen-text009 textmd">
                Số 52, đường Nguyễn Thị Minh Khai <br/>
                Phường Bến Nghé, Quận 1,<br/>
                Thành phố Hồ Chí Minh.<br/>
            </span>
          </div>
          <div className="building-detail-screen-name4">
            <span className="building-detail-screen-text016 textmd">Dịch vụ:</span>
            <div className="building-detail-screen-services">
              <div className="building-detail-screen-electricity">
                <span className="building-detail-screen-text018 textsm">Giữ xe</span>
                <img
                  alt="Done4151"
                  src="/playground_assets/done4151-1wcj.svg"
                  className="building-detail-screen-done"
                />
              </div>
              <div className="building-detail-screen-electricity1">
                <span className="building-detail-screen-text020 textsm">Nước</span>
                <img
                  alt="Done4151"
                  src="/playground_assets/done4151-39nr.svg"
                  className="building-detail-screen-done1"
                />
              </div>
              <div className="building-detail-screen-electricity2">
                <span className="building-detail-screen-text022 textsm">Wifi</span>
                <img
                  alt="Done4152"
                  src="/playground_assets/done4152-0yeo.svg"
                  className="building-detail-screen-done2"
                />
              </div>
              <div className="building-detail-screen-electricity3">
                <span className="building-detail-screen-text024 textsm">Điện</span>
                <img
                  alt="Done4152"
                  src="/playground_assets/done4152-j13.svg"
                  className="building-detail-screen-done3"
                />
              </div>
            </div>
          </div>
        </div>
        <button className="building-detail-screen-small-secondary-button">
          <span className="building-detail-screen-text026 textsmsemibold">Thêm toà nhà</span>
        </button>
        <div className="building-detail-screen-imagedefault">
          <img
            alt="Rectangle24153"
            src="/playground_assets/rectangle24153-slom-500h.png"
            className="building-detail-screen-rectangle2"
          />
          <img
            alt="apartmentphoto114153"
            src="/playground_assets/apartmentphoto114153-ag8d-500h.png"
            className="building-detail-screen-apartmentphoto11"
          />
          <div className="building-detail-screen-nextbutton">
            <img
              alt="Ellipse24153"
              src="/playground_assets/ellipse24153-ezm-200h.png"
              className="building-detail-screen-ellipse2"
            />
            <img
              alt="Keyboardarrowright4153"
              src="/playground_assets/keyboardarrowright4153-drr.svg"
              className="building-detail-screen-keyboardarrowright"
            />
          </div>
        </div>
      </div>
      <div className="building-detail-screen-description">
        <span className="building-detail-screen-text028 textmdsemibold">Mô tả</span>
        <span className="building-detail-screen-text030 textsm">
            Hãy thắp sáng cuộc sống của bạn với căn hộ sáng bóng và đáng mơ
            ước này. Được trang trí chuyên nghiệp trong phòng khách và phòng
            ngủ sẽ mang lại cảm giác tráng lệ cho khách thuê.
        </span>
      </div>
      <div className="building-detail-screen-description1">
        <span className="building-detail-screen-text032 textmdsemibold">Các căn hộ thuộc toà nhà</span>
        <div className="building-detail-screen-table">
          {ApartmentListOf()}
        <span className="building-detail-screen-text101">Xem toàn bộ</span>
      </div>
    </div>
    </div>
  )
}

export default function BuildingDetail ()
{
  return(
    <div>
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
    </div>
  )
}