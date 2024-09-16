import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../../config/axiosinstance';
import toast from 'react-hot-toast';
const AdminContactMessage = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMessages = async () => {
    try {
      const response = await axiosInstance({
        url: "/admin/allcontact",
        method: "GET",
        withCredentials: true,
      });

      setMessages(response?.data?.data || []);
      console.log(response.data);

    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch messages");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  if (loading) {
    return <p>Loading messages...</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Contact Messages</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {messages.map((msg) => (
          <div key={msg.userId} className="bg-white border rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-semibold">{msg.username}</h2>
            <p className="text-gray-600 mt-2">Email: {msg.email}</p>
            <p className="text-gray-600 mt-1">Phone Number: {msg.phonenumber}</p>
            <p className="mt-2">{msg.usertext}</p>
            <p className="text-gray-500 text-sm mt-2">Received: {new Date(msg.createdAt).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminContactMessage;
