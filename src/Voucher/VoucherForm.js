import React,{ useEffect, useState } from 'react';
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import '../style/form.css'
import '../style/list.css'
import {loadItem, addNewItem, updateItem} from '../control';
import {input,choice} from "../style/JSfunc";
import VoucherList from "./VoucherList";

let voucherID = 0;

export const setVoucherID = (id) => 
{
  voucherID = id
}

const colname = 
[
  {width: "8%", title: ""},
  {width: "16%", title: "Mã căn hộ"},
  {width: "20%", title: "Tên căn hộ"},
  {width: "12%", title: "Số phòng"},
  {width: "12%", title: "Diện tích"},
  {width: "14%", title: "Trạng thái"},
  {width: "12%", title: "Chi tiết"},
]

const customertype = [
  {code: 1, name: "Tất cả khách hàng"},
  {code: 0, name: "Khách hàng mới"},
]

const apartmenttype = [
  {code: 0, name: "Tất cả các căn hộ"},
  {code: 1, name: "Một vài căn hộ"},
]

function Main (){
  const [voucher, loadVoucher]= useState();
  const [apartments, setApartments] = useState([]);
  const [apply_customer, set_apply_customer] = useState();
  useEffect( ()=>{
    loadItem('vouchers', voucherID, loadVoucher);
  },[voucherID]);
  const navigate = useNavigate();

  const vouchername = (voucher!=null) ? voucher.attributes.Voucher_Name : null
  const startday = (voucher!=null) ? voucher.attributes.Start_at.slice(0,10) : null
  const starttime = (voucher!=null) ? voucher.attributes.Start_at.slice(11,19) : null
  const endday = (voucher!=null) ? voucher.attributes.Expired_at.slice(0,10) : null
  const endtime = (voucher!=null) ? voucher.attributes.Expired_at.slice(11,19) : null
  const Amount = (voucher!=null) ? voucher.attributes.Amount : null
  const Percentage = (voucher!=null) ? voucher.attributes.Percentage : null
  const maxDiscount = (voucher!=null) ? voucher.attributes.Max_Discount : null

  useEffect(() => {loadItem('apartments','',setApartments)}, [])

  function ches (x)
  {
    return (x.checked==true)
  }
  const handleClick = (event) => {
    event.preventDefault();
    let {vouchername, startday, starttime, endday, endtime, Amount, Percentage, maxDiscount, apply_customer} = document.forms[0];
    let apartmenttemp = document.getElementsByName("apartments")
    let apartmentlist = Array()
    for (var i=0; i<apartmenttemp.length; i++)
    {
      if (apartmenttemp[i].checked==true) apartmentlist.push(Number(apartmenttemp[i].value))
    }
    const a = Number(starttime.value.slice(0,2))*60+Number(starttime.value.slice(3,5))
    const b = Number(endtime.value.slice(0,2))*60+Number(endtime.value.slice(3,5))
    if ((endday.value==startday.value)&&(b<a)) alert("Vui lòng nhập giờ kết thúc sau giờ bắt đầu")
    else if ((Percentage.value=='')&&(maxDiscount.value=='')) 
    alert("Vui lòng nhập ít nhất 1 trong 2 giá trị: Phần trăm giảm hoặc giảm tối đa")
    else {
      const data = {
        'data': {
            "Voucher_Name": vouchername.value,
            "Start_at": startday.value+'T'+starttime.value+'.000Z',
            "Expired_at":endday.value+'T'+endtime.value+'.000Z',
            "Amount": Number(Amount.value),
            "Percentage": Number(Percentage.value),
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
        <span className="function-title textxlsemibold">{(voucherID==0) ? "Thêm mã giảm giá" : `Chỉnh sửa mã giảm giá ${vouchername}`}</span>
        <form onSubmit={handleClick} className="main-zone">
          <div className="big-row">
            <div className="col-left">
              <div className="item-area">
                {input(1,"Tên mã","vouchername",true,"Tên",vouchername,null,1,50,"")}
              </div>
              <div className="item-area double-col">
                {input(2,"Ngày bắt đầu","startday",true,"",startday,null,"1920-01-01","2100-01-01","")}
                {input(3,"Thời gian bắt đầu","starttime",true,"",starttime,null,"","",300)}
              </div>
              <div className="item-area double-col">
                {input(2,"Ngày kết thúc","endday",true,"",endday,null,startday,"2100-01-01","")}
                {input(3,"Thời gian kết thúc","endtime",true,"",endtime,null,null,"",300)}
              </div>
            </div>
            <div className="col-left">
              <div className="item-area">
                {choice("Áp dụng cho","apply_customer",customertype,apply_customer)}
              </div>
              <div className="item-area double-col">
                {input(0,"Số lượng","Amount",true,"Số lượng",Amount,null,0,100,1)}<div/>
              </div>
              <div className="item-area double-col">
                {input(0,"Phần trăm giảm","Percentage",false,"Phần trăm",Percentage,null,0,100,1)}
                {input(0,"Giảm tối đa","maxDiscount",false,"Tối đa",maxDiscount,null,0,null,1)}
              </div>
            </div>
          </div>
          <div className="main-head">
            {/* {choice("Các căn hộ áp dụng","apply_apartment",apartmenttype)} */}
          </div>
          <div className="table-area">
            <table>
              <tr className="rowtitle">
                {colname.map((a)=><th className="textsm" style={{width: a.width}}>{a.title}</th>)}
              </tr>
              {apartments.map(data => 
              <tr>
                <td><div className="checkbox-item">
                  <input type="checkbox" className="checkbox" name="apartments" value={data.id}/>
                </div></td>
                <td className="textsm">{data.id}</td>
                <td className="textsm">{data.attributes.Apartment_Name}</td>
                <td className="textsm">{data.attributes.Livingroom + data.attributes.Bedroom + data.attributes.Kitchen + data.attributes.Restroom}</td>
                <td className="textsm">{data.attributes.Size}</td>
                <td className="textsm">{}</td>
                <td className="textsm"><Link to='/BuildingDetail'>Xem chi tiết</Link></td>
              </tr>)}
            </table>
          </div>
          <div className="submit-area">
            <button type="submit" className="submit-button">
              <span className="submit-btntxt textsmsemibold">{(voucherID==0) ? "Thêm mã giảm giá" : "Cập nhật"}</span>
            </button>
          </div>
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
