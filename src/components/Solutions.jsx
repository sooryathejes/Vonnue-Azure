import React, { useState } from 'react';
import './Solutions.css';
import { useInView } from 'react-intersection-observer';


const Solutions = () => {
  // State to control visibility of each section
  const [isOpen, setIsOpen] = useState({
    ai: false,
    cloud: false,
    confidentialComputing: false,

  });
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1,
  })

  // Toggle function for each dropdown
  const toggleSection = (section) => {
    setIsOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="m bg-gray-50">
      {/* Header */}
      <div
                ref={ref}
                className={`flex flex-col slide-in ${inView ? 'slide-in-visible' : ''}`}    >
                <p className='text-xl font-medium mt-24 ms-24'>Solutions</p>
                <h1 className='text-8xl font-semibold ms-24 mb-16'>Find solutions for putting your ideas into action</h1>
            </div>

      <div className="flex gap-4 mb-4 ms-24">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-full">Featured solutions</button>
        <button className="px-4 py-2 bg-gray-200 rounded-full">Cloud migration</button>
        <button className="px-4 py-2 bg-gray-200 rounded-full">Data transformation</button>
        <button className="px-4 py-2 bg-gray-200 rounded-full">App development</button>
        <button className="px-4 py-2 bg-gray-200 rounded-full">AI</button>
      </div>

      {/* Main Content */}
      <div className="flex w-full max-w-7x ms-24 gap-80">
        <div className="w-1/3  p-6 shadow-lg rounded-lg overflow-y-scroll h-[600px]">
          {/* Collapsible Sections */}
          <div className="space-y-8"> {/* Adjust the spacing between sections here */}
            {/* AI Section */}
            <div>
              <h2 className="text-3xl font-semibold cursor-pointer" onClick={() => toggleSection('ai')}>AI</h2>
              {isOpen.ai && (
                <div className="my-4">
                  <h3 className="text-2xl font-medium">Responsible AI with Azure</h3>
                  <p className="text-2xl text-gray-600">
                    Develop, use, and govern AI solutions responsibly with Azure AI.
                  </p>
                  <a href="#" className="text-blue-600 underline text-sm">Discover responsible AI solutions</a>
                </div>
              )}
            </div>
            <hr />

            {/* Trust your cloud Section */}
            <div>
              <h2 className="text-3xl font-semibold cursor-pointer" onClick={() => toggleSection('cloud')}>Trust your cloud</h2>
              {isOpen.cloud && (
                <div className="my-4">
                  <h3 className="text-2xl font-medium">Trust your cloud</h3>
                  <p className="text-2xl text-gray-600">Learn about our trusted cloud solutions to securely manage your data.</p>
                  <a href="#" className="text-blue-600 underline text-sm">Explore trusted cloud solutions</a>
                </div>
              )}
            </div>
            <hr />

            {/* Azure Confidential Computing Section */}
            <div>
              <h2 className="text-3xl font-semibold cursor-pointer" onClick={() => toggleSection('confidentialComputing')}>Azure Confidential Computing</h2>
              {isOpen.confidentialComputing && (
                <div className="my-4">
                  <h3 className="text-2xl font-medium">Azure Confidential Computing</h3>
                  <p className="text-2xl text-gray-600">
                    Protect your data and code in-use with Azure Confidential Computing.
                  </p>
                  <a href="#" className="text-blue-600 underline text-sm">Learn more about Azure Confidential Computing</a>
                </div>
              )}
            </div>
            <hr />
            <div>
              <h2 className="text-3xl font-semibold cursor-pointer" onClick={() => toggleSection('confidentialComputing')}>Responsile Ai with assure</h2>
              {isOpen.confidentialComputing && (
                <div className="my-4">
                  <h3 className="text-2xl font-medium">Responsile Ai with assure</h3>
                  <p className="text-2xl text-gray-600">
                    Protect your data and code in-use with Azure Confidential Computing.
                  </p>
                  <a href="#" className="text-blue-600 underline text-sm">Learn more about Azure Confidential Computing</a>
                </div>
              )}
            </div>
            <hr/>
            <div>
              <h2 className="text-3xl font-semibold cursor-pointer" onClick={() => toggleSection('confidentialComputing')}>Build and modanize intelligent app</h2>
              {isOpen.confidentialComputing && (
                <div className="my-4">
                  <h3 className="text-2xl font-medium">Responsile Ai with assure</h3>
                  <p className="text-2xl text-gray-600">
                    Protect your data and code in-use with Azure Confidential Computing.
                  </p>
                  <a href="#" className="text-blue-600 underline text-sm">Learn more about Azure Confidential Computing</a>
                </div>
              )}
            </div>
            <hr/>
            <div>
              <h2 className="text-3xl font-semibold cursor-pointer" onClick={() => toggleSection('confidentialComputing')}>Build and modanize intelligent app</h2>
              {isOpen.confidentialComputing && (
                <div className="my-4">
                  <h3 className="text-2xl font-medium">Responsile Ai with assure</h3>
                  <p className="text-2xl text-gray-600">
                    Protect your data and code in-use with Azure Confidential Computing.
                  </p>
                  <a href="#" className="text-blue-600 underline text-sm">Learn more about Azure Confidential Computing</a>
                </div>
              )}
            </div>
            <hr />
            <div>
              <h2 className="text-3xl font-semibold cursor-pointer" onClick={() => toggleSection('confidentialComputing')}>Responsile Ai with assure</h2>
              {isOpen.confidentialComputing && (
                <div className="my-4">
                  <h3 className="text-2xl font-medium">Responsile Ai with assure</h3>
                  <p className="text-2xl text-gray-600">
                    Protect your data and code in-use with Azure Confidential Computing.
                  </p>
                  <a href="#" className="text-blue-600 underline text-sm">Learn more about Azure Confidential Computing</a>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="k w-[800px] me-1 rounded-lg">
        </div>
      </div>

      <div className="flex items-center space-x-2 ms-24 mt-20">
                        <button className=" bg-blue-600 text-white p-2 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                        <a href="#" className="text-blue-600 hover:underline font-medium">

                            View all solutions(40+)
                        </a>
                    </div>
    </div>
  );
};

export default Solutions;
