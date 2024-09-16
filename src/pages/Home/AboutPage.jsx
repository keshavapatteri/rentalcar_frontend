import { ArrowRightCircle } from 'lucide-react';
import React from 'react';

const AboutPage = () => {
  return (
    <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl bg-white dark:bg-gray-900'>
      <h1 className='text-4xl font-extrabold text-center text-gray-900 dark:text-gray-100 py-12'>
        Auto Car - Your Perfect Travel Companion to Explore Spectacular Kerala
      </h1>

      <div className="space-y-6">
        <div className="flex items-start space-x-4 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
          <ArrowRightCircle className="text-blue-500 dark:text-blue-300 w-6 h-6" />
          <p className="text-gray-800 dark:text-gray-200 text-base">
            Kerala is a paradise with its scenic beaches, backwaters, and hill stations. Auto Car provides a diverse fleet of self-drive rentals to explore Kerala at your own pace.
          </p>
        </div>

        <div className="flex items-start space-x-4 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
          <ArrowRightCircle className="text-blue-500 dark:text-blue-300 w-6 h-6" />
          <p className="text-gray-800 dark:text-gray-200 text-base">
            Building on AutoCar's legacy, we offer top-quality vehicle rentals with over 60 years of expertise, ensuring a reliable and enjoyable experience.
          </p>
        </div>

        <div className="flex items-start space-x-4 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
          <ArrowRightCircle className="text-blue-500 dark:text-blue-300 w-6 h-6" />
          <p className="text-gray-800 dark:text-gray-200 text-base">
            Our fleet includes various options from hatchbacks to SUVs. Enjoy flexible rental periods and affordable rates tailored to your needs.
          </p>
        </div>

        <div className="flex items-start space-x-4 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
          <ArrowRightCircle className="text-blue-500 dark:text-blue-300 w-6 h-6" />
          <p className="text-gray-800 dark:text-gray-200 text-base font-semibold">
            Exceptional Service
          </p>
        </div>

        <div className="flex items-start space-x-4 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
          <ArrowRightCircle className="text-blue-500 dark:text-blue-300 w-6 h-6" />
          <p className="text-gray-800 dark:text-gray-200 text-base">
            We prioritize customer satisfaction with 24x7 support to ensure a seamless and pleasant rental experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
