import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../../config/axiosinstance'; // Ensure the path is correct
import toast from 'react-hot-toast';

const MyProfile = () => {
  const [profile, setProfile] = useState(null);

  const fetchProfileData = async () => {
    try {
      const response = await axiosInstance({
        url: '/user/profile', // Ensure this endpoint is correct
        method: 'GET',
        withCredentials: true,
      });
      setProfile(response?.data?.data || {});
      console.log(response); // Log response for debugging
    } catch (error) {
      toast.error('Failed to fetch profile data');
      console.error(error); // Log the error for debugging
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []); // Add empty dependency array to run only once on mount

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex">
        {/* Sidebar */}
        <div className="w-1/3 bg-blue-500 text-white p-6">
          <h1 className="text-2xl font-bold">Profile</h1>
          <p className="mt-4">Manage your profile details here.</p>
        </div>
        {/* Profile Card */}
        <div className="w-2/3 p-6">
          {profile ? (
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                {/* Add a profile picture here if available */}
                <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-xl font-bold text-white relative">
  {/* If profile image is available, display it */}
  {profile.image ? (
    <img
      src={profile.image}
      alt="Profile"
      className="w-full h-full object-cover rounded-full"
    />
  ) : (
    /* If no image, display placeholder text */
    <span className="text-gray-600">Pic</span>
  )}
</div>

                <div>
                  <h2 className="text-2xl font-semibold">{profile.name}</h2>
                  <p className="text-gray-600">{profile.email}</p>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-md shadow-sm">
                <p><strong>Address:</strong> {profile.address}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md shadow-sm">
                <p><strong>Phone Number:</strong> {profile.phonenumber}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md shadow-sm">
                <p><strong>Driving License Number:</strong> {profile.drivinglicencenumber}</p>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-500">Loading profile data...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;