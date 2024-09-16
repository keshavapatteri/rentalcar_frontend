
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DarkMode from '../ui/DarkMode.jsx';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
const AdminHeader = () => {
    const navigate=useNavigate()
    const   handleLogout=()=>{
       Cookies.remove('adminLogin');
       toast.success('Logout Success'); 
       navigate('/')
    }
    return (
        //FOR LOGO
        <div className="flex items-center justify-between w-full h-32 px-20 shadow-xl pt-4">
            <div className="avatar ">
                <div className="w-24 rounded-full">
                <Link to={"/admin/AdminPage"}>    <img src="https://www.shutterstock.com/image-vector/abstract-lines-car-logo-vector-600nw-2133426575.jpg" /></Link>  
                </div>
               
            </div>
            <div>ADMIN SECTION</div>
            <nav className='flex gap-20 font-semibold'>
                <Link to={"/admin/AdminPage"}>Home</Link>   
                
                <Link to={"/admin/Admin-carlist"}>ALL CARS</Link>   
                <Link to={"/admin/Admin-car"}>ADD CAR</Link>
                <Link to={"/admin/Admin-ReviewList/:id"}>ALL REVIEW</Link>
                <Link to={"/admin/Admin-bookinglist"}> ALL BOOKING</Link>
                <Link to={"/admin/Admin-AdminUserList/:id"}> ALL USERS</Link>
                <Link to={"/admin/contact-message"}> ALL MESSAGES</Link>

                

            </nav>
            <div className="flex items-center gap">
                <DarkMode />
               
                <button className="btn btn-primary " onClick={()=>handleLogout()}>LOGOUT</button>
               
            </div>
        </div>
    )
}

export default AdminHeader;
