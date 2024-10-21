

// import { toast } from 'react-hot-toast'; // Assuming you're using react-hot-toast for notifications
// import { useState } from 'react';
// import { axiosInstance } from '../../../config/axiosinstance';

// const AdminBookingCards = ({ booking }) => {
//   const [status, setStatus] = useState(null); // Store updated status here

//   const {
//     userId,
//     carId,
//     pickuplocation,
//     pickupdate,
//     pickuptime,
//     dropofflocation,
//     dropoffdate,
//     dropofftime,
//     totalcost,
//     paymentStatus,
//   } = booking;

//   const handleFetchStatus = async () => {
//     try {
//       const response = await axiosInstance.put(
//         `/admin/bookingchange/${booking._id}`,
//         {},
//         { withCredentials: true }
        
//       );
//       setStatus(response?.data?.data || {}); // Update the status state with response
//       toast.success('Booking status updated');
//     } catch (error) {
//       console.error('Error updating status:', error);
//       toast.error('Failed to update booking status');
//     }
//   };

//   const fetchnodemailer = async () => {
//     try {
//       const response = await axiosInstance.post('/nodemailer/create-message', {
//         to: userId.email, // Send to the user's email                               
//         subject: 'Booking Confirmation',
//         text: `Your booking for the car with ID ${carId._id} has been confirmed.`,
//         html: `
//           <h1>Dear ${userId.name},</h1>
//           <h3 style="font-size: 1.25rem; font-weight: bold; color: blue;">🧳 Get set ready for your journey with Auto Cars</h3>
//           <h5 style="font-size: 1rem; font-weight: 600; color: gray;">🚍 Your Car has been Scheduled. Below are the vehicle details:</h5>
//           <p style="font-size: 1rem; color: gray;">
//             <strong>Journey Details for travel on:</strong> ${pickupdate} 🎫<br>
//             <strong>Car Id:</strong> ${carId._id}<br>
//             <strong>Trip:</strong> ${pickuplocation} to ${dropofflocation}<br>
//           </p>
//           <h1 style="font-size: 1.25rem; font-weight: bold; color: green;">Boarding Details 🗺</h1>
//           <p>
//             <strong>Pickup Location:</strong> ${pickuplocation}<br>
//             <strong>Pickup Date:</strong> ${pickupdate}<br>
//             <strong>Pickup Time:</strong> ${pickuptime}<br><br>
//             <strong>Your Car Details 🚌</strong><br>
//             <strong>Car Number:</strong> ${carId.registrationnumber}<br>
//             <strong>Car Brand:</strong> ${carId.model}<br>
//             <strong>Car Year:</strong> ${carId.year}<br>
//             <strong>Car Fuel:</strong> ${carId.fuel}<br><br>
//             <strong>User Details:</strong><br>
//             <strong>User Id:</strong> ${userId._id || `user not available`}<br>
//             <strong>Name:</strong> ${userId.name}<br>
//             <strong>Address:</strong> ${userId.address}<br>
//             <strong>Phone Number:</strong> ${userId.phonenumber}<br>
//             <strong>Email:</strong> ${userId.email}
//           </p>
//           <p>Please reach your pickup point 15 minutes before pickup time for a hassle-free experience.</p>
//           <p>Regards,<br>Auto Cars</p>
//         `,
//       });

//       toast.success('Booking confirmation email sent successfully');
//     } catch (error) {
//       toast.error('Failed to send booking confirmation email');
//       console.error('Email sending error:', error);
//     }
//   };

//   return (
//     <div className="card w-full bg-base-100 shadow-xl">
//       <div className="card-body">
//         {carId.image ? (
//           <img src={carId.image} alt={carId.title} className="w-full h-auto mb-4" />
//         ) : (
//           <p>No image available</p>
//         )}
        
//         <h2 className="card-title">Payment Status: {paymentStatus}</h2>

