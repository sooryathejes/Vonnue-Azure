import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Mainpage.css';

function Mainpage() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Adjust this value to control when the animation should start
  });

  return (
    <div className="a mainpage-container">
      <div
        ref={ref}
        className={`w-2/3 ms-24 flex flex-col justify-center slide-in ${inView ? 'slide-in-visible' : ''}`}
      >
        <p className=' mt-48 text-xl font-semibold'>AZURE. LIMITLESS INNOVATION</p>
        <h1 className='text-9xl font-semibold '>It all comes down to trust</h1>
        <h2 className='text-2xl w-2/3'>
          Build and deploy AI solutions confidently with privacy, safety, 
          and security features from Azure. Pay as you go or try Azure free
           for up to 30 days.<br></br> There’s no upfront commitment—cancel anytime.
        </h2>
        <button className="mt-20 bg-blue-600 text-white font-medium py-2 px-4 w-60 h-16 rounded-lg hover:bg-blue-700 transition duration-300">
            Get started with Azure
          </button>
      </div>
      
    </div>
  );
}

export default Mainpage;
