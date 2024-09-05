
import RootLayout from "../layouts/RootLayout";

import UserLayout from "../layouts/UserLayout";
import { createBrowserRouter } from "react-router-dom";




// import AuthUser from "./protectedRoutes/AuthUser.jsx";
import AdminLayout from "../layouts/AdminLayout";
import AdminHomePage from "../pages/admin/AdminHomePage";
import AdminReviewPage from "../pages/admin/AdminReviewPage";

import AdminUserPage from "../pages/admin/AdminUserPage";
import AdminLoginPage from "../pages/admin/AdminLoginPage";
import UserHomePage from "../pages/User/UserHomePage";
import UserCarlistPage from "../pages/User/UserCarlistPage";

import UserCarDetailsPage from "../pages/User/UserCarDetailsPage";
import UserBookingPage from "../pages/User/UserBookingPage";
import PaymentSuccess from "../pages/User/PaymentSuccess";
import PaymentCancel from "../pages/User/PaymentCancel";



import ErrorPage from "../pages/Home/ErrorPage";


import ContactPage from "../pages/Home/ContactPage";

import AdminCarPage from "../pages/admin/AdminCarPage";
import HomePage from "../pages/Home/HomePage"
import SignupPage from "../pages/Home/SignupPage"
import CarlistPage from "../pages/Home/CarlistPage";
import UserAboutPage from "../pages/User/UserAboutPage";


import UserContactPage from "../pages/User/UserContactPage"
import UserLoginPage from "../pages/Home/UserLoginPage"
import AboutPage from "../pages/Home/AboutPage";

// import AboutPage from "../pages/HOME/AboutPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        errorElement: <ErrorPage />,
        children: [
          
          
            {
                path: "login",
                element: <UserLoginPage />
            },
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "signup",
                element: <SignupPage/>
            },
            {
                path: "about",
                element: <AboutPage />
            },
            {
                path: "contact",
                element: <ContactPage/>
            },
            {
                path: 'admin-login',
                element: <AdminLoginPage />,
            },
            {
                path: 'car-list',
                element: <CarlistPage/>,
            },

        ]
    },  
    {
        path: "/user",
        element: <UserLayout />,
        children: [
            {
                path: 'home', // Make the home page path relative
                element: <UserHomePage />,
            },
            {
                path: 'car', // Use relative path for the car list page
                element: <UserCarlistPage />,
            },
            {
                path: 'car-details/:id', // Use relative path for the car list page
                element: <UserCarDetailsPage/>,
            },
            {
                path: 'car-details/booking/:id', // Use relative path for the car list page
                element: <UserBookingPage/>,
            },
            {
                path: 'success', // Use relative path for the car list page
                element: <PaymentSuccess/>,
            },
            {
                path: 'cancel', // Use relative path for the car list page
                element: <PaymentCancel/>,
            },
            {
                path: 'aboutpage', // Use relative path for the car list page
                element: <UserAboutPage/>,
            },
            {
                path: 'contactpage', // Use relative path for the car list page
                element: <UserContactPage/>,
            },
         
        ]
    },
    
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                path: "AdminPage",  // Updated path here
                element: <AdminHomePage />,
            },
            {
                path: 'Admin-car',
                element: <AdminCarPage/>,
            },
            {
                path: 'review',
                element: <AdminReviewPage />,
            },
          
            {
                path: 'user',
                element: <AdminUserPage />,
            },
        ]
    },
]);
