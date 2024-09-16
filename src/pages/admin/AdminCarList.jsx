import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../../config/axiosinstance';
import toast from 'react-hot-toast';
import AdminCards from '../../components/ui/AdminCards';

const AdminCarList = () => {
    const [cars, setCars] = useState([]);

    const fetchCar = async () => {
        try {
            const response = await axiosInstance({
                url: "/car/carlist",
                method: "GET",
            });
            setCars(response?.data?.data || []);
        } catch (error) {
            console.log(error);
            toast.error("Failed to fetch cars");
        }
    };

    useEffect(() => {
        fetchCar();
    }, []);

    // Group cars by category
    const carsByCategory = cars.reduce((acc, car) => {
        const category = car.category || 'Uncategorized';
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(car);
        return acc;
    }, {});

    return (
        <div className='px-4 sm:px-8 md:px-16 lg:px-20 py-10'>
            <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl my-4'>List of Cars</h1>
            {Object.keys(carsByCategory).map((category) => (
                <div key={category} className="my-8">
                    <h2 className="text-xl font-semibold mb-4">{category}</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                        {carsByCategory[category].map((car) => (
                            <AdminCards 
                                key={car._id} 
                                car={car} 
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AdminCarList;
