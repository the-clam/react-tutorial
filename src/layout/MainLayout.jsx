import React from 'react'
import { Outlet } from 'react-router-dom' // Outlet is used to enabled nested routing
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default MainLayout