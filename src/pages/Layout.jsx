import React from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import { Footer } from '../components/Footer/Footer'
import {Outlet} from "react-router-dom"
import { useState } from 'react'
import { Popup } from '../components/Popup/Popup'

export const Layout = () => {
  const [orderpopup, setorderpopup] = useState(false);
  function handleorderpopup(){
    setorderpopup(!orderpopup)
  } 
  return (
    <>
    <Navbar handleorderpopup={handleorderpopup}/>
    <Outlet/>
    <Footer/>
    <Popup orderpopup={orderpopup} setorderpopup={setorderpopup}/>
    </>
  )
}