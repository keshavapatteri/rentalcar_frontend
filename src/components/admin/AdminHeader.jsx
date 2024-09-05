
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DarkMode from '../ui/DarkMode.jsx';
import Cookies from 'js-cookie';
const AdminHeader = () => {
    const navigate=useNavigate()
    const   handleLogout=()=>{
       Cookies.remove('userLogin');
       navigate('/home')
    }
    return (
        //FOR LOGO
        <div className="flex items-center justify-between w-full h-32 px-20 shadow-xl pt-4">
            <div className="avatar ">
                <div className="w-24 rounded-full">
                    <img src="https://www.shutterstock.com/image-vector/abstract-lines-car-logo-vector-600nw-2133426575.jpg" />
                </div>
               
            </div>
            <div>ADMIN LAYOUT</div>
            <nav className='flex gap-20 font-semibold'>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/contact"}>Contact-US</Link>
                <Link to={"/admin/user"}>USER</Link>
                <Link to={"/admin/car"}>CARPAGE</Link>
                <Link to={"/admin/review"}>REVIEW</Link>
            </nav>
            <div className="flex items-center gap">
                <DarkMode />
                <Link to={"/signup"}>
                <button className="btn btn-primary " onClick={()=>handleLogout()}>LOGOUT</button>
                </Link>
            </div>
        </div>
    )
}

export default AdminHeader;
