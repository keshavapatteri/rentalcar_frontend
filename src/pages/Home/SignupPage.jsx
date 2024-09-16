import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { userSignup } from '../../services/userApi';
import toast from 'react-hot-toast';

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await userSignup(data);
      if (response) {
        toast.success(response.message);
        navigate('/login');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Left Side with Image */}
      <div
        className="lg:w-1/2 w-full bg-cover bg-center h-full relative"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542282088-fe8426682b8f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxMDY1NDA4fHxlbnwwfHx8fHw%3D')` }}
      >
        {/* Optional overlay to darken the image */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Right Side with Form */}
      <div className="lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-gray-100">Sign Up Now!</h1>
          <p className="text-center mb-6 text-gray-600 dark:text-gray-300">
            Join us to explore a world of amazing opportunities. Sign up to get started!
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700 dark:text-gray-300">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                {...register("name", { required: "Name is required" })}
                className="input input-bordered w-full"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700 dark:text-gray-300">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                {...register("email", { required: "Email is required" })}
                className="input input-bordered w-full"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700 dark:text-gray-300">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Your Password"
                  {...register("password", { required: "Password is required" })}
                  className="input input-bordered w-full pr-10"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <span role="img" aria-label="Hide password">👁️</span>
                  ) : (
                    <span role="img" aria-label="Show password">👁️‍🗨️</span>
                  )}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
            </div>

            {/* Address */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700 dark:text-gray-300">Address</span>
              </label>
              <input
                type="text"
                placeholder="Your Address"
                {...register("address", { required: "Address is required" })}
                className="input input-bordered w-full"
              />
              {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
            </div>

            {/* Driving License Number */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700 dark:text-gray-300">Driving License Number</span>
              </label>
              <input
                type="number"
                placeholder="Your Driving License Number"
                {...register("drivinglicencenumber", { required: "Driving license number is required" })}
                className="input input-bordered w-full"
              />
              {errors.drivinglicencenumber && <p className="text-red-500 text-sm mt-1">{errors.drivinglicencenumber.message}</p>}
            </div>

            {/* Phone Number */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700 dark:text-gray-300">Phone Number</span>
              </label>
              <input
                type="tel"
                placeholder="Your Phone Number"
                {...register("phonenumber", { required: "Phone number is required" })}
                className="input input-bordered w-full"
              />
              {errors.phonenumber && <p className="text-red-500 text-sm mt-1">{errors.phonenumber.message}</p>}
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary w-full">Sign Up</button>
            </div>

            <div className="text-center mt-4">
              <Link to="/login" className="text-blue-500 hover:underline">Already have an account? Log in</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
