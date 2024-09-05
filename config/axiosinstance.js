import axios from "axios";


export const axiosInstance = axios.create({
    headers:{authorization:localStorage.getItem("User")?.accesToken},
    baseURL:`${import.meta.env.VITE_API_URL}/api/v1`
});

