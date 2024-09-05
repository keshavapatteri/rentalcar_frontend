import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='min-h-screen w-full'>
      <h1>404 NOT FOUND</h1>
      <Link to={'/home'}>Homepage</Link>
    </div>
  )
}

export default ErrorPage
