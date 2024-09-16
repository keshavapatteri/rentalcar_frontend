import React, { useEffect, useState } from 'react';

import toast from 'react-hot-toast';
import AdminUserListCard from '../../components/ui/AdminUserListCards.jsx'; // Adjust import if needed
import { axiosInstance } from '../../../config/axiosinstance.js';

const AdminUserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {
        try {
            const response = await axiosInstance({
                url: "/admin/user",
                method: "GET",
                withCredentials: true,
            });

            // Assuming response.data.data is the array of users
            setUsers(response?.data|| []);
            console.log(response.data);

        } catch (error) {
            console.log(error);
            toast.error("Failed to fetch user list");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);


    return (
        <div className='px-4 sm:px-8 md:px-16 lg:px-20 py-10'>
            <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl my-4'>List of Users</h1>
            
            {loading ? (
                <p>Loading...</p> // Display a loading message or spinner
            ) : (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {users.length > 0 ? (
    users.map((user) => {
        console.log("Rendering user:", user); // Add this to check if users are rendering
        return (
            <AdminUserListCard
                key={user._id}
                userId={user._id}
                userName={user.name}
                userEmail={user.email}
                userPhoneNumber={user.phonenumber}
                userDrivingLicenceNumber={user.drivinglicencenumber}
                userAddress={user.address}
                userDate={user.createdAt}
            />
        );
    })
) : (
    <p>No users found.</p>
)}
                </div>
            )}
        </div>
    );
};

export default AdminUserList;
