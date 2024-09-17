import React from 'react';

const PaymentCancel = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-100 text-gray-800 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-6 text-red-600">Payment Cancellation</h1>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">Cancellation Details</h2>
        <p className="mb-4">
          We're sorry to inform you that your payment has been cancelled. Below are the details and steps for the refund process.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">Refund Information</h2>
        <p className="mb-4">
          The amount will be refunded to your original payment method. Please allow 5-7 business days for the funds to be transferred back to your bank account.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Refund Amount:</strong> The full amount of your payment.</li>
          <li><strong>Refund Method:</strong> Original payment method.</li>
          <li><strong>Processing Time:</strong> 5-7 business days.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">Contact Us</h2>
        <p className="mb-4">
          If you have any questions or need further assistance, please contact our support team.
        </p>
        <p className="mb-4">
          <strong>Email:</strong> <a href="mailto:support@autocars.com" className="text-blue-500">mktkid2023@gmail.com</a>
        </p>
        <p>
          <strong>Phone:</strong> +91 9988776655
        </p>
      </section>
      
      <section className="mt-8 text-center">
        <a 
          href="/user/home" 
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Return to Home
        </a>
      </section>
    </div>
  );
};

export default PaymentCancel;
