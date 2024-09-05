import React from 'react';

const ContactPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl w-full p-4">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-700 dark:text-gray-300">Contact Us</h1>
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <div className="mb-4">
            <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300">Company Name</h2>
            <p className="text-gray-900 dark:text-gray-100">Auto Cars</p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300">Address</h2>
            <p className="text-gray-900 dark:text-gray-100">123 Main St, Suite 456<br />Citytown, ST 12345</p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300">Pincode</h2>
            <p className="text-gray-900 dark:text-gray-100">123456</p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300">District</h2>
            <p className="text-gray-900 dark:text-gray-100">Ernakulam</p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300">Phone Number</h2>
            <p className="text-gray-900 dark:text-gray-100">123-456-7890</p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300">Email</h2>
            <p className="text-gray-900 dark:text-gray-100">AutoCars@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
