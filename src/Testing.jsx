import React, { useState } from 'react'
import Popup from './Popup';

function Testing() {
  console.log("Testing component render")
  var [popup, setPopup] = useState(false);
  const togglePopup = ()=>{
    console.log("popup set to ", !popup);
    setPopup(!popup);
  }
  return (
    <div>
      <button className='btn btn-primary' onClick={togglePopup}>{ (popup) ? "Close Popup":"Open Popup"}</button>
      {(popup && <Popup togglePopup={togglePopup} />)}
    </div>
  )
}

export default Testing