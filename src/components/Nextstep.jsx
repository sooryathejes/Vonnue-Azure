import React from 'react';
import './Nextstep.css'
import { useInView } from 'react-intersection-observer';

const NextStep = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, e
    threshold: 0.1,
  })
  return (
    <div className="l ">
 <div
                ref={ref}
                className={`flex flex-col items-center  py-10 slide-in ${inView ? 'slide-in-visible' : ''}`}    >
                <h2 className='text-8xl font-semibold mb-8'>Take the next step
                </h2>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-3/4">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">
              Choose the Azure account that’s right for you
            </h3>
            <p className="text-xl text-gray-600 mb-4">
              Pay as you go or try Azure for free for up to 30 days.
            </p>
            <div className="flex items-center space-x-2 ms-24 mt-20">
              <button className=" bg-blue-600 text-white p-2 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <a href="#" className="text-blue-600 hover:underline font-medium">

                Get started with Azure            </a>
            </div>

          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">
              Connect with a sales specialist
            </h3>
            <p className="text-xl text-gray-600 mb-4">
              Chat with or call a sales specialist for personalized guidance.
            </p>
            <div className="flex items-center space-x-2 ms-24 mt-24">
              <button className=" bg-blue-600 text-white p-2 rounded ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <a href="#" className="text-blue-600 hover:underline font-medium">

                Get in Touch            </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">
              New to Azure? Learn at your own pace
            </h3>
            <p className="text-xl text-gray-600 mb-4">
              Learn cloud computing basics with self-paced modules on Microsoft Learn.
            </p>
            <div className="flex items-center space-x-2 ms-24 mt-14">
              <button className=" bg-blue-600 text-white p-2 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <a href="#" className="text-blue-600 hover:underline font-medium">

                Get Started            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextStep;
