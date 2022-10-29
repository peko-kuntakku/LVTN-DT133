import React,{ useEffect, useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom'
import '../style/form.css'
import {checkbox,input,dropdown,submitbtn,textarea} from "../style/JSfunc";
import BuildingList from "./BuildingList";
import {loadItem, addNewItem, updateItem} from '../control';
import axios from 'axios';

let buildingID = 0;

export const setBuildingID = (id) => 
{
  buildingID = id
}

function Main (){
  const [building, loadBuilding]= useState();

  const [BuildingName, setBuildingName] = useState();
  const [NumFloor,setNumFloor] = useState();
  const [Description,setDescription] = useState();
  const [Province, setProvince]= useState('');
  const [District, setDistrict]= useState('');
  const [Ward, setWard]= useState('');
  const [Num, setNum]= useState();
  const [Street, setStreet]= useState();
  
  const [services,loadServices] = useState([]);
  const [provinces, loadProvince]= useState([]);
  const [districts, loadDistrict]= useState([]);
  const [locationID, setLocation] = useState();
  const [wards, loadWard]= useState([]);

  const [locations, setLocations]= useState([]);
  const [f2, setF2]= useState(true);
  const [f3, setF3]= useState(true);

  useEffect( ()=>{
    loadItem('buildings', buildingID, loadBuilding,'location');
  },[buildingID]);

  useEffect(() => {
    loadItem('services','',loadServices)},[])

  useEffect( ()=>{
    if (building!=null) {
      const attr=building.attributes
      setBuildingName(attr.BuildingName)
      setNumFloor(attr.Num_of_Floors)
      setDescription(attr.Description)
      setProvince(attr.location.data.attributes.Province)
      setDistrict(attr.location.data.attributes.District)
      setWard(attr.location.data.attributes.Ward)
      setNum(attr.location.data.attributes.Num)
      setStreet(attr.location.data.attributes.Street)
      setLocation(attr.location.data.id)
      setF2(false)
      setF3(false)
    }
  },[building]);

  useEffect( ()=>{
    const foo= async ()=>{
      const a= await (await fetch("https://provinces.open-api.vn/api/p")).json();
      loadProvince(await a);
    }
    foo();
  },[]);

  const handleProvice=(event)=>{
    setDistrict('')
    setWard('')
    setProvince(event.target.value);
    setF2(false);
    setF3(true);
    event.preventDefault();
  }

  useEffect( ()=>{
    const foo= async ()=>{
      if (Province!=null)
      {
        const a= await (await fetch(`https://provinces.open-api.vn/api/p/${Province}?depth=2`)).json();
        loadDistrict(await a.districts);
      }
      else return
    }
    foo();
  },[Province]);
  
  //Lưu tên quận, huyện
  const handleDistrict=(event)=>{
    setDistrict(event.target.value);
    setF3(false);
    setWard('')
    event.preventDefault();
  }

  useEffect( ()=>{
    const foo= async ()=>{
      if (District!=null)
      {
        const a= await (await fetch(`https://provinces.open-api.vn/api/d/${District}?depth=2`)).json();
        loadWard(await a.wards);
      }
    }
    foo();
  },[District])

  //Lưu tên phường, xã
  const handleWard=(event)=>{
    setWard(event.target.value);
    event.preventDefault();
  }

  //Tải danh sách location để lấy location mới thêm gần nhất
  useEffect(()=>{loadItem('locations','',setLocations)})
  const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault();
    const address = {
      "data": {
        "Province": Province,
        "District": District,
        "Ward": Ward,
        "Num": Num,
        "Street": Street
      }
    }
    if (buildingID==0) addNewItem('locations', address)
    else updateItem('locations', locationID, address)
    setTimeout(AddBuilding, 1000)
  }
  const AddBuilding = () => 
  {
    const curLocation = (buildingID==0)? locations.at(-1).id : locationID
    let servicetemp = document.getElementsByName("services")
    let servicelist = Array()
    for (const i of servicetemp)
    {
      if (i.checked) servicelist.push(Number(i.value))
    }
    const building = {
      "data": {
        "BuildingName": BuildingName,
        "Num_of_Floors": NumFloor,
        "Description": Description,
        "services": servicelist,
        "location": curLocation
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
              {input(7,"Tên toà nhà","Building_Name",true,"Nhập tên",BuildingName, setBuildingName, 1, 60)}
            </div>
            <div className="item-area double-col">
              {input(0,"Số tầng","NumFloor",true,"Nhập số tầng",NumFloor, setNumFloor, 1, 70, 1)}<div/>
            </div>
            <div className="item-area">
              <span className="form-subtitle textmdsemibold">Dịch vụ</span>
              <div className="checkbox-area">
                {services.map((x) => checkbox("services",x.id,x.attributes.ServiceName))}
              </div>
            </div>
            <div className="item-area">{textarea (Description, setDescription)}</div>
          </div>
          <div className="col-left">
            <div className="item-area double-col">
              {dropdown(1,"Tỉnh, thành","province",true,provinces,'',
              Province,handleProvice,false,"Chọn tỉnh, thành","Không có dữ liệu")}
              {dropdown(1, "Quận, huyện", "district", true, districts, "",
              District, handleDistrict, f2, "Chọn quận, huyện", "Vui lòng chọn tỉnh, thành")}
            </div>
            <div className="item-area double-col">
              {dropdown(1, "Phường, xã", "ward", true, wards, "", 
              Ward, handleWard, f3, "Chọn phường, xã", "Vui lòng chọn quận, huyện")}
              {input(1,"Số nhà","Num",true,"Nhập số nhà",Num, setNum, 1, 18, 
              "([a-zA-z]{0,2}[0-9]+(([a-zA-z]{0,2}[0-9]{0,2})|(BIS|bis)))(/[0-9]+[a-zA-z]{0,2}){0,7}(/[0-9]+(([a-zA-z]{0,2}[0-9]{0,2})|(BIS|bis)))?")}
            </div>
            <div className="item-area">
              {input(7,"Đường","Street",true,"Tên",Street, setStreet, 1, 35, null)}
            </div>
            <div className="item-area">
              <span className="form-subtitle textmdsemibold">Thêm ảnh</span>
              <input type="file" name="myfile" id="myfile" hidden/>
              <label for="myfile" className="add-file-button">Nhấn để thêm ảnh</label>
            </div>
          </div>
        </div>
        {submitbtn (buildingID, "tòa nhà")}
      </form>
    </div>
  )
  return (
    <>{form}</>
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