import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../../config/axiosinstance';
import toast from 'react-hot-toast';

const AdminCarUpdate = () => {
  const [carDetails, setCarDetails] = useState({});
  const [formValues, setFormValues] = useState({});
  const [image, setImage] = useState(null); // State for new image
  const [error, setError] = useState(null); // Error state
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch car details when the component mounts
  useEffect(() => {
    fetchCarDetails();
  }, []);

  const fetchCarDetails = async () => {
    try {
      const response = await axiosInstance.get(`/car/details/${id}`);
      setCarDetails(response?.data?.data);
      setFormValues(response?.data?.data); // Populate form with existing data
    } catch (error) {
      console.error('Error fetching car details:', error);
      setError('Failed to load car details');
    }
  };
console.log(formValues)
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Handle image change
  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Set new image file
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    
    // Append form data
    Object.keys(formValues).forEach((key) => {
      formData.append(key, formValues[key]);
    });
console.log(formData);

    // Append image only if a new one is selected
    if (image) {
      formData.append('image', image);
    }

    try {
      console.log("hhh",formValues);
      
      // Update car details by sending formData
      await axiosInstance.put(`/admin/updated/${id}`, formValues, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true, 
      });
      toast.success('Car details updated successfully');
      navigate("/admin/Admin-carlist")   // 
    } catch (error) {
      console.error('Error updating car details:', error);
      setError('Failed to update car details');
    }
  };
console.log(formValues);



  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Edit Car Details</h1>

      {error && (
        <div className="bg-red-100 text-red-800 p-3 mb-6 rounded-md">
          {error}
        </div>
      )}

      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left side: Image */}
        <div className="flex-shrink-0 md:w-1/2">
          <figure className="relative h-64 md:h-full overflow-hidden">
            <img
              src={image ? URL.createObjectURL(image) : carDetails?.image}
              alt={carDetails?.title}
              className="w-full h-full object-cover"
            />
          </figure>
        </div>

        {/* Right side: Form */}
        <div className="md:w-1/2 p-6 space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Image
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="mt-1 block w-full text-sm text-gray-500"
                />
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Title
                <input
                  type="text"
                  name="title"
                  value={formValues?.title || ''}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  required
                />
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Model
                <input
                  type="text"
                  name="model"
                  value={formValues?.model || ''}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  required
                />
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Year
                <input
                  type="number"
                  name="year"
                  value={formValues?.year || ''}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  required
                />
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Capacity
                <input
                  type="number"
                  name="capacity"
                  value={formValues?.capacity || ''}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  required
                />
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Fuel
                <input
                  type="text"
                  name="fuel"
                  value={formValues?.fuel || ''}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  required
                />
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mileage
                <input
                  type="text"
                  name="mileage"
                  value={formValues?.mileage || ''}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  required
                />
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Status
                <input
                  type="text"
                  name="status"
                  value={formValues?.status || ''}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  required
                />
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Color
                <input
                  type="text"
                  name="color"
                  value={formValues?.color || ''}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  required
                />
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Registration Number
                <input
                  type="text"
                  name="registrationnumber"
                  value={formValues?.registrationnumber || ''}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  required
                />
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Location
                <input
                  type="text"
                  name="location"
                  value={formValues?.location || ''}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  required
                />
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Insurance Details
                <textarea
                  name="insurancedetails"
                  value={formValues?.insurancedetails || ''}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  rows="4"
                />
              </label>
            </div>

          {/* Category */}
<div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
    Category
  </label>
  <select
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    name="category"
    value={formValues?.category || ''}
    onChange={handleChange}
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
</div>

            
            <div className="mt-5">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Update Car Details
              </button>
            </div>
          </form>
          <div className="mt-5">
            <Link to="/admin/cars" className="text-blue-500 hover:underline">
              Back to Car List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCarUpdate;
