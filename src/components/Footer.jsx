import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="ms-10 gap-y-5 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-gray-700">
        
        <div>
          <h3 className="font-semibold mb-4">Explore Azure</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">What is Azure?</a></li>
            <li><a href="#" className="hover:underline">Get started with Azure</a></li>
            <li><a href="#" className="hover:underline">Global infrastructure</a></li>
            <li><a href="#" className="hover:underline">Datacenter regions</a></li>
            <li><a href="#" className="hover:underline">Trust your cloud</a></li>
            <li><a href="#" className="hover:underline">Azure Essentials</a></li>
            <li><a href="#" className="hover:underline">Customer stories</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Products and pricing</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Products</a></li>
            <li><a href="#" className="hover:underline">Azure pricing</a></li>
            <li><a href="#" className="hover:underline">Free Azure services</a></li>
            <li><a href="#" className="hover:underline">Flexible purchase options</a></li>
            <li><a href="#" className="hover:underline">FinOps on Azure</a></li>
            <li><a href="#" className="hover:underline">Optimize your costs</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Solutions and support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Solutions</a></li>
            <li><a href="#" className="hover:underline">Resources for accelerating growth</a></li>
            <li><a href="#" className="hover:underline">Solution architectures</a></li>
            <li><a href="#" className="hover:underline">Support</a></li>
            <li><a href="#" className="hover:underline">Azure demo and live Q&A</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Partners</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Azure Marketplace</a></li>
            <li><a href="#" className="hover:underline">Find a partner</a></li>
            <li><a href="#" className="hover:underline">Join ISV Success</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Training and certifications</a></li>
            <li><a href="#" className="hover:underline">Documentation</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Developer resources</a></li>
            <li><a href="#" className="hover:underline">Students</a></li>
            <li><a href="#" className="hover:underline">Events and Webinars</a></li>
            <li><a href="#" className="hover:underline">Analyst reports, white papers, and e-books</a></li>
            <li><a href="#" className="hover:underline">Videos</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Cloud computing</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">What is cloud computing?</a></li>
            <li><a href="#" className="hover:underline">What is cloud migration?</a></li>
            <li><a href="#" className="hover:underline">What is a hybrid cloud?</a></li>
            <li><a href="#" className="hover:underline">What is AI?</a></li>
            <li><a href="#" className="hover:underline">What is PaaS?</a></li>
            <li><a href="#" className="hover:underline">What is IaaS?</a></li>
            <li><a href="#" className="hover:underline">What is SaaS?</a></li>
            <li><a href="#" className="hover:underline">What is DevOps?</a></li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between items-center mt-8 px-10">
        <div className="flex items-center space-x-2">
          <a href="#" className="text-gray-600">English (India)</a>
          <a href="#" className="text-gray-600">Your Privacy Choices</a>
        </div>
        <div className="space-x-4 text-gray-600">
          <a href="#" className="hover:underline">Contact Microsoft</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms of use</a>
          <a href="#" className="hover:underline">Trademarks</a>
          <a href="#" className="hover:underline">About our ads</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
