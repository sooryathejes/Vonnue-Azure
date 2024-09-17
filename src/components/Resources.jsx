import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './Resources.css'
const Resources = () => {
  const [activeTab, setActiveTab] = useState(0);
  

  const tabs = [
    'IT professionals',
    'Developers',
    'Data analysts',
    'Business leaders',
    'Startups',
    'Students'
  ];
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1,
})
  return (
    <div className='i'>
       <div
                ref={ref}
                className={`flex flex-col justify-center items-center text-center slide-in ${inView ? 'slide-in-visible' : ''}`}    >
                <p className='text-xl font-medium mt-24 ms-24'>RESOURCES BY ROLE</p>
                <h1 className='text-8xl font-semibold ms-24 mb-16'>Transform the way you work</h1>
            </div>


      <div className="flex justify-center items-center mt-4">

      <div className="flex bg-white rounded-xl border border-black-600 w-[1600px] h-[100px]">
  {tabs.map((tab, index) => (
    <button
      key={index}
      onClick={() => setActiveTab(index)}
      className={`flex-1 px-6 py-3 text-xl font-semibold text-gray-900 transition-colors duration-300 ${
        activeTab === index
          ? 'border-b-2 border-blue-500 text-black'
          : 'hover:bg-gray-100 hover:border-b-2 hover:border-b-blue-500'
      } ${index !== tabs.length - 1 ? 'border-r border-gray-200 border-b-blue-500' : ''} ${
        index === 0 ? 'rounded-l-lg' : ''
      } ${index === tabs.length - 1 ? 'rounded-r-lg' : ''}`}
    >
      {tab}
    </button>
  ))}
</div>

      </div>
      <div className='flex flex-col justify-center items-center text-center mt-10'>
        <h2 className='text-xl'>Get guidance and insights on AI innovation, intelligent data, cloud infrastructure, and optimization.</h2>
      </div>
      <div className="flex items-center justify-center space-x-2 mt-10">
      <button className=" bg-blue-600 text-white p-2 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                        <a href="#" className="text-blue-600 hover:underline font-medium">

                            Explore insights
                        </a>
                    </div>
      <div className='flex  justify-center items-center min-h-screen '>
        <div className=' flex  w-[55%] h-[650px]   rounded-lg shadow-lg overflow-hidden'>



          <div className=' flex justify-center item-center m-5 '>
            <img className='rounded-lg' src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Resources-tab6-Students-4x?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1664&hei=936&qlt=100&fmt=png-alpha&fit=constrain' />
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default Resources