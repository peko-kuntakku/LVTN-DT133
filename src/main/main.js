import React, { useState } from "react";
import ReactDOM from "react-dom";
import './main.css';

const nav_lst=
[
  {name: "Thống kê", expand: 0, select: 0},
  {name: "Tòa nhà", expand: 0, select: 0},
  {name: "Căn hộ", expand: 1, select: 0},
  {name: "Hợp đồng", expand: 0, select: 0},
  {name: "Hóa đơn", expand: 0, select: 0},
  {name: "Mã giảm giá", expand: 0, select: 0},
  {name: "Khách hàng", expand: 0, select: 0},
  {name: "Nhân viên", expand: 0, select: 0},
  {name: "Yêu cầu", expand: 0, select: 0},
]

const col_width=
[
  [192, 408, 578, 781, 967],
  [151, 301, 443, 588, 781, 967],
  [172, 328, 555, 810, 990],
  [],
  [159, 353, 565, 674, 802, 969],
  [159, 316, 426, 613, 753, 953],  
  [159, 316, 406, 638, 802, 969], 
]
class EmployeeList extends React.Component{
  buildinglst_elmt()
  {
    return(
    <div className="row">
      <div className="row-text-area">
      <span className="row-text textsmsemibold">CUS_001</span>
      <span className="row-text textsm" style={{left: col_width[6][0]}}>Nguyễn Văn </span>
      <span className="row-text textsm" style={{left: col_width[6][1]}}>A</span>
      <span className="row-text textsm" style={{left: col_width[6][2]}}>nguyena@gmail.com</span>
      <span className="row-text textsm" style={{left: col_width[6][3]}}>Sửa chữa</span>
      <span className="row-text textsm" style={{left: col_width[6][4]}}>Xem chi tiết</span>
      <img
          alt="edit4140"
          src="/icon/edit-icon.svg"
          className="buildinglist-screen-edit"
        />
        <img
          alt="trashalt4140"
          src="/icon/delete-icon.svg"
          className="buildinglist-screen-trashalt"
        />
      </div>
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
        <span>Nhân viên</span>
      </span>
      <div class="buildinglist-screen-list">
        <div class="buildinglist-screen-head">
          <div class="buildinglist-screen-row">
              <input
                type="text"
                placeholder="Tìm kiếm"
                className="buildinglist-screen-searchbar"
              />
              <img
                alt="searchI414"
                src="/icon/search-icon.svg"
                className="buildinglist-screen-search"
              />
            <button class="buildinglist-screen-addbutton">
              <span class="buildinglist-screen-text37 textsmsemibold">
                <span>Thêm toà nhà</span>
              </span>
              <img
                src=".//icon/add-icon.svg"
                alt="pluscircleI413"
                class="buildinglist-screen-pluscircle"
              />
            </button>
          </div>
        </div>
        <div class="buildinglist-screen-list1">
          <div class="rowtitle">
            <img
              src="/playground_assets/line144138-fo9r.svg"
              alt="Line144138"
              class="buildinglist-screen-line14"
            />
            <div class="rowtitle-txt-area">
              <span class="rowtitle-text" >Mã nhân viên</span>
              <span class="rowtitle-text textsm" style={{left: col_width[6][0]}}>Họ lót</span>
              <span class="rowtitle-text textsm" style={{left: col_width[6][1]}}>Tên</span>
              <span class="rowtitle-text textsm" style={{left: col_width[6][2]}}>Email</span>
              <span class="rowtitle-text textsm" style={{left: col_width[6][3]}}>Công việc</span>
              <span class="rowtitle-text textsm" style={{left: col_width[6][4]}}>Chi tiết</span>
              <span class="rowtitle-text textsm" style={{left: col_width[6][5]}}>Cập nhật/Xóa</span>
            </div>
          </div>
          <div>
          {this.buildinglst_elmt()}
          {this.buildinglst_elmt()}
          {this.buildinglst_elmt()}
          {this.buildinglst_elmt()}
          </div>
        </div>
      </div>
    </div>
    )
  }
}

