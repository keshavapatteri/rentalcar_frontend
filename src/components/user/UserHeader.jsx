import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DarkMode from '../ui/DarkMode';
import Cookies from 'js-cookie';

const UserHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    Cookies.remove('userLogin');
    navigate('/home');
  };

  return (
    <header className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 text-white shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Link to="/user/home">
              <img
                src="https://www.shutterstock.com/image-vector/abstract-lines-car-logo-vector-600nw-2133426575.jpg"
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </Link>
          </div>
          <Link to="/user/home">
            <h1 className="text-xl md:text-3xl font-bold">AutoCars</h1>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex flex-grow items-center justify-center space-x-6 text-lg font-semibold">
          <Link to="/user/home" className="hover:text-yellow-300 transition-colors">Home</Link>
          <Link to="/user/car" className="hover:text-yellow-300 transition-colors">Car-List</Link>
          <Link to="/user/car" className="hover:text-yellow-300 transition-colors">Book Car</Link>
          <Link to="/user/aboutpage" className="hover:text-yellow-300 transition-colors">About-Page</Link>
          <Link to="/user/contactpage" className="hover:text-yellow-300 transition-colors">Contact-Page</Link>
          
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4 md:space-x-6">
          <DarkMode />
          
          <Link to="/admin-login">
            <button className="btn btn-primary px-4 py-2 rounded-full bg-red-500 hover:bg-red-600 text-white font-semibold transition-colors">
              ADMIN-LOGIN
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="btn btn-secondary" onClick={handleLogout}>Logout</button>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
          
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
          
        </button>
        
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-700 text-white absolute top-16 left-0 w-full z-50">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link to="/user/home" className="hover:text-yellow-300 transition-colors" onClick={toggleMobileMenu}>Home</Link>
            <Link to="/user/car" className="hover:text-yellow-300 transition-colors" onClick={toggleMobileMenu}>Car-List</Link>
            <Link to="/user/car" className="hover:text-yellow-300 transition-colors" onClick={toggleMobileMenu}>Book Car</Link>
            <Link to="/user/aboutpage" className="hover:text-yellow-300 transition-colors" onClick={toggleMobileMenu}>About-Page</Link>
            <Link to="/user/contactpage" className="hover:text-yellow-300 transition-colors" onClick={toggleMobileMenu}>Contact-page</Link>
           
              
            
            <Link to="/admin-login">
              <button className="btn btn-primary px-4 py-2 rounded-full bg-red-500 hover:bg-red-600 text-white font-semibold transition-colors">
                ADMIN-LOGIN
              </button>
            </Link>
            <DarkMode />
          </nav>
        </div>
      )}
    </header>
  );
};

export default UserHeader;
