
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import React,{ useEffect, useState } from 'react';
import { setApartmentID2 } from '../Apartment/ApartmentDetail';
import { loadItem, loadLocation } from '../control';
import './BuildingDetail.css'

let buildingID2 = 0;

export const setBuildingID2 = (id) => 
{
  buildingID2 = id
}

const colname = 
[
  {width: "12%", title: "Mã căn hộ"},
  {width: "12%", title: "Tên căn hộ"},
  {width: "12%", title: "Số phòng"},
  {width: "12%", title: "Diện tích"},
  {width: "22%", title: "Trạng thái"},
  {width: "12%", title: "Chi tiết"},
]

const showService = (title) =>
{
  return(<div className="form-subtitle textlgsemibold">{title}</div>)
  
}

export default function BuildingDetail () {
  const navigate = useNavigate();

  const [building, loadBuilding]= useState();

  const [BuildingName, setBuildingName] = useState();
  const [NumFloor,setNumFloor] = useState();
  const [Description,setDescription] = useState();
  const [Province, setProvince] = useState();
  const [District, setDistrict] = useState();
  const [Ward, setWard]= useState();
  const [ProvinceName, setProvinceName]= useState();
  const [DistrictName, setDistrictName]= useState();
  const [WardName, setWardName]= useState();
  const [Num, setNum]= useState();
  const [Street, setStreet]= useState();

  const [services,loadServices] = useState([]);

  const [apartments, loadApartments] = useState([]);


  useEffect(() => {
    loadItem('buildings', buildingID2, loadBuilding,'*');
  }, [buildingID2])

  useEffect(() => {
    loadItem('services','',loadServices)},[buildingID2])

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
      loadApartments(attr.apartments.data)
    }
  },[building]);

  useEffect( ()=>{
    if (District!=null) {
      loadLocation('p',Province,setProvinceName)
      loadLocation('d',District,setDistrictName)
      loadLocation('w',Ward,setWardName)
    }
  },[District]);

  const handleDetail = (id) => {
    setApartmentID2(id)
    navigate('/Apartment/ApartmentDetail');
  };

  return (
    <div>
      <span className="function-title textxlsemibold">Chi tiết toà nhà</span>
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
              <span className="building-name">Toà nhà {BuildingName}</span>
            </div>
            <div className="item-area">
              <div className="big-row">
                <div className="col-third-right">
                  <span className="form-subtitle textlgsemibold">Số tầng:</span>
                </div>
                <div className="col-third-left">
                  <span className="form-subtitle textlgsemibold"> {NumFloor}</span>
                </div>
              </div>
            </div>
            <div className="item-area">
              <div className="big-row">
                <div className="col-third-right">
                  <span className="form-subtitle textlgsemibold">Địa chỉ:</span>
                </div>
                <div className="col-third-left">
                  <span className="form-subtitle textlgsemibold">
                    Số {Num}, Đường {Street}, {WardName}, {DistrictName}, {ProvinceName}, 
                  </span>
                </div>
              </div>
            </div>
            <div className="item-area">
              <div className="big-row">
                <div className="col-third-right">
                  <span className="form-subtitle textlgsemibold">Dịch vụ:</span>
                </div>
                <div className="col-third-left">
                  <div className="item-area double-col">
                  {services.map((x) => showService(x.attributes.ServiceName))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
      <div className="item-area" style={{top: "30px", position:"relative"}}/>
      <div className="main-zone2">
          <div className="form-subtitle textlgsemibold"  >Mô tả</div>
          <span className="form-subtitle textlgsemibold">{Description}
          </span>
      </div>
      <div className="item-area" style={{top: "30px", position:"relative"}}/>
      <div className="main-zone2">
        <div className="item-area" style={{top: "30px", position:"relative"}}>
          <div className="form-subtitle textlgsemibold" >Các căn hộ thuộc toà nhà</div>
          <div className="table-area">
            <table>
              <tr className="rowtitle">
                {colname.map((a)=><th className="textsm" style={{width: a.width}}>{a.title}</th>)}
              </tr>
              {apartments.map(({id, attributes}) => 
              <tr>
                <td className="textsm">{id}</td>
                <td className="textsm">{attributes.ApartmentName}</td>
                <td className="textsm">{attributes.Livingroom + attributes.Bedroom + attributes.Kitchen + attributes.Restroom}</td>
                <td className="textsm">{attributes.Size}m<sup>2</sup></td>
                <td className="textsm"></td>
                <td className="textsm"><span onClick={()=>handleDetail(id)}>Xem chi tiết</span></td>
              </tr>)}
            </table>
          </div>
          <span className="building-detail-screen-text101">Xem toàn bộ</span>
        </div>
 
      </div>
    </div>
  )
}