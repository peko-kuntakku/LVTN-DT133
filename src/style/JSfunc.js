import React from "react";
import "./form.css";

// Lựa chọn đơn
export const choice = (title, name, list, value, setVal) =>
{
  return(
    <><span className="form-subtitle textmdsemibold">{title}</span>
    <div className="choice-area">
      {list.map((x) => 
      <div className="checkbox-item">
        <input type="radio" className="choice-icon" name={name} value={x.code} id={x.code} 
        checked={x.code===value} onChange={(e)=>setVal(e.target.value)} required/>
        <label for id={x.code} className="checkbox-text textsm">{x.name}</label>
      </div>)}
    </div></>
  )
}

//Hộp kiểm
export const checkbox = (name, value, text) =>
{
  return(
    <div className="checkbox-item">
      <input type="checkbox" className="checkbox" name={name} value={value} id={value}/>
      <label for id={value} className="checkbox-text textsm">{text}</label>
    </div>
  )
}

//Menu kéo thả
export function dropdown (type, title, name, required, list, subName, result, setValue, isDisable, holder1, holder2)
{
  // Hiển thị placehoder hướng dẫn trong menu kéo thả
  const placeholder = (list, holder1, holder2) =>
  {
    if ((list!=undefined))
    return (<option value="" selected disabled>{holder1}</option>)
    else return (<option value="" selected disabled>{holder2}</option>)
  }
  // Hiển thị các lựa chọn
  const renderlist = (list, type, subName) =>
  {
    if (list!=undefined) 
    {
      if (type==1) // để load tên tỉnh thành, hoặc để load danh sách lựa chọn trong file reactjs
      return list.map((x) => <option value={x.code}>{x.name}</option>)
      else if (type==0) // để load danh sách tòa nhà, căn hộ
      return list.map((x) => <option value={x.id}>{x.attributes[subName]}</option>)
      else if (type==2) // Lựa chọn tầng
      return list.map((x) => <option value={x}>Tầng {x}</option>)
    }
  }
  return(
  <>
  <span className="form-subtitle textmdsemibold">{title}</span>
  <select name={name} className="form-select" required={required} disabled={isDisable} 
    onChange={(e) => {if (setValue!=null) setValue(e)}} value={result}>
    {placeholder (list, holder1, holder2)}
    {renderlist (list, type, subName)}
  </select>
  </>
  )
}

//Ô nhập thông tin
export const input = (type, title, name, required, placeholder, result, setValue, min, max, step) => 
{
  //step: Nếu type là number thì step là giá trị bội số tối thiểu, nếu là phone thì là biểu thức chính quy xác định định dạng cần nhập
  // type : 0-number, 1- text, 2-date, 3-time, 4-phone, 5-email, 6-password
  return(
    <><span className="form-subtitle textmdsemibold">{title}</span>
    <input
      onInput = {(e) => {e.preventDefault()
        if (setValue!=null) 
        {
          if (type==0&&e.target.value!='') setValue(Number(e.target.value))
          else setValue(e.target.value)
        }}}
      name={name}
      type={(type==1||type==7) ? "text" : (type==2) ? "date" : (type==3) ? "time" : 
      (type==4) ? "tel" : (type==5) ? "email" : (type==6) ? "password" : "number"}
      required={required}
      min={([0,2,3].includes(type)) ? min : null}
      minLength={([1,5,6].includes(type)) ? min : null}
      max={([0,2,3].includes(type)) ? max : null}
      maxLength={([1,5,6].includes(type)) ? max : null}
      step={([0,2,3].includes(type)) ? step : null}
      pattern={([1,4,5,6].includes(type)) ? step : null}
      autoCapitalize={(type==7) ? "words" : "off"}
      placeholder={placeholder}
      value={result}
      className="form-input"
      style={{width: ([1,5,6].includes(type)) ? "95%" : "90%"}}  />
    </>
  )
}

export function textarea (result, setValue)
{
  return(
    <><span className="form-subtitle textmdsemibold">Mô tả</span>
    <textarea name="Description" className="text-input" placeholder="Mô tả" defaultValue={result} 
    onInput = {(e) => {e.preventDefault(); setValue(e.target.value)}}>
    </textarea></>
  )
}
export function submitbtn (Id, category)
{
  return(
    <div className="submit-area">
      <button type="submit" className="submit-button">
        <span className="submit-btntxt textsmsemibold">{(Id==0) ? `Thêm ${category}` : "Cập nhật"}</span>
      </button>
    </div>
  )
}
export function table (colname, tbcontent)
{
  return (
    <table>
        <tr className="rowtitle">
        {colname.map((a)=><th className="textsm" style={{width: a.width}}>{a.title}</th>)}
        </tr>
        {tbcontent.map((a)=><tr>{a.map((b)=><td className="textsm">{b}</td>)}</tr>)}
    </table>
  )
}