import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div  style={{display:"inline-flex",width:"100p%", height:"50px"}}>
      <Link style={{display:"block",width:"150px", height:"50px", padding:"10px", margin:"10px", color:"white", backgroundColor:"grey", borderRadius:"10px", textAlign:"center"}} to="/home" >Home</Link>
      <Link style={{display:"block",width:"150px", height:"50px", padding:"10px", margin:"10px", color:"white", backgroundColor:"grey", borderRadius:"10px", textAlign:"center"}} to="/login" >Login</Link>
      <Link style={{display:"block",width:"150px", height:"50px", padding:"10px", margin:"10px", color:"white", backgroundColor:"grey", borderRadius:"10px", textAlign:"center"}} to="/testing" >State city popup</Link>
      <Link style={{display:"block",width:"150px", height:"50px", padding:"10px", margin:"10px", color:"white", backgroundColor:"grey", borderRadius:"10px", textAlign:"center"}} to="/list" >List swaping</Link>
      <Link style={{display:"block",width:"150px", height:"50px", padding:"10px", margin:"10px", color:"white", backgroundColor:"grey", borderRadius:"10px", textAlign:"center"}} to="/input" >Custom Input</Link>
      {/* <Link style={{display:"block",width:"150px", height:"50px", padding:"10px", margin:"10px", color:"white", backgroundColor:"grey", borderRadius:"10px", textAlign:"center"}} to="/home" >Home</Link> */}
    </div>
  )
}

export default Home