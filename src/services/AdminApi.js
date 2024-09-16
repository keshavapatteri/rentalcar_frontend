

import toast from "react-hot-toast";
import { axiosInstance } from "../../config/axiosinstance";

export const adminLogin = async(data)=>{

    try {
   console.log("hyyy");
   
        const response = await axiosInstance.post("/admin/login", data, {
            withCredentials: true,
          });
        return response?.data;
    } catch (error) {
        toast.error("Log-in Success");
        console.log(error);
    }
}

export const AdminAddCar = async(data)=>{

    try {
   console.log("sending car data :",data);

        const response = await axiosInstance.post("/admin/car/add", data, {
            withCredentials: true,
          });
          
        return response?.data;
    } catch (error) {
        console.error('Error adding car:', error.response?.data || error.message);
    
        // Display error message
        toast.error('Error adding car');
    }
}

