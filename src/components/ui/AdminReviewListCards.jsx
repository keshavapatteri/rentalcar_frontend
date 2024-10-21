import React from 'react';
import { axiosInstance } from '../../../config/axiosinstance';
import { Link } from 'react-router-dom';

const AdminReviewListCards = ({ car,cars, user,image,model, rating, reviewText, reviewDate, carId, userId, ReviewId }) => {

  const handleDeleteReview = async () => {
    try {
      if (confirm("Are you sure you want to delete this review?")) {
        await axiosInstance.delete(`/admin/deleted/${ReviewId}`, {
          withCredentials: true, // Ensures credentials are sent
        });
        alert('Review deleted successfully!');
        window.location.reload(); // Reloads the page to reflect changes
      }
    } catch (error) {
      console.error('Error deleting review:', error);
      alert('Failed to delete review');
    }
  };
  // Convert reviewDate to a readable format
  const formattedDate = reviewDate
    ? new Date(reviewDate).toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      })
    : 'Date not available';

  // Custom star icons (SVG)
  const FullStarIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="yellow"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3.75l2.77 5.614 6.17.896-4.464 4.353 1.053 6.144L12 17.354l-5.53 2.903 1.054-6.144L3.06 10.26l6.17-.896L12 3.75z"
      />
    </svg>
  );

  const HalfStarIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="yellow"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3.75l2.77 5.614 6.17.896-4.464 4.353 1.053 6.144L12 17.354V3.75z"
      />
    </svg>
  );

  const EmptyStarIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3.75l2.77 5.614 6.17.896-4.464 4.353 1.053 6.144L12 17.354l-5.53 2.903 1.054-6.144L3.06 10.26l6.17-.896L12 3.75z"
      />
    </svg>
  );

  // Generate custom star icons based on rating
  const getStarIcons = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    return (
      <>
        {Array(fullStars)
          .fill()
          .map((_, index) => (
            <FullStarIcon key={`full-${index}`} />
          ))}
        {halfStar && <HalfStarIcon />}
        {Array(emptyStars)
          .fill()
          .map((_, index) => (
            <EmptyStarIcon key={`empty-${index}`} />
          ))}
      </>
    );
  };

  return (<div className="max-w-md mx-auto my-8">
    <div className="card bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
      <div className="card-body p-6">
      {image && (
          <img src={image} alt="Car Image" className="rounded-md w-full h-48 object-cover mb-4 shadow-md"/>
        )}
 <p className="text-gray-700 text-sm mb-2">
          <strong className="text-gray-900">Car Brand:</strong> {cars || 'Car Brand not available'}
        </p>
        <p className="text-gray-700 text-sm mb-2">
          <strong className="text-gray-900">Car Model:</strong> {model || 'Car Brand not available'}
        </p>
  
           <p className="text-gray-700 text-sm mb-2">
          <strong className="text-gray-900">User Name:</strong> {user || 'User Name not available'}
        </p>
       
        <p className="text-gray-700 text-sm mb-2">
          <strong className="text-gray-900">User ID:</strong> {userId || 'User ID not available'}
        </p>
     
        <p className="text-gray-700 text-sm mb-2">
          <strong className="text-gray-900">Car ID:</strong> {carId || 'Car ID not available'}
        </p>
       
        <p className="text-gray-700 text-sm mb-2">
          <strong className="text-gray-900">Review ID:</strong> {ReviewId || 'Review ID not available'}
        </p>
        <p className="text-gray-700 flex items-center mb-4">
          <strong className="text-gray-900">Rating:</strong>{' '}
          {rating !== undefined ? getStarIcons(rating) : 'No rating available'}
        </p>
  
        <p className="text-gray-700 text-sm mb-4">
          <strong className="text-gray-900">Review:</strong> {reviewText || 'No review text'}
        </p>
  
        <p className="text-gray-700 text-sm mb-4">
          <strong className="text-gray-900">Date:</strong> {formattedDate}
        </p>
  
        <div className="flex justify-end">
          {/* Uncomment if you want to add a delete button */}
          {/* <button className="btn btn-error bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300">
            DELETE
          </button> */}
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default AdminReviewListCards;
