import React from "react";
import "./form.css";

export const choice = (title, name, list) =>
{
  return(
    <><span className="form-subtitle textmdsemibold">{title}</span>
    <div className="choice-area">
      {list.map((x) => 
      <div className="checkbox-item">
        <input type="radio" className="choice-icon" name={name} value={x.code} id={x.code} required/>
        <label for id={x.code} className="checkbox-text textsm">{x.name}</label>
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

export function dropdown (type, title, name, required, list, subName, result, setValue, isDisable, holder1, holder2){
  const placeholder = (list, holder1, holder2) => 
  {
    if ((list!=undefined))
    return (<option value="" selected disabled>{holder1}</option>)
    else return (<option value="" selected disabled>{holder2}</option>)
  }
  const renderlist = (list, type, subName) =>
  {
    if (list!=undefined) 
    {
      if (type==1)
      return list.map((x) => <option value={x.code}>{x.name}</option>)
      else if (type==0)
      return list.map((x) => <option value={x.id}>{x.attributes[subName]}</option>)
      else if (type==2)
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

export const input = (type, title, name, required, placeholder, result, setValue, min, max, step) => 
{
  // type : 0-number, 1- text, 2-date, 3-time, 4-password
  return(
    <><span className="form-subtitle textmdsemibold">{title}</span>
    <input
      onInput = {(e) => {if (setValue!=null) {
        if ((type==0)) setValue(Number(e.target.value)) 
        else setValue(e.target.value)}}}
      name={name}
      type={(type==1) ? "text" : (type==2) ? "date" : (type==3) ? "time" : (type==4) ? "tel" : "number"}
      required={required}
      min={((type==0)||(type==2)) ? min : null}
      minLength={(type==1) ? min : null}
      max={((type==0)||(type==2)) ? max : null}
      maxLength={(type==1) ? max : null}
      step={(type==0) ? step : null}
      pattern={(type==4) ? step : null}
      placeholder={placeholder}
      defaultValue={result}
      className="form-input"
      style={{width: (type==1) ? "95%" : "90%"}}  />
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
