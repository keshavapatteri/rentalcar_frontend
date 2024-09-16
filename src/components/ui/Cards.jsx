import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { axiosInstance } from '../../../config/axiosinstance';
import toast from 'react-hot-toast';
import { Fuel,Calendar,Cable,AudioLines,KeySquare,BluetoothSearching,SunSnow,Wifi,Locate } from 'lucide-react'; // Update import to 'lucide-react'

const CarCards = ({ car, userId }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [removing, setRemoving] = useState(false);

  useEffect(() => {
    const checkWishlist = async () => {
      try {
        const response = await axiosInstance.get(`/wishlist/user/${userId}`, {
          withCredentials: true,
        });
        console.log(response.data); // Add this line to see the response data
        setIsWishlisted(response.data.isWishlisted);
      } catch (error) {
        console.error('Error fetching wishlist status:', error);
        toast.error("Failed to fetch wishlist status");
      }
    };

    if (userId) {
      checkWishlist();
    }
  }, [userId]);

  const handleWishlistToggle = async () => {
    try {
      if (isWishlisted) {
        // Removing from wishlist
        setRemoving(true);
        setTimeout(async () => {
          await axiosInstance.post('/wishlist/add-remove',
            { carId: car._id, userId },
            { withCredentials: true }
          );
          setIsWishlisted(false);
          setRemoving(false);
          toast.success("Removed from wishlist");
        }, 300); // Adjust the timeout duration as needed
      } else {
        // Adding to wishlist
        await axiosInstance.post('/wishlist/add-remove',
          { carId: car._id, userId },
          { withCredentials: true }
        );
        setIsWishlisted(true);
        toast.success("Added to wishlist");
      }
    } catch (error) {
      console.error('Error updating wishlist:', error);
      toast.error("Failed to update wishlist");
    }
  };

  return (
    <div className="max-w-md mx-auto my-4 relative">
      <div className="bg-white shadow-xl rounded-xl overflow-hidden">
        <figure className="relative">
          <img
            src={car?.image}
            alt={car?.title}
            className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-110"
          />
          <button
            onClick={handleWishlistToggle}
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
          >
            <Heart
              className={`cursor-pointer transition-colors duration-300 ${isWishlisted ? 'text-red-500 fill-red-500' : removing ? 'text-gray-400 fill-gray-400' : 'text-gray-400 fill-gray-400'}`}
            />
          </button>
        </figure>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">{car?.title}</h2>
          <h2 className="text-2xl font-bold text-gray-800">{car?.model}</h2>
          <div className="grid grid-cols-2 gap-4 mt-4 text-gray-600">
          <div className="flex items-center space-x-2">
            <strong> <Calendar /></strong>
            <span>{car?.year}</span>
          </div>


          <p><strong>Capacity:</strong> {car?.capacity}</p>
          <div className="flex items-center space-x-2">
            <strong><Fuel /></strong>
            <span>{car?.fuel}</span>
          </div>

          <p><strong>Transmission:</strong> {car?.transmission}</p>
        </div>
        <div className="mt-6 text-right">
          <Link to={`/user/car-details/${car._id}`}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              More Details
            </button>
          </Link>
          <div className="flex justify-between items-center pt-5 space-x-4">
  <div className="relative group">
    <Wifi className="hover:text-blue-500 transition-colors duration-300" />
    <span className="absolute left-1/2 -translate-x-1/2 bottom-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Wifi
    </span>
  </div>
  <div className="relative group">
    <BluetoothSearching className="hover:text-blue-500 transition-colors duration-300" />
    <span className="absolute left-1/2 -translate-x-1/2 bottom-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Bluetooth
    </span>
  </div>
  <div className="relative group">
    <SunSnow className="hover:text-blue-500 transition-colors duration-300" />
    <span className="absolute left-1/2 -translate-x-1/2 bottom-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Air Condition
    </span>
  </div>
  
  <div className="relative group">
    <KeySquare className="hover:text-blue-500 transition-colors duration-300" />
    <span className="absolute left-1/2 -translate-x-1/2 bottom-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      SpareKey
    </span>
  </div>
  {/* <div className="relative group">
    <AudioLines className="hover:text-blue-500 transition-colors duration-300" />
    <span className="absolute left-1/2 -translate-x-1/2 bottom-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      AudioLines
    </span>
  </div> */}
  {/* <div className="relative group">
    <Cable className="hover:text-blue-500 transition-colors duration-300" />
    <span className="absolute left-1/2 -translate-x-1/2 bottom-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Cable
    </span>
  </div> */}
  <div className="relative group">
    <Locate className="hover:text-blue-500 transition-colors duration-300" />
    <span className="absolute left-1/2 -translate-x-1/2 bottom-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    Locate
    </span>
  </div>
  
</div>





          
        </div>
      </div>
    </div>
    </div >
  );
};

export default CarCards;
