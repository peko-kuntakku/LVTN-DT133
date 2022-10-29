import React, { useState } from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
import './style/main.css';
import './style/list.css';
import BuildingList from "./Building/BuildingList";
import ApartmentList from './Apartment/ApartmentList';
import ContractList from './Contract/ContractList';
import CustomerList from './Customer/CustomerList';
import VoucherList from './Voucher/VoucherList';
import EmployeeList from './Employee/EmployeeList';
import CheckAttendanceList from './Attendance/CheckAttendanceList';
import QRCode from './Attendance/QRcode'
import BuildingForm from './Building/BuildingForm';
import ApartmentForm from './Apartment/ApartmentForm';
import VoucherForm from './Voucher/VoucherForm';
import EmployeeForm from "./Employee/EmployeeForm";
import BuildingDetail from './Building/BuildingDetail';
import ApartmentDetail from "./Apartment/ApartmentDetail";

const num = [1,2,3,4,5,6,7,8,9]

const Profile = () => 
{
  return(
    <div className="info-area">
    <img src="/icon/avatar-icon.svg"
      className="avatar"
    />
    <span className="profile-name textmdsemibold">Nguyen Van B</span>
    <span className="profile-role textsmsemibold">Admin</span>
  </div>
  )
}

function Left_logo ()
{
    return (
      <>
        <div className="logo-area">
          <span className="brand displaysmsemibold">Appname</span>
          <img
            src="/icon/main-appname-line.svg"
            className="line12"
          />
        </div>
        <div className="profile1">
          <Profile />
        </div>
      </>
    )
}

function Sub_Nav (props){
  if (props.parentselect==1)
  return (
    <div className="nav-elmt-bg" onClick={props.onClick}>
      <img
        src={`/Nav-Logo/subfunc.svg`}
        className="nav-elmt-img"
        style={{fill: props.select ? "rgba(46, 144, 250, 1)" : ""}}
      />
      <label className="nav-elmt-text" style={{color: props.select ? "rgba(46, 144, 250, 1)" : ""}}>{props.name}</label>
    </div>    
  );
}

function Nav_Elmt (props) {
  const expand = (i,j) =>
  {
    if (i==1)
    {
      if (j==0)
      return(
        <img
        src="/icon/unexpand-icon.svg"
        className="angleleft"
        />
      )
      else return(
        <img
        src="/icon/expand-icon.svg"
        className="angleleft"
        />
      )
    }
  }
  return (
    <div className="nav-elmt-bg" onClick={props.onClick}>
      <img
        src={`/Nav-Logo/${props.name}.svg`}
        className="nav-elmt-img"
        style={{fill: props.select ? "rgba(46, 144, 250, 1)" : ""}}
      />
      <span className="nav-elmt-text" style={{color: props.select ? "rgba(46, 144, 250, 1)" : ""}}>{props.name}</span>
      {expand(props.expand,props.select)}
    </div>
  );
}


