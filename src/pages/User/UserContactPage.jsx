import { useForm } from 'react-hook-form';
import { axiosInstance } from '../../../config/axiosinstance';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast'; // Assuming you're using react-hot-toast for notifications

const UserContactPage = () => {
  const { register, handleSubmit, formState: { errors }, setFocus } = useForm(); 
  const [profile, setProfile] = useState(null);

  const fetchProfileData = async () => {
    try {
      const response = await axiosInstance({
        url: '/user/profile', 
        method: 'GET',
        withCredentials: true,
      });
      setProfile(response?.data?.data || {});
      console.log(response); 
    } catch (error) {
      toast.error('Failed to fetch profile data');
      console.error(error); 
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  const onSubmit = async (data) => {
    try {
      const details = { ...data, userId: profile._id };
      const response = await axiosInstance.post('/contact/create-contact', details);
      console.log('Form submitted successfully:', response.data);
      toast.success('Your message has been sent successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-start bg-cover bg-center" 
         style={{ backgroundImage: 'url("https://www.idfreshfood.com/wp-content/uploads/2017/09/contact_us_2.jpg")' }}>
      <div className="bg-white bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80 p-12 rounded-2xl shadow-2xl w-full max-w-4xl backdrop-blur-md grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Contact Info Section */}
        <div className="contact-info flex flex-col justify-center text-gray-800 dark:text-gray-200">
          <h3 className="text-5xl font-bold mb-6">Auto Car Rentals</h3>
          <p className="text-lg mb-8 leading-relaxed">
            Contact us for premium car rental services. We offer a wide range of vehicles to meet your needs with unbeatable prices.
          </p>
          <ul className="space-y-2">
            <li><strong>Phone:</strong> +91 9897969594</li>
            <li><strong>Email:</strong> Autocar@gmail.com</li>
            <li><strong>Address:</strong> Vytla, Kochi</li>
          </ul>
        </div>

        {/* Contact Form Section */}
        <form onSubmit={handleSubmit(onSubmit)} className="bg-indigo-600 text-white dark:bg-indigo-800 p-8 rounded-2xl shadow-2xl flex flex-col space-y-6">
          <h3 className="text-4xl font-bold mb-6">Get in Touch</h3>
          
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              {...register('username', { required: 'Name is required' })}
              className={`w-full p-4 rounded-lg border bg-white text-black dark:bg-gray-900 dark:text-white dark:border-gray-600 ${errors.username ? 'border-red-500' : 'border-gray-300'}`}
              onFocus={() => setFocus('username')}
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
          </div>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              {...register('email', { required: 'Email is required' })}
              className={`w-full p-4 rounded-lg border bg-white text-black dark:bg-gray-900 dark:text-white dark:border-gray-600 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              onFocus={() => setFocus('email')}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div className="mb-4">
            <input
              type="tel"
              placeholder="Phone"
              {...register('phonenumber', { required: 'Phone number is required' })}
              className={`w-full p-4 rounded-lg border bg-white text-black dark:bg-gray-900 dark:text-white dark:border-gray-600 ${errors.phonenumber ? 'border-red-500' : 'border-gray-300'}`}
              onFocus={() => setFocus('phonenumber')}
            />
            {errors.phonenumber && <p className="text-red-500 text-sm mt-1">{errors.phonenumber.message}</p>}
          </div>

          <div className="mb-4">
            <textarea
              placeholder="Your message"
              {...register('usertext', { required: 'Message is required' })}
              className={`w-full p-4 rounded-lg border bg-white text-black dark:bg-gray-900 dark:text-white dark:border-gray-600 ${errors.usertext ? 'border-red-500' : 'border-gray-300'}`}
              rows="5"
              onFocus={() => setFocus('usertext')}
            ></textarea>
            {errors.usertext && <p className="text-red-500 text-sm mt-1">{errors.usertext.message}</p>}
          </div>

          <button type="submit" className="w-full py-3 bg-white text-indigo-600 font-bold rounded-lg hover:bg-gray-200 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-700 transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserContactPage;