//         {/* Pickup Details */}
//         <p><strong>Pickup Location:</strong> {pickuplocation}</p>
//         <p><strong>Pickup Date:</strong> {pickupdate}</p>
//         <p><strong>Pickup Time:</strong> {pickuptime}</p>

//         {/* Drop-off Details */}
//         <p><strong>Drop-off Location:</strong> {dropofflocation}</p>
//         <p><strong>Drop-off Date:</strong> {dropoffdate}</p>
//         <p><strong>Drop-off Time:</strong> {dropofftime}</p>

//         {/* Total Cost */}
//         <p><strong>Total Cost:</strong> ₹{totalcost}</p>

//         {/* Car Details */}
//         <h1>Car Details</h1>
//         <p><strong>Car Id:</strong> {carId._id}</p>
//         <p><strong>Car Title:</strong> {carId.title || 'N/A'}</p>
//         <p><strong>Car Model:</strong> {carId.model || 'N/A'}</p>
//         <p><strong>Car Year:</strong> {carId.year || 'N/A'}</p>
//         <p><strong>Price per Day:</strong> {carId.priceperday || 'N/A'}</p>
//         <p><strong>Fuel Type:</strong> {carId.fuel || 'N/A'}</p>
//         <p><strong>Transmission:</strong> {carId.transmission || 'N/A'}</p>
//         <p><strong>Registration Number:</strong> {carId.registrationnumber || 'N/A'}</p>

//         {userId ? (
//           <>
//             <p><strong>User Id:</strong> {userId._id || "N/A"}</p>
//             <p><strong>User Name:</strong> {userId.name || 'N/A'}</p>
//             <p><strong>User Email:</strong> {userId.email || 'N/A'}</p>
//             <p><strong>User Phone Number:</strong> {userId.phonenumber || 'N/A'}</p>
//             <p><strong>User License Number:</strong> {userId.drivinglicencenumber || 'N/A'}</p>
//             <p><strong>User Address:</strong> {userId.address || 'N/A'}</p>
//           </>
//         ) : <p class="text-red-500">User details not available</p>
// }
        
//         <button
//           onClick={fetchnodemailer}
//           className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
//         >
//           Send Email Confirmation
//         </button>
        
//         <button
//           onClick={handleFetchStatus}
//           className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
//         >
//           Update Booking Status
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AdminBookingCards;
import { toast } from 'react-hot-toast'; // Assuming you're using react-hot-toast for notifications
import { useState } from 'react';
import { axiosInstance } from '../../../config/axiosinstance';

