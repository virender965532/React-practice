import React, {lazy} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Testing from './Testing';
import Listing from './Listing';
import CustomInput from './CustomInput';

const Home = lazy(()=> import("./pages/Home"));
const Login = lazy(()=> import("./pages/Login"));
const Chat = lazy(()=> import("./pages/Chat"));
const Groups = lazy(()=> import("./pages/Groups"));

function App() {
  console.log("App component render")

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat/:chatId" element={<Chat />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/login" element={<Login />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/list" element={<Listing />} />
        <Route path="/input" element={<CustomInput />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
