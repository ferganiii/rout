import React from 'react'
import Navebar from '../Navebar/Navebar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import FooterContact from '../FooterContact/FooterContact'

export default function Layout() {
  return (
    <>
       <Navebar/>
       <Outlet/>


       <FooterContact/>
       <Footer/>
    </>
  )
}
