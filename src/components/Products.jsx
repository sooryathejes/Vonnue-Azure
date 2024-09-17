import React from 'react'
import './Product.css'
import { useInView } from 'react-intersection-observer';


const Products = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1,
})
  const products = [
    {
      title: 'Azure AI Studio',
      description: 'Build, evaluate, and deploy generative AI solutions and custom copilots.',
      link: '#',
      icon: 'https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/351994-ProductandServices-Featured-AzureAIStudio-28x28?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=48&hei=48&qlt=100&fmt=png-alpha&fit=constrain' // Replace with actual icon URLs
    },
    {
      title: 'Azure OpenAI Service',
      description: 'Build your own copilot and generative AI applications.',
      link: '#',
      icon: 'https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/351994-ProductandServices-Featured-AzureOpenAIService-28x28?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=100&fmt=png-alpha&fit=constrain'
    },
    {
      title: 'Azure AI Document Intelligence',
      description: 'Accelerate information extraction from documents.',
      link: '#',
      icon: 'https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/351994-ProductandServices-Featured-AzureAIDocumentIntelligence-28x28?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=100&fmt=png-alpha&fit=constrain'
    },
    {
      title: 'Azure AI Search',
      description: 'Deliver high-quality responses with a vector database built for advanced RAG and modern search.',
      link: '#',
      icon: 'https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/351994-ProductandServices-Featured-AzureAISearch-28x28?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=100&fmt=png-alpha&fit=constrain'
    },
    {
      title: 'GitHub Advanced Security',
      description: 'Empower your developers to fix security issues faster and reduce overall security risk.',
      link: '#',
      icon: 'https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/351994-ProductandServices-Featured-GitHubAdvancedSecurity-28x28?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=100&fmt=png-alpha&fit=constrain'
    },
    {
      title: 'Microsoft Defender for Cloud',
      description: 'Help protect multicloud and hybrid environments with comprehensive security.',
      link: '#',
      icon: 'https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/351994-ProductandServices-Logos-Featured-MicrosoftDefenderforCloud-28x28?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=100&fmt=png-alpha&fit=constrain'
    },
  ];
  return (
    <div className='f'>
      <div
                ref={ref}
                className={`flex flex-col slide-in ${inView ? 'slide-in-visible' : ''}`}    >
                <p className='text-xl font-medium mt-24 ms-24'>Products and Services</p>
                <h1 className='text-8xl font-semibold ms-24 mb-16'>Explore tools for bringing your vision to life</h1>
            </div>
      <div className="ms-24 container mx-auto py-8 px-4">
        {/* Main large card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-3/4 h-[700px]">
          <div className="o col-span-1 bg-gradient-to-b from-blue-800 to-gray-900 text-white p-20 rounded-lg">
            <h2 className="text-3xl font-bold mt-60">Azure AI Content Safety</h2>
            <p className=" mt-5 text-xl mb-20">Use AI to monitor text and image content for safety.</p>
            <a href="#" className="inline-block bg-blue-200 text-black px-4 py-2 rounded hover:bg-blue-100">
              Explore the product
            </a>
          </div>

          {/* Small cards */}
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-x-[450px] gap-y-6 ">
            {products.map((product, index) => (
              <div key={index} className="bg-white border border-gray-200 p-4 rounded-lg shadow hover:shadow-lg transition w-[400px] h[400px]">
                <div className="flex-y items-start mb-4 mt-5 ">
                  <img className="border border-gray-200" src={product.icon} alt={product.title} className="h-10 w-10 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold mt-5">{product.title}</h3>
                    <p className="text-xl text-gray-600 mt-5">{product.description}</p>
                  </div>
                </div>
                <a href={product.link} className="text-blue-500 font-medium hover:underline ">
                  Explore the product
                </a>
              </div>
            ))}
          </div>


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





  )
}

export default Products