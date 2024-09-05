// import React, { useEffect, useState } from 'react';
// import jsPDF from 'jspdf';

// const PaymentSuccess = () => {
//   const [carDetails, setCarDetails] = useState(null);
//   const [paymentDetails, setPaymentDetails] = useState(null);

//   useEffect(() => {
//     const carData = localStorage.getItem('carDetails');
//     const paymentData = localStorage.getItem('paymentDetails');

//     if (carData) {
//       try {
//         setCarDetails(JSON.parse(carData));
//       } catch (error) {
//         console.error('Error parsing car data:', error);
//       }
//     }
//     if (paymentData) {
//       try {
//         setPaymentDetails(JSON.parse(paymentData));
//       } catch (error) {
//         console.error('Error parsing payment data:', error);
//       }
//     }
//   }, []);

//   const downloadPDF = () => {
//     const pdf = new jsPDF();
//     const margin = 10;
//     const pdfWidth = pdf.internal.pageSize.getWidth() - 2 * margin;

//     const addText = (text, x, y) => {
//       pdf.text(text, x, y);
//     };

//     let y = margin;

//     // Add Title
//     pdf.setFontSize(16);
//     pdf.setTextColor(0, 128, 0); // Green color
//     pdf.text('Payment Successful!', margin, y);
//     y += 10;

//     // Add Car Details
//     pdf.setFontSize(14);
//     pdf.setTextColor(0, 128, 0); // Green color
//     pdf.text('Car Details', margin, y);
//     y += 10;

//     pdf.setFontSize(12);
//     pdf.setTextColor(0, 0, 0); // Black color
//     const carDetailsText = [
//       `Title: ${carDetails?.title || 'N/A'}`,
//       `Model: ${carDetails?.brandname || 'N/A'} ${carDetails?.model || 'N/A'}`,
//       `Year: ${carDetails?.year || 'N/A'}`,
//       `Capacity: ${carDetails?.capacity || 'N/A'}`,
//       `Fuel: ${carDetails?.fuel || 'N/A'}`,
//       `Mileage: ${carDetails?.mileage || 'N/A'}`,
//       `Color: ${carDetails?.color || 'N/A'}`,
//       `Registration Number: ${carDetails?.registrationnumber || 'N/A'}`,
//       `Insurance Details: ${carDetails?.insurancedetails || 'N/A'}`,
//     ];

//     carDetailsText.forEach(line => {
//       addText(line, margin, y);
//       y += 10;
//     });

//     y += 10; // Extra space before payment details

//     // Add Payment Details
//     pdf.setFontSize(14);
//     pdf.setTextColor(255, 215, 0); // Yellow color
//     pdf.text('Payment Details', margin, y);
//     y += 10;

//     pdf.setFontSize(12);
//     pdf.setTextColor(0, 0, 0); // Black color
//     const paymentDetailsText = [
//       `Payment ID: ${paymentDetails?.id || 'N/A'}`,
//       `Amount Paid: ₹${paymentDetails?.amount || 'N/A'}`,
//       `Payment Status: ${paymentDetails?.status || 'N/A'}`,
//       `Date: ${new Date(paymentDetails?.created * 1000).toLocaleString() || 'N/A'}`,
//     ];

//     paymentDetailsText.forEach(line => {
//       addText(line, margin, y);
//       y += 10;
//     });

//     pdf.save('payment-success.pdf');
//   };

//   if (!carDetails || !paymentDetails) {
//     return <div className="flex justify-center items-center h-screen text-xl">Loading...</div>;
//   }

//   return (
//     <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
//       <h1 className="text-4xl font-extrabold text-center mb-10 text-green-600">Payment Successful!</h1>
//       <button
//         onClick={downloadPDF}
//         className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300"
//       >
//         Download PDF
//       </button>
//       <div id="pdf-content" className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-8">
//         {/* Car Details */}
//         <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
//           {carDetails?.image && <img src={carDetails.image} alt={carDetails.title} className="w-full h-48 object-cover rounded-lg mb-4" />}
//           <h2 className="text-2xl font-semibold mb-2 text-gray-800">{carDetails?.title}</h2>
//           <p className="text-gray-700 mb-1"><strong>Model:</strong> {carDetails?.brandname} {carDetails?.model}</p>
//           <p className="text-gray-700 mb-1"><strong>Year:</strong> {carDetails?.year}</p>
//           <p className="text-gray-700 mb-1"><strong>Capacity:</strong> {carDetails?.capacity}</p>
//           <p className="text-gray-700 mb-1"><strong>Fuel:</strong> {carDetails?.fuel}</p>
//           <p className="text-gray-700 mb-1"><strong>Mileage:</strong> {carDetails?.mileage}</p>
//           <p className="text-gray-700 mb-1"><strong>Color:</strong> {carDetails?.color}</p>
//           <p className="text-gray-700 mb-1"><strong>Registration Number:</strong> {carDetails?.registrationnumber}</p>
//           <p className="text-gray-700"><strong>Insurance Details:</strong> {carDetails?.insurancedetails}</p>
//         </div>

//         {/* Payment Details */}
//         <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
//           <h3 className="text-xl font-semibold mb-4 text-yellow-600">Payment Details</h3>
//           <p className="text-gray-700 mb-1"><strong>Payment ID:</strong> {paymentDetails?.id}</p>
//           <p className="text-gray-700 mb-1"><strong>Amount Paid:</strong> ₹{paymentDetails?.amount}</p>
//           <p className="text-gray-700 mb-1"><strong>Payment Status:</strong> {paymentDetails?.status}</p>
//           <p className="text-gray-700"><strong>Date:</strong> {new Date(paymentDetails?.created * 1000).toLocaleString()}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentSuccess;




import React from 'react';
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100 text-gray-800">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full text-center">
        <svg
          className="w-16 h-16 mx-auto mb-4 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2l4 -4m0 10a9 9 0 1 0 -18 0a9 9 0 0 0 18 0z"
          />
        </svg>
        <h1 className="text-2xl font-semibold mb-2">Payment Successful</h1>
        <p className="mb-6 text-gray-600">
          Thank you for your payment! Your transaction was successful, and your booking has been confirmed.
        </p>
        <Link to="/user/home">
  <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
    Go to Dashboard
  </button>
</Link>

      </div>
    </div>
  );
};

export default PaymentSuccess;

