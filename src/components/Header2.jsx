import React from 'react'


function Header2() {
  return (
    <div>
         <nav className="bg-white shadow-md ">
                <div className="container mx-auto ms-24 py-3 flex justify-between items-center">
                   

                   

                    <div className="hidden md:flex space-x-12 font-blue font-bold ">
                       
                        <a href="#" className="text-gray-600 hover:text-blue-600 border-b-2 border-transparent hover:border-black transition duration-300 ease-in-out">Featured news</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 border-b-2 border-transparent hover:border-black transition duration-300 ease-in-out">  Solutions</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 border-b-2 border-transparent hover:border-black transition duration-300 ease-in-out">Products and services</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 border-b-2 border-transparent hover:border-black transition duration-300 ease-in-out">Resources by role</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 border-b-2 border-transparent hover:border-black transition duration-300 ease-in-out">Customer stories</a>


                    </div>

                    <div className="flex space-x-4 items-center">
                        <a
                            href="#"
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                        >
                            Get started with Azure
                        </a>
                    </div>
                </div>
            </nav>
    </div>
  )
}

export default Header2