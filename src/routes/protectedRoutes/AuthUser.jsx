import React from 'react'
import { axiosInstance } from '../../../config/axiosinstance';
import { useEffect } from 'react';

const AuthUser = ({children}) => {

    const checkUser = async()=>{
        try {
            const response = await axiosInstance()({
              url:'/user/check-user',
              method:"GET",
            });
            console.log(response,"====response");
          } catch (error) {
            console.log(error);
            
          }
    };
    useEffect(()=>{
        checkUser();

    },[]);

  return children;
  
};

 export default AuthUser
