import React from 'react';

import { FaHeart, FaPaw, FaShieldAlt, FaStar } from 'react-icons/fa';

const AboutContent = () => {
    return (
      <div className="px-10 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Images Section */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400"
                  alt="Happy pet owner"
                  className="rounded-full w-full h-64 object-cover shadow-lg"
                />
                <div className="absolute -bottom-4 -left-4 bg-teal-400 rounded-full p-4 shadow-lg">
                  <div className="text-white text-center">
                    <div className="text-2xl font-bold">25+</div>
                    <div className="text-xs">Years Experience</div>
                  </div>
                </div>
              </div>
              <div className="relative mt-8">
                <img
                  src="https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=400"
                  alt="Happy pet"
                  className="rounded-full w-full h-64 object-cover shadow-lg"
                />
              </div>
            </div>
            <div className="absolute -top-8 -right-8 bg-purple-200 rounded-full p-8 opacity-50">
              <FaPaw className="text-6xl text-purple-400" />
            </div>
          </div>

          {/* Text Content */}
          <div>
            <div className="text-orange-500 font-semibold mb-2 uppercase text-sm tracking-wide">
              About Us
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              World's Best Team For Pet Services
            </h2>
            <p className="text-gray-600 mb-4">
              At WarmPaws, we believe every pet deserves compassionate care and
              attention. Our dedicated team of veterinarians, groomers, and pet
              care specialists work together to provide comprehensive services
              that enhance your pet's quality of life.
            </p>
            <p className="text-gray-600 mb-6">
              With over 25 years of combined experience, we've built a
              reputation for excellence in pet care, offering everything from
              routine check-ups to specialized treatments, all in a warm and
              welcoming environment.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-start gap-2">
                <FaShieldAlt className="text-purple-500 mt-1" />
                <span className="text-gray-700 text-sm">
                  Licensed & Certified Staff
                </span>
              </div>
              <div className="flex items-start gap-2">
                <FaHeart className="text-pink-500 mt-1" />
                <span className="text-gray-700 text-sm">
                  Compassionate Care
                </span>
              </div>
              <div className="flex items-start gap-2">
                <FaStar className="text-orange-500 mt-1" />
                <span className="text-gray-700 text-sm">
                  24/7 Emergency Support
                </span>
              </div>
              <div className="flex items-start gap-2">
                <FaPaw className="text-blue-500 mt-1" />
                <span className="text-gray-700 text-sm">Modern Facilities</span>
              </div>
            </div>
            <button className="btn btn-style rounded-full w-full  md:w-auto">
              Read more
            </button>
          </div>
        </div>
      </div>
    );
};

export default AboutContent;