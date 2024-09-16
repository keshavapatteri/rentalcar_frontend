import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { axiosInstance } from '../../../config/axiosinstance';

const MyBookingCards = ({ bookings }) => {
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [rating, setRating] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [selectedBooking, setSelectedBooking] = useState(null);

  const handleDeleteMyBooking = async (bookingId) => {
    try {
      await axiosInstance.delete(`/booking/deletebooking/${bookingId}`);
      alert('Booking deleted successfully!');
      window.location.reload();
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();

    const reviewData = {
      userId: selectedBooking.userId,
      carId: selectedBooking.carId._id,
      rating,
      reviewText,
    };

    try {
      await axiosInstance.post('/review/create', reviewData, {
        withCredentials: true,
      });
      alert('Review submitted successfully!');
      setShowReviewModal(false);
      setRating('');
      setReviewText('');
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };




  return (
    <>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {bookings.map((booking) => (
    <div key={booking._id} className="border p-5 rounded-lg shadow-lg bg-white dark:bg-gray-800">
      <figure className="relative">
        <img
          src={booking.carId.image}
          alt={booking.carId.title}
          className="w-full h-auto object-cover rounded-md"
        />
        <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
          {booking.bookingStatus}
        </span>
      </figure>
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-3">
        {booking.carId.title} - {booking.carId.model}
      </h2>
      <p className="text-gray-600 dark:text-gray-400">Location: {booking.carId.location}</p>
      <p className="text-gray-600 dark:text-gray-400">Price per day: ₹{booking.carId.priceperday}</p>
      <p className="text-gray-600 dark:text-gray-400">
        Pickup: {booking.pickuplocation} on {booking.pickupdate.split('T')[0]} at {booking.pickuptime}
      </p>
      <p className="text-gray-600 dark:text-gray-400">
        Dropoff: {booking.dropofflocation} on {booking.dropoffdate.split('T')[0]} at {booking.dropofftime}
      </p>
      <p className="text-gray-600 dark:text-gray-400">Total Cost: ₹{booking.totalcost}</p>
      <p className="text-gray-600 dark:text-gray-400">Payment Status: {booking.paymentStatus}</p>

      <div className="flex justify-between items-center mt-4 space-x-4">
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          onClick={() => handleDeleteMyBooking(booking._id)}
        >
          DELETE
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => {
            setSelectedBooking(booking);
            setShowReviewModal(true);
          }}
        >
          Add Review
        </button>
      </div>
    </div>
  ))}
</div>


      {showReviewModal && (
        <Dialog open={showReviewModal} onClose={() => setShowReviewModal(false)}>
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto">
              <Dialog.Title className="text-xl font-bold">Add Review</Dialog.Title>
              <form className="mt-4" onSubmit={handleSubmitReview}>
                <div className="mb-4">
                  <label htmlFor="rating" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Rating</label>
                  <div className="flex space-x-2 mt-2">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <button
                        key={num}
                        type="button"
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${num <= rating ? 'bg-yellow-400 text-white' : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300'}`}
                        onClick={() => setRating(num)}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="reviewText" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Review</label>
                  <textarea
                    id="reviewText"
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                    placeholder="Write your review here"
                    rows="3"
                    required
                  />
                </div>

                <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                  Submit Review
                </button>
              </form>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </>
  );
};

export default MyBookingCards;
