import React from 'react';
import { Link } from 'react-router-dom';

const AdminCards = ({ car }) => {
    return (
        <div className="max-w-sm w-full lg:max-w-full lg:flex">
            <div className="border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white lg:rounded-r p-4 flex flex-col justify-between leading-normal shadow-lg">
                <figure className="relative h-48 lg:h-48 lg:w-100 bg-cover overflow-hidden">
                    <img
                        src={car?.image}
                        alt={car?.title}
                        className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
                    />
                </figure>
                <div className="p-4">
                    <div className="mb-2">
                        <h2 className="text-gray-900 font-bold text-xl mb-2">{car?.title}</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-gray-700">
                        <p><strong>Year:</strong> {car?.year}</p>
                        <p><strong>Capacity:</strong> {car?.capacity}</p>
                        <p><strong>Fuel:</strong> {car?.fuel}</p>
                        <p><strong>Transmission:</strong> {car?.transmission}</p>
                    </div>
                    <div className="mt-4 text-lg font-semibold text-gray-800">
                        ₹{car?.priceperday} / day
                    </div>
                    <div className="flex mt-4">
                        <Link to={`/admin/Admin-carupdate/${car._id}`}>
                            <button className="btn btn-sm btn-warning mr-2">EDIT</button>
                        </Link>
                        <Link to={`/admin/Admin-cardelete/${car._id}`}>
                            <button className="btn btn-sm btn-danger">DELETE</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminCards;
