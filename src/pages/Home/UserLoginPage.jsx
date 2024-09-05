import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
import { userLogin } from '../../services/userApi';

const UserLoginPage = () => {
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
      if (response) {
        if (response?.status === 200) {
          Cookies.set('userLogin', JSON.stringify({ type: 'user', token: response?.token }), { expires: 7 }); // expires in 7 days
          toast.success(response.message); // Correctly access the message
          navigate('/user/home');
        } else {
          toast.error(response.message || "Unable to login"); // Correctly access the message
        }
      }
    } catch (error) {
      toast.error('Login failed');
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
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
              {...register("email", { required: "Email is required" })}
              placeholder="Email"
              className="input input-bordered w-full"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700 dark:text-gray-300">Password</span>
            </label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              placeholder="Password"
              className="input input-bordered w-full"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
            <div className="text-right mt-2">
              <Link to="/signup" className="text-blue-500 hover:underline">New user? Sign up</Link>
            </div>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary w-full">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserLoginPage;
