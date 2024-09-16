import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { axiosInstance } from '../../../config/axiosinstance';
import toast from 'react-hot-toast';
const AdminHomePage = () => {
  const[review,setReview]=useState(0)
const[total,setTotal]=useState(0)
const[car,setCar]=useState(0)
const[booking,setBooking]=useState(0)

  const fetchtotalUser = async () => {
    try {
        const response = await axiosInstance({
            url: "/admin/totalUser",
            method: "GET",
        });
        setTotal(response?.data || []);
        console.log(response);

    } catch (error) {
        console.log(error);
        toast.error("Failed to fetch cars");
    }
};
useEffect(() => {
  fetchtotalUser();
}, []);

const fetchtotalCar = async () => {
  try {
      const response = await axiosInstance({
          url: "/admin/totalCar",
          method: "GET",
      });
      setCar(response?.data || []);
      console.log(response);

  } catch (error) {
      console.log(error);
      toast.error("Failed to fetch cars");
  }
};


useEffect(() => {
  fetchtotalCar();
}, []);


const fetchtotalBooking = async () => {
  try {
      const response = await axiosInstance({
          url: "/admin/totalBooking",
          method: "GET",
      });
      setBooking(response?.data || []);
      console.log(response);

  } catch (error) {
      console.log(error);
      toast.error("Failed to fetch cars");
  }
};


useEffect(() => {
  fetchtotalBooking();
}, []);


const fetchtotalReview = async () => {
  try {
      const response = await axiosInstance({
          url: "/admin/totalReview",
          method: "GET",
      });
      setReview(response?.data || []);
      console.log(response);

  } catch (error) {
      console.log(error);
      toast.error("Failed to fetch cars");
  }
};


useEffect(() => {
  fetchtotalReview();
}, []);







  return (




    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 p-8">
      <div className="container mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Admin Dashboard
          </h1>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Add Car */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-4">ADD CAR</h2>
              <p className="text-sm mb-4">Manage and add new cars to the system.</p>
              <Link to="/admin/Admin-car">
                <button className="bg-white text-blue-700 font-semibold px-6 py-2 rounded-lg shadow hover:bg-blue-200 transition-colors duration-300">
                  Click Here
                </button>
              </Link>
            </div>

            {/* Get All Cars */}
            <div className="bg-gradient-to-r from-green-500 to-green-700 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-4">GET ALL CARS</h2>
              <p className="text-sm mb-4">View all available cars in the system.</p>
              <Link to="/admin/Admin-carlist">
                <button className="bg-white text-green-700 font-semibold px-6 py-2 rounded-lg shadow hover:bg-green-200 transition-colors duration-300">
                  Click Here
                </button>
              </Link>
            </div>

            {/* Get All Booking List */}
            <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-4">GET ALL BOOKING LIST</h2>
              <p className="text-sm mb-4">View all booking records.</p>
              <Link to="/admin/Admin-bookinglist">
                <button className="bg-white text-purple-700 font-semibold px-6 py-2 rounded-lg shadow hover:bg-purple-200 transition-colors duration-300">
                  Click Here
                </button>
              </Link>
            </div>

            {/* Get All Reviews */}
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-4">GET ALL REVIEW LIST</h2>
              <p className="text-sm mb-4">See customer reviews and ratings.</p>
              <Link to="/admin/Admin-ReviewList/:id">
                <button className="bg-white text-yellow-700 font-semibold px-6 py-2 rounded-lg shadow hover:bg-yellow-200 transition-colors duration-300">
                  Click Here
                </button>
              </Link>
            </div>



            {/* Get All User message */}
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-4">GET ALL Meesage</h2>
              <p className="text-sm mb-4">message</p>
              <Link to="/admin/contact-message">
                <button className="bg-white text-yellow-700 font-semibold px-6 py-2 rounded-lg shadow hover:bg-yellow-200 transition-colors duration-300">
                  Click Here
                </button>
              </Link>
            </div>







            {/* Get All Users */}
            <div className="bg-gradient-to-r from-pink-500 to-pink-700 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-4">GET ALL USER LIST</h2>
              <p className="text-sm mb-4">Manage users and their data.</p>
              <Link to="/admin/Admin-AdminUserList/:id">
                <button className="bg-white text-pink-700 font-semibold px-6 py-2 rounded-lg shadow hover:bg-pink-200 transition-colors duration-300">
                  Click Here
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>


 



















      <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto">
        <div className="bg-white shadow-md rounded-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">
           Details
          </h1>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Total Cars */}
            <div className="bg-white border-2 border-blue-500 p-6 rounded-lg shadow-lg hover:bg-blue-50 transition-colors duration-300">
              <h2 className="text-xl font-semibold text-blue-500">Total Cars</h2>
              <p className="text-4xl font-bold text-gray-800 mt-2">{car.total} </p> {/* Example static value */}
            </div>

            {/* Total Bookings */}
            <div className="bg-white border-2 border-green-500 p-6 rounded-lg shadow-lg hover:bg-green-50 transition-colors duration-300">
              <h2 className="text-xl font-semibold text-green-500">Total Bookings</h2>
              <p className="text-4xl font-bold text-gray-800 mt-2">{booking.total}</p> {/* Example static value */}
            </div>

            {/* Total Users */}
            <div className="bg-white border-2 border-purple-500 p-6 rounded-lg shadow-lg hover:bg-purple-50 transition-colors duration-300">
              <h2 className="text-xl font-semibold text-purple-500">Total Users</h2>
              <p className="text-4xl font-bold text-gray-800 mt-2">{total.total}</p> {/* Example static value */}
            </div>


               {/* Total Review */}
               <div className="bg-white border-2 border-purple-500 p-6 rounded-lg shadow-lg hover:bg-purple-50 transition-colors duration-300">
              <h2 className="text-xl font-semibold text-purple-500">Total Review</h2>
              <p className="text-4xl font-bold text-gray-800 mt-2">{review.total}</p> {/* Example static value */}
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  );
};

export default AdminHomePage;
