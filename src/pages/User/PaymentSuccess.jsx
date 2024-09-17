import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../../config/axiosinstance';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const PaymentSuccess = () => {
  const [payment, setPayment] = useState({});
  const [booking, setBooking] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  const fetchPayment = async () => {
    try {
      const response = await axiosInstance({
        url: `/payment/updatepayment/${lastBooking._id}`,
        method: 'PUT',
        withCredentials: true,
      });

      setPayment(response?.data?.data || {});
      toast.success('Payment status updated');
      console.log(response);

      // Navigate to /user/home after successful payment update
      navigate('/user/home');

    } catch (error) {
      console.log(error);
      // toast.error('Failed to update payment status');
    }
  };

  const fetchBooking = async () => {
    try {
      const response = await axiosInstance({
        url: '/booking/allbookings',
        method: 'GET',
        withCredentials: true,
      });
      setBooking(response?.data?.data || []);
      console.log(response);
    } catch (error) {
      console.log(error);
      toast.error('Failed to fetch bookings');
    }
  };

  useEffect(() => {
    fetchPayment();
    fetchBooking();
  }, []);

  const lastBooking = booking.length > 0 ? booking[booking.length - 1] : null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 text-center">
        <div className="flex justify-center items-center mb-4">
          <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">Payment Successful!</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">Thank you for your payment. Your transaction has been completed successfully.</p>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 ease-in-out"
          onClick={fetchPayment} // Call fetchPayment function on button click
        >
          Continue
        </button>
        {lastBooking && (
          <div className="mt-6">
            <p className="text-gray-700 dark:text-gray-300">Booking ID: {lastBooking._id}</p>
            <p className="text-gray-700 dark:text-gray-300">Pickup Location: {lastBooking.pickuplocation}</p>
            <p className="text-gray-700 dark:text-gray-300">Drop-off Location: {lastBooking.dropofflocation}</p>
            <p className="text-gray-700 dark:text-gray-300">Total Cost: {lastBooking.totalcost}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentSuccess;
