import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../../config/axiosinstance';
import toast from 'react-hot-toast';
const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [profile, setProfile] = useState(null);

  const fetchProfileData = async () => {
    try {
      const response = await axiosInstance({
        url: '/user/profile', // Ensure this endpoint is correct
        method: 'GET',
        withCredentials: true,
      });
      setProfile(response?.data?.data || {});
      console.log(response); // Log response for debugging
    } catch (error) {
      toast.error('Failed to fetch profile data');
      console.error(error); // Log the error for debugging
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  const fetchWishList = async (userId) => {
    try {
      const response = await axiosInstance.get(`/wishlist/user/${userId}`, { withCredentials: true });
      console.log('wish list response:', response.data); // Debugging Log
      setWishlist(response?.data?.data?.cars || []); // Set the cars array to state
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    if (profile?._id) {
      fetchWishList(profile._id);
    }
  }, [profile]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Wishlist</h1>
      <div className="flex flex-wrap gap-4">
        {wishlist.length > 0 ? (
          wishlist.map(car => (
            <div key={car._id} className="bg-white shadow-md rounded-lg overflow-hidden w-full md:w-1/3 lg:w-1/4 p-4">
              <img src={car.image} alt={car.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{car.title}</h2>
                <p className="text-gray-600">{car.model} ({car.year})</p>
                <p className="text-gray-800">Price per day: ₹{car.priceperday}</p>
                <p className="text-gray-600">Location: {car.location}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
