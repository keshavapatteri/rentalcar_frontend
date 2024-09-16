import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../../config/axiosinstance';
import CarCards from '../../components/ui/Cards';
import toast from 'react-hot-toast';

const UserCarlistPage = () => {
  const [cars, setCars] = useState([]);
  const [userId, setUserId] = useState('');
  const [profile, setProfile] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const fetchProfileData = async () => {
    try {
      const response = await axiosInstance({
        url: '/user/profile',
        method: 'GET',
        withCredentials: true,
      });
      setProfile(response?.data?.data || {});
    } catch (error) {
      toast.error('Failed to fetch profile data');
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  const fetchCar = async () => {
    try {
      const response = await axiosInstance({
        url: "/car/carlist",
        method: "GET",
      });
      setCars(response?.data?.data || []);
    } catch (error) {
      toast.error("Failed to fetch cars");
    }
  };

  useEffect(() => {
    if (profile && profile._id) {
      setUserId(profile._id);
    }
  }, [profile]);

  useEffect(() => {
    fetchCar();
  }, []);

  const groupedCars = cars.reduce((acc, car) => {
    if (!acc[car.category]) {
      acc[car.category] = [];
    }
    acc[car.category].push(car);
    return acc;
  }, {});

  const categories = [
    'All',
    'Minivan',
    'Suv',
    'Muv',
    'Xuv',
    'Sedan',
    'Electrical',
    'Hybrid',
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredCars = selectedCategory === 'All' ? cars : groupedCars[selectedCategory] || [];

  return (
    <div className='px-4 sm:px-8 md:px-16 lg:px-20 py-10'>
      <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl mb-4'>List of Cars</h1>

      {/* Category Tabs */}
      <div className='flex mb-6 border-b border-gray-300'>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 text-sm font-medium ${selectedCategory === category ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'} hover:text-blue-500`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Display Cars */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <CarCards key={car._id} car={car} userId={userId} />
          ))
        ) : (
          <p className='text-gray-500'>No cars available in this category</p>
        )}
      </div>
    </div>
  );
};

export default UserCarlistPage;
