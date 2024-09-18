// import React from 'react';
// import { Link } from 'react-router-dom';

// const UserFooter = () => {
//   return (
//     <footer className="bg-gray-900 text-gray-300 py-10">
//       <div className="container mx-auto ml-6 px-4">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

//           {/* Section 1: Get in Touch */}
//           <div className="flex flex-col items-center md:items-start">
//             <h2 className="text-2xl font-semibold text-white mb-4">Get in Touch</h2>
//             <Link to="/user/contactpage" className="mb-2 hover:text-blue-400 transition duration-300">
//               Contact Us
//             </Link>
//             <Link to="/user/aboutpage" className="mb-2 hover:text-green-400 transition duration-300">
//               About Us
//             </Link>
//             <Link to="/user/Tearms" className="hover:text-yellow-400 transition duration-300">
//               Terms & Conditions
//             </Link>
//           </div>

//           {/* Section 2: Quick Links */}
//           <div className="flex flex-col items-center md:items-start">
//             <h2 className="text-2xl font-semibold text-white mb-4">Quick Links</h2>
//             <Link to="/user/home" className="mb-2 hover:text-red-400 transition duration-300">
//               Home
//             </Link>
//             <Link to="/user/car" className="hover:text-red-400 transition duration-300">
//               Car Details
//             </Link>
//           </div>

//           {/* Section 3: User Area */}
//           <div className="flex flex-col items-center md:items-start">
//             <h2 className="text-2xl font-semibold text-white mb-4">User Area</h2>
//             <Link to="/user/myprofile" className="mb-2 hover:text-blue-400 transition duration-300">
//               Profile
//             </Link>
//             <Link to="/user/mybooking" className="mb-2 hover:text-blue-400 transition duration-300">
//               My Bookings
//             </Link>
//             <Link to="/user/wishlist" className="hover:text-blue-400 transition duration-300">
//               My Wishlist
//             </Link>
//           </div>

//         </div>

//         {/* Footer Bottom Section */}
//         <div className="mt-10 border-t border-gray-700 pt-4 text-center">
//           <p className="text-sm text-gray-400">© 2024 Auto Cars. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default UserFooter;


import React from 'react';
import { Link } from 'react-router-dom';

const UserFooter = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center md:text-left">

          {/* Section 1: Get in Touch */}
          <div className="flex flex-col items-center md:items-start mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">Get in Touch</h2>
            <Link to="/user/contactpage" className="mb-2 hover:text-blue-400 transition duration-300">
              Contact Us
            </Link>
            <Link to="/user/aboutpage" className="mb-2 hover:text-green-400 transition duration-300">
              About Us
            </Link>
            <Link to="/user/tearms" className="hover:text-yellow-400 transition duration-300">
              Terms & Conditions
            </Link>
          </div>

          {/* Section 2: Quick Links */}
          <div className="flex flex-col items-center md:items-start mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">Quick Links</h2>
            <Link to="/user/home" className="mb-2 hover:text-red-400 transition duration-300">
              Home
            </Link>
            <Link to="/user/car" className="hover:text-red-400 transition duration-300">
              Car Details
            </Link>
          </div>

          {/* Section 3: User Area */}
          <div className="flex flex-col items-center md:items-start mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">User Area</h2>
            <Link to="/user/myprofile" className="mb-2 hover:text-blue-400 transition duration-300">
              Profile
            </Link>
            <Link to="/user/mybooking" className="mb-2 hover:text-blue-400 transition duration-300">
              My Bookings
            </Link>
            <Link to="/user/wishlist" className="hover:text-blue-400 transition duration-300">
              My Wishlist
            </Link>
          </div>

        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-xs sm:text-sm text-gray-400">© 2024 Auto Cars. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default UserFooter;
