import React from 'react'
import './Resources.css'
import { useInView } from 'react-intersection-observer';


function Global() {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.1,
    })
  return (
    <div className='j'>
        <div
                ref={ref}
                className={`flex text-white flex-col justify-center items-center text-center slide-in ${inView ? 'slide-in-visible' : ''}`}    >
                <h1 className='text-8xl text-white font-medium mt-24 ms-24'>Azure global infrastructure
                </h1>
                <p className='text-xl font-semibold ms-24 mb-16'>Go beyond the limits of on-premises datacenters with more regions than any other provider.
                </p>
                <button className="mt-10 ms-5 bg-blue-200 text-black font-medium py-2 px-4 w-40 h-16 rounded-lg hover:bg-blue-100 transition duration-300">
                            Explore the globe        </button>
            </div>
    </div>
  )
}

export default Global