import React, { useState, useEffect } from 'react';

const HomePage = () => {
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
    }, 5000); // Change slide every 5 seconds

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="min-h-screen pt-10">
      {/* Hero Section */}
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

      <div className="text-center pt-10">
        <h1 className="text-4xl font-bold ">Enjoying With Auto Car !!!!</h1>
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

      {/* Services Section */}
      
      <section className="container mx-auto py-16 text-center">
      <h3 className="text-3xl font-bold mb-12">Services</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <svg className="w-12 h-12 mb-4 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2a6 6 0 00-6 6v4h12V8a6 6 0 00-6-6zm0 8H6v2h12v-2h-6z" />
            </svg>
            <h4 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Car Rentals</h4>
            <p>Wide variety of cars available for rent, from economy to luxury.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <svg className="w-12 h-12 mb-4 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 6h-4V3H9v3H5v6h14V6zm0 8H5v5h4v-2h6v2h4v-5z" />
            </svg>
            <h4 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Flexible Booking</h4>
            <p>Easy booking process with flexible pick-up and drop-off locations.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <svg className="w-12 h-12 mb-4 text-red-500 dark:text-red-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2a10 10 0 00-10 10v2h20v-2a10 10 0 00-10-10z" />
            </svg>
            <h4 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">24/7 Support</h4>
            <p>Our customer support team is available 24/7 to assist you.</p>
          </div>
        </div>
      </section>
      
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


   {/* Reviews Section */}
<section className="container mx-auto py-16 text-center">
  <h3 className="text-3xl font-bold mb-12 text-gray-900 dark:text-gray-100">What Our Customers Say</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <p className="text-gray-600 dark:text-gray-300 mb-4">"The rental process was seamless and the car was in excellent condition. Highly recommend for anyone in need of a reliable rental service!"</p>
      <p className="font-semibold">John Doe</p>
      <p className="text-sm text-gray-500">Frequent Traveler</p>
    </div>
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <p className="text-gray-600 dark:text-gray-300 mb-4">"Great experience from start to finish. The staff were friendly and the car exceeded my expectations. Will definitely use this service again."</p>
      <p className="font-semibold">Jane Smith</p>
      <p className="text-sm text-gray-500">Business Executive</p>
    </div>
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <p className="text-gray-600 dark:text-gray-300 mb-4">"Affordable rates and exceptional service. The car was clean and well-maintained. I was very pleased with the overall experience."</p>
      <p className="font-semibold">Alex Johnson</p>
      <p className="text-sm text-gray-500">Weekend Traveler</p>
    </div>
  </div>
</section>

    </div>
  );
};

export default HomePage;
