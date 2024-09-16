import React from 'react'
import { useForm } from 'react-hook-form';
import { AdminAddCar } from '../../services/AdminApi'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const AdminCarPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm();

  const navigate = useNavigate()

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      //Append all form data including the image file
      for (const key in data) {
        if (key === 'image') {
          formData.append(key, data[key][0]); // Handle image file differently
        } else {
          formData.append(key, data[key]);
        }
      }
      const response = await AdminAddCar(formData); // use formData here

      
      if (response) {
        toast.success("Car Create SuccessFully");
        navigate('/admin/AdminPage');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "ERROR");
    }
  };

  return (
    <div className='flex items-center justify-center pt-6 pb-5'>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md ">


        <h2 className="text-2xl font-bold mb-6 text-center">ADD CAR</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* Title Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              {...register('title', { required: 'title is required' })}

              placeholder="Title"
            />
          </div>

          {/* image */}

          <div className="mb-4">
            <label className="block text-gray-700">Image</label>
            <input
              type="file"
              className={`form-input mt-1 block w-full border rounded-md ${errors.image ? 'border-red-500' : ''}`}
              {...register('image', { required: 'Image is required' })}
            />
            {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>}
          </div>

          {/* Model */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              model
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id=" model"
              type="text"
              {...register('model', { required: ' model is required' })}

              placeholder="model"
            />
          </div>

          {/* year */}

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              year
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="year"
              type="text"
              {...register('year', { required: 'year is required' })}

              placeholder="year"
            />
          </div>

          {/* priceperday */}

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              priceperday
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="priceperday"
              type="text"
              {...register('priceperday', { required: 'priceperday is required' })}

              placeholder="priceperday"
            />
          </div>

          <div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="capacity">
    Capacity
  </label>
  <select
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="capacity"
    {...register('capacity', { required: 'Capacity is required' })}
  >
    <option value="">Select Capacity</option>
    <option value="2">2 seats</option>
    <option value="4">4 seats</option>
    <option value="5">5 seats</option>
    <option value="7">7 seats</option>
    <option value="8">8 seats</option>
    <option value="9">9 seats</option>
    <option value="10">10 seats</option>
  </select>
</div>


          {/* fuel */}

          <div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fuel">
    Fuel
  </label>
  <select
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="fuel"
    {...register('fuel', { required: 'Fuel is required' })}
  >
    <option value="">Select Fuel Type</option>
    <option value="Petrol">Petrol</option>
    <option value="Diesel">Diesel</option>
    <option value="Electric">Electric</option>
    <option value="Hybrid">Hybrid</option>
    <option value="CNG">CNG</option>
  </select>
</div>

          {/* transmission */}


          <div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="transmission">
    Transmission
  </label>
  <select
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="transmission"
    {...register('transmission', { required: 'Transmission is required' })}
  >
    <option value="">Select Transmission</option>
    <option value="Automatic">Automatic</option>
    <option value="Manual">Manual</option>
  </select>
</div>

          {/* mileage */}


          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              mileage
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="mileage"
              type="text"
              {...register('mileage', { required: 'mileage is required' })}

              placeholder="mileage"
            />
          </div>

          {/* status */}

          <div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
    Status
  </label>
  <select
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="status"
    {...register('status', { required: 'Status is required' })}
  >
    <option value="">Select a status</option>
    <option value="Available">Available</option>
    <option value="Unavailable">Unavailable</option>
    <option value="Out of Service">Out of Service</option>
    <option value="Under Maintenance">Under Maintenance</option>
  </select>
  {errors.status && <p className="text-red-500 text-xs italic">{errors.status.message}</p>}
</div>


          {/* color */}
          <div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="color">
    Color
  </label>
  <select
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="color"
    {...register('color', { required: 'Color is required' })}
  >
    <option value="">Select a color</option>
    <option style={{ backgroundColor: 'Red', color: 'white' }} value="Red">Red</option>
    <option style={{ backgroundColor: 'Blue', color: 'white' }} value="Blue">Blue</option>
    <option style={{ backgroundColor: 'Green', color: 'white' }} value="Green">Green</option>
    <option style={{ backgroundColor: 'Black', color: 'white' }} value="Black">Black</option>
    <option style={{ backgroundColor: 'White', color: 'black' }} value="White">White</option>
    <option style={{ backgroundColor: 'Yellow', color: 'black' }} value="Yellow">Yellow</option>
    <option style={{ backgroundColor: 'Gray', color: 'white' }} value="Gray">Gray</option>
    <option style={{ backgroundColor: 'Brown', color: 'white' }} value="Brown">Brown</option>
    <option style={{ backgroundColor: 'Pink', color: 'white' }} value="Pink">Pink</option>
    <option style={{ backgroundColor: 'Orange', color: 'white' }} value="Orange">Orange</option>
    <option style={{ backgroundColor: 'Purple', color: 'white' }} value="Purple">Purple</option>
    <option style={{ backgroundColor: 'Silver', color: 'black' }} value="Silver">Silver</option>
    <option style={{ backgroundColor: 'Gold', color: 'black' }} value="Gold">Gold</option>
  </select>
  {errors.color && <p className="text-red-500 text-xs italic">{errors.color.message}</p>}
</div>


          {/* registrationnumber */}

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              registrationnumber
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="registrationnumber"
              type="text"
              {...register('registrationnumber', { required: 'registrationnumber is required' })}

              placeholder="registrationnumber"
            />
          </div>

          {/* location */}

          <div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
    Location
  </label>
  <select
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="location"
    {...register('location', { required: 'Location is required' })}
  >
    <option value="">Select a location</option>
    <option value="Thiruvananthapuram">Thiruvananthapuram</option>
    <option value="Kollam">Kollam</option>
    <option value="Alappuzha">Alappuzha</option>
    <option value="Pathanamthitta">Pathanamthitta</option>
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
  {errors.location && <p className="text-red-500 text-xs italic">{errors.location.message}</p>}
</div>

          {/* insurancedetails */}
          <div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="insurancedetails">
    Insurance Details
  </label>
  <select
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="insurancedetails"
    {...register('insurancedetails', { required: 'Insurance details are required' })}
    defaultValue=""
  >
    <option value="" disabled>Select insurance details</option>
    <option value="available">Available</option>
    <option value="not available">Not Available</option>
  </select>
</div>


{/* Category */}
<div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
    Category
  </label>
  <select
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="category"
    {...register('category', { required: 'Category is required' })}
  >
    <option value="">Select a category</option>
    <option value="Minivan">Minivan</option>
    <option value="Suv">Suv</option>
    <option value="Muv">Muv</option>
    <option value="Xuv">Xuv</option>
    <option value="Sedan">Sedan</option>
    <option value="Electrical">Electrical</option>
    <option value="Hybrid">Hybrid</option>
  </select>
  {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
</div>

          {/* Submit Button */}
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              ADD
            </button>
          </div>
        </form>
      </div>



    </div>
  )
}

export default AdminCarPage;
