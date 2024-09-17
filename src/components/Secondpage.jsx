import React from 'react'
import { useInView } from 'react-intersection-observer';

import './Secondpage.css'


function Secondpage() {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.1,
    })
    return (
        <div className="b mainpage-container ">
            <div
                ref={ref}
                className={`flex flex-col slide-in ${inView ? 'slide-in-visible' : ''}`}    >
                <p className='text-xl font-medium mt-24 ms-24'>Customer stories</p>
                <h1 className='text-8xl font-semibold ms-24 mb-16'>See how customers are innovating with Azure
                </h1>
            </div>

            <div ref={ref}
                className={`d ms-24 space-x-12 slide-in ${inView ? 'slide-in-visible' : ''}`}>
                <div className="c bg-white h-15">
                    <img
                        className="e ms-2 mt-2"
                        src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/351994-Desktop-FeaturedNews-Card1-416x178?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=832&hei=357&qlt=100&fmt=png-alpha&fit=constrain"
                        alt=""
                    />
                    <h1 className='text-2xl font-semibold ms-24  mt-10 ms-5'>Innovate with AI responsibly and securely</h1>
                    <p className='text-xl font-semiboldmt-5 ms-5'>Secure your data and build AI apps confidently with responsible AI tools and the latest security and privacy features.</p>
                    <div className="flex items-center space-x-2 ms-5 mt-20">
                        <button className=" bg-blue-600 text-white p-2 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                        <a href="#" className="text-blue-600 hover:underline font-medium">

                            Explore responsible AI
                        </a>
                    </div>
                </div>
                <div className="c bg-white h-15">
                    <img
                        className="e ms-2 mt-2"
                        src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/351994-Desktop-FeaturedNews-Card2-416x178?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=832&hei=357&qlt=100&fmt=png-alpha&fit=constrain"
                        alt=""
                    />
                    <h1 className='text-2xl font-semibold mt-10 ms-5'>Build on a trusted platform</h1>
                    <p className='text-xl font-semiboldmt-5 ms-5'>Create next-gen AI solutions with a responsible platform dedicated to security, reliability, and sustainability.</p>
                    <div className="flex items-center space-x-2 ms-5 mt-24">
                        <button className=" bg-blue-600 text-white p-2 rounded ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                        <a href="#" className="text-blue-600 hover:underline font-medium">

                            Learn more
                        </a>
                    </div>

                </div>
                <div className="c bg-white h-15">
                    <img
                        className="e ms-2 mt-2"
                        src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Desktop-3UpMediaCard-FeaturedNews-Card3-416x178?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=832&hei=357&qlt=100&fmt=png-alpha&fit=constrain"
                        alt=""
                    />
                    <h1 className='text-2xl font-semibold mt-10 ms-5'>Get ready for Microsoft Ignite</h1>
                    <p className='text-xl font-semiboldmt-5 ms-5'>Join us November 18–22, 2024 to explore the latest innovations, learn from experts, level up your skillset, and expand your network.</p>
                    <div className='flex-'>

                        <div className="flex items-center space-x-2 ms-5 mt-20">
                            <button className=" bg-blue-600 text-white p-2 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                            <a href="#" className="text-blue-600 hover:underline font-medium">
                            Register now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Secondpage
