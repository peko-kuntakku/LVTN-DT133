import axios from 'axios';
import React,{ useEffect, useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom'
import '../style/form.css'
import {checkbox,input,dropdown} from "../style/JSfunc";
import BuildingList from "./BuildingList";

let budget = [
  {value: "electric", text: "Điện"},
  {value: "wifi", text: "wifi"},
  {value: "water", text: "Nước"},
  {value: "park", text: "Giữ xe"}
]


function Main (){
  const [provinces, loadProvince]= useState([]);
  const [province, setProvince]= useState("");
  const [provincename, setProvinceName]= useState("");
  const [districts, loadDistrict]= useState([]);
  const [district, setDistrict]= useState("");
  const [districtname, setDistrictName]= useState("");
  const [wards, loadWard]= useState([]);
  const [ward, setWard]= useState("");
  const [wardname, setWardName]= useState("");
  const [f2, setF2]= useState(true);
  const [f3, setF3]= useState(true);

  //Lấy danh sách tỉnh thành
  useEffect( ()=>{
    const foo= async ()=>{
      const a= await fetch("https://provinces.open-api.vn/api/");
      const b= await a.json();
      loadProvince(await b);
    }
    foo();
  },[]);
  
  //Lưu tên tỉnh thành
  const handleProvice=(event)=>{
    setDistrict("")
    setWard("")
    setProvinceName(event.target.options[event.target.selectedIndex].text)
    setProvince(event.target.value);
    setF2(false);
    setF3(true);
    event.preventDefault();
  }

  //Lấy danh sách quận huyện
  useEffect( ()=>{
    const foo= async ()=>{
      const a= await fetch(`https://provinces.open-api.vn/api/p/${province}?depth=2`);
      const b= await a.json();
      loadDistrict(await b.districts);
    }
    foo();
  },[province]);

  //Lưu tên quận, huyện
  const handleDistrict=(event)=>{
    setDistrictName(event.target.options[event.target.selectedIndex].text)
    setDistrict(event.target.value);
    setF3(false);
    setWard("")
    event.preventDefault();
  }

  //Lấy danh sách phường, xã
  useEffect( ()=>{
    const foo= async ()=>{
      const a= await fetch(`https://provinces.open-api.vn/api/d/${district}?depth=2`);
      const b= await a.json();
      loadWard(await b.wards);
    }
    foo();
  },[district]);

  //Lưu tên phường, xã
  const handleWard=(event)=>{
    setWardName(event.target.options[event.target.selectedIndex].text)
    setWard(event.target.value);
    event.preventDefault();
  }

  const createNewBuilding = async (data) => {
    await axios
    .post("http://localhost:1337/api/buildings", data)
  }

  const createNewAddress = async (address) => {
    await axios
    .post("http://localhost:1337/api/locations", address)
  }

  const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault();
    let {Building_Name, Num_of_Floors, Description} = document.forms[0];
    const data = {
      'data': {
          "Building_Name": Building_Name.value,
          "Num_of_Floors": Num_of_Floors.value,
          "Description": Description.value
      }
    }
    createNewBuilding(data);
    const address = {
      'data': {
          "Province": provincename,
          "District": districtname,
          "Ward": wardname,
          "Num": 10
      }
    }
    console.log(address)
    createNewAddress(address);
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
              {dropdown("Tỉnh, thành", "province", handleProvice, false, 
              provinces, "code", "name", province, "Chọn tỉnh, thành", "Không có dữ liệu")}
              <div/>
            </div>
            <div className="item-area double-col">
              {dropdown("Quận, huyện", "district", handleDistrict, f2, 
              districts, "code", "name", district, "Chọn quận, huyện", "Vui lòng chọn tỉnh, thành")}
              {dropdown("Phường, xã", "ward", handleWard, f3, 
              wards, "code", "name", ward, "Chọn phường, xã", "Vui lòng chọn quận, huyện")}
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
