import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './Customer.css'

const Customer = () => {
    const companies = [
        { name: 'HP', logo: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/351994-CustomerStories-Logo-HP-135x58?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=271&hei=116&qlt=100&fit=constrain' }, // Use actual URLs for logos
        { name: 'Unity', logo: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/351994-CustomerStories-Logo-Unity-135x58?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=348&hei=150&qlt=100&fit=constrain' },
        { name: 'LEGO', logo: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/351994-CustomerStories-Logo-LEGO-135x58?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=208&hei=100&qlt=100&fit=constrain' },
        { name: 'Siemens', logo: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/351994-CustomerStories-Logo-Siemens-135x58?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=200&hei=100&qlt=100&fit=constrain' },
        { name: 'Heineken', logo: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/351994-CustomerStories-Logo-Heineken-135x58?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=208&hei=100&qlt=100&fit=constrain' },
    ];
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.1,
    })
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <div className='h'>
           <div
                ref={ref}
                className={`flex flex-col slide-in ${inView ? 'slide-in-visible' : ''}`}    >
                <p className='text-xl font-medium mt-24 ms-24'>FEATURED NEWS</p>
                <h1 className='text-8xl font-semibold ms-24 mb-16'>Discover what’s happening on Azure</h1>
            </div>
            <div className='  flex ms-24 '>
                <div className='flex  w-[90%] h-[700px] bg-white rounded-lg shadow-lg overflow-hidden'>


                    <div className='w-1/2  flex flex-col '>
                        <img className='w-40 rounded-2 border- border-gray-700 mt-10' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/351994-CustomerStories-Logo-HP-135x58?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=174&hei=74&qlt=100&fmt=png-alpha&fit=constrain" alt="" />

                        <p className='text-3xl text-gray-700 mt-10 font-semibold ms-5'>
                            HP incorporated GitHub Copilot into its workflow to help developers collaborate more easily and work more productively.
                        </p>
                        <div className="flex flex-col ms-5 mt-40">
                            <h2 className="text-xl font-semibold">Products</h2>
                            <div className="flex  space-x-6 mt-4">
                                <a href="#" className="flex items-center space-x-2 text-blue-600 hover:underline">
                                    <img src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/351994-Product-Logo-GitHubCopilot-16x16?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=85" alt="GitHub Copilot" className="h-6" />
                                    <span>GitHub Copilot</span>
                                </a>
                                <a href="#" className="flex items-center space-x-2 text-blue-600 hover:underline">
                                    <img src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/351994-Product-Logo-AzureDevOps-16x16?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=85" alt="Azure DevOps" className="h-6" />
                                    <span>Azure DevOps</span>
                                </a>
                                <a href="#" className="flex items-center space-x-2 text-blue-600 hover:underline">
                                    <img src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Hero-icon-337178?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=16&hei=16&qlt=85&fmt=png-alpha&fit=constrain" alt="Visual Studio" className="h-6" />
                                    <span>Visual Studio</span>
                                </a>
                                <a href="#" className="flex items-center space-x-2 text-blue-600 hover:underline">
                                    <img src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Customer-GM-Product-GitHub?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=85" alt="GitHub Enterprise" className="h-6" />
                                    <span>GitHub Enterprise</span>
                                </a>
                            </div>
                        </div>

                        <button className="mt-24 ms-5 bg-blue-600 text-white font-medium py-2 px-4 w-40 h-16 rounded-lg hover:bg-blue-700 transition duration-300">
                            Case study        </button>
                    </div>
                    <div className='w-1/2'>
                        <img className='w-[98%] mt-6 h-[650px]  rounded-lg' src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/351994-Desktop-CustomerStories-HP-656x522?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=664&hei=547&qlt=100&fmt=png-alpha&fit=constrain' />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center mt-10">
                <div className="grid grid-cols-1 md:grid-cols-5 p-3 w-3/4 h-40 ">
                    {companies.map((company, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`flex items-center justify-center p-4 bg-white border border-b-gray-500 shadow-md transition duration-300 cursor-pointer
            ${activeIndex === index ? 'border-b-8 border-b-blue-500' : 'border-b-2 border-gray-200'}
            hover:border-b-4 hover:border-b-blue-500`}
                        >
                            <img src={company.logo} alt={company.name} className="h-16" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex items-center space-x-2 ms-24 mt-20">
                <button className=" bg-blue-600 text-white p-2 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
                <a href="#" className="text-blue-600 hover:underline font-medium">

                    View all stories
                </a>
            </div>


        </div>
    )
}

export default Customer