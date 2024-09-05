import React from 'react';
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
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await userSignup(data);
      if (response) {
        toast.success(response.message);
        navigate('/user');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Left Side with Image */}
      <div 
        className="lg:w-1/2 w-full h-97 bg-cover bg-center relative mt-12 ml-10 mb-12"
        style={{ backgroundImage: `url('https://cdn.pixabay.com/photo/2019/04/25/20/12/sport-4155825_640.jpg')` }}
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
              <input
                type="password"
                placeholder="Your Password"
                {...register("password", { required: "Password is required" })}
                className="input input-bordered w-full"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
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