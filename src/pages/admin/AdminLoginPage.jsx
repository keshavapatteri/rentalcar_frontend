import React from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
import { adminLogin } from '../../services/AdminApi';

const AdminloginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
console.log("nav");

  const onSubmit = async (data) => {
    
    try {
   
      const response = await adminLogin(data)
      Cookies.remove('userLogin')
      if (response) {
        console.log(`####res`, response);
       if(response?.status===200){
        
        Cookies.set('userLogin', JSON.stringify({type:'admin',token:response?.token}),{ expires:7}); // expires in 7 days
       console.log(Cookies.get('userLogin'))
        toast.success(response.message); // Correctly access the message
        
       navigate('/admin/AdminPage');
       } else{
        console.log("Elseeeeeee")
        toast.error(response?.data?.message||"Unable to login"); // Correctly access the message
      
       }
      
      }

      //direction to the home page
      // navigate('/')
    } catch (error) {
      toast.error('login-failed')
      console.log(error);
    }
  };


  return (
    <div>
      <div className="hero bg-base-200 py-20">
        <div className="hero-content flex-col lg:flex-row lg:flex-row lg:w-6/12">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold"> ADMIN  Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email"  {...register("email")} placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password")} placeholder="password" className="input input-bordered" required />
               
              </div>
              <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button> 
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminloginPage;
