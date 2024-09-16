import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { axiosInstance } from '../../../config/axiosinstance';

const AdminReviewUpdate = () => {
  const {carId}= useParams();
  const { ReviewId } = useParams();
  const [reviewData, setReviewData] = useState({
    rating: '',
    reviewText: '',
    reviewDate: '',
  });
  const navigate = useNavigate();

  // Fetch the existing review data for the ReviewId
  useEffect(() => {
    const fetchReviewData = async () => {
      try {                           //admin/allreview
        const response = await axiosInstance.get(`/admin/car/${carId}`);
        
        setReviewData({
          rating: response.data.rating,
          reviewText: response.data.reviewText,
          reviewDate: new Date(response.data.reviewDate).toISOString().split('T')[0], // Format date as YYYY-MM-DD
        });
      } catch (error) {
        console.error('Error fetching review data:', error);
        toast.error('Failed to load review data');
      }
    };

    fetchReviewData();
  }, [ReviewId]);

  const handleChange = (e) => {
    setReviewData({
      ...reviewData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.put(`/admin/reviewupdate/${ReviewId}`, reviewData);
      console.log("hyy",reviewData);
      toast.success('Review updated successfully!');
      navigate('/admin/reviews');  // Redirect to the list of reviews after update
    } catch (error) {
      console.error('Error updating review:', error);
      toast.error('Failed to update review');
    }
  };

  return (
    <div className="max-w-lg mx-auto my-8 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Edit Review</h1>
      <form onSubmit={handleSubmit}>
        {/* Rating Field */}
        <div className="mb-4">
          <label htmlFor="rating" className="block text-gray-700 font-bold mb-2">
            Rating
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={reviewData.rating}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            min="1"
            max="5"
            required
          />
        </div>

        {/* Review Text Field */}
        <div className="mb-4">
          <label htmlFor="reviewText" className="block text-gray-700 font-bold mb-2">
            Review Text
          </label>
          <textarea
            id="reviewText"
            name="reviewText"
            value={reviewData.reviewText}
            onChange={handleChange}
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Review Date Field */}
        <div className="mb-4">
          <label htmlFor="reviewDate" className="block text-gray-700 font-bold mb-2">
            Review Date
          </label>
          <input
            type="date"
            id="reviewDate"
            name="reviewDate"
            value={reviewData.reviewDate}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Update Review
        </button>
      </form>
    </div>
  );
};

export default AdminReviewUpdate;



// import React from 'react'

// const AdminReviewUpdate = () => {
//   return (
//     <div>
//       <h1>AdminReviewUpdate</h1>
//     </div>
//   )
// }

// export default AdminReviewUpdate
/// please call with  review id ivdea car id vachanu vilikunath