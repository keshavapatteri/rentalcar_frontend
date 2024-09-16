import React from 'react';
import { axiosInstance } from '../../../config/axiosinstance';
import { Link } from 'react-router-dom';

const AdminReviewListCards = ({ car, user, rating, reviewText, reviewDate, carId, userId, ReviewId }) => {

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

  return (
    <div className="max-w-md mx-auto my-4">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body p-6">
          <p className="text-gray-600">
            <strong>Review ID:</strong> {ReviewId || 'Review ID not available'}
          </p>
          <p className="text-gray-600">
            <strong>User ID:</strong> {userId || 'User ID not available'}
          </p>
          <p className="text-gray-600">
            <strong>Car ID:</strong> {carId || 'Car ID not available'}
          </p>
          <p className="text-gray-600 flex items-center">
            <strong>Rating:</strong>{' '}
            {rating !== undefined ? getStarIcons(rating) : 'No rating available'}
          </p>
          <p className="text-gray-600">
            <strong>Review:</strong> {reviewText || 'No review text'}
          </p>
          <p className="text-gray-600">
            <strong>Date:</strong> {formattedDate}
          </p>
          <div>
            <button className="btn btn-error" onClick={handleDeleteReview}>
              DELETE
            </button>
            <Link to={`/admin/Admin-Update/${ReviewId}`}>
              <button className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-lg py-2 px-6 shadow-md hover:from-red-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-red-300 ml-8">
                EDIT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminReviewListCards;
