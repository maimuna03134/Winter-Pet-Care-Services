import React from "react";
import { MdPets, MdLocalHospital } from "react-icons/md";
import { GiDogBowl, GiSittingDog } from "react-icons/gi";
import { FaAward, FaHeart } from "react-icons/fa";

import Feature from "./Feature";

const WhyChooseUs = () => {
  return (
    <section className="relative  flex items-center justify-center py-20 px-4 overflow-hidden">
      <div className="max-w-7xl w-full relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-orange-100 to-pink-100 px-4 py-2 rounded-full mb-6 border border-orange-200">
            <span className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-orange-700">
              What We Provide
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-black bg-linear-to-r from-gray-400 via-orange-700 to-gray-400 bg-clip-text text-transparent mb-6 leading-tight">
            Why Do People Choose Us?
          </h2>
          <p className="text-base  text-gray-600 max-w-3xl mx-auto font-medium mb-4">
            We stand out from other pet care providers through our commitment to
            excellence, personalized attention, and genuine love for animals.
          </p>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Every pet that walks through our doors becomes part of the WarmPaws
            family. We deliver truly customized care for your beloved
            companions.
          </p>
        </div>

        {/* Features Grid */}
        <Feature />

        {/* Trust Badge Section */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-12 border-t-2 border-gray-200">
          <div className="text-center group cursor-pointer">
            <div className="text-4xl font-black bg-linear-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
              10K+
            </div>
            <p className="text-gray-600 text-sm font-medium mt-1 flex items-center gap-2 justify-center">
              <FaHeart className="text-rose-500" />
              Happy Pet Parents
            </p>
          </div>
          <div className="hidden sm:block w-px h-16 bg-linear-to-b from-transparent via-gray-300 to-transparent"></div>
          <div className="text-center group cursor-pointer">
            <div className="text-4xl font-black bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
              500+
            </div>
            <p className="text-gray-600 text-sm font-medium mt-1 flex items-center gap-2 justify-center">
              <FaAward className="text-blue-500" />
              Verified Providers
            </p>
          </div>
          <div className="hidden sm:block w-px h-16 bg-linear-to-b from-transparent via-gray-300 to-transparent"></div>
          <div className="text-center group cursor-pointer">
            <div className="text-4xl font-black bg-linear-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
              4.9★
            </div>
            <p className="text-gray-600 text-sm font-medium mt-1 flex items-center gap-2 justify-center">
              <MdPets className="text-amber-500" />
              Average Rating
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-linear-to-r from-orange-500 to-pink-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Discover More About Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
