
import { axiosInstance } from "../../config/axiosinstance";

export const userLogin = async (data) => {
  try {
    const response = await axiosInstance.post("/user/login", data, {
      withCredentials: true,
    });
    return response?.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const userSignup = async (data) => {
    try {
      console.log("Signup data:", data); // Log the data being sent
      const response = await axiosInstance.post("/user/create", data, {
        withCredentials: true,
      });
      console.log("Signup response:", response); // Log the full response
      return response?.data;
    } catch (error) {
      console.log("Signup error:", error.response?.data || error.message); // Log the error
      throw error;
    }
  };


  //for booking
  export const userBooking = async (data) => {
    try {
      const response = await axiosInstance.post("/booking/create", data, {
        withCredentials: true,
      });
      return response?.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  