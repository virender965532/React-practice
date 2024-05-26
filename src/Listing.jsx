import React, { useState } from 'react'

function Listing() {
  console.log("Listing component render")
  const [list1, setList1] = useState([
    {title:"list 1",select:false},
    {title:"list 2",select:false},
    {title:"list 3",select:false},
    {title:"list 4",select:false},
  ])
  
  const [list2, setList2] = useState([
    {title:"list A",select:false},
    {title:"list B",select:false},
    {title:"list C",select:false},
    {title:"list D",select:false},
  ])

  const selectList = (index)=>{
    let newList1 = list1;
    newList1[index].select = !newList1[index].select;
    setList1(newList1);
  }
  const swapList = ()=>{
    
    setList1(list1.map((el,index)=>{
      if(el.select){
        return list2[index]
      }
      else {
        return el
      }
    }))
    setList2(list1.map((el,index)=>{
      if(!el.select){
        return list2[index]
      }
      else {
        return el
      }
    }))
  }
  return (
    <div>
      <div>
        <h1>List 1</h1>
        <ul>
          {
            list1.length>0 && list1?.map((el,index)=>{
              return <li key={index} style={{textDecoration:"none"}}>
                <input type="checkbox" onClick={()=>{selectList(index)}}/>
                {el.title}
              </li>
            })
          }
        </ul>
      </div>

      <div>
        <h1>List 2</h1>
        <ul>
          {
            list2.length>0 && list2?.map((el,index)=>{
              return <li key={index} style={{textDecoration:"none"}}>
                {el.title}
              </li>
            })
          }
        </ul>
      </div>

      <button onClick={swapList}>Swap selected list</button>
    </div>
  )
}

export default Listing