class CustomerList extends React.Component{
  buildinglst_elmt()
  {
    return(
    <div className="row">
      <div className="row-text-area">
      <span className="row-text textsmsemibold">CUS_001</span>
      <span className="row-text textsm" style={{left: col_width[5][0]}}>Nguyễn Văn </span>
      <span className="row-text textsm" style={{left: col_width[5][1]}}>A</span>
      <span className="row-text textsm" style={{left: col_width[5][2]}}>nguyena@gmail.com</span>
      <span className="row-text textsm" style={{left: col_width[5][3]}}>1989</span>
      <span className="row-text textsm" style={{left: col_width[5][4]}}>Đã có hợp đồng</span>
      <span className="row-text textsm" style={{left: col_width[5][5]}}>Chi tiết </span>
      </div>
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
        <span>Khách hàng</span>
      </span>
      <div class="buildinglist-screen-list">
        <div class="buildinglist-screen-head">
          <div class="buildinglist-screen-row">
              <input
                type="text"
                placeholder="Tìm kiếm"
                className="buildinglist-screen-searchbar"
              />
              <img
                alt="searchI414"
                src="/icon/search-icon.svg"
                className="buildinglist-screen-search"
              />
            <button class="buildinglist-screen-addbutton">
              <span class="buildinglist-screen-text37 textsmsemibold">
                <span>Thêm toà nhà</span>
              </span>
              <img
                src=".//icon/add-icon.svg"
                alt="pluscircleI413"
                class="buildinglist-screen-pluscircle"
              />
            </button>
          </div>
        </div>
        <div class="buildinglist-screen-list1">
          <div class="rowtitle">
            <img
              src="/playground_assets/line144138-fo9r.svg"
              alt="Line144138"
              class="buildinglist-screen-line14"
            />
            <div class="rowtitle-txt-area">
              <span class="rowtitle-text" >Mã khách hàng</span>
              <span class="rowtitle-text textsm" style={{left: col_width[5][0]}}>Họ lót</span>
              <span class="rowtitle-text textsm" style={{left: col_width[5][1]}}>Tên</span>
              <span class="rowtitle-text textsm" style={{left: col_width[5][2]}}>Email</span>
              <span class="rowtitle-text textsm" style={{left: col_width[5][3]}}>Năm sinh</span>
              <span class="rowtitle-text textsm" style={{left: col_width[5][4]}}>Trạng thái</span>
              <span class="rowtitle-text textsm" style={{left: col_width[5][5]}}>Chi tiết </span>
            </div>
          </div>
          <div>
          {this.buildinglst_elmt()}
          {this.buildinglst_elmt()}
          {this.buildinglst_elmt()}
          {this.buildinglst_elmt()}
          </div>
        </div>
      </div>
    </div>
    )
  }
}

