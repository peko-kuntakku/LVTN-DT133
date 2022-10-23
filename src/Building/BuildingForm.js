import React,{ useEffect, useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom'
import '../style/form.css'
import {checkbox,input,dropdown} from "../style/JSfunc";
import BuildingList from "./BuildingList";
import {loadList, loadItem, addNewItem, updateItem, backend} from '../control';

let budget = [
  {value: "electric", text: "Điện"},
  {value: "wifi", text: "wifi"},
  {value: "water", text: "Nước"},
  {value: "park", text: "Giữ xe"}
]

let buildingID = 0;

export const setBuildingID = (id) => 
{
  buildingID = id
}

function Main (){
  const [building, loadBuilding]= useState();
  const [provinces, loadProvince]= useState([]);
  const [province, setProvince]= useState("");
  const [provincename, setProvinceName]= useState("");
  const [districts, loadDistrict]= useState([]);
  const [district, setDistrict]= useState("");
  const [districtname, setDistrictName]= useState("");
  const [wards, loadWard]= useState([]);
  const [ward, setWard]= useState("");
  const [wardname, setWardName]= useState("");
  const [locations, setLocations]= useState([]);
  const [f2, setF2]= useState(true);
  const [f3, setF3]= useState(true);

  useEffect( ()=>{
    loadItem('buildings', buildingID, loadBuilding);
  },[buildingID]);

  const Building_Name = (building!=null) ? building.attributes.Building_Name : null
  const NumFloor = (building!=null) ? building.attributes.Num_of_Floors : null
  const Description = (building!=null) ? building.attributes.Description : null

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
      if (province!=null)
      {
        const a= await fetch(`https://provinces.open-api.vn/api/p/${province}?depth=2`);
        const b= await a.json();
        loadDistrict(await b.districts);
      }
      else return
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
  useEffect(() => loadList('locations',setLocations) , [])
  const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault();
    const address = {
      "data": {
          "Province": provincename,
          "District": districtname,
          "Ward": wardname,
          "Num": 10
      }
    }
    if (buildingID==0) addNewItem('locations', address);
    let {Building_Name, NumFloor, Description} = document.forms[0];
    const building = {
      "data": {
        "Building_Name": Building_Name.value,
        "Num_of_Floors": NumFloor.value,
        "Description": Description.value,
        "location": locations.at(-1).id
      }
    }
    if (buildingID==0) addNewItem('buildings', building)
    else updateItem("buildings", buildingID, building)
    navigate('/Building/BuildingList');
  }
  const form = (
    <div>
      <span className="function-title textxlsemibold">{(buildingID==0) ? "Thêm toà nhà" : `Chỉnh sửa tòa nhà BD ${buildingID}`}</span>
      <form onSubmit={handleClick} className="main-zone">
        <div className="big-row">
          <div className="col-left">
            <div className="item-area">
              {input(1,"Tên toà nhà","Building_Name",true,"Nhập tên",Building_Name, null, 1, 60, "",)}
            </div>
            <div className="item-area double-col">
              {input(0,"Số tầng","NumFloor",true,"Nhập số tầng",NumFloor, null, 1, 70, 1)}<div/>
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
              {dropdown(1,"Tỉnh, thành","province",true,provinces,'',
              province,handleProvice,false,"Chọn tỉnh, thành","Không có dữ liệu")}
              <div/>
            </div>
            <div className="item-area double-col">
              {dropdown(1, "Quận, huyện", "district", true, districts, "",
              district, handleDistrict, f2, "Chọn quận, huyện", "Vui lòng chọn tỉnh, thành")}
              {dropdown(1, "Phường, xã", "ward", true, wards, "", 
              ward, handleWard, f3, "Chọn phường, xã", "Vui lòng chọn quận, huyện")}
            </div>
            <div className="item-area">
              {input(1,"Số, đường","num_street",true,"Tên",null, null, 1, 70, 1)}
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
