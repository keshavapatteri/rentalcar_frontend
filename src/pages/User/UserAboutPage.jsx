import React from 'react'
import { ArrowBigRight } from 'lucide-react';
const UserAboutPage = () => {
  return (
    <div className='mx-auto px-4 sm:px-6 lg:px-16 max-w-7xl bg-gray-100 dark:bg-gray-800'>
      <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 p-6 rounded-lg shadow-md'>
        Auto Car - Your Perfect Travel Companion to Explore Spectacular Kerala
      </h1>

      <div className="mt-6 space-y-6">
        <div className="flex items-start space-x-3">
          <ArrowBigRight className="text-blue-500 w-5 h-5 flex-shrink-0" />
          <p className="text-gray-700 dark:text-gray-300 flex-1">
            Kerala, blessed by nature and culture, beckons you with its palm-fringed beaches, serene backwaters, lush hill stations, and rich heritage. To experience this tropical paradise at your own pace, Auto Car offers the perfect travel companion - our wide range of self-drive rental cars.
          </p>
        </div>

        <div className="flex items-start space-x-3">
          <ArrowBigRight className="text-blue-500 w-5 h-5 flex-shrink-0" />
          <p className="text-gray-700 dark:text-gray-300 flex-1">
            Auto Car brings the legacy AutoCar, trusted automotive partners in Kerala for over 6 decades. We inherit their heritage of excellence in vehicle retail, Service to make your travel experiences more memorable.
          </p>
        </div>

        <div className="flex items-start space-x-3">
          <ArrowBigRight className="text-blue-500 w-5 h-5 flex-shrink-0" />
          <p className="text-gray-700 dark:text-gray-300 flex-1">
            Our hatchbacks, sedans, MUVs, and SUVs cater to solo travelers, couples, families, and groups of all sizes. Rent for a few days for local drives or take weekly, monthly rentals for leisurely vacations. Auto Car rentals will be your flexible travel buddy across Kerala! Budget-Friendly Packages for All We understand traveling can be expensive, so our self-drive rentals are light on your pockets. Our transparent rates along with flexible daily, weekly, and monthly packages fit every budget and trip plan. Long-term rentals come with great discounts!
          </p>
        </div>

        <div className="flex items-start space-x-3">
          <ArrowBigRight className="text-blue-500 w-5 h-5 flex-shrink-0" />
          <p className="text-gray-700 dark:text-gray-300 font-semibold flex-1">
            Service You Can Count On
          </p>
        </div>

        <div className="flex items-start space-x-3">
          <ArrowBigRight className="text-blue-500 w-5 h-5 flex-shrink-0" />
          <p className="text-gray-700 dark:text-gray-300 flex-1">
            Customer delight is our top priority. Our team offers exceptional service through your rental journey - from booking to delivery to returns and beyond. Contact us 24x7 for instant resolution of all queries. We aim to make self-drive vacations in Kerala smooth and memorable for you.
          </p>
        </div>

        <div className="flex items-start space-x-3 pb-10">
          <ArrowBigRight className="text-blue-500 w-5 h-5 flex-shrink-0" />
          <p className="text-gray-700 dark:text-gray-300 flex-1">
            You Drive Safely, We Take Care of the Rest
          </p>
        </div>
      </div>
    </div>
  )
}

export default UserAboutPage
