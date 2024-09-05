import React from 'react';

const AdminHomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">Admin Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-500 text-white p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-2">Total Cars</h2>
              <p className="text-4xl">25</p>
            </div>
            <div className="bg-green-500 text-white p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-2">Bookings</h2>
              <p className="text-4xl">15</p>
            </div>
            <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-2">Reviews</h2>
              <p className="text-4xl">8</p>
            </div>
            <div className="bg-red-500 text-white p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-2">Pending Payments</h2>
              <p className="text-4xl">5</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activities</h2>
          <ul className="divide-y divide-gray-200">
            <li className="py-3">
              <p className="text-gray-600">New car added: Tesla Model S</p>
              <span className="text-sm text-gray-400">2 hours ago</span>
            </li>
            <li className="py-3">
              <p className="text-gray-600">Booking confirmed: Audi A4</p>
              <span className="text-sm text-gray-400">4 hours ago</span>
            </li>
            <li className="py-3">
              <p className="text-gray-600">User review added: BMW X5</p>
              <span className="text-sm text-gray-400">1 day ago</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
