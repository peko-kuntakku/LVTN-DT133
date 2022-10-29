import React from 'react';
import './style/main.css';


export default function Popup (p) {
    return (p.trigger!=0) ? (
      <><div class="delete-blk" onClick={()=>p.setTrigger(false)}></div>
      <div class="delete-bg">
        {
          (p.trigger==1) ? (
            <><div class="delete-title">Bạn có muốn xóa {p.category} {p.id} ?</div>
            <div class="delete-subtitle">
              {
                p.details.map(({key,value}) => <div>{key} : {value}</div>)
              }
            </div>
            <button onClick={() => {p.setDelete(p.id);p.setTrigger(2)}} className="delete-button">
              <span class="delete-text">Xóa</span>
            </button>
            <button onClick={() => p.setTrigger(0)} className="cancel-button">
              <span class="cancel-text">Hủy</span>
            </button></>
          ) : (
            <><div class="delete-title">Đã xóa {p.category} {p.id}!</div>
            <button onClick={() => p.setTrigger(0)} className="close-button">
              <span class="close-text">Đóng</span>
            </button>
            </>
          )
        }
      </div>
      </>
    ) : ""
}