import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (<>
  <Navbar/>
  <Outlet />
  <Footer/>
  </>
  )
}

export default Layout