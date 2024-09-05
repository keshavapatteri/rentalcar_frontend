import React, { useState, useEffect } from 'react';

const UserHomePage = () => {
  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    "https://static.vecteezy.com/system/resources/previews/021/607/823/large_2x/family-with-car-travel-driving-road-trip-summer-vacation-in-car-in-the-sunset-dad-mom-and-daughter-happy-traveling-enjoy-holidays-and-relaxation-together-get-the-atmosphere-and-go-to-destination-photo.jpg",
    "https://www.zoomcar.com/img/vistara_banner.jpg",
    "https://storage.googleapis.com/cms-assets-jucy-oconee-prod-28a1ed/public/NZ-LIFESTYLE-IMAGERY/3100-x-2074_COVER/CARS/COMPACT-SUV/two-friends-laughing-drinking-coffee-back-of-compact-suv.jpg",
  ];

  // Change slide every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div>
     <div className="container mx-auto p-4">
  <h3 className="text-4xl font-extrabold mb-8 text-[#526278] dark:text-[#F3F4F6] text-center">
    Enjoy Our Cars
  </h3>
  <p className="text-lg text-[#4B5563] dark:text-[#D1D5DB] text-center">
    Explore our wide range of vehicles designed to suit every need and preference. 
    Experience the thrill of driving with the best in the industry.
  </p>
</div>

      {/* Carousel Section */}
      <section className="relative w-4/5 mx-auto h-[600px] overflow-hidden py-16">
        <div className="relative w-full h-full">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)`, height: '100%' }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0 h-full">
                <img
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none"
          >
            ›
          </button>
        </div>
      </section>

      {/* Text Area */}
      <section
        className="bg-cover bg-center h-96 text-white"
        style={{ backgroundImage: 'url(https://advertising.expedia.com/wp-content/uploads/2020/08/Car-Hero_1920x800.jpg)' }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">
              Find the Perfect Car for Your Journey
            </h2>
            <p className="text-xl mb-8">
              Explore a wide range of vehicles for all your needs
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row bg-white p-8 rounded-lg shadow-md">
        {/* Left Side: Content Area */}
        <div className="w-full md:w-1/2 pr-4">
          <h2 className="text-2xl font-bold mb-6">Welcome to Our Car Rental Service</h2>
          <p className="text-gray-700 mb-4">
            At our car rental service, we offer a diverse selection of vehicles to meet your needs, whether you're looking for a compact car for city driving or a spacious SUV for a family trip.
          </p>
          <p className="text-gray-700 mb-4">
            Our mission is to provide top-quality cars at competitive rates with exceptional customer service. Enjoy a hassle-free rental experience with our easy booking process and 24/7 support.
          </p>
          <p className="text-gray-700 mb-4">
            Explore our fleet and find the perfect vehicle for your next adventure. We are committed to ensuring your journey is comfortable and memorable.
          </p>
          <p className="text-gray-700">
            Contact us today to learn more about our services and special offers.
          </p>
        </div>

        {/* Right Side: Static Image */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center items-center">
          <img 
            src="https://img.freepik.com/premium-photo/modern-automobile-classic-technology-wheel-traffic_665346-119.jpg" 
            alt="Car"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Key Features Section */}
      <div className="max-w-xxl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Our Key Features</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center bg-gray-50 p-4 rounded-lg shadow-md">
            <svg className="w-12 h-12 text-blue-500 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7a4 4 0 018 0v1a4 4 0 01-8 0V7zM7 10V6a2 2 0 014 0v4M7 10h10m0 0v4a2 2 0 01-4 0v-4m4 4h2m-6 2v2M7 20h10a2 2 0 002-2v-2H5v2a2 2 0 002 2z"/>
            </svg>
            <div>
              <h3 className="text-xl font-semibold">Premium Vehicles</h3>
              <p className="text-gray-600">Experience our top-of-the-line cars for the best drive.</p>
            </div>
          </div>
          <div className="flex items-center bg-gray-50 p-4 rounded-lg shadow-md">
            <svg className="w-12 h-12 text-blue-500 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11h14v2H5v-2zm0 4h14v2H5v-2zm0-8h14v2H5V7zm0 4h14v2H5v-2z"/>
            </svg>
            <div>
              <h3 className="text-xl font-semibold">Easy Booking</h3>
              <p className="text-gray-600">Book your car quickly and easily with our user-friendly interface.</p>
            </div>
          </div>
          <div className="flex items-center bg-gray-50 p-4 rounded-lg shadow-md">
            <svg className="w-12 h-12 text-blue-500 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7a4 4 0 018 0v1a4 4 0 01-8 0V7zM7 10V6a2 2 0 014 0v4M7 10h10m0 0v4a2 2 0 01-4 0v-4m4 4h2m-6 2v2M7 20h10a2 2 0 002-2v-2H5v2a2 2 0 002 2z"/>
            </svg>
            <div>
              <h3 className="text-xl font-semibold">24/7 Support</h3>
              <p className="text-gray-600">Our team is available around the clock to assist you.</p>
            </div>
          </div>
          <div className="flex items-center bg-gray-50 p-4 rounded-lg shadow-md">
            <svg className="w-12 h-12 text-blue-500 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7a4 4 0 018 0v1a4 4 0 01-8 0V7zM7 10V6a2 2 0 014 0v4M7 10h10m0 0v4a2 2 0 01-4 0v-4m4 4h2m-6 2v2M7 20h10a2 2 0 002-2v-2H5v2a2 2 0 002 2z"/>
            </svg>
            <div>
              <h3 className="text-xl font-semibold">Affordable Rates</h3>
              <p className="text-gray-600">We offer competitive pricing to fit your budget.</p>
            </div>
          </div>
        </div>
      </div>
      
{/* Featured Cars Section */}
<section className="py-16">
  <div className="container mx-auto text-center">
    <h3 className="text-3xl font-bold mb-12">Featured Cars</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Car 1 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <img
          src="https://imgd.aeplcdn.com/664x374/n/cw/ec/139139/harrier-facelift-exterior-right-rear-three-quarter-12.jpeg?isig=0&q=80"
          alt="Car"
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h4 className="text-2xl font-bold mb-2">TATA HARIER</h4>
        <p className="text-xl text-blue-600">₹2000/day</p>
      </div>
      {/* Car 2 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <img
          src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/Thar-ROXX/8438/1723692413550/front-left-side-47.jpg"
          alt="Car"
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h4 className="text-2xl font-bold mb-2">MAHINDRA THAR</h4>
        <p className="text-xl text-blue-600">₹2300/day</p>
      </div>
      {/* Car 3 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <img
          src="https://imgd.aeplcdn.com/664x374/n/cw/ec/51435/innova-crysta-exterior-front-view.jpeg?q=80"
          alt="Car"
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h4 className="text-2xl font-bold mb-2">TOYOTA INNOVA</h4>
        <p className="text-xl text-blue-600">₹2500/day</p>
       
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default UserHomePage;
