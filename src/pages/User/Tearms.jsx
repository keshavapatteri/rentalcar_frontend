import React from 'react';

const Tearms = () => {
  return (
    <div className="container mx-auto p-6 bg-green-50 text-gray-800 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-6 text-green-700">Terms and Conditions</h1>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-green-600">Introduction</h2>
        <p>
          Welcome to Auto Cars. By using our services, you agree to these Terms and Conditions. Please read them carefully.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-green-600">Rental Terms</h2>
        <ul className="list-disc list-inside">
          <li>All rentals are subject to availability and confirmation by us.</li>
          <li>You must be at least 21 years old and have a valid driving license.</li>
          <li>The vehicle must be returned in the same condition as rented.</li>
          <li>Late returns will incur additional charges.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-green-600">Payment and Fees</h2>
        <ul className="list-disc list-inside">
          <li>Payment is required at the time of booking.</li>
          <li>Additional fees may apply for fuel, insurance, or other services.</li>
          <li>All transactions are non-refundable unless stated otherwise.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-green-600">Insurance</h2>
        <ul className="list-disc list-inside">
          <li>Basic insurance coverage is included with the rental.</li>
          <li>Additional insurance options are available at booking.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-green-600">Liability</h2>
        <ul className="list-disc list-inside">
          <li>You are responsible for any damage to the vehicle during the rental period.</li>
          <li>We are not liable for personal injuries or property damage arising from the vehicle use.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4 text-green-600">Contact Us</h2>
        <p>
          For questions, contact us at <a href="mailto:support@autocars.com" className="text-green-500">mktkid2023@gmail.com</a>.
        </p>
      </section>
    </div>
  );
};

export default Tearms;