class VouList extends React.Component{
  buildinglst_elmt()
  {
    return(
    <div className="row">
      <div className="row-text-area">
      <span className="row-text textsmsemibold">MGG502704P</span>
      <span className="row-text textsm" style={{left: col_width[4][0]}}>21  thg 4, 2022 00:00</span>
      <span className="row-text textsm" style={{left: col_width[4][1]}}>27  thg 4, 2022 00:00</span>
      <span className="row-text textsm" style={{left: col_width[4][2]}}>50</span>
      <span className="row-text textsm" style={{left: col_width[4][3]}}>50</span>
      <span className="row-text textsm" style={{left: col_width[4][4]}}>Xem chi tiết</span>
      <img
        alt="edit4140"
        src="/icon/edit-icon.svg"
        className="buildinglist-screen-edit"
      />
      <img
        alt="trashalt4140"
        src="/icon/delete-icon.svg"
        className="buildinglist-screen-trashalt"
      />
      </div>
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
        <span>Mã giảm giá</span>
      </span>
      <div class="buildinglist-screen-list">
        <div class="buildinglist-screen-head">
          <div class="buildinglist-screen-row">
              <input
                type="text"
                placeholder="Tìm kiếm"
                className="buildinglist-screen-searchbar"
              />
              <img
                alt="searchI414"
                src="/icon/search-icon.svg"
                className="buildinglist-screen-search"
              />
            <button class="buildinglist-screen-addbutton">
              <span class="buildinglist-screen-text37 textsmsemibold">
                <span>Thêm mã</span>
              </span>
              <img
                src=".//icon/add-icon.svg"
                alt="pluscircleI413"
                class="buildinglist-screen-pluscircle"
              />
            </button>
          </div>
        </div>
        <div class="buildinglist-screen-list1">
          <div class="rowtitle">
            <img
              src="/playground_assets/line144138-fo9r.svg"
              alt="Line144138"
              class="buildinglist-screen-line14"
            />
            <div class="rowtitle-txt-area">
              <span class="rowtitle-text" >Tên mã</span>
              <span class="rowtitle-text textsm" style={{left: col_width[4][0]}}>Bắt đầu</span>
              <span class="rowtitle-text textsm" style={{left: col_width[4][1]}}>Kết thúc</span>
              <span class="rowtitle-text textsm" style={{left: col_width[4][2]}}>Tổng</span>
              <span class="rowtitle-text textsm" style={{left: col_width[4][3]}}>Còn lại</span>
              <span class="rowtitle-text textsm" style={{left: col_width[4][4]}}>Chi tiết</span>
              <span class="rowtitle-text textsm" style={{left: col_width[4][5]}}>Cập nhật / Xoá</span>
            </div>
          </div>
          <div>
          {this.buildinglst_elmt()}
          {this.buildinglst_elmt()}
          {this.buildinglst_elmt()}
          {this.buildinglst_elmt()}
          </div>
        </div>
      </div>
    </div>
    )
  }
}

class ContractList extends React.Component{
  buildinglst_elmt()
  {
    return(
    <div className="row">
      <div className="row-text-area">
        <span class="row-text">CO_A112</span>
        <span class="row-text" style={{left: col_width[2][0]}}>Toà nhà A</span>
        <span class="row-text" style={{left: col_width[2][1]}}>nguyena@gmail.</span>
        <span class="row-text" style={{left: col_width[2][2]}}>21  thg 4, 2022 00:00</span>
        <span class="row-text" style={{left: col_width[2][3]}}>Chờ xác nhận</span>
        <span class="row-text" style={{left: col_width[2][4]}}>Xem Chi tiết</span>
      </div>
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
        <span>Hợp đồng</span>
      </span>
      <div class="buildinglist-screen-list">
        <div class="buildinglist-screen-head">
          <div class="buildinglist-screen-row">
              <input
                type="text"
                placeholder="Tìm kiếm"
                className="buildinglist-screen-searchbar"
              />
              <img
                alt="searchI414"
                src="/icon/search-icon.svg"
                className="buildinglist-screen-search"
              />
            <button class="buildinglist-screen-addbutton">
              <span class="buildinglist-screen-text37 textsmsemibold">
                <span>Thêm toà nhà</span>
              </span>
              <img
                src=".//icon/add-icon.svg"
                alt="pluscircleI413"
                class="buildinglist-screen-pluscircle"
              />
            </button>
          </div>
        </div>
        <div class="buildinglist-screen-list1">
          <div class="rowtitle">
            <img
              src="/playground_assets/line144138-fo9r.svg"
              alt="Line144138"
              class="buildinglist-screen-line14"
            />
            <div class="rowtitle-txt-area">
              <span class="rowtitle-text">Mã hợp đồng</span>
              <span class="rowtitle-text" style={{left: col_width[2][0]}}>Căn hộ</span>
              <span class="rowtitle-text" style={{left: col_width[2][1]}}>Người tạo</span>
              <span class="rowtitle-text" style={{left: col_width[2][2]}}>Thời gian tạo</span>
              <span class="rowtitle-text" style={{left: col_width[2][3]}}>Trạng thái</span>
              <span class="rowtitle-text" style={{left: col_width[2][4]}}>Chi tiết</span>
            </div>
          </div>
          <div>
          {this.buildinglst_elmt()}
          {this.buildinglst_elmt()}
          {this.buildinglst_elmt()}
          {this.buildinglst_elmt()}
          </div>
        </div>
      </div>
    </div>
    )
  }
}

