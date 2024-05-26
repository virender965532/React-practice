const obj = {
  a:{b:"c"},
  d:{e:{f:"g"}},
  h:{i:{j:{k:"l"}}},
  x:"y"
}
const output = {}


function processing(obj){
    let objectKeys = (obj) ? Object.keys(obj): [];
    if(objectKeys?.length>0){
        objectKeys.forEach((el,index)=>{
            recurssiveProcessing([el], obj[el]);
        })
    }
    return output;
}

function recurssiveProcessing(keyArr, value){
    if(typeof value == "object"){
        let key = Object.keys(value);
        keyArr.push(key[0])
        recurssiveProcessing(keyArr, value[key[0]])
    } else {
        output[keyArr.join(".")] = value;
        return ;
    }
}

console.log(processing(obj));