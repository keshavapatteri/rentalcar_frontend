import { toast } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { axiosInstance } from '../../../config/axiosinstance';

const AdminBookingCards = ({ booking }) => {
  const [status, setStatus] = useState([]);

  const {
    _id, userId, carId,
    pickuplocation, pickupdate, pickuptime,
    dropofflocation, dropoffdate, dropofftime,
    totalcost, paymentStatus,
  } = booking;

  const handleFetchStatus = async () => {
    try {
      const response = await axiosInstance.put(`/admin/bookingchange/${_id}`, {}, { withCredentials: true });
      setStatus(response?.data?.data || {});
      toast.success('Booking status updated');
    } catch (error) {
      console.error('Error updating status:', error);
      toast.error('Failed to update Booking status');
    }
  };

  useEffect(() => {
    handleFetchStatus();
  }, []);

  const fetchnodemailer = async () => {
    try {
      const response = await axiosInstance.post('/nodemailer/create-message', {
        to: userId.email,
        subject: 'Booking Confirmation',
        text: `Your booking for the car with ID ${userId._id} has been confirmed.`,
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
            <strong>User Id:</strong> ${userId._id}<br>
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
    <div className="max-w-4xl mx-auto bg-gray-900 shadow-lg rounded-xl overflow-hidden mb-6">
      <div className="md:flex">
       {/* car image */}
         {/* <div className="md:w-1/3 bg-gray-800 p-2">
          {carId.image ? (
            <img src={carId.image} alt={carId.title} className="object-cover w-full h-full rounded-lg" />
          ) : (
            <div className="bg-gray-700 w-full h-full flex items-center justify-center text-gray-400">
              No Image Available
            </div>
          )}
        </div> */}

        {/* Booking Details */}
        <div className="md:w-2/3 p-6 text-white">
          <h2 className="text-xl font-bold mb-2 text-indigo-500">Booking #{_id}</h2>

          {/* Payment Status Badge */}
          <div className="mb-4">
            <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${paymentStatus === 'Paid' ? 'bg-green-500' : 'bg-red-500'}`}>
              {paymentStatus}
            </span>
          </div>

          {/* Booking Details as a list */}
          <ul className="text-sm space-y-1">
            <li><strong>Pickup Location:</strong> {pickuplocation}</li>
            <li><strong>Pickup Date:</strong> {pickupdate}</li>
            <li><strong>Pickup Time:</strong> {pickuptime}</li>
            <li><strong>Drop-off Location:</strong> {dropofflocation}</li>
            <li><strong>Drop-off Date:</strong> {dropoffdate}</li>
            <li><strong>Drop-off Time:</strong> {dropofftime}</li>
            <li><strong>Total Cost:</strong> ₹{totalcost}</li>
          </ul>

          {/* Car Details */}
          <h3 className="text-lg font-semibold mt-6 text-indigo-400">Car Details</h3>
          <ul className="text-sm space-y-1">
            <li><strong>Car Id:</strong> {carId._id}</li>
            <li><strong>Title:</strong> {carId.title || 'N/A'}</li>
            <li><strong>Model:</strong> {carId.model || 'N/A'}</li>
            <li><strong>Year:</strong> {carId.year || 'N/A'}</li>
            <li><strong>Fuel Type:</strong> {carId.fuel || 'N/A'}</li>
            <li><strong>Transmission:</strong> {carId.transmission || 'N/A'}</li>
          </ul>

          {/* User Details */}
          <h3 className="text-lg font-semibold mt-6 text-indigo-400">User Details</h3>
          <ul className="text-sm space-y-1">
            <li><strong>User Id:</strong> {userId._id || 'N/A'}</li>
            <li><strong>Name:</strong> {userId.name || 'N/A'}</li>
            <li><strong>Email:</strong> {userId.email || 'N/A'}</li>
            <li><strong>Phone Number:</strong> {userId.phonenumber || 'N/A'}</li>
            <li><strong>License Number:</strong> {userId.drivinglicencenumber || 'N/A'}</li>
          </ul>

          {/* Action Buttons */}
          <div className="mt-6 flex space-x-3">
            <button
              onClick={fetchnodemailer}
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
            >
              Send Email
            </button>
            <button
              onClick={handleFetchStatus}
              className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
            >
              Update Status
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBookingCards;
