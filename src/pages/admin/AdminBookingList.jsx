// import React, { useEffect, useState } from 'react';
// import AdminBookingCards from '../../components/ui/AdminBookingCards';

// import toast from 'react-hot-toast';
// import { axiosInstance } from '../../../config/axiosinstance';

// const AdminBookingList = () => {
//   const [booking, setBooking] = useState([]);

//   const fetchBooking = async () => {
//     try {
//       const response = await axiosInstance.get('/admin/allbookings', { withCredentials: true }); // Make sure cookies or tokens are properly sent
//     console.log(response)
//       if (response && response.data) {
//         setBooking(response.data.data || []);  // Update state with the data or empty array
//         console.log('Bookings fetched:', response.data.data);
//       } else {
//         console.warn('No data received from the server');
//         setBooking([]);
//       }
//     } catch (error) {
//       console.error(error);
      
//       // Check if the error is related to permissions
//       if (error.response?.status === 403) {
//         toast.error('Access Denied: You are not authorized to view this page');
//       } else {
//         toast.error('Failed to fetch booking');
//       }
//     }
//   };

//   useEffect(() => {
//     fetchBooking();
//   }, []);

//   return (
//     <div className="px-4 sm:px-8 md:px-16 lg:px-20 py-10">
//       <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl my-4">List of Bookings</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {booking.map((booking) => (
//           <AdminBookingCards key={booking._id} booking={booking} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdminBookingList;
import React, { useEffect, useState } from 'react';
import AdminBookingCards from '../../components/ui/AdminBookingCards';
import toast from 'react-hot-toast';
import { axiosInstance } from '../../../config/axiosinstance';

const AdminBookingList = () => {
  const [booking, setBooking] = useState([]);

  const fetchBooking = async () => {
    try {
      const response = await axiosInstance.get('/admin/allbookings', { withCredentials: true });
      console.log(response);
      if (response && response.data) {
        // Sort bookings by date (latest first) before setting the state
        const sortedBookings = response.data.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setBooking(sortedBookings || []);
        console.log('Bookings fetched:', sortedBookings);
      } else {
        console.warn('No data received from the server');
        setBooking([]);
      }
    } catch (error) {
      console.error(error);

      // Check if the error is related to permissions
      if (error.response?.status === 403) {
        toast.error('Access Denied: You are not authorized to view this page');
      } else {
        toast.error('Failed to fetch booking');
      }
    }
  };

  useEffect(() => {
    fetchBooking();
  }, []);

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-20 py-10">
      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl my-4">List of Bookings</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {booking.map((booking) => (
          <AdminBookingCards key={booking._id} booking={booking} />
        ))}
      </div>
    </div>
  );
};

export default AdminBookingList;