function Navigator ()
{
  const navigate = useNavigate();
  const [navigator, setNavigator] = useState(
    {nav: [
      {name: "Thống kê", expand: 0, select: 0, link: ""},
      {name: "Tòa nhà", expand: 0, select: 0, link: "Building/BuildingList"},
      {name: "Căn hộ", expand: 1, select: 0, link: "Apartment/ApartmentList",
        subnav:
        [
          {name: "Một hợp đồng", select: 1, link: "Apartment/ApartmentList"},
          {name: "Nhiều hợp đồng", select: 0, link: "Apartment/ApartmentList"},
        ],
        cur: 0  
      },
      {name: "Hợp đồng", expand: 0, select: 0, link: "Contract/ContractList"},
      {name: "Hóa đơn", expand: 0, select: 0, link: ""},
      {name: "Mã giảm giá", expand: 0, select: 0, link: "Voucher/VoucherList"},
      {name: "Khách hàng", expand: 0, select: 0, link: "Customer/CustomerList"},
      {name: "Nhân viên", expand: 0, select: 0, link: "Employee/EmployeeList"},
      {name: "Yêu cầu", expand: 0, select: 0, link: ""},
      {name: "Điểm danh nhân viên", expand: 1, select: 0, link: "Attendance/QRcode",
        subnav:
        [
          {name: "Điểm danh", select: 1, link: "Attendance/QRcode"},
          {name: "Danh sách điểm danh", select: 0, link: "Attendance/CheckAttendanceList"},
        ],
        cur: 0  
      },
    ],
    cur: 0}
  )
  const handleClick = (i) => {
    const nav = navigator.nav.slice();
    if (i!=navigator.cur){
      nav[i].select = 1;
      nav[navigator.cur].select = 0;
      setNavigator({nav: nav, cur: i});
      navigate(`/${nav[i].link}`);
    }    
  }

  const handleClicksub = (i,j) => {
    const nav = navigator.nav.slice();
    if (j!=nav[i].cur){
      const subnav =  nav[i].subnav.slice();
      subnav[j].select = 1;
      nav[i].link = nav[i].subnav[j].link;
      subnav[nav[i].cur].select = 0;
      nav[i].cur = j;
      setNavigator({nav: nav, cur: i});
      navigate(`/${nav[i].link}`);
    }
  }
  const subnav = (i,j) =>
  {
    return(
      <Sub_Nav
        parentselect={navigator.nav[i].select}
        select={navigator.nav[i].subnav[j].select}
        name={navigator.nav[i].subnav[j].name}
        link={navigator.nav[i].subnav[j].link}
        onClick={() => handleClicksub(i,j)}
      />
    )
  }
  const parnav = (i) =>
  {
    return(
      <Nav_Elmt
        select={navigator.nav[i].select}
        name={navigator.nav[i].name}
        expand={navigator.nav[i].expand}
        link={navigator.nav[i].link}
        onClick={() => handleClick(i)}
      />
    )
  }
  const render_nav = (i) =>
  {
    if (navigator.nav[i].expand==0)
    return parnav(i)
    else return(
      <div>
      {parnav(i)}
      {subnav(i,0)}
      {subnav(i,1)}
      </div>
    )
  }
  return (
    <div>
      {Left_logo()}
      <div className="thongke">{render_nav(0)}</div>      
      <span className="quanly textmdsemibold">Quản lý</span>
      <div className="navigator-list">
        {num.map((a) => render_nav(a) )}
      </div>
    </div>
    )
}

function MainArea ()
{
  return (
  <Routes>
    <Route path="/Apartment/ApartmentList" element={<ApartmentList />}/>
    <Route path="/Building/BuildingList" element={<BuildingList />}/>
    <Route path="/Contract/ContractList" element={<ContractList />}/>
    <Route path="/Customer/CustomerList" element={<CustomerList />}/>
    <Route path="/Employee/EmployeeList" element={<EmployeeList />}/>
    <Route path="/Voucher/VoucherList" element={<VoucherList />}/>
    <Route path="/Attendance/CheckAttendanceList" element={<CheckAttendanceList />}/>
    <Route path="/Apartment/ApartmentForm" element={<ApartmentForm />}/>
    <Route path="/Building/BuildingForm" element={<BuildingForm />}/>
    <Route path="/Building/BuildingDetail" element={<BuildingDetail />}/>
    <Route path="/Employee/EmployeeForm" element={<EmployeeForm />}/>
    <Route path="/Attendance/QRCode" element={<QRCode />}/>
    <Route path="/Voucher/VoucherForm" element={<VoucherForm />}/>
    <Route path="/Apartment/ApartmentDetail" element={<ApartmentDetail />}/>
  </Routes>
  )
}


export default function Main ()
{
  const Header = (    
    <>
      <div className="search-function">
        <input
          type="text"
          placeholder="Tìm kiếm"
          className="searchbar"
        />
        <img src="/icon/search-icon.svg"
          className="search-icon"
        />
      </div>
      <div className="profile">
        <Profile />
      </div>
      <img
      alt="Line13I414"
      src="/icon/notify-profile-line.svg"
      className="line13"
      />
      <img
        alt="NotificationsI414"
        src="/icon/notification-icon.svg"
        className="notifications"
      />
    </>
  )  
  return (
    <body className="container">
      <div className="main-area">
        <MainArea />
      </div>
      <div className="navigator">
        <Navigator />
      </div>
      <div className="header">
        {Header}
      </div>
    </body>
  ) 
}