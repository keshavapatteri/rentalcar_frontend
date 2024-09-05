// App.js
import React, { useEffect } from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Router';
import  { Toaster } from 'react-hot-toast';
function App() {
  const adminpages =[{type:"admin", url:"/admin/about"}, {type:"admin", url:"/admin/car"}]
 
  useEffect(()=>{

  },[])
  return (
    <div>
<RouterProvider router={router}/>
<Toaster/>
    </div>
  );
}

export default App;


