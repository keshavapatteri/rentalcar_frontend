import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DarkMode from './ui/DarkMode';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 text-white shadow-lg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between">
                {/* Logo and Title */}
                <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <img
                            src="https://www.shutterstock.com/image-vector/abstract-lines-car-logo-vector-600nw-2133426575.jpg"
                            alt="Logo"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h1 className="text-xl md:text-3xl font-bold">AutoCar</h1>
                </div>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:flex flex-grow items-center justify-center space-x-6 text-lg font-semibold">
    <Link to="/" className="hover:text-yellow-300 pt-2 pl-2 transition-colors">Home</Link>
    <Link to="/about" className="hover:text-yellow-300 pt-2 transition-colors">About</Link>
    <Link to="/contact" className="hover:text-yellow-300 pt-2 transition-colors">Contact-US</Link>
    <Link to="/car-list" className="hover:text-yellow-300 pt-2 transition-colors">Cars Details</Link>
</nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center space-x-4 md:space-x-6">
                    <DarkMode />
                    <Link to="/signup">
                        <button className="btn btn-primary px-4 py-2 rounded-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold transition-colors">Join us</button>
                    </Link>
                    <Link to="/admin-login">
                        <button className="btn btn-primary px-4 py-2 rounded-full bg-red-500 hover:bg-red-600 text-white font-semibold transition-colors">ADMIN-LOGIN</button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
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
                <nav className="md:hidden bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 text-white shadow-lg">
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex flex-col space-y-4">
                            <DarkMode />
                            <Link to="/" className="block py-3 px-4  text-lg hover:text-yellow-300 transition-colors" onClick={toggleMobileMenu}>Home</Link>
                            <Link to="/car-list" className="block py-3 px-4 text-lg hover:text-yellow-300 transition-colors" onClick={toggleMobileMenu}>Cars</Link>
                            <Link to="/about" className="block py-3 px-4 text-lg hover:text-yellow-300 transition-colors" onClick={toggleMobileMenu}>About</Link>
                            <Link to="/contact" className="block py-3 px-4 text-lg hover:text-yellow-300 transition-colors" onClick={toggleMobileMenu}>Contact-US</Link>
                            
                         
                                <Link to="/signup" onClick={toggleMobileMenu}>
                                <button className="w-full py-3 px-4 rounded-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold transition-colors">Join us</button>
                            </Link>
                            <Link to="/admin-login" onClick={toggleMobileMenu}>
                                <button className="w-full py-3 px-4 rounded-full bg-red-500 hover:bg-red-600 text-white font-semibold transition-colors">ADMIN-LOGIN</button>
                            </Link>
                        </div>
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Header;