class ApList extends React.Component{
  buildinglst_elmt()
  {
    return(
    <div className="row">
      <div className="row-text-area">
      <span className="row-text textsmsemibold">AP-001</span>
      <span className="row-text textsm" style={{left: col_width[1][0]}}>A.112</span>
      <span className="row-text textsm" style={{left: col_width[1][1]}}>3</span>
      <span className="row-text textsm" style={{left: col_width[1][2]}}>98m2</span>
      <span className="row-text textsm" style={{left: col_width[1][3]}}>Quận 1</span>
      <span className="row-text textsm" style={{left: col_width[1][4]}}>Xem chi tiết</span>
      <img
        alt="edit4140"
        src="/icon/edit-icon.svg"
        className="buildinglist-screen-edit"
      />
      <img
        alt="trashalt4140"
        src="/icon/delete-icon.svg"
        className="buildinglist-screen-trashalt"
      />
      </div>
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
        <span>Căn hộ</span>
      </span>
      <div class="buildinglist-screen-list">
        <div class="buildinglist-screen-head">
          <div class="buildinglist-screen-row">
              <input
                type="text"
                placeholder="Tìm kiếm"
                className="buildinglist-screen-searchbar"
              />
              <img
                alt="searchI414"
                src="/icon/search-icon.svg"
                className="buildinglist-screen-search"
              />
            <button class="buildinglist-screen-addbutton">
              <span class="buildinglist-screen-text37 textsmsemibold">
                <span>Thêm căn hộ</span>
              </span>
              <img
                src=".//icon/add-icon.svg"
                alt="pluscircleI413"
                class="buildinglist-screen-pluscircle"
              />
            </button>
          </div>
        </div>
        <div class="buildinglist-screen-list1">
          <div class="rowtitle">
            <img
              src="/playground_assets/line144138-fo9r.svg"
              alt="Line144138"
              class="buildinglist-screen-line14"
            />
            <div class="rowtitle-txt-area">
              <span class="rowtitle-text" >Mã căn hộ</span>
              <span class="rowtitle-text textsm" style={{left: col_width[1][0]}}>Tên căn hộ</span>
              <span class="rowtitle-text textsm" style={{left: col_width[1][1]}}>Số phòng</span>
              <span class="rowtitle-text textsm" style={{left: col_width[1][2]}}>Diện tích</span>
              <span class="rowtitle-text textsm" style={{left: col_width[1][3]}}>Địa chỉ</span>
              <span class="rowtitle-text textsm" style={{left: col_width[1][4]}}>Chi tiết</span>
              <span class="rowtitle-text textsm" style={{left: col_width[1][5]}}>Cập nhật / Xoá</span>
            </div>
          </div>
          <div>
          {this.buildinglst_elmt()}
          {this.buildinglst_elmt()}
          {this.buildinglst_elmt()}
          {this.buildinglst_elmt()}
          </div>
        </div>
      </div>
    </div>
    )
  }
}

