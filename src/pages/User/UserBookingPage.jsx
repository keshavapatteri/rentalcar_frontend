import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
import { axiosInstance } from '../../../config/axiosinstance';
import { userBooking } from '../../services/userApi';
import { loadStripe } from '@stripe/stripe-js';

const UserBookingPage = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [totalCost, setTotalCost] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm();

  const navigate = useNavigate();
  const { id } = useParams(); // Retrieve the id from the URL

  // Fetch car data
  const fetchCarData = async () => {
    try {
      const response = await axiosInstance({
        url: `/car/details/${id}`, // Correct endpoint with ID
        method: 'GET',
      });
      console.log('API Response:', response);
      setSelectedCar(response?.data?.data || {});
      setTotalCost(response?.data?.data?.priceperday || 0); // Initialize total cost with fetched price
    } catch (error) {
      console.error('Error fetching car data:', error.response ? error.response.data : error.message);
      toast.error('Failed to fetch car data');
    }
  };

  useEffect(() => {
    fetchCarData();
  }, [id]); // Depend on id to refetch when it changes

  // Update total cost based on date and time inputs
  const updateTotalCost = () => {
    if (selectedCar) {
      const pickupDateTime = new Date(`${watch('pickupdate')}T${watch('pickuptime')}`);
      const dropoffDateTime = new Date(`${watch('dropoffdate')}T${watch('dropofftime')}`);
      const days = Math.ceil((dropoffDateTime - pickupDateTime) / (1000 * 60 * 60 * 24));
      const cost = days * selectedCar.priceperday;
      setTotalCost(cost);
      setValue('totalcost', cost); // Store as a number
    }
  };

  useEffect(() => {
    updateTotalCost();
  }, [watch('pickupdate'), watch('dropoffdate'), watch('pickuptime'), watch('dropofftime')]);

  // Handle payment
  const onSubmit = async (data) => {
    try {
      const bookingData = {
        carId: id,
        pickuplocation: data.pickuplocation,
        pickupdate: data.pickupdate,
        pickuptime: data.pickuptime,
        dropofflocation: data.dropofflocation,
        dropoffdate: data.dropoffdate,
        dropofftime: data.dropofftime,
        totalcost: totalCost, // Ensure this is a number
      };
  
      console.log("onSubmit bookingData:", bookingData);
  
      const response = await userBooking(bookingData);
      Cookies.remove('userBooking');
  
      if (response) {
        Cookies.set('userBooking', JSON.stringify({ type: 'user', token: response?.token }), { expires: 7 });
        toast.success('Booking successful');
        
        // Call makePayment and pass bookingData
        await makePayment(bookingData);
      } else {
        toast.error('Unable to complete booking');
      }
    } catch (error) {
      toast.error('Booking failed');
      console.error('Booking error:', error);
    }
  };
  
  const makePayment = async (bookingData) => {
    try {
      const stripe = await loadStripe(import.meta.env.VITE_STRIPE_Publishable_key);
      if (!stripe) {
        throw new Error('Stripe failed to load');
      }
      const sessionResponse = await axiosInstance({
        url: "/payment/create",
        method: "POST",
        data: { bookingData, totalCost },
      });
      console.log(sessionResponse, "session=======>");
      // Create a checkout session
      const sessionId = sessionResponse?.data?.sessionId;
  
      const result = await stripe.redirectToCheckout({
        sessionId: sessionId,
      });
  
      if (result.error) {
        console.error(result.error.message);
        toast.error(result.error.message);
      }
    } catch (error) {
      console.error('Payment error:', error);
      // toast.error('An error occurred during payment processing. Please try again.');
    }
  };
  
  return (
    <div>
      <div className="hero bg-base-200 py-20">
        <div className="hero-content flex-col lg:flex-row lg:w-6/12">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Book Your Car</h1>
            <p className="py-6">
              Fill out the form below to book your car. Provide the necessary details and we'll handle the rest.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              {/* Selected Car Details */}
              {selectedCar && (
                <div className="mb-4">
                  <h2 className="text-xl font-bold mb-2">Selected Car</h2>
                  <p><strong>Car ID:</strong> {selectedCar._id}</p> {/* Display Car ID */}
                  <p><strong>Brand:</strong> {selectedCar.brandname}</p>
                  <p><strong>Model:</strong> {selectedCar.model}</p>
                  <p><strong>Year:</strong> {selectedCar.year}</p>
                  <p><strong>Price per Day:</strong> ₹{selectedCar.priceperday}</p>
                  <img src={selectedCar.image} alt={selectedCar.model} className="w-full h-auto mt-2" />
                </div>
              )}

              {/* Booking Form */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Pickup Location</span>
                </label>
                <input
                  type="text"
                  {...register('pickuplocation', { required: 'Pickup location is required' })}
                  placeholder="Pickup location"
                  className="input input-bordered"
                />
                {errors.pickuplocation && <span className="text-red-500">{errors.pickuplocation.message}</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Pickup Date</span>
                </label>
                <input
                  type="date"
                  {...register('pickupdate', { required: 'Pickup date is required' })}
                  className="input input-bordered"
                />
                {errors.pickupdate && <span className="text-red-500">{errors.pickupdate.message}</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Pickup Time</span>
                </label>
                <input
                  type="time"
                  {...register('pickuptime', { required: 'Pickup time is required' })}
                  className="input input-bordered"
                />
                {errors.pickuptime && <span className="text-red-500">{errors.pickuptime.message}</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Drop-off Location</span>
                </label>
                <input
                  type="text"
                  {...register('dropofflocation', { required: 'Drop-off location is required' })}
                  placeholder="Drop-off location"
                  className="input input-bordered"
                />
                {errors.dropofflocation && <span className="text-red-500">{errors.dropofflocation.message}</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Drop-off Date</span>
                </label>
                <input
                  type="date"
                  {...register('dropoffdate', { required: 'Drop-off date is required' })}
                  className="input input-bordered"
                />
                {errors.dropoffdate && <span className="text-red-500">{errors.dropoffdate.message}</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Drop-off Time</span>
                </label>
                <input
                  type="time"
                  {...register('dropofftime', { required: 'Drop-off time is required' })}
                  className="input input-bordered"
                />
                {errors.dropofftime && <span className="text-red-500">{errors.dropofftime.message}</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Total Cost</span>
                </label>
                <input
                  type="text"
                  {...register('totalcost')}
                  value={`₹${totalCost}`} // Display as currency
                  readOnly
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary" onClick={makePayment}>
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBookingPage;
