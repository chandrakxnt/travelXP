import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

//here layout is used to dynamically inject components into the app

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>

    </>
  )
}

export default Layout