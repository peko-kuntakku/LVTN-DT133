import { func } from "prop-types";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import '../style/main.css';
import '../style/list.css';
import './attendance-report.css'
import {table} from "../style/JSfunc";

const colname = 
[
  {width: "10%", title: "Mã nhân viên"},
  {width: "18%", title: "Họ lót"},
  {width: "10%", title: "Tên"},
  {width: "20%", title: "Email"},
  {width: "16%", title: "Công việc"},
  {width: "12%", title: "Chi tiết"},
  {width: "14%", title: "Trạng thái"}
]
const tbcontent = [
[
  "CUS_001",
  "Nguyễn Văn",
  "A",
  "nguyena@gmail.com<",
  "Sửa chữa",
  <Link to='/BuildingDetail'>Xem chi tiết</Link>,
  "Có mặt"
],
[
  "CUS_001",
  "Nguyễn Văn",
  "A",
  "nguyena@gmail.com<",
  "Sửa chữa",
  <Link to='/BuildingDetail'>Xem chi tiết</Link>,
  "Có mặt"
]]

export default function CheckAttendanceList (){
    return (
      <div>
        <span class="function-title textxlsemibold">Điểm danh nhân viên</span>       
        <div class="main-zone">
          <div class="main-head">
            <div class="main-head-center">
              <div className="attendance-report-revenue">
                <div className="attendance-report-logo">
                  <span className="attendance-report-text006 textmdsemibold">Vắng</span>
                </div>
                <span className="attendance-report-text008 displaysmsemibold">10</span>
                <div className="attendance-report-logo1">
                  <img
                    src="/playground_assets/ellipse44233-k8lr-200h.png"
                    alt="Ellipse44233"
                    className="attendance-report-ellipse4"
                  />
                  <img
                    src="/playground_assets/userfriends4233-zvmi.svg"
                    alt="userfriends4233"
                    className="attendance-report-userfriends"
                  />
                </div>
                <span className="attendance-report-text010 textsm">nhân viên</span>
              </div>
              <div className="attendance-report-revenue1">
                <div className="attendance-report-logo2">
                  <span className="attendance-report-text012 textmdsemibold">Nghỉ phép</span>
                </div>
                <span className="attendance-report-text014 displaysmsemibold">3</span>
                <div className="attendance-report-logo3">
                  <img
                    src="/playground_assets/ellipse44234-79p-200h.png"
                    alt="Ellipse44234"
                    className="attendance-report-ellipse41"
                  />
                  <img
                    src="/playground_assets/userfriends4234-urtj.svg"
                    alt="userfriends4234"
                    className="attendance-report-userfriends1"
                  />
                </div>
                <span className="attendance-report-text015 textsm">nhân viên</span>
              </div>
              <div className="attendance-report-revenue2">
                <div className="attendance-report-logo4">
                  <span className="attendance-report-text017 textmdsemibold">Có mặt</span>
                </div>
                <span className="attendance-report-text019 displaysmsemibold">87%</span>
                <div className="attendance-report-logo5">
                  <img
                    src="/playground_assets/ellipse44234-7e7m-200h.png"
                    alt="Ellipse44234"
                    className="attendance-report-ellipse42"
                  />
                </div>
                <img
                  src="/playground_assets/usercheck4235-5e2.svg"
                  alt="usercheck4235"
                  className="attendance-report-usercheck"
                />
              </div>
            </div>
          </div>
          <div className="table-area">{table(colname, tbcontent)}</div>
        </div>
      </div>
      )
  }