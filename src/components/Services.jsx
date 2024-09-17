import React from 'react'
import './Servieces.css'

function Services() {
  return (
    <div className='g  flex justify-center items-center min-h-screen bg-gray-100'>
    <div className='flex  w-[85%] bg-white rounded-lg shadow-lg overflow-hidden'>
     
      
      <div className='w-1/2 p-6 flex flex-col justify-center mt-40'>
        <h1 className='text-3xl font-bold mb-4'>
          See why Gartner named Microsoft a Leader
        </h1>
        <p className='text-2xl text-gray-700'>
          Discover why Microsoft was named a Leader and positioned furthest to
          the right for Completeness of Vision in the 2023 Gartner® Magic Quadrant™ for Strategic Cloud Platform Services (SCPS).
        </p>
        <button className="bg-blue-600 text-white font-medium py-2 px-4 w-60 h-16  mt-60 rounded-lg hover:bg-blue-700 transition duration-300">
      Get started with Azure
    </button>
      </div>
      <div className='w-1/2'>
        <img src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gartner-accouncement-1_newimage?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=656&hei=492&qlt=100&fmt=png-alpha&fit=constrain' alt="Your description" className='w-full h-full object-cover' />
      </div>
      
    </div>
    
  </div>
  )
}

export default Services