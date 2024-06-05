import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from '../pages/Shared/Footer/Footer'
import { Navbar } from '../pages/Shared/Footer/Navbar/Navbar'

export const Main = () => {
const location=useLocation();
console.log(location)
const noHeaderFooter= location.pathname.includes('login') ||location.pathname.includes('signup')




  return (
  <>
 {noHeaderFooter || <Navbar></Navbar>}
  <Outlet></Outlet>
{ noHeaderFooter || <Footer></Footer> }
  
  </>
  )
}
