import { Outlet } from 'react-router-dom' // Outlet is used to enabled nested routing
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer />
    </>
  )
}

export default MainLayout