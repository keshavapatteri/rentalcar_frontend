import React from 'react';
import { axiosInstance } from '../../../config/axiosinstance';

const AdminUserListCard = ({
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
        <div className="bg-gray-200 rounded-full p-4 mb-4">
          <svg
            className="w-16 h-16 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 12c2.67 0 4.84-2.17 4.84-4.84S14.67 2.32 12 2.32 7.16 4.49 7.16 7.16 9.33 12 12 12zm0 1.45c-3.08 0-9.24 1.55-9.24 4.63v1.55c0 .42.34.77.77.77h16.94c.42 0 .77-.34.77-.77v-1.55c0-3.08-6.16-4.63-9.24-4.63z"/>
          </svg>
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
