import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../../config/axiosinstance';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const CarlistPage = () => {
  const [cars, setCars] = useState([]);

  const fetchCar = async () => {
    try {
      const response = await axiosInstance({
        url: "/car/carlist",
        method: "GET",
      });
      setCars(response?.data?.data || []);
      console.log(response);
    } catch (error) {
      toast.error("Failed to fetch cars");
    }
  };

  useEffect(() => {
    fetchCar();
  }, []);

  return (
    <div className="container mx-auto p-4 lg:p-8">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800">Available Cars</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car) => (
          <div
            key={car._id}
            className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={car.image}
              alt={car.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">{car.title}</h2>
              
              <p className="text-lg text-gray-700 mb-2">Model: <span className="font-medium">{car.model}</span></p>
              <p className="text-xl text-blue-600 font-semibold mb-4">₹{car.priceperday}/day</p>
              <p className="text-gray-600 mb-2">Capacity: <span className="font-medium">{car.capacity} seats</span></p>
              <p className="text-gray-600 mb-2">Fuel: <span className="font-medium">{car.fuel}</span></p>
              <p className="text-gray-600 mb-4">Transmission: <span className="font-medium">{car.transmission}</span></p>
              <Link to="/signup">
                <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarlistPage;
