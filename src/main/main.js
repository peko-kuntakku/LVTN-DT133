import React, { useState } from "react";
import ReactDOM from "react-dom";
import './main.css';

class BdList extends React.Component{
  buildinglst_elmt()
  {
    return(
    <div className="buildinglist-screen-row1">
      <div className="buildinglist-screen-title1"></div>
      <span className="buildinglist-screen-text50 textsmsemibold">
        <span>BU-001</span>
      </span>
      <span className="buildinglist-screen-text52 textsm">
        <span>Toà nhà A</span>
      </span>
      <span className="buildinglist-screen-text54 textsm">5</span>
      <span className="buildinglist-screen-text55 textsm">
        <span>Quận 1, TP. HCM</span>
      </span>
      <span className="buildinglist-screen-text57">
        <span>
          Xem chi tiết
        </span>
      </span>
      <img
        alt="edit4140"
        src="/playground_assets/edit4140-bjnp.svg"
        className="buildinglist-screen-edit"
      />
      <img
        alt="trashalt4140"
        src="/playground_assets/trashalt4140-hly.svg"
        className="buildinglist-screen-trashalt"
      />
      <img
        alt="Line144140"
        src="/playground_assets/line144140-pq.svg"
        className="buildinglist-screen-line141"
      />
    </div>
    )
  }
  render() {
    return (
    <div>
      <span class="buildinglist-screen-text textxlsemibold">
        <span>Toà nhà</span>
      </span>
      <div class="buildinglist-screen-list">
        <div class="buildinglist-screen-head">
          <div class="buildinglist-screen-row">
            <div class="buildinglist-screen-searchbar">
              <span class="buildinglist-screen-text002 textsm">
                <span>Tìm kiếm...</span>
              </span>
              <img
                src="public/playground_assets/searchi413-pd8o.svg"
                alt="searchI413"
                class="buildinglist-screen-search"
              />
            </div>
            <button class="buildinglist-screen-addbutton">
              <span class="buildinglist-screen-text004 textsmsemibold">
                <span>Thêm toà nhà</span>
              </span>
              <img
                src="public/playground_assets/pluscirclei413-e1i.svg"
                alt="pluscircleI413"
                class="buildinglist-screen-pluscircle"
              />
            </button>
          </div>
        </div>
        <div class="buildinglist-screen-list1">
          <div class="buildinglist-screen-rowtitle">
            <img
              src="public/playground_assets/line144138-fo9r.svg"
              alt="Line144138"
              class="buildinglist-screen-line14"
            />
            <div class="buildinglist-screen-title">
              <span class="buildinglist-screen-text006 textsmsemibold">
                <span>Mã toà nhà</span>
              </span>
              <span class="buildinglist-screen-text008 textsmsemibold">
                <span>Tên toà nhà</span>
              </span>
              <span class="buildinglist-screen-text010 textsmsemibold">
                <span>Số tầng</span>
              </span>
              <span class="buildinglist-screen-text012 textsmsemibold">
                <span>Địa chỉ</span>
              </span>
              <span class="buildinglist-screen-text014 textsmsemibold">
                <span>Chi tiết</span>
              </span>
              <span class="buildinglist-screen-text016 textsmsemibold">
                <span>Cập nhật / Xoá</span>
              </span>
            </div>
          </div>
          {this.buildinglst_elmt()}
        </div>
      </div>
    </div>
    )
  }
}

class Left_logo extends React.Component
{
  render() {
    return (
      <div>
          <div className="buildinglist-screen-logo">
            <span className="buildinglist-screen-text06 displaysmsemibold">
              <span>Appname</span>
            </span>
            <img
              alt="Line12I414"
              src="/playground_assets/line12i414-v2in.svg"
              className="buildinglist-screen-line12"
            />
          </div>
          <div className="buildinglist-screen-profile1">
            <div className="buildinglist-screen-info1">
              <img
                alt="AvatarI414"
                src="/playground_assets/avatari414-twdi.svg"
                className="buildinglist-screen-avatar1"
              />
              <span className="buildinglist-screen-text08 textmdsemibold">
                <span>Nguyen Van B</span>
              </span>
              <span className="buildinglist-screen-text10 textsmsemibold">
                <span>Admin</span>
              </span>
            </div>
          </div>
      </div>
    )
  }
}
class Navigator extends React.Component
{
  cur_func(){
    
  }
  expand(j){
    if (j==1)
    return(
      <img
      src="/playground_assets/anglelefti414-d6w7.svg"
      className="angleleft"
      />
    )
  }
  nav_elmt(i,flag,select)
  {
    return (
      <div className="nav-elmt-bg">
        <span className="nav-elmt-text" style={{color: select ? "rgba(46, 144, 250, 1)" : ""}}>{i}</span>
        <img
          src={`/Nav-Logo/${i}.svg`}
          className="nav-elmt-img"
          style={{fill: select ? "rgba(46, 144, 250, 1)" : ""}}
        />
        {this.expand(flag)}
      </div>        
    )
  }
  render() {
    return (
    <div>
      <Left_logo />
      <div className="thongke">
        {this.nav_elmt("Thống kê",0)}
      </div>      
      <div>
        <span className="buildinglist-screen-text14 textmdsemibold">
          <span>Quản lý</span>
        </span>
      </div>
      <div className="navigator-list">
      {this.nav_elmt("Tòa nhà",0,1)}
      {this.nav_elmt("Căn hộ",1,1)}
      {this.nav_elmt("Hợp đồng",0,0)}
      {this.nav_elmt("Hóa đơn",0,0)}
      {this.nav_elmt("Mã giảm giá",0,0)}
      {this.nav_elmt("Nhân viên",0,0)}
      {this.nav_elmt("Yêu cầu",0,0)}
      {this.nav_elmt("Điểm danh nhân viên",1,0)}
      </div>
    </div>
    )
  }
}

class Header extends React.Component
{
  render() {
    return (
    <div>
    <div>
      <input
        type="text"
        placeholder="Tìm kiếm"
        className="buildinglist-screen-searchbar"
      />
      <img
        alt="searchI414"
        src="/playground_assets/searchi414-u9ub.svg"
        className="buildinglist-screen-search"
      />
    </div>
    <div className="buildinglist-screen-profile">
      <div className="buildinglist-screen-info">
        <img
          alt="AvatarI414"
          src="/playground_assets/avatari414-gulf.svg"
          className="buildinglist-screen-avatar"
        />
        <span className="buildinglist-screen-text02 textmdsemibold">
          <span>Nguyen Van B</span>
        </span>
        <span className="buildinglist-screen-text04 textsmsemibold">
          <span>Admin</span>
        </span>
      </div>
      <img
        alt="Line13I414"
        src="/playground_assets/line13i414-hri4.svg"
        className="buildinglist-screen-line13"
      />
    </div>
    <img
      alt="NotificationsI414"
      src="/playground_assets/notificationsi414-56.svg"
      className="buildinglist-screen-notifications"
    />
    </div>
    )
  }
}
const Main = (props) =>  {
    return (
      <div className="buildinglist-screen-container">
        <div className="buildinglist-screen-buildinglist-screen">
          <div className="buildinglist-screen-header">
            <Header />
          </div>
          <div className="buildinglist-screen-navigator">
            <Navigator />
          </div>
          <div className="buildinglist-screen-main">
            <BdList />
          </div>
        </div>
      </div>
    )
}

export default Main
