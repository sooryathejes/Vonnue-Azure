import React from 'react'

function Socialmedia() {
  return (
    <div>
        <div className="mt-10 mb-10 flex items-center space-x-6 ms-24">
  <button className="flex items-center px-4 py-2 bg-gray-200 rounded-md shadow-sm hover:bg-gray-300">
    <img className='w-10' src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/acom_social_icon_azure" />
    <span className="text-gray-800">Get the Azure mobile app</span>
  </button>

  <div className="flex items-center space-x-4">
    <a href="#" className="hover:opacity-75">
      <img src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/acom_social_icon_instagram?scl=1" alt="Instagram" className="h-6" />
    </a>
    <a href="#" className="hover:opacity-75">
      <img src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/acom_social_icon_linkedin?scl=1" alt="LinkedIn" className="h-6" />
    </a>
  </div>
</div>

    </div>
  )
}

export default Socialmedia