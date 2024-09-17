import React from 'react'
import UserHeader from '../components/user/UserHeader'
import { Outlet } from 'react-router-dom'
import UserFooter from '../components/user/UserFooter'


const UserLayout = () => {
  return (
    <div>
      <UserHeader/>
      <div><Outlet/></div>
      <UserFooter/>
    </div>
  )
}

export default UserLayout

