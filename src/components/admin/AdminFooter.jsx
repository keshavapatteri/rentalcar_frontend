import React from 'react';
import { Link } from 'react-router-dom';

const AdminFooter = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 md:py-10">
      <div className="container mx-auto pl-36 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left">

          {/* Section 1: Admin Links */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Admin Links</h2>
            <div className="flex flex-col items-center md:items-start space-y-2">
              <Link to="/admin/AdminPage" className="text-base md:text-lg hover:text-blue-400 transition duration-300">
                Dashboard
              </Link>
              <Link to="/admin/Admin-AdminUserList/:id" className="text-base md:text-lg hover:text-blue-400 transition duration-300">
                User Management
              </Link>
              <Link to="/admin/Admin-bookinglist" className="text-base md:text-lg hover:text-blue-400 transition duration-300">
                Booking Management
              </Link>
              <Link to="/admin/Admin-ReviewList/:id" className="text-base md:text-lg hover:text-blue-400 transition duration-300">
                Review Management
              </Link>
              <Link to="/admin/contact-message" className="text-base md:text-lg hover:text-yellow-400 transition duration-300">
                User Messages
              </Link>
            </div>
          </div>

          {/* Section 2: Car Management */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Car Management</h2>
            <div className="flex flex-col items-center md:items-start space-y-2">
              <Link to="/admin/car-add" className="text-base md:text-lg hover:text-yellow-400 transition duration-300">
                Add Car
              </Link>
              <Link to="/admin/Admin-carlist" className="text-base md:text-lg hover:text-yellow-400 transition duration-300">
                Update Car
              </Link>
            </div>
          </div>

        </div>

     
      </div>
         {/* Footer Bottom Section */}
         <div className="mt-6 md:mt-10 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm md:text-base text-gray-400">© 2024 Admin Panel. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default AdminFooter;
