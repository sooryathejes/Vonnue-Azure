import React, { useState } from 'react';
import './Header.css'

function Header() {
    const [isSearchExpanded, setIsSearchExpanded] = useState(false);

    const handleSearchClick = () => {
        setIsSearchExpanded(true);
    };

    const handleCancelClick = () => {
        setIsSearchExpanded(false);
    };



    return (
        <div>
            <nav className="t bg-white shadow-md z-10">
                <div className="container   py-3 flex  items-center">
                    <img className='r' src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" alt="" />
                    <div className=' ms-5 text-8xl text-grey-100'>I</div>
                    <h2 className="text-xl text-gray-700 font-semibold text-lg ms-5">Azure</h2>

                    <div className="hidden md:flex space-x-6 items-center ms-5">
                        <div className="group relative">
                            <button className="flex items-center text-gray-700 hover:border-b-2 hover:border-black transition duration-300 ease-in-out">
                                Explore
                                <svg
                                    className="ml-1 w-4 h-4 fill-current text-gray-700"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 111.414 1.414l-4 4a1 1 01-1.414 0l-4-4a1 1 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                            <div className="absolute hidden group-hover:block bg-white shadow-lg py-6 w-[300px] h-[300px] left-0 top-full gap-24 gap-y-10 z-10 ">
                            <a href="#" className="text-blue-600 hover:underline font-medium">

View all solutions(40+)
</a>
                                <div className="">
                                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:underline">Get to know Azure</a>
                                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:underline">Global infrastructure</a>
                                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:underline">FinOps on Azure</a>
                                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:underline">Azure Essentials</a>
                                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:underline">Customer stories</a>
                                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:underline">Azure innovation insights</a>
                                </div>
                            </div>
                        </div>

                        <div className="group relative">
                            <button className="flex text-gray-600 border-b-2 border-transparent hover:text-black hover:border-black transition duration-300 ease-in-out">
                                Products
                                <svg
                                    className="ml-1 w-4 h-4 fill-current text-gray-700"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 111.414 1.414l-4 4a1 1 01-1.414 0l-4-4a1 1 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>

                            <div className="absolute hidden group-hover:block bg-white shadow-lg py-6 w-[1300px] h-[800px] left-0 top-full gap-24 z-10 ">
                                <div className="max-w-screen-xl mx-auto grid grid-cols-5 gap-24 px-6 z-10">
                                    {/* Columns for Dropdown Items */}
                                    <div>
                                    <a href="#" className="text-blue-600 hover:underline font-medium">

View all solutions(40+)
</a>
                                        <h3 className="font-bold text-gray-800 mt-10">Popular</h3>
                                        <ul className="mt-10 ">
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Virtual Machines</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Virtual Desktop</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure SQL</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Microsoft Copilot in Azure PREVIEW</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure AI Services</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 mt-10">Popular</h3>
                                        <ul className="mt-10 ">
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Virtual Machines</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Virtual Desktop</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure SQL</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Microsoft Copilot in Azure PREVIEW</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure AI Services</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 mt-10">Popular</h3>
                                        <ul className="mt-10 ">
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Virtual Machines</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Virtual Desktop</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure SQL</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Microsoft Copilot in Azure PREVIEW</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure AI Services</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 mt-10">Popular</h3>
                                        <ul className="mt-10 ">
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Virtual Machines</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Virtual Desktop</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure SQL</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Microsoft Copilot in Azure PREVIEW</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure AI Services</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 mt-10">Popular</h3>
                                        <ul className="mt-10 ">
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Virtual Machines</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Virtual Desktop</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure SQL</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Microsoft Copilot in Azure PREVIEW</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure AI Services</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 mt-10">Popular</h3>
                                        <ul className="mt-10 ">
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Virtual Machines</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Virtual Desktop</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure SQL</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Microsoft Copilot in Azure PREVIEW</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure AI Services</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 mt-10">Popular</h3>
                                        <ul className="mt-10 ">
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Virtual Machines</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Virtual Desktop</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure SQL</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Microsoft Copilot in Azure PREVIEW</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure AI Services</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group relative">
                            <button className="flex text-gray-600 border-b-2 border-transparent hover:text-black hover:border-black transition duration-300 ease-in-out">
                                Solutions
                                <svg
                                    className="ml-1 w-4 h-4 fill-current text-gray-700"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 111.414 1.414l-4 4a1 1 01-1.414 0l-4-4a1 1 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>

                            <div className="absolute hidden group-hover:block bg-white shadow-lg py-6 w-[1300px] h-[800px] left-0 top-full gap-24 z-10 ">
                                <div className="max-w-screen-xl mx-auto grid grid-cols-5 gap-24 px-6 z-10">
                                    {/* Columns for Dropdown Items */}
                                    <div>
                                        <a href="#" className="text-blue-600 hover:underline font-medium">

                                            View all solutions(40+)
                                        </a>
                                        <h3 className="font-bold text-gray-800 mt-10">Popular</h3>
                                        <ul className="mt-10 ">
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Virtual Machines</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Virtual Desktop</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure SQL</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Microsoft Copilot in Azure PREVIEW</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure AI Services</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 mt-10">Popular</h3>
                                        <ul className="mt-10 ">
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Virtual Machines</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Virtual Desktop</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure SQL</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Microsoft Copilot in Azure PREVIEW</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure AI Services</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 mt-10">Popular</h3>
                                        <ul className="mt-10 ">
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Virtual Machines</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Virtual Desktop</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure SQL</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Microsoft Copilot in Azure PREVIEW</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure AI Services</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 mt-10">Popular</h3>
                                        <ul className="mt-10 ">
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Virtual Machines</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Virtual Desktop</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure SQL</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Microsoft Copilot in Azure PREVIEW</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure AI Services</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 mt-10">Popular</h3>
                                        <ul className="mt-10 ">
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Virtual Machines</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Virtual Desktop</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure SQL</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Microsoft Copilot in Azure PREVIEW</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure AI Services</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 mt-10">Popular</h3>
                                        <ul className="mt-10 ">
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Virtual Machines</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Virtual Desktop</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure SQL</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Microsoft Copilot in Azure PREVIEW</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure AI Services</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 mt-10">Popular</h3>
                                        <ul className="mt-10 ">
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Virtual Machines</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Virtual Desktop</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure SQL</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Microsoft Copilot in Azure PREVIEW</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure AI Services</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="group relative">
                            <button className="flex text-gray-600 border-b-2 border-transparent hover:text-black hover:border-black transition duration-300 ease-in-out">
                                Pricing
                                <svg
                                    className="ml-1 w-4 h-4 fill-current text-gray-700"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 111.414 1.414l-4 4a1 1 01-1.414 0l-4-4a1 1 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>

                            <div className="absolute hidden group-hover:block bg-white shadow-lg py-6 w-[500px] h-[300px] left-0 top-full gap-24 z-10 ">
                                <div className="max-w-screen-xl mx-auto grid grid-cols-5 gap-24 px-6 z-10">
                                    {/* Columns for Dropdown Items */}
                                    <div>
                                        
                                        <h3 className="font-bold text-gray-800 mt-10">Popular</h3>
                                        <ul className="mt-10 ">
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Virtual Machines</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Virtual Desktop</a></li>


                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 mt-10">Popular</h3>
                                        <ul className="mt-10 ">
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Virtual Machines</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Virtual Desktop</a></li>


                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="group relative">
                            <button className="flex text-gray-600 border-b-2 border-transparent hover:text-black hover:border-black transition duration-300 ease-in-out">
                                Partners
                                <svg
                                    className="ml-1 w-4 h-4 fill-current text-gray-700"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 111.414 1.414l-4 4a1 1 01-1.414 0l-4-4a1 1 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>

                            <div className="absolute hidden group-hover:block bg-white shadow-lg py-6 w-[1000px] h-[400px] left-0 top-full gap-24 z-10 ">
                                <div className="max-w-screen-xl mx-auto grid grid-cols-5 gap-24 px-6 z-10">
                                    {/* Columns for Dropdown Items */}
                                    <div>
                                        <h3 className="font-bold text-gray-800 mt-10">Popular</h3>
                                        <ul className="mt-10 ">
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure_Virtual_Machines</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure Virtual_Desktop</a></li>

                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 mt-10">Popular</h3>
                                        <ul className="mt-10 ">
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure_Virtual_Machines</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure_Virtual_Desktop</a></li>
                                            <li><a href="#" className="mt-10 block py-1 text-gray-600 hover:text-blue-600 hover:underline">Azure_SQL</a></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="group relative">
                            <button className="flex text-gray-600 border-b-2 border-transparent hover:text-black hover:border-black transition duration-300 ease-in-out">
                                Resources
                                <svg
                                    className="ml-1 w-4 h-4 fill-current text-gray-700"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 111.414 1.414l-4 4a1 1 01-1.414 0l-4-4a1 1 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>

                            <div className="absolute hidden group-hover:block bg-white shadow-lg py-6 w-[1300px] left-0 top-full z-10">
                                <div className="max-w-screen-xl mx-auto grid grid-cols-5 gap-8 px-6 z-10">
                                    {/* Columns for Dropdown Items */}
                                    <div>
                                        <h3 className="font-bold text-gray-800">Popular</h3>
                                        <ul className="flex space-x-6 mt-2 flex-wrap space-y-6">
                                            <li className="inline-block"><a href="#" className="text-gray-600 hover:text-blue-600 hover:underline">Azure Virtual Machines</a></li>
                                            <li className="inline-block"><a href="#" className="text-gray-600 hover:text-blue-600 hover:underline">Azure Virtual Desktop</a></li>
                                            <li className="inline-block"><a href="#" className="text-gray-600 hover:text-blue-600 hover:underline">Azure SQL</a></li>
                                            <li className="inline-block"><a href="#" className="text-gray-600 hover:text-blue-600 hover:underline">Microsoft Copilot in Azure PREVIEW</a></li>
                                            <li className="inline-block"><a href="#" className="text-gray-600 hover:text-blue-600 hover:underline">Azure AI Services</a></li>
                                            <li className="inline-block"><a href="#" className="text-gray-600 hover:text-blue-600 hover:underline">Azure Cosmos DB</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800">Another Category</h3>
                                        <ul className="flex space-x-6 mt-2 flex-wrap space-y-6">
                                            <li className="inline-block"><a href="#" className="text-gray-600 hover:text-blue-600 hover:underline">Azure Virtual Machines</a></li>
                                            <li className="inline-block"><a href="#" className="text-gray-600 hover:text-blue-600 hover:underline">Azure Virtual Desktop</a></li>
                                            <li className="inline-block"><a href="#" className="text-gray-600 hover:text-blue-600 hover:underline">Azure SQL</a></li>
                                            <li className="inline-block"><a href="#" className="text-gray-600 hover:text-blue-600 hover:underline">Microsoft Copilot in Azure PREVIEW</a></li>
                                            <li className="inline-block"><a href="#" className="text-gray-600 hover:text-blue-600 hover:underline">Azure AI Services</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800">More</h3>
                                        <ul className="flex space-x-6 mt-2 flex-wrap space-y-6">
                                            <li className="inline-block"><a href="#" className="text-gray-600 hover:text-blue-600 hover:underline">Azure Virtual Machines</a></li>
                                            <li className="inline-block"><a href="#" className="text-gray-600 hover:text-blue-600 hover:underline">Azure Virtual Desktop</a></li>
                                            <li className="inline-block"><a href="#" className="text-gray-600 hover:text-blue-600 hover:underline">Azure SQL</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800">Additional</h3>
                                        <ul className="flex space-x-6 mt-2 flex-wrap space-y-6">
                                            <li className="inline-block"><a href="#" className="text-gray-600 hover:text-blue-600 hover:underline">Azure Virtual Machines</a></li>
                                            <li className="inline-block"><a href="#" className="text-gray-600 hover:text-blue-600 hover:underline">Azure Virtual Desktop</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>

                    <div className="q flex items-center justify-between w-full ms-12">


                        <div className={` flex items-center transition-all ${isSearchExpanded ? 'w-full' : 'w-auto'} gap-4`}>
                            {!isSearchExpanded ? (
                                // When not expanded, show the Search link with an icon
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={handleSearchClick}
                                        className="text-gray-600 hover:text-blue-600"
                                    >
                                        Search
                                    </button>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-gray-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M11 19a8 8 0 100-16 8 8 0 000 16zm7-7l4 4"
                                        />
                                    </svg>
                                </div>
                            ) : (
                                // When expanded, show input field and cancel button
                                <div className="s flex items-center w-full border border-gray-400  px-4 py-2 focus-within:ring-2 focus-within:ring-black">
                                    <input
                                        type="text"
                                        placeholder="Search Azure"
                                        className="w-full outline-none"
                                        autoFocus
                                    />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-gray-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M11 19a8 8 0 100-16 8 8 0 000 16zm7-7l4 4"
                                        />
                                    </svg>
                                </div>
                            )}

                            {/* Cancel Button */}
                            {isSearchExpanded && (
                                <button
                                    onClick={handleCancelClick}
                                    className="px-4 py-2 border border-gray-600 rounded text-gray-600 hover:bg-gray-100"
                                >
                                    Cancel
                                </button>
                            )}
                            <a href="#" className="text-gray-600 border-b-2 border-transparent hover:border-black transition duration-300 ease-in-out">Learn</a>
                            <a href="#" className="text-gray-600 border-b-2 border-transparent hover:border-black transition duration-300 ease-in-out">Support</a>
                            <a href="#" className="text-gray-600 border-b-2 border-transparent hover:border-black transition duration-300 ease-in-out">Contact</a>
                        </div>
                    </div>


                    <div className=" p flex  gap-5 ms-10 ">
                        <a
                            href="#"
                            className="bg-blue-600 text-white px-4 py-2 w-48 rounded-md hover:bg-blue-700 "
                        >
                            Get started with Azure
                        </a>
                        <a
                            href="#"
                            className="border border-gray-300 w-24 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-100 "
                        >
                            Sign in
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
