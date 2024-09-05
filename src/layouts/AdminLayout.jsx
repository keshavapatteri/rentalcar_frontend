import React from 'react'

import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import AdminHeader from '../components/admin/AdminHeader'

const AdminLayout = () => {
  return (
    <div>
      <AdminHeader/>
      <div><Outlet/></div>
      <Footer/>
      
    </div>
  )
}

export default AdminLayout