class BdList extends React.Component{
  buildinglst_elmt()
  {
    return(
    <div className="row">
      <div className="row-text-area">
        <span className="row-text textsmsemibold">BU-001</span>
        <span className="row-text" style={{left: 192}}>Toà nhà A</span>
        <span className="row-text" style={{left: 408}}>5</span>
        <span className="row-text" style={{left: 578}}>Quận 1, TP. HCM</span>
        <span className="row-text" style={{left: 781, color: "rgba(46, 144, 250, 1)"}}>Xem chi tiết</span>
        <img
          alt="edit4140"
          src="/icon/edit-icon.svg"
          className="buildinglist-screen-edit"
        />
        <img
          alt="trashalt4140"
          src="/icon/delete-icon.svg"
          className="buildinglist-screen-trashalt"
        />
      </div>
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
              <input
                type="text"
                placeholder="Tìm kiếm"
                className="buildinglist-screen-searchbar"
              />
              <img
                alt="searchI414"
                src="/icon/search-icon.svg"
                className="buildinglist-screen-search"
              />
            <button class="buildinglist-screen-addbutton">
              <span class="buildinglist-screen-text37 textsmsemibold">
                <span>Thêm toà nhà</span>
              </span>
              <img
                src=".//icon/add-icon.svg"
                class="buildinglist-screen-pluscircle"
              />
            </button>
          </div>
        </div>
        <div class="buildinglist-screen-list1">
          <div class="rowtitle">
            <img
              src="/playground_assets/line144138-fo9r.svg"
              alt="Line144138"
              class="buildinglist-screen-line14"
            />
            <div class="rowtitle-txt-area">
              <span class="rowtitle-text">Mã toà nhà</span>
              <span class="rowtitle-text" style={{left: 192}}>Tên toà nhà</span>
              <span class="rowtitle-text" style={{left: 408}}>Số tầng</span>
              <span class="rowtitle-text" style={{left: 578}}>Địa chỉ</span>
              <span class="rowtitle-text" style={{left: 781}}>Chi tiết</span>
              <span class="rowtitle-text" style={{left: 967}}>Cập nhật / Xoá</span>
            </div>
          </div>
          <div>
          {this.buildinglst_elmt()}
          {this.buildinglst_elmt()}
          {this.buildinglst_elmt()}
          {this.buildinglst_elmt()}
          </div>
        </div>
      </div>
    </div>
    )
  }
}

function Left_logo()
{
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

class Nav_Elmt extends React.Component{
  expand(j){
    if (j==1)
    return(
      <img
      src="/playground_assets/anglelefti414-d6w7.svg"
      className="angleleft"
      />
    )
  }

  render (){
  return (
    <div className="nav-elmt-bg" onClick={this.props.onClick}>
      <span className="nav-elmt-text" style={{color: this.props.select ? "rgba(46, 144, 250, 1)" : ""}}>{this.props.name}</span>
      <img
        src={`/Nav-Logo/${this.props.name}.svg`}
        className="nav-elmt-img"
        style={{fill: this.props.select ? "rgba(46, 144, 250, 1)" : ""}}
      />
      {this.expand(this.props.expand)}
    </div>
  );
  }
}

class Navigator extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
        nav: nav_lst,
        pre: 0
    };
  }

  handleClick(i) {
    const nav = this.state.nav.slice();
    nav[i].select = 1;
    nav[this.state.pre].select = 0;  
    this.setState({nav: nav, pre: i});
  }
  render_main()
  {
    if (this.state.pre==1) return(<BdList />)
    else if (this.state.pre==2) return(<ApList />)
    else if (this.state.pre==3) return(<ContractList />)
    else if (this.state.pre==5) return(<VouList />)
    else if (this.state.pre==6) return(<CustomerList />)
    else if (this.state.pre==7) return(<EmployeeList />)
  }
  render_nav(i)
  {
    return(
      <Nav_Elmt
        select={this.state.nav[i].select}
        name={this.state.nav[i].name}
        expand={this.state.nav[i].expand}
        onClick={() => this.handleClick(i)}
      />
    )
  }
  render()
  {
    return (
    <div>
    <div className="buildinglist-screen-navigator">
      <Left_logo />
      <div className="thongke">
        {this.render_nav(0)}
      </div>      
      <div>
        <span className="buildinglist-screen-text14 textmdsemibold">
          <span>Quản lý</span>
        </span>
      </div>
      <div className="navigator-list">
      {this.render_nav(1)}
      {this.render_nav(2)}
      {this.render_nav(3)}
      {this.render_nav(4)}
      {this.render_nav(5)}
      {this.render_nav(6)}
      {this.render_nav(7)}
      {this.render_nav(8)}
      </div>
    </div>
      <div className="buildinglist-screen-main">
      {this.render_main()}
      </div>
    </div>
    )
  }
}

function Header ()
{
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
        src="/icon/search-icon.svg"
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
const Main = (props) => {
    return (
      <div className="buildinglist-screen-container">
        <div className="buildinglist-screen-buildinglist-screen">
          <div className="buildinglist-screen-header">
            <Header />
          </div>
          <div>
            <Navigator />
          </div>
        </div>
      </div>
    ) 
}

export default Main
