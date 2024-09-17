import React from 'react';
import { axiosInstance } from '../../../config/axiosinstance';

const AdminUserListCard = ({
  userimage,
  userId,
  userName,
  userEmail,
  userDate,
  userPhoneNumber,
  userDrivingLicenceNumber,
  userAddress
}) => {
  // Handle delete action
  const handleDeleteUser = async () => {
    try {
      await axiosInstance.delete(`/admin/delete/${userId}`, {
        withCredentials: true, // Enable credentials
      });
      alert('User deleted successfully!');
      window.location.reload(); // Reload window
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };
  

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 max-w-sm mx-auto mb-6">
   <div className="flex flex-col items-center">
  {/* User Icon */}
  <div className="relative bg-gray-200 dark:bg-gray-700 rounded-full p-4 mb-4 shadow-lg">
    <img
      src={userimage}
      
      className="w-32 h-32 rounded-full object-cover border-4 border-gray-300 dark:border-gray-600 hover:scale-105 transform transition duration-300 ease-in-out"
    />
  
  </div>



        {/* User Details */}
        <h2 className="text-2xl font-semibold mb-3">{userName}</h2>
        <p className="text-gray-700 mb-2"><strong>User ID:</strong> {userId}</p>
        <p className="text-gray-700 mb-2"><strong>Email:</strong> {userEmail}</p>
        <p className="text-gray-700 mb-2"><strong>Address:</strong> {userAddress}</p>
        <p className="text-gray-700 mb-2"><strong>Phone Number:</strong> {userPhoneNumber}</p>
        <p className="text-gray-700 mb-2"><strong>Driving License Number:</strong> {userDrivingLicenceNumber}</p>
        <p className="text-gray-700 mb-2"><strong>Created At:</strong> {userDate}</p>

        {/* Delete Button */}
        <button
          className="bg-red-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-red-600 transition duration-300"
          onClick={handleDeleteUser} >
          Delete
        </button>
      </div>
    </div>
  );
};

export default AdminUserListCard;
