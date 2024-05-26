import React, { useEffect, useState } from 'react'
import  './popup.css'
const countries = [{name:"India",value:"1"}, {name:"USA",value:"2"}]
const stateArr = [
  {
    name:"Delhi",
    id:1,
    countryId:1
  },
  {
    name:"Mumbai",
    id:2,
    countryId:1
  },
  {
    name:"Banglore",
    id:3,
    countryId:1
  },
  {
    name:"Paris",
    id:4,
    countryId:2
  },
  {
    name:"Los Angle",
    id:5,
    countryId:2
  },
  {
    name:"America",
    id:6,
    countryId:2
  }
  
]

const cities = [
  {
    name:"Delhi",
    id:1,
    stateId:1
  },
  {
    name:"New Delhi",
    id:2,
    stateId:1
  },
  {
    name:"Navi Mumbai",
    id:3,
    stateId:2
  },
  {
    name:"old Mumbai",
    id:4,
    stateId:2
  },
  {
    name:"Raman nagar",
    id:5,
    stateId:3
  },
  {
    name:"old banglore",
    id:6,
    stateId:3
  },
  {
    name:"Paris city 1",
    id:7,
    stateId:4
  },
  {
    name:"Paris city 2",
    id:8,
    stateId:4
  },
  {
    name:"Los Angle city 1",
    id:9,
    stateId:5
  },
  {
    name:"Los Angle city 2",
    id:10,
    stateId:5
  },
  {
    name:"America city 1",
    id:11,
    stateId:6
  },
  {
    name:"America city 2",
    id:12,
    stateId:6
  }
]
function Popup({togglePopup}) {
  console.log("Popup component render")
  const [countryId, setCountryId] = useState(null);
  const [stateId, setStateId] = useState(null);
  const [state, setState] = useState([])
  const [city, setCity] = useState([])
  
  // useEffect(()=>{
  //   if(countryId){
  //     setState(stateArr.filter(el=>el.countryId==countryId));
  //   } else {
  //     setState([])
  //   }
  // }, [countryId])

  // useEffect(()=>{
  //   if(stateId){
  //     setCity(cities?.filter(el=>el.stateId==stateId))
  //   } else {
  //     setCity([])
  //   }
  // }, [stateId])

  const closePopup = (event)=>{
    togglePopup(event)
  }

  const selectCountry = (e) =>{
    if(e.target.value){
      setCountryId(e.target.value);
      setState(stateArr.filter(el=>el.countryId==e.target.value));
    } else {
      setCountryId(null);
      setState([]);
    }
  }

  const selectState = (e) =>{
    if(e.target.value){
      setStateId(e.target.value);
      setCity(cities.filter(el=>el.stateId==e.target.value));
    } else {
      setStateId(null);
      setCity([]);
    }
  }
  return (
    <>
       <div id="popup1" className="overlay">
        <div className="popup">
          <h2>Country , State and  city</h2>
          <a className="close" onClick={closePopup}>&times;</a>
          <div className="content">
            <select name="country" onChange={selectCountry}>
              <option value="">Select Country</option>
              {countries && countries?.map((el,index)=>{
                return <option key={index} value={el.value}>{el.name}</option>
              })}
            </select>


            <select name="state"  onChange={selectState}>
              <option value="">Select State</option>
              {state && state?.map((el,index)=>{
                return <option key={index} value={el.id}>{el.name}</option>
              })}
            </select>


            <select name="city" >
              <option value="">Select city</option>
              {city && city?.map((el,index)=>{
                return <option key={index} value={el.id}>{el.name}</option>
              })}
            </select>
          </div>
        </div>
      </div>
    </>
  )
}

export default React.memo(Popup)