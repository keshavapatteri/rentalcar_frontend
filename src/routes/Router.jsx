
import RootLayout from "../layouts/RootLayout";
import UserLayout from "../layouts/UserLayout";
import { createBrowserRouter } from "react-router-dom";
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
import AdminCarList from "../pages/admin/AdminCarList";
import AdminCarUpdate from "../pages/admin/AdminCarUpdate";
import AdminCarDelete from "../pages/admin/AdminCarDelete";
import AdminBookingList from "../pages/admin/AdminBookingList";
import AdminReviewList from "../pages/admin/AdminReviewList";
import AdminUserList from "../pages/admin/AdminUserList";
import AdminReviewUpdate from "../pages/admin/AdminReviewUpdate";
import MyBooking from "../pages/User/MyBooking";
import MyProfile from "../pages/User/MyProfile";
import Wishlist from "../pages/User/Wishlist";
import AdminContactMessage from "../pages/admin/AdminContactMessage";
import Tearms from "../pages/User/Tearms";




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
                path: 'adminlogin',
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
                path: 'car', 
                element: <UserCarlistPage />,
            },
            {
                path: 'car-details/:id', 
                element: <UserCarDetailsPage/>,
            },
            {
                path: 'car-details/booking/:id',
                element: <UserBookingPage/>,
            },
            {
                path: 'success',
                element: <PaymentSuccess/>,
            },
            {
                path: 'cancel', 
                element: <PaymentCancel/>,
            },
            {
                path: 'aboutpage', 
                element: <UserAboutPage/>,
            },
            {
                path: 'contactpage', 
                element: <UserContactPage/>,
            },
            {
                path: 'mybooking', 
                element: <MyBooking/>,
            },

            {
                path: 'myprofile', 
                element: <MyProfile/>,
            },

            {
                path: 'Wishlist', 
                element: <Wishlist/>,
            },

            
            {
                path: 'Tearms', 
                element: <Tearms/>,
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

       //car     
            {
                path: 'Admin-car',
                element: <AdminCarPage/>,
            },
            {
                path: 'Admin-carlist',
                element: <AdminCarList/>,
            },
            {
                path: 'Admin-carupdate/:id',
                element: <AdminCarUpdate/>,
            },
            
            {
                path: 'Admin-cardelete/:id',
                element: <AdminCarDelete/>,
            },
//Bookings
{
    path: 'Admin-bookinglist',
    element: <AdminBookingList/>,
},







//Review

{
    path: 'Admin-ReviewList/:id',
    element: <AdminReviewList/>,
},

{
    path: 'Admin-Update/:id',
    element: <AdminReviewUpdate/>,
},



//user
{
    path: 'Admin-AdminUserList/:id',
    element: <AdminUserList/>,
},

////////////////////////////////////////////////
            {                                        
                path: 'review',
                element: <AdminReviewPage />,
            },                                      
                                                          ///////////// ===========>  NOT USING
            {
                path: 'user',
                element: <AdminUserPage />,
            },

 /////////////////////////////////////////////////////           
            {
                path: 'contact-message',
                element: <AdminContactMessage />,
            },



            
        ]
    },
]);
