import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DarkMode from '../ui/DarkMode.jsx';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';

const AdminHeader = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        Cookies.remove('adminLogin');
        toast.success('Logout Success');
        navigate('/');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="w-full shadow-xl bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between h-32 px-6 lg:px-20 py-4 flex-wrap">
                {/* Logo */}
                <div className="flex items-center">
                    <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden">
                        <Link to="/admin/AdminPage">
                            <img
                                src="https://www.shutterstock.com/image-vector/abstract-lines-car-logo-vector-600nw-2133426575.jpg"
                                alt="Admin Logo"
                                className="object-cover w-full h-full"
                            />
                        </Link>
                    </div>
                    <h1 className="ml-4 text-lg font-bold text-gray-900 dark:text-white">
                        ADMIN SECTION
                    </h1>
                </div>

                {/* Mobile Menu Toggle & Logout Button */}
                <div className="flex items-center gap-4">
                    <DarkMode />
                    <button
                        className="btn btn-primary bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition-colors"
                        onClick={handleLogout}
                    >
                        LOGOUT
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-900 dark:text-white focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Links */}
            <div className={`md:hidden bg-gray-100 dark:bg-gray-800 ${isMenuOpen ? 'block' : 'hidden'}`}>
                <nav className="flex flex-col gap-4 p-4 text-gray-900 dark:text-white font-semibold">
                    <Link to="/admin/AdminPage" className="hover:text-blue-500 transition">Home</Link>
                    <Link to="/admin/Admin-carlist" className="hover:text-blue-500 transition">ALL CARS</Link>
                    <Link to="/admin/Admin-car" className="hover:text-blue-500 transition">ADD CAR</Link>
                    <Link to="/admin/Admin-ReviewList/:id" className="hover:text-blue-500 transition">ALL REVIEW</Link>
                    <Link to="/admin/Admin-bookinglist" className="hover:text-blue-500 transition">ALL BOOKING</Link>
                    <Link to="/admin/Admin-AdminUserList/:id" className="hover:text-blue-500 transition">ALL USERS</Link>
                    <Link to="/admin/contact-message" className="hover:text-blue-500 transition">ALL MESSAGES</Link>
                </nav>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-6 text-gray-900 dark:text-white font-semibold">
                <Link to="/admin/AdminPage" className="hover:text-blue-500 transition">Home</Link>
                <Link to="/admin/Admin-carlist" className="hover:text-blue-500 transition">ALL CARS</Link>
                <Link to="/admin/Admin-car" className="hover:text-blue-500 transition">ADD CAR</Link>
                <Link to="/admin/Admin-ReviewList/:id" className="hover:text-blue-500 transition">ALL REVIEW</Link>
                <Link to="/admin/Admin-bookinglist" className="hover:text-blue-500 transition">ALL BOOKING</Link>
                <Link to="/admin/Admin-AdminUserList/:id" className="hover:text-blue-500 transition">ALL USERS</Link>
                <Link to="/admin/contact-message" className="hover:text-blue-500 transition">ALL MESSAGES</Link>
            </nav>
        </header>
    );
};

export default AdminHeader;
