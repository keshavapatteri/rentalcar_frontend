import React from 'react'

import { Outlet } from 'react-router-dom'

import AdminHeader from '../components/admin/AdminHeader'
import AdminFooter from '../components/admin/AdminFooter'

const AdminLayout = () => {
  return (
    <div>
      <AdminHeader/>
      <div><Outlet/></div>
      <AdminFooter/>
      
    </div>
  )
}

export default AdminLayout