const AdminBookingCards = ({ booking }) => {
  const [status, setStatus] = useState(null); // Store updated status here

  const {
    userId,
    carId,
    pickuplocation,
    pickupdate,
    pickuptime,
    dropofflocation,
    dropoffdate,
    dropofftime,
    totalcost,
    paymentStatus,
  } = booking;

  const handleFetchStatus = async () => {
    try {
      const response = await axiosInstance.put(
        `/admin/bookingchange/${booking._id}`,
        {},
        { withCredentials: true }
      );
      setStatus(response?.data?.data || {}); // Update the status state with response
      toast.success('Booking status updated');

      // Send the email after successful status update
      fetchnodemailer();

    } catch (error) {
      console.error('Error updating status:', error);
      toast.error('Failed to update booking status');
    }
  };

  const fetchnodemailer = async () => {
    try {
      const response = await axiosInstance.post('/nodemailer/create-message', {
        to: userId.email, // Send to the user's email                               
        subject: 'Booking Confirmation',
        text: `Your booking for the car with ID ${carId._id} has been confirmed.`,
        html: `
          <h1>Dear ${userId.name},</h1>
          <h3 style="font-size: 1.25rem; font-weight: bold; color: blue;">🧳 Get set ready for your journey with Auto Cars</h3>
          <h5 style="font-size: 1rem; font-weight: 600; color: gray;">🚍 Your Car has been Scheduled. Below are the vehicle details:</h5>
          <p style="font-size: 1rem; color: gray;">
            <strong>Journey Details for travel on:</strong> ${pickupdate} 🎫<br>
            <strong>Car Id:</strong> ${carId._id}<br>
            <strong>Trip:</strong> ${pickuplocation} to ${dropofflocation}<br>
          </p>
          <h1 style="font-size: 1.25rem; font-weight: bold; color: green;">Boarding Details 🗺</h1>
          <p>
            <strong>Pickup Location:</strong> ${pickuplocation}<br>
            <strong>Pickup Date:</strong> ${pickupdate}<br>
            <strong>Pickup Time:</strong> ${pickuptime}<br><br>
            <strong>Your Car Details 🚌</strong><br>
            <strong>Car Number:</strong> ${carId.registrationnumber}<br>
            <strong>Car Brand:</strong> ${carId.model}<br>
            <strong>Car Year:</strong> ${carId.year}<br>
            <strong>Car Fuel:</strong> ${carId.fuel}<br><br>
            <strong>User Details:</strong><br>
            <strong>User Id:</strong> ${userId._id || `user not available`}<br>
            <strong>Name:</strong> ${userId.name}<br>
            <strong>Address:</strong> ${userId.address}<br>
            <strong>Phone Number:</strong> ${userId.phonenumber}<br>
            <strong>Email:</strong> ${userId.email}
          </p>
          <p>Please reach your pickup point 15 minutes before pickup time for a hassle-free experience.</p>
          <p>Regards,<br>Auto Cars</p>
        `,
      });

      toast.success('Booking confirmation email sent successfully');
    } catch (error) {
      toast.error('Failed to send booking confirmation email');
      console.error('Email sending error:', error);
    }
  };

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        {carId.image ? (
          <img src={carId.image} alt={carId.title} className="w-full h-auto mb-4" />
        ) : (
          <p>No image available</p>
        )}
        
        <h2 className="card-title">Payment Status: {paymentStatus}</h2>

        {/* Pickup Details */}
        <p><strong>Pickup Location:</strong> {pickuplocation}</p>
        <p><strong>Pickup Date:</strong> {pickupdate}</p>
        <p><strong>Pickup Time:</strong> {pickuptime}</p>

        {/* Drop-off Details */}
        <p><strong>Drop-off Location:</strong> {dropofflocation}</p>
        <p><strong>Drop-off Date:</strong> {dropoffdate}</p>
        <p><strong>Drop-off Time:</strong> {dropofftime}</p>

        {/* Total Cost */}
        <p><strong>Total Cost:</strong> ₹{totalcost}</p>

        {/* Car Details */}
        <h1>Car Details</h1>
        <p><strong>Car Id:</strong> {carId._id}</p>
        <p><strong>Car Title:</strong> {carId.title || 'N/A'}</p>
        <p><strong>Car Model:</strong> {carId.model || 'N/A'}</p>
        <p><strong>Car Year:</strong> {carId.year || 'N/A'}</p>
        <p><strong>Price per Day:</strong> {carId.priceperday || 'N/A'}</p>
        <p><strong>Fuel Type:</strong> {carId.fuel || 'N/A'}</p>
        <p><strong>Transmission:</strong> {carId.transmission || 'N/A'}</p>
        <p><strong>Registration Number:</strong> {carId.registrationnumber || 'N/A'}</p>

        {userId ? (
          <>
            <p><strong>User Id:</strong> {userId._id || "N/A"}</p>
            <p><strong>User Name:</strong> {userId.name || 'N/A'}</p>
            <p><strong>User Email:</strong> {userId.email || 'N/A'}</p>
            <p><strong>User Phone Number:</strong> {userId.phonenumber || 'N/A'}</p>
            <p><strong>User License Number:</strong> {userId.drivinglicencenumber || 'N/A'}</p>
            <p><strong>User Address:</strong> {userId.address || 'N/A'}</p>
          </>
        ) : <p class="text-red-500">User details not available</p>
}
        
        <button
          onClick={handleFetchStatus}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        >
          Update Booking Status 
        </button>
      </div>
    </div>
  );
};

export default AdminBookingCards;
