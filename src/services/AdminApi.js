

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

