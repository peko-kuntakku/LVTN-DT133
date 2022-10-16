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

export const dropdown = (title, name, list) =>
{
  return (
    <><span className="form-subtitle textmdsemibold">{title}</span>
      <select name={name} className="form-select">
        {list.map((x) => <option value={x.value}>{x.text}</option>)}
      </select></>
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