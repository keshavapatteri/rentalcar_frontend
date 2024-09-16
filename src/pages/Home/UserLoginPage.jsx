import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
import { userLogin } from '../../services/userApi';

const UserLoginPage = () => {
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await userLogin(data);
      Cookies.remove('userLogin');
      if (response?.status === 200) {
        Cookies.set('userLogin', JSON.stringify({ type: 'user', token: response?.token })), // expires in 7 days
        toast.success(response.message); // Display success message
        navigate('/user/home');
      } else {
        toast.error(response.message || 'Unable to login'); // Display error message
      }
    } catch (error) {
      toast.error('Login failed');
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" 
         style={{ backgroundImage: `url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLBYRYkMhqoihtwzZtmZf1mcFHFT7hUyFEzEQS2mknZnb_XkKVFxKxkKA-5rcmiRDmcaaHRSBa3X0vPXteBAZ604UptQl0H1dohy6kEIgdJl1ngXwRgIPYFm4Hm4_D_vfX9qu5TYytBm-_yPIt3IC74tSP3NoFGwgkufdW6PJsDsE53O-xoSx0jHQJ3A/s1600/WHITE-FERRARI-HEROSCREEN-5192023.png')` }}> {/* Add background image here */}
      <div className="w-full max-w-md bg-white dark:bg-gray-800 bg-opacity-80 rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-gray-100">Login Now!</h1>
        <p className="text-center mb-6 text-gray-600 dark:text-gray-300">
          Welcome back! Please enter your details to log in.
        </p>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700 dark:text-gray-300">Email</span>
            </label>
            <input
              type="email"
              {...register('email', { required: 'Email is required' })}
              placeholder="Email"
              className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password field with eye icon */}
          <div className="form-control relative">
            <label className="label">
              <span className="label-text text-gray-700 dark:text-gray-300">Password</span>
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              {...register('password', { required: 'Password is required' })}
              placeholder="Password"
              className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}

            {/* Eye icon to toggle password visibility */}
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
              onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-700 dark:text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 5.5C8.686 5.5 5.5 8.686 5.5 12S8.686 18.5 12 18.5 18.5 15.314 18.5 12 15.314 5.5 12 5.5zM12 9a3 3 0 100 6 3 3 0 000-6z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-700 dark:text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 5.5C8.686 5.5 5.5 8.686 5.5 12S8.686 18.5 12 18.5 18.5 15.314 18.5 12 15.314 5.5 12 5.5zM12 9a3 3 0 100 6 3 3 0 000-6z"
                  />
                </svg>
              )}
            </div>

            <div className="text-right mt-2">
              <Link to="/signup" className="text-blue-500 hover:underline">
                New user? Sign up
              </Link>
            </div>
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserLoginPage;
