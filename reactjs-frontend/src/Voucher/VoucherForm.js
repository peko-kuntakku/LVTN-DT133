import React,{ useEffect, useState } from 'react';
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import '../style/form.css'
import '../style/list.css'
import {loadItem, addNewItem, updateItem} from '../control';
import {input,choice,submitbtn} from "../style/JSfunc";
import VoucherList from "./VoucherList";

let voucherID = 0;

export const setVoucherID = (id) => 
{
  voucherID = id
}

const colname = 
[
  {width: "16%", title: "Mã căn hộ"},
  {width: "20%", title: "Tên căn hộ"},
  {width: "12%", title: "Số phòng"},
  {width: "12%", title: "Diện tích"},
  {width: "14%", title: "Trạng thái"},
  {width: "12%", title: "Chi tiết"},
]

const customertype = [
  {code: true, name: "Tất cả khách hàng"},
  {code: false, name: "Khách hàng mới"},
]

function Main (){
  const [voucher, loadVoucher]= useState();
  const [apartments, loadApartments] = useState([]);
  const [ApartmentCheck, setApartmentCheck] = useState([]);
  const [ApplyToAll,setApplyToAll] = useState();
  const [VoucherName, setVoucherName]= useState();
  const [startday, setStartday]= useState();
  const [starttime, setStarttime]= useState();
  const [endday, setEndday]= useState();
  const [endtime, setEndtime]= useState();
  const [Amount, setAmount]= useState();
  const [Percentage, setPercentage]= useState();
  const [MaxDiscount, setMaxDiscount]= useState();

  useEffect( ()=>{
    loadItem('vouchers', voucherID, loadVoucher);
  },[voucherID]);

  useEffect(()=>{
    if (voucher!=null) {
      const attr=voucher.attributes
      setVoucherName(attr.VoucherName)
      setStartday(attr.Start_at.slice(0,10))
      setStarttime(attr.Start_at.slice(11,19))
      setEndday(attr.Expired_at.slice(0,10))
      setEndtime(attr.Expired_at.slice(11,19))
      setAmount(attr.setAmount)
      setPercentage(attr.Percentage)
      setMaxDiscount(attr.MaxDiscount)
      setApplyToAll(attr.isApplyToAll)
    }
  },[voucher]);

  const navigate = useNavigate();

  const ada = (a) =>
  {
    return(
      {'id': a, 'check': true}
    )
  }
  useEffect(() => {loadItem('apartments','',loadApartments)}, [])

  const handleClick = (event) => {
    event.preventDefault();
    let {vouchername, startday, starttime, endday, endtime, Amount, Percentage, maxDiscount, apply_customer} = document.forms[0];
    let apartmenttemp = document.getElementsByName("apartments")
    let apartmentlist = Array()
    for (const i of apartmenttemp)
    {
      if (i.checked) apartmentlist.push(Number(i.value))
    }
    const a = Number(starttime.value.slice(0,2))*60+Number(starttime.value.slice(3,5))
    const b = Number(endtime.value.slice(0,2))*60+Number(endtime.value.slice(3,5))
    if ((endday.value==startday.value)&&(b<a)) alert("Vui lòng nhập giờ kết thúc sau giờ bắt đầu")
    else if ((Percentage.value=='')&&(maxDiscount.value=='')) 
    alert("Vui lòng nhập ít nhất 1 trong 2 giá trị: Phần trăm giảm hoặc giảm tối đa")
    else {
      const data = {
        'data': {
            "VoucherName": vouchername.value,
            "Start_at": startday.value+'T'+starttime.value+'.000Z',
            "Expired_at":endday.value+'T'+endtime.value+'.000Z',
            "Amount": Amount,
            "Percentage": Percentage,
            "Max_Discount": Number(maxDiscount.value),
            "isApplyToAll": Boolean(apply_customer),
            "apartments": apartmentlist
        }
      }
      if (voucherID==0) addNewItem("vouchers", data)
      else updateItem("vouchers", voucherID, data)
      navigate('/Voucher/VoucherList');
    }
  }
    return(
      <div>
        <span className="function-title textxlsemibold">{(voucherID==0) ? "Thêm mã giảm giá" : `Chỉnh sửa mã giảm giá ${VoucherName}`}</span>
        <form onSubmit={handleClick} className="main-zone">
          <div className="big-row">
            <div className="col-left">
              <div className="item-area">
                {input(1,"Tên mã","vouchername",true,"Tên",VoucherName,setVoucherName,1,50,null)}
              </div>
              <div className="item-area double-col">
                {input(2,"Ngày bắt đầu","startday",true,"",startday,setStartday,"1920-01-01","2100-01-01","")}
                {input(3,"Thời gian bắt đầu","starttime",true,"",starttime,setStarttime,"","",300)}
              </div>
              <div className="item-area double-col">
                {input(2,"Ngày kết thúc","endday",true,"",endday,setEndday,startday,"2100-01-01","")}
                {input(3,"Thời gian kết thúc","endtime",true,"",endtime,setEndtime,null,"",300)}
              </div>
            </div>
            <div className="col-left">
              <div className="item-area">
                {choice("Áp dụng cho","apply_customer",customertype,ApplyToAll)}
              </div>
              <div className="item-area double-col">
                {input(0,"Số lượng","Amount",true,"Số lượng",Amount,null,0,100,1)}<div/>
              </div>
              <div className="item-area double-col">
                {input(0,"Phần trăm giảm","Percentage",false,"Phần trăm",Percentage,setPercentage,0,100,1)}
                {input(0,"Giảm tối đa","maxDiscount",false,"Tối đa",MaxDiscount,setMaxDiscount,0,null,1)}
              </div>
            </div>
          </div>
          <div className="main-head">
            {/* {choice("Các căn hộ áp dụng","apply_apartment",apartmenttype)} */}
          </div>
          <div className="table-area">
            <table>
              <tr className="rowtitle">
                <th className="textsm" style={{width: "8%"}}>
                <div className="checkbox-item">
                  <input type="checkbox" className="checkbox"/>
                  </div>
                </th>
                {colname.map((a)=><th className="textsm" style={{width: a.width}}>{a.title}</th>)}
              </tr>
              {apartments.map(data => 
              <tr>
                <td><div className="checkbox-item">
                  <input type="checkbox" className="checkbox" name="apartments" value={data.id} />
                </div></td>
                <td className="textsm">{data.id}</td>
                <td className="textsm">{data.attributes.ApartmentName}</td>
                <td className="textsm">{data.attributes.Livingroom + data.attributes.Bedroom + data.attributes.Kitchen + data.attributes.Restroom}</td>
                <td className="textsm">{data.attributes.Size}</td>
                <td className="textsm">{}</td>
                <td className="textsm"><Link to='/BuildingDetail'>Xem chi tiết</Link></td>
              </tr>)}
            </table>
          </div>
          {submitbtn (voucherID, "mã")}
        </form>
      </div> 
    )
}

export default function VoucherForm ()
{
  return(
    <div>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Voucher/VoucherList" element={<VoucherList />} />
    </Routes>
    </div>
  )
}