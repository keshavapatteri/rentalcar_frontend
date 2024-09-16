import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../../config/axiosinstance';
import toast from 'react-hot-toast';
import AdminReviewListCards from '../../components/ui/AdminReviewListCards';

const AdminReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchReviews = async () => {
    try {
      const response = await axiosInstance({
        url: "/admin/allreview",
        method: "GET",
        withCredentials: true,
      });

      // Assuming response.data.data is the array of reviews
      setReviews(response?.data?.data || []);
      console.log(response.data);

    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch reviews");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  return (
    <div className='px-4 sm:px-8 md:px-16 lg:px-20 py-10'>
      <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl my-4'>List of Reviews</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <AdminReviewListCards
              key={review._id}
              car={review.car}        // Ensure these match the actual structure of your review object
              user={review.user}
              rating={review.rating}
              reviewText={review.reviewText}
              reviewDate={review.reviewDate}  // Fixed the prop name here
              userId={review.user}    // Add these if they exist in your review object
              carId={review.car}  
              ReviewId={review._id}     // Add these if they exist in your review object
            />
          ))
        ) : (
          <p>No reviews available</p>
        )}
      </div>
    </div>
  );
};

export default AdminReviewList;