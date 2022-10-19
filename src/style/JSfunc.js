import React from "react";
import "./form.css";

export const choice = (title, name, list) =>
{
  return(
    <><span className="form-subtitle textmdsemibold">{title}</span>
    <div className="choice-area">
      {list.map((x) => 
      <div className="checkbox-item">
        <input type="radio" className="choice-icon" name={name} value={list.value} id={list.value} />
        <label for id={list.value} className="checkbox-text textsm">{list.text}</label>
      </div>)}
    </div></>
  )
}

export const checkbox = (name, value, text) =>
{
  return(
    <div className="checkbox-item">
      <input type="checkbox" className="checkbox" name={name} value={value} id={value}/>
      <label for id={value} className="checkbox-text textsm">{text}</label>
    </div>
  )
}

export function dropdown (title, name, handle, isDisable, list, kind, result, holder1, holder2){
  const placeholder = (list, holder1, holder2) => 
  {
    if ((list!=undefined))
    return (<option value="" selected disabled>{holder1}</option>)
    else return (<option value="" disabled selected>{holder2}</option>)
  }
  const renderlist = (list, kind) =>
  {
    if (list!=undefined) 
    {
      if (kind=="address")
      return list.map((x) => <option value={x.code}>{x.name}</option>)
      else if (kind=="building")
      return list.map((x) => <option value={x.id}>{x.attributes.Building_Name}</option>)
      else if (kind=="floor")
      return list.map((x) => <option value={x}>{x}</option>)
    }
  }
  return(
  <>
  <span className="form-subtitle textmdsemibold">{title}</span>
  <select name={name} className="form-select" disabled={isDisable} onChange={(e) => handle(e)} value={result}>
    {placeholder (list, holder1, holder2)}
    {renderlist (list, kind)}
  </select>
  </>
  )
}

export const input = (type, name, placeholder, title) => 
{
  return(
    <><span className="form-subtitle textmdsemibold">{title}</span>
    <input
      name={name}
      type={(type==1) ? "number" : (type==2) ? "text" : (type==3) ? "date" : "time"}
      min={(type==1) ? "0" : ""}
      placeholder={placeholder}
      className="form-input"
      style={{width: (type==2) ? "95%" : "90%"}}  />
    </>
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
