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
  const [totalCost, setTotalCost] = useState(null);
  const [user, setUser] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, setValue, watch, setError } = useForm();
  const navigate = useNavigate();
  const { id } = useParams(); // Retrieve the id from the URL

  // Fetch car data
  const fetchCarData = async () => {
    try {
      const response = await axiosInstance({
        url: `/car/details/${id}`, // Correct endpoint with ID
        method: 'GET',
      });
      setSelectedCar(response?.data?.data || {});
      setTotalCost(response?.data?.data?.priceperday || 0);
      console.log("carDetails ===>", response);
    } catch (error) {
      toast.error('Failed to fetch car data');
    }
  };

  useEffect(() => {
    fetchCarData();
  }, [id]); // Depend on id to refetch when it changes

  // Fetch user profile
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axiosInstance.get('/user/profile', {
          withCredentials: true,
        });
        setUser(response?.data?.data);
        console.log("fetchUser", response.data.data);
      } catch (error) {
        console.log("Error fetching user profile:", error.response?.data?.message || error.message);
      }
    };
    fetchUser();
  }, []);

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

  // Ensure dropoff date is not earlier than pickup date
  useEffect(() => {
    const pickupDate = watch('pickupdate');
    const dropoffDate = watch('dropoffdate');

    if (pickupDate && dropoffDate && new Date(dropoffDate) < new Date(pickupDate)) {
      setError('dropoffdate', {
        type: 'manual',
        message: 'Drop-off Date cannot be earlier than Pickup Date',
      });
    }
  }, [watch('pickupdate'), watch('dropoffdate')]);

  // Handle payment
  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      const bookingData = {
        carId: id,
        userId: user?._id,
        pickuplocation: data.pickuplocation,
        pickupdate: data.pickupdate,
        pickuptime: data.pickuptime,
        dropofflocation: data.dropofflocation,
        dropoffdate: data.dropoffdate,
        dropofftime: data.dropofftime,
        totalcost: totalCost,
      };

      console.log("bookingData ===", bookingData);

      const response = await userBooking(bookingData);

      if (response) {
        toast.success('Booking successful');
        console.log("bookingResponse ===>", response);
        await makePayment(bookingData);
      } else {
        toast.error('Unable to complete booking');
      }
    } catch (error) {
      toast.error('Booking failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Payment
  const makePayment = async (bookingData) => {
    try {
      const stripe = await loadStripe(import.meta.env.VITE_STRIPE_Publishable_key);
      if (!stripe) {
        throw new Error('Stripe failed to load');
      }
      const sessionResponse = await axiosInstance.post('/payment/create', {
        bookingData,
        totalCost,
        userId: user?._id,
        carDetails: selectedCar,
      });
      const sessionId = sessionResponse?.data?.sessionId;

      if (sessionId) {
        const result = await stripe.redirectToCheckout({ sessionId });
        if (result.error) {
          console.error(result.error.message);
          toast.error(result.error.message);
        }
      }
    } catch (error) {
      console.error('Payment error:', error);
      toast.error('An error occurred during payment processing. Please try again.');
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
                  <p><strong>Car ID:</strong> {selectedCar._id}</p>
                  <p><strong>Brand:</strong> {selectedCar.title}</p>
                  <p><strong>Model:</strong> {selectedCar.model}</p>
                  <p><strong>Year:</strong> {selectedCar.year}</p>
                  <p><strong>Price per Day:</strong> ₹{selectedCar.priceperday}</p>
                </div>
              )}

              {/* Pickup and Drop-off Details */}
              <div className="form-control">
                <label className="label">Pickup Location</label>
                <select
                  {...register('pickuplocation', { required: true })}
                  className="select select-bordered"
                >
                  <option value="">Select a district</option>
                  <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                  <option value="Kollam">Kollam</option>
                  <option value="Pathanamthitta">Pathanamthitta</option>
                  <option value="Alappuzha">Alappuzha</option>
                  <option value="Kottayam">Kottayam</option>
                  <option value="Idukki">Idukki</option>
                  <option value="Ernakulam">Ernakulam</option>
                  <option value="Thrissur">Thrissur</option>
                  <option value="Palakkad">Palakkad</option>
                  <option value="Malappuram">Malappuram</option>
                  <option value="Kozhikode">Kozhikode</option>
                  <option value="Wayanad">Wayanad</option>
                  <option value="Kannur">Kannur</option>
                  <option value="Kasaragod">Kasaragod</option>
                </select>
                {errors.pickuplocation && <p className="text-red-500">Pickup Location is required</p>}
              </div>

              <div className="form-control">
                <label className="label">Pickup Date</label>
                <input
                  {...register('pickupdate', { required: true })}
                  type="date"
                  className="input input-bordered"
                  min={new Date().toISOString().split('T')[0]} // sets today's date as the minimum
                />
                {errors.pickupdate && <p className="text-red-500">Pickup Date is required</p>}
              </div>

              <div className="form-control">
                <label className="label">Pickup Time</label>
                <input
                  {...register('pickuptime', { required: true })}
                  type="time"
                  className="input input-bordered"
                />
                {errors.pickuptime && <p className="text-red-500">Pickup Time is required</p>}
              </div>

              <div className="form-control">
                <label className="label">Drop-off Location</label>
                <select
                  {...register('dropofflocation', { required: true })}
                  className="select select-bordered"
                >
                  <option value="">Select a district</option>
                  <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                  <option value="Kollam">Kollam</option>
                  <option value="Pathanamthitta">Pathanamthitta</option>
                  <option value="Alappuzha">Alappuzha</option>
                  <option value="Kottayam">Kottayam</option>
                  <option value="Idukki">Idukki</option>
                  <option value="Ernakulam">Ernakulam</option>
                  <option value="Thrissur">Thrissur</option>
                  <option value="Palakkad">Palakkad</option>
                  <option value="Malappuram">Malappuram</option>
                  <option value="Kozhikode">Kozhikode</option>
                  <option value="Wayanad">Wayanad</option>
                  <option value="Kannur">Kannur</option>
                  <option value="Kasaragod">Kasaragod</option>
                </select>
                {errors.dropofflocation && <p className="text-red-500">Drop-off Location is required</p>}
              </div>

              <div className="form-control">
                <label className="label">Drop-off Date</label>
                <input
                  {...register('dropoffdate', { required: true })}
                  type="date"
                  className="input input-bordered"
                  min={watch('pickupdate')} // Ensures dropoffdate is not before pickupdate
                />
                {errors.dropoffdate && <p className="text-red-500">{errors.dropoffdate.message}</p>}
              </div>

              <div className="form-control">
                <label className="label">Drop-off Time</label>
                <input
                  {...register('dropofftime', { required: true })}
                  type="time"
                  className="input input-bordered"
                />
                {errors.dropofftime && <p className="text-red-500">Drop-off Time is required</p>}
              </div>

              <div className="form-control">
                <label className="label">Total Cost</label>
                <input
                  {...register('totalcost', { required: true })}
                  type="text"
                  className="input input-bordered"
                  value={`₹${totalCost || 0}`} // Display total cost
                  readOnly
                />
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? 'Processing...' : 'Proceed to Payment'}
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
