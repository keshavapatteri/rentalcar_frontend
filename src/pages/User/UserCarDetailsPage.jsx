import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { axiosInstance } from '../../../config/axiosinstance';

const UserCarDetailsPage = () => {
  const [carDetails, setCarDetails] = useState({});
  const [reviews, setReviews] = useState([]);

  const { id } = useParams();

  const fetchCarDetails = async () => {
    try {
      const response = await axiosInstance.get(`/car/details/${id}`);
      setCarDetails(response?.data?.data);
    } catch (error) {
      console.error('Error fetching car details:', error);
    }
  };

 
  const fetchCarReviews = async () => {
    try {
      const response = await axiosInstance.get(`/review/car/${id}`);
      console.log('Review Response:', response.data); // Debugging Log
      setReviews(response?.data?.data || []); // Access the data directly
  } catch (error) {
      console.error('Error fetching car reviews:', error);
  }
};

  useEffect(() => {
    fetchCarDetails();
    fetchCarReviews();
  }, [id]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Car Details Page</h1>
      <div className="flex flex-col md:flex-row">
        {/* Left side: Image */}
        <div className="flex-shrink-0 md:w-1/2">
          <figure className="relative h-64 md:h-full overflow-hidden rounded-xl">
            <img
              src={carDetails?.image}
              alt={carDetails?.title}
              className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
            />
          </figure>
        </div>

        {/* Right side: Details */}
        <div className="md:w-1/2 mt-4 md:mt-10 pl-10">
          <h2 className="text-4xl font-semibold">{carDetails?.title}</h2>    
          <h3 className="text-xl font-semibold pt-2"><strong>Model:</strong> {carDetails?.model}</h3>              
          <p className="mt-2"><strong>Year:</strong> {carDetails?.year}</p>
          <p className="mt-2"><strong>Capacity:</strong> {carDetails?.capacity}</p>
          <p className="mt-2"><strong>Fuel:</strong> {carDetails?.fuel}</p>
          <p className="mt-2"><strong>Mileage:</strong> {carDetails?.mileage}</p>
          <p className="mt-2"><strong>Status:</strong> {carDetails?.status}</p>
          <p className="mt-2"><strong>Color:</strong> {carDetails?.color}</p>
          <p className="mt-2"><strong>Registration Number:</strong> {carDetails?.registrationnumber}</p>
          <p className="mt-2"><strong>Location:</strong> {carDetails?.location}</p>
          <p className="mt-2"><strong>Insurance Details:</strong> {carDetails?.insurancedetails}</p>
          <div className='mt-5'>
            
            
          <Link to={`/user/car-details/booking/${carDetails._id}`}>
              <button className="btn btn-primary">BOOK NOW</button>
            </Link>
          </div>
        </div>
      </div>
      {reviews.length > 0 ? (
  <div>
    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 text-center pt-8">
      Car Reviews
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
      {reviews.map((review) => (
        <div
          key={review._id}
          className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg pt-10"
        >
          <img
            src="https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_640.png"
            alt={review.user.username}
            className="w-16 h-16 rounded-full border-2 border-gray-300 dark:border-gray-600 mb-4"
          />
          <div className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            {review.user.username}
          </div>
          <div className="mt-2 text-gray-700 dark:text-gray-300 text-center">Review Text:
            {review.reviewText}
          </div>
          <div className="mt-3  dark:text-yellow-400">Review Rating:
            {"⭐".repeat(review.rating)}
            <span className="text-gray-600 dark:text-gray-300">Review Rating:({review.rating}/5)</span>
          </div>
          <div className="mt-2 text-sm font-medium text-blue-500 dark:text-blue-400">Review Car Id:
            {review.car}
          </div>
          <div className="text-gray-500 dark:text-gray-400 text-xs mt-2">Review Date:
            {new Date(review.reviewDate).toLocaleDateString()} at {new Date(review.reviewDate).toLocaleTimeString()}
          </div>
        </div>
      ))}
    </div>
  </div>
) : (
  <p className="text-gray-700 dark:text-gray-300 text-center mt-10">No reviews available.</p>
)}


    </div>
  );
};

export default UserCarDetailsPage;
