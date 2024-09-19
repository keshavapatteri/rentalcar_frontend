import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { axiosInstance } from '../../../config/axiosinstance';


// import axiosInstance for making requests

const AdminCarDelete = () => {
  const [carDetails, setCarDetails] = useState({});
  const { id } = useParams();
  const navigate = useNavigate(); // for redirection after deletion
  
  // Fetch car details function
  const fetchCarDetails = async () => {
    try {
      const response = await axiosInstance.get(`/car/details/${id}`);
      
      console.log(response)
      setCarDetails(response?.data?.data);
    } catch (error) {
      console.error('Error fetching car details:', error);
    }
  };

  // Handle delete action
  const handleDeleteCar = async () => {
    try {
      if (confirm("Are you sure you want to delete this car?")) {
        await axiosInstance.delete(`/admin/car/${id}`, {
          withCredentials: true, // This includes credentials like cookies
        });
        alert('Car deleted successfully!');
        navigate("/admin/Admin-carlist")
      }
    } catch (error) {
      console.error('Error deleting car:', error);
    }
  };
  

  useEffect(() => {
    fetchCarDetails();
  }, [id]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Car Details Page</h1>
      <div className="flex flex-col md:flex-row">
        {/* Left side: Image */}
        <div className="flex-shrink-0 md:w-1/2">
          <figure className="relative h-64 md:h-full overflow-hidden rounded-xl">
            <img
              src={carDetails?.image}
              alt={carDetails?.title}
              className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
            />
          </figure>
        </div>

        {/* Right side: Details */}
        <div className="md:w-1/2 mt-4 md:mt-10 pl-10">
          <h2 className="text-4xl font-semibold">{carDetails?.title}</h2>
          <h3 className="text-xl font-semibold pt-2"><strong>Model:</strong> {carDetails?.model}</h3>
          <p className="mt-2"><strong>Year:</strong> {carDetails?.year}</p>
          <p className="mt-2"><strong>Capacity:</strong> {carDetails?.capacity}</p>
          <p className="mt-2"><strong>Fuel:</strong> {carDetails?.fuel}</p>
          <p className="mt-2"><strong>Mileage:</strong> {carDetails?.mileage}</p>
          <p className="mt-2"><strong>Status:</strong> {carDetails?.status}</p>
          <p className="mt-2"><strong>Color:</strong> {carDetails?.color}</p>
          <p className="mt-2"><strong>Registration Number:</strong> {carDetails?.registrationnumber}</p>
          <p className="mt-2"><strong>Location:</strong> {carDetails?.location}</p>
          <p className="mt-2"><strong>Insurance Details:</strong> {carDetails?.insurancedetails}</p>
          
          <div className="mt-5">
            <button 
              className="btn btn-primary" 
              onClick={handleDeleteCar}
            >Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCarDelete;
