import React from 'react'
import UserHeader from '../components/user/UserHeader'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const UserLayout = () => {
  return (
    <div>
      <UserHeader/>
      <div><Outlet/></div>
      <Footer/>
    </div>
  )
}

export default UserLayout

