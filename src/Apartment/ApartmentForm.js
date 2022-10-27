import React,{ useEffect, useState } from 'react';
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import ApartmentList from "./ApartmentList"
import '../style/form.css'
import {input,dropdown,textarea,submitbtn} from "../style/JSfunc";
import {loadItem, addNewItem, updateItem} from '../control';

let apartmentID = 0;

export const setApartmentID = (id) => 
{
  apartmentID = id
}

function Main () {
  const navigate = useNavigate();
  const [apartment, loadApartment] = useState();

  const [ApartmentName,setApartmentName]= useState();
  const [Size,setSize]= useState();
  const [Capacity,setCapacity]= useState();
  const [RentFee,setRentFee]= useState();
  const [Description,setDescription]= useState();
  const [Livingroom, setLivingroom] = useState();
  const [Kitchen, setKitchen] = useState();
  const [Bedroom, setBedroom] = useState();
  const [Restroom, setRestroom] = useState();
  const [Property1, setProperty1] = useState();
  const [Property2, setProperty2] = useState();
  const [Property3, setProperty3] = useState();
  const [building, setBuilding]= useState();
  const [Floor, setFloor]= useState();

  const [buildings, loadBuilding]= useState([]);
  const [properties, loadProperties]= useState([]);
  const [buildingProp, loadBuildingProp] = useState();

  const [f1, setF1]= useState(true);

  useEffect( ()=>{
    loadItem('apartments', apartmentID, loadApartment,'building');
  },[apartmentID]);


  let room = 
  [
    {name: "Livingroom", text: "Phòng khách", value: Livingroom, setVal: setLivingroom},
    {name: "Kitchen", text: "Phòng bếp", value: Kitchen, setVal: setKitchen},
    {name: "Bedroom", text: "Phòng ngủ", value: Bedroom, setVal: setBedroom},
    {name: "Restroom", text: "Nhà vệ sinh", value: Restroom, setVal: setRestroom}
  ]

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
      setF1(false)
      room.map(x=>x.setVal(attr[x.name]))
    }
  },[apartment]);

  useEffect(() => {loadItem('buildings','',loadBuilding)
    loadItem('properties','',loadProperties)} , [])
  
  const handleBuildingName = (event) =>
  {
    setBuilding(event.target.value);
    setFloor("");
    setF1(false);
    event.preventDefault();
  }

  //Tạo danh sách số tầng từ tòa nhà đã chọn
  useEffect( ()=>{
    loadItem('buildings',building,loadBuildingProp)
  },[building]);
  const floors = ((buildingProp!=null) ? Array.from({length: buildingProp.attributes.Num_of_Floors}, (_, i) => i + 1) :null);

  const handleFloor = (event) =>
  {
    setFloor(event.target.value);
    event.preventDefault();
  }

  const Total = (arr) =>
  {
    let total=0
    const newArr = arr.map(({value})=>value)
    for (const i of newArr)
    {
      if (i!=null) total=total+i
    }
    return total
  }

  const handleClick = (event) => {
    event.preventDefault();
    const data = {
      'data': {
          "ApartmentName": ApartmentName,
          "Size": Size,
          "Capacity": Capacity,
          "RentFee": RentFee,
          "building": building,
          "Floor": Floor,
          "Livingroom": Livingroom,
          "Kitchen": Kitchen,
          "Bedroom": Bedroom,
          "Restroom": Restroom,
          "Description": Description,
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
              {input(1,"Tên căn hộ","ApartmentName",true,"Tên",ApartmentName,setApartmentName,1,60,null)}
            </div>
            <div className="item-area double-col">
              {input(0,"Diện tích","Size",true,"Đơn vị: m2",Size, setSize, 1, 1000, 0.5)}
              {input(0,"Sức chứa","Capacity",true,"Nhập số người",Capacity, setCapacity, 1, 20, 1)}
            </div>
            <div className="item-area double-col">
              {input(0,"Tiền thuê","RentFee",true,"Nhập số tiền",RentFee, setRentFee, 10000, "", 500)}
              <div/>
            </div>
            <div className="item-area double-col">
              {dropdown(0,"Toà nhà","building",true, buildings, "BuildingName",
              building,handleBuildingName,false,"Chọn tòa nhà","Chọn tòa nhà")}
              {dropdown(2,"Tầng","Floor", true, floors, "",
              Floor,handleFloor,f1,"Chọn số tầng","Vui lòng chọn tòa nhà")}
            </div>
            <div className="item-area">{textarea (Description, setDescription)}</div>
          </div>
          <div className="col-left">
            <div className="item-area">
              <span className="form-subtitle textmdsemibold">Phòng (nhập số lượng)</span>
              <span className="form-subtitle textmdsemibold" 
                style={{algin: "right", float:"right", right: "40px", position: "relative"}}>
                Tổng: {Total(room)}
              </span>
              <div className="double-col">
                {room.map((x) => input(0,'',x.name,false,x.text,x.value,x.setVal,0,5,1))}
              </div>
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
        {submitbtn (apartmentID, "căn hộ")}
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
