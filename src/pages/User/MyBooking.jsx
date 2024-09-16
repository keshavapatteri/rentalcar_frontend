import React, { useEffect, useState } from 'react';

import MyBookingCards from '../../components/ui/MyBookingCards';
import toast from 'react-hot-toast'; // Assuming you're using react-toastify for error handling
import { axiosInstance } from '../../../config/axiosinstance';

const MyBooking = () => {
  const [booking, setBooking] = useState([]);
  const [user, setUser] = useState(null);

  // Fetch user profile when the component mounts
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axiosInstance.get('/user/profile', {
          withCredentials: true,
        });
        const fetchedUser = response?.data?.data;
        setUser(fetchedUser);
        console.log("fetchUser", fetchedUser);

        // Fetch bookings only after setting the user and making sure user exists
        if (fetchedUser?._id) {
          fetchBooking(fetchedUser._id); // Pass the user ID to fetchBooking
        }
      } catch (error) {
        console.log("Error fetching user profile:", error.response?.data?.message || error.message);
        toast.error("Failed to fetch user profile");
      }
    };
    fetchUser();
  }, []); // This useEffect runs once on component mount

  // Fetch bookings for the user
  const fetchBooking = async (userId) => {
    try {
      const response = await axiosInstance.get(`/booking/getbookinguser/${userId}`, {
        withCredentials: true,
      });
      setBooking(response?.data?.data || []); // Set bookings if found, else set an empty array
      console.log('Bookings fetched:', response.data.data);
    } catch (error) {
      console.log("Error fetching bookings:", error.response?.data?.message || error.message);
      toast.error("Failed to fetch bookings");
    }
  };

 

  return (
    <div>
      {/* Map over the booking data */}
      {booking.length > 0 ? (
        <MyBookingCards bookings={booking} />
      ) : (
        <p>No bookings available.</p>
      )}
    </div>
  );
};

export default MyBooking;
