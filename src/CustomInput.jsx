import React, { useState } from 'react'

function CustomInput() {
  const [row, setRow] = useState([
  {
    name:1
  },{
    name:2
  },{
    name:3
  },{
    name:4
  }
]);
  const [column, setColumn] = useState([
    {
      name:1
    },{
      name:2
    },{
      name:3
    },{
      name:4
    }
  ]);

  const [values, setValues] = useState([]);

  const addRow = ()=>{
    setRow([...row, {name:row.length+1}])
  }

  const addColumn = ()=>{
    setColumn([...column, {name:column.length+1}])
  }

  const saveValue = (e, key)=>{
    setValues([...values, {key:key, value:eval(e.target.value)}])
  }

  return (
    <div>
      <div>
        <button onClick={addRow}>Add Row</button>
        <button onClick={addColumn}>Add Column</button>
      </div>
      <div>
      {
        (row?.length>0 && row.map((el,indexRow)=>{
          return (<div key={indexRow}>
              {(column?.length>0 && column.map((cel,indexCol)=>{
                let value = values.find(val=>val.key==indexRow+"_"+indexCol)?.value;
              return <input type="text" onBlur={(e)=>{saveValue(e,indexRow+"_"+indexCol)}} key={indexRow+indexCol} name={el.name+"_"+cel.name} value={value} />
            }))}
            <br></br>
          </div>)
        }))
      }
      </div>
    </div>
  )
}

export default CustomInput
