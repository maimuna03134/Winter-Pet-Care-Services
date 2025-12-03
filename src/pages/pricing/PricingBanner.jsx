import React from 'react';
import { FaPaw } from 'react-icons/fa';
import { Link } from 'react-router';

const PricingBanner = () => {
    return (
      
      <div className="relative bg-linear-to-r from-orange-100 via-pink-50 to-blue-50 py-20">
              <div className="absolute top-10 right-20 text-pink-300 text-6xl opacity-50">
                <FaPaw />
              </div>
              <div className="absolute md:top-32 md:right-40 bottom-10 left-20  text-blue-300 text-5xl opacity-50">
                <FaPaw />
              </div>
              <div className="max-w-4xl mx-auto text-center px-4">
                <h1 className="text-5xl font-bold text-gray-800 mb-4">
                  Our Pricing Plans
                </h1>
               <p className="text-lg text-gray-600 mb-2">
            Affordable packages designed for every pet's grooming needs
          </p>
          <p className="text-base text-gray-500">
            Choose the perfect plan that fits your budget and gives your pet the
            care they deserve
          </p>
                <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-600">
                  <Link to="/">
                    <button className="btn btn-style">Home</button>
                  </Link>
                </div>
              </div>
            </div>
    );
};

export default PricingBanner;