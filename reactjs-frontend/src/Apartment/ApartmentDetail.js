import React,{ useEffect, useState } from 'react';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import {loadItem} from '../control';

import './ApartmentDetail.css'
import './ApartmentList'

let apartmentID2 = 0;

export const setApartmentID2 = (id) => 
{
  apartmentID2 = id
}

function Main () {
  const [apartment, loadApartment]= useState();

  const [ApartmentName,setApartmentName]= useState();
  const [Size,setSize]= useState();
  const [Capacity,setCapacity]= useState();
  const [RentFee,setRentFee]= useState();
  const [Description,setDescription]= useState();
  const [Livingroom, setLivingroom] = useState();
  const [Kitchen, setKitchen] = useState();
  const [Bedroom, setBedroom] = useState();
  const [Restroom, setRestroom] = useState();
  const [building, setBuilding]= useState();
  const [Floor, setFloor]= useState();

  let room = 
  [
    {name: "Livingroom", text: "Phòng khách", value: Livingroom, setVal: setLivingroom},
    {name: "Kitchen", text: "Phòng bếp", value: Kitchen, setVal: setKitchen},
    {name: "Bedroom", text: "Phòng ngủ", value: Bedroom, setVal: setBedroom},
    {name: "Restroom", text: "Nhà vệ sinh", value: Restroom, setVal: setRestroom}
  ]

  useEffect( ()=>{
    loadItem('apartments', apartmentID2, loadApartment,'building');
  },[apartmentID2]);

  useEffect(()=>{
    if (apartment!=null) {
      const attr=apartment.attributes
      setApartmentName(attr.ApartmentName)
      setSize(attr.Size)
      setCapacity(attr.Capacity)
      setRentFee(attr.RentFee)
      setDescription(attr.Description)
      setBuilding(attr.building.data.id)
      setFloor(attr.Floor)
      room.map(x=>x.setVal(attr[x.name]))
    }
  },[apartment]);

  return (
    <div>
      <span className="function-title textxlsemibold">Chi tiết căn hộ</span>
      <div className="main-zone">
        <div className="big-row">
          <div className="col-left">
            <img
              alt="apartmentphoto114153"
              src="/apartmentphoto114153-ag8d-500h.png"
              className="building-detail-screen-apartmentphoto11"
            />
          </div>
          <div className="col-left">
            <div className="item-area">
              <span className="form-subtitle textxlsemibold">Căn hộ {ApartmentName}</span>
            </div>
            <div className="item-area">
              <div className="big-row">
                <div className="col-third-right">
                  <span className="form-subtitle textlgsemibold">Sức chứa:</span>
                </div>
                <div className="col-third-left">
                  <span className="form-subtitle textlgsemibold">{Capacity} người</span>
                </div>
              </div>
            </div>
            <div className="item-area">
              <div className="big-row">
                <div className="col-third-right">
                  <span className="form-subtitle textlgsemibold">Diện tích:</span>
                </div>
                <div className="col-third-left">
                  <span className="form-subtitle textlgsemibold">{Size} m<sup>2</sup></span>
                </div>
              </div>
            </div>
            <div className="item-area">
              <div className="big-row">
                <div className="col-third-right">
                  <span className="form-subtitle textlgsemibold">Phòng:</span>
                </div>
                <div className="col-third-left">
                  <div className="item-area double-col">
                  {room.map((x) => 
                  <div>
                  <span className="number-room">{x.value} </span>
                   <span className="form-subtitle textlgsemibold"> {x.text}</span>
                   </div>)}
                  </div>
                </div>
              </div>
            </div>
            <div className="item-area" style={{top: "100px", position:"relative"}}>
              <span className="number-price">{RentFee} </span>
              <span className="form-subtitle textlgsemibold"> nghìn đồng/tháng</span>
            </div>
          </div>
        </div>
      </div>
      <div className="big-row" style={{height: "20px"}}/> 
      <div className="main-zone2">
          <div className="form-subtitle textlgsemibold">Mô tả</div>
          <div className="form-subtitle textlgsemibold">{Description}</div>
      </div>
    </div>
  )
}

export default function ApartmentDetail ()
{
  return(
    <div>
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
    </div>
  )
}
