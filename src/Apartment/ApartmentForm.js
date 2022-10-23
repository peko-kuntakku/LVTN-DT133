import React,{ useEffect, useState } from 'react';
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import ApartmentList from "./ApartmentList"
import '../style/form.css'
import {input,dropdown} from "../style/JSfunc";
import {loadList, loadItem, addNewItem, updateItem, backend} from '../control';

let apartmentID = 0;

export const setApartmentID = (id) => 
{
  apartmentID = id
}

function Main () {
  const [apartment, loadApartment]= useState();
  const [buildings, loadBuilding]= useState([]);
  const [properties, loadProperties]= useState([]);
  const [maxfloor, setFloor]= useState();
  const [buildingname, setbuildingname]= useState();
  const [f1, setF1]= useState(true);
  const [numFloor, setNumFloor]= useState();
  const [Livingroom, setLivingroom] = useState();
  const [Kitchen, setKitchen] = useState();
  const [Bedroom, setBedroom] = useState();
  const [Restroom, setRestroom] = useState();
  const navigate = useNavigate();

  useEffect( ()=>{
    loadItem('apartments', apartmentID, loadApartment);
  },[apartmentID]);

  const Apartment_Name = (apartment!=null) ? apartment.attributes.Apartment_Name : null
  const Size = (apartment!=null) ? apartment.attributes.Size : null
  const Capacity = (apartment!=null) ? apartment.attributes.Capacity : null
  const Rent_Fee = (apartment!=null) ? apartment.attributes.Rent_Fee : null
  const Description = (apartment!=null) ? apartment.attributes.Description : null

  let room = 
  [
    {name: "Livingroom", text: "Phòng khách", value: Livingroom, setVal: setLivingroom},
    {name: "Kitchen", text: "Phòng bếp", value: Kitchen, setVal: setKitchen},
    {name: "Bedroom", text: "Phòng ngủ", value: Bedroom, setVal: setBedroom},
    {name: "Restroom", text: "Nhà vệ sinh", value: Restroom, setVal: setRestroom}
  ]

  useEffect(()=>{
    if (apartment!=null) room.map(x=>x.setVal(apartment.attributes[x.name]))
    else room.map(x=>x.setVal(0))
  });

  useEffect(() => {loadList('buildings',loadBuilding)
    loadList('properties',loadProperties)} , [])
  
  const handleBuildingName = (event) =>
  {
    setbuildingname(event.target.value);
    setNumFloor("");
    setF1(false);
    event.preventDefault();
  }
  useEffect( ()=>{
    const loadFloors= async ()=>{
      if (buildingname!=null)
      {
        const a= await fetch(`${backend}/buildings/${buildingname}`);
        const b= await a.json();
        setFloor(await b.data);
      }
      else return
    }
    loadFloors();
  },[buildingname]);
  const floors = ((maxfloor!=null) ? Array.from({length: maxfloor.attributes.Num_of_Floors}, (_, i) => i + 1) :null);

  const handleFloor = (event) =>
  {
    setNumFloor(event.target.value);
    event.preventDefault();
  }

  const handleClick = (event) => {
    event.preventDefault();
    let {Apartment_Name, Size, Capacity, Rent_Fee, Description} = document.forms[0];
    const data = {
      'data': {
          "Apartment_Name": Apartment_Name.value,
          "Size": Number(Size.value),
          "Capacity": Number(Capacity.value),
          "Rent_Fee": Rent_Fee.value,
          "building": buildingname,
          "Floor": Number(numFloor),
          "Livingroom": Livingroom,
          "Kitchen": Kitchen,
          "Bedroom": Bedroom,
          "Restroom": Restroom,
          "Description": Description.value,
          "isSingle": true
      }
    }
    if (apartmentID==0) addNewItem("apartments", data)
    else updateItem("apartments", apartmentID, data)
    navigate('/Apartment/ApartmentList');
  }
  const form = (
    <>
      <span className="function-title textxlsemibold">{(apartmentID==0) ? "Thêm căn hộ" : `Chỉnh sửa căn hộ AP ${apartmentID}`}</span>
      <form onSubmit={handleClick} className="main-zone">
        <div className="big-row">
          <div className="col-left">
            <div className="item-area">
              {input(1,"Tên căn hộ","Apartment_Name",true,"Tên",Apartment_Name,null,1,60,"",)}
            </div>
            <div className="item-area double-col">
              {input(0,"Diện tích","Size",true,"Đơn vị: m2",Size, null, 1, 1000, 0.5)}
              {input(0,"Sức chứa","Capacity",true,"Nhập số người",Capacity, null, 1, 20, 1)}
            </div>
            <div className="item-area double-col">
              {input(0,"Tiền thuê","Rent_Fee",true,"Nhập số tiền",Rent_Fee, null, 10000, "", 500)}
              <div/>
            </div>
            <div className="item-area double-col">
              {dropdown(0,"Toà nhà","building_name",true, buildings, "Building_Name",
              buildingname,handleBuildingName,false,"Chọn tòa nhà","Chọn tòa nhà")}
              {dropdown(2,"Tầng","Floor", true, floors, "",
              numFloor,handleFloor,f1,"Chọn số tầng","Vui lòng chọn tòa nhà")}
            </div>
            <div className="item-area">
              <span className="form-subtitle textmdsemibold">Mô tả</span>
              <textarea name="Description" className="text-input" placeholder="Mô tả" defaultValue={Description}></textarea>
            </div>
          </div>
          <div className="col-left">
            <div className="item-area">
              <span className="form-subtitle textmdsemibold">Phòng (nhập số lượng)</span>
              {/* <span className="form-subtitle textmdsemibold" 
              style={{algin: "right", float:"right", right: "40px", position: "relative"}}>
                Tổng: {Livingroom + Kitchen + Bedroom + Restroom}</span> */}
              <div className="double-col">{room.map((x) => input(0,'',x.name,false,x.text,x.value,x.setVal,0,5,1))}</div>
            </div>
            <div className="item-area">
              <span className="form-subtitle textmdsemibold">Nội thất (nhập số lượng)</span>
              <div className="double-col">{properties.map((x) =>input(0,'',x.id,false,x.attributes.Property_Name,null,null,0,10,1))}</div>
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
            <span className="submit-btntxt textsmsemibold">{(apartmentID==0) ? "Thêm căn hộ" : "Cập nhật"}</span>
          </button>
        </div>
      </form>
    </>
  )
  return (
    <>{form}</>
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
