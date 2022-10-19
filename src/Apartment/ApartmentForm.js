import React,{ useEffect, useState } from 'react';
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import axios from 'axios';
import ApartmentList from "./ApartmentList"
import '../style/form.css'
import {input,dropdown} from "../style/JSfunc";


let room = 
[
  {name: "Livingroom", text: "Phòng khách"},
  {name: "Kitchen", text: "Phòng bếp"},
  {name: "Bedroom", text: "Phòng ngủ"},
  {name: "Toilet", text: "Nhà vệ sinh"}
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

function Main () {
  const [buildings, loadBuilding]= useState([]);
  const [maxfloor, setFloor]= useState();
  const [buildingname, setbuildingname]= useState();
  const [f1, setF1]= useState(true);
  const [numFloor, setNumFloor]= useState();
  const navigate = useNavigate();
  useEffect( ()=>{
    const foo= async ()=>{
      const a= await fetch("http://localhost:1337/api/buildings");
      const b= await a.json();
      loadBuilding(await b.data);
    }
    foo();
  },[]);

  const createNewApartment = async (data) => {
    await axios
    .post("http://localhost:1337/api/apartments", data)
  }
  const handleBuildingName = (event) =>
  {
    setbuildingname(event.target.value);
    setNumFloor("");
    setF1(false);
    event.preventDefault();
  }
  useEffect( ()=>{
    const foo= async ()=>{
      const a= await fetch(`http://localhost:1337/api/buildings/${buildingname}`);
      const b= await a.json();
      setFloor(await b.data);
    }
    foo();
  },[buildingname]);
  const floors = ((maxfloor!=null) ? Array.from({length: maxfloor.attributes.Num_of_Floors}, (_, i) => i + 1) :null);

  const handleFloor = (event) =>
  {
    setNumFloor(event.target.value);
    event.preventDefault();
  }

  const handleClick = (event) => {
    event.preventDefault();
    let {Apartment_Name, Size, Capacity, Rent_Fee, Livingroom, Kitchen, Bedroom, Toilet} = document.forms[0];
    const data = {
      'data': {
          "Apartment_Name": Apartment_Name.value,
          "Size": Size.value,
          "Capacity": Capacity.value,
          "Rent_Fee": Rent_Fee.value,
          "Livingroom": Livingroom.value,
          "Kitchen": Kitchen.value,
          "Bedroom": Bedroom.value,
          "Toilet": Toilet.value,
      }
    }
    createNewApartment(data);
    navigate('/Apartment/ApartmentList');
  }
  const form = (
    <>
      <span className="function-title textxlsemibold">Thêm căn hộ</span>
      <form onSubmit={handleClick} className="main-zone">
        <div className="big-row">
          <div className="col-left">
            <div className="item-area">
              {input(2,"Apartment_Name","Tên","Tên căn hộ")}
            </div>
            <div className="item-area double-col">
              {input(1,"Size","Đơn vị: m2","Diện tích")}
              {input(1,"Capacity","Nhập số người","Sức chứa")}
            </div>
            <div className="item-area double-col">
              {input(1,"Rent_Fee","Nhập số tiền","Tiền thuê")}
              <div/>
            </div>
            <div className="item-area double-col">
              {dropdown("Toà nhà","building_name", handleBuildingName, false, 
              buildings, "building", buildingname, "Chọn tòa nhà", "Chọn tòa nhà")}
              {dropdown("Tầng","Floor", handleFloor, f1, 
              floors, "floor", numFloor, "Chọn số tầng", "Vui lòng chọn tòa nhà")}
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
    </>
  )
  return (
    <div>{form}</div>
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
