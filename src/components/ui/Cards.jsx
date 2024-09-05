import React from 'react';
import { Link } from 'react-router-dom';

const CarCards = ({ car }) => {
  return (
    <div className="max-w-md mx-auto my-4">
      <div className="card bg-base-100 shadow-xl">
        <figure className="relative h-64 overflow-hidden rounded-t-xl">
          <img
            src={car?.image}
            alt={car?.title}
            className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
          />
        </figure>
        <div className="card-body p-6">
          <h2 className="card-title text-2xl font-bold text-gray-800">
            {car?.title}
          </h2>
          <div className="grid grid-cols-2 gap-4 mt-4 text-gray-600">
            <p><strong>Year:</strong> {car?.year}</p>
            <p><strong>Capacity:</strong> {car?.capacity}</p>
            <p><strong>Fuel:</strong> {car?.fuel}</p>
            <p><strong>Transmission:</strong> {car?.transmission}</p>
          </div>
          <div className="card-actions justify-end mt-6">
            <Link to={`/user/car-details/${car._id}`}>
              <button className="btn btn-primary">More Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCards;
