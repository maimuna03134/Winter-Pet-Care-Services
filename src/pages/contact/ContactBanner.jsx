import React from 'react';
import { FaPaw } from 'react-icons/fa';
import { Link } from 'react-router';

const ContactBanner = () => {
    return (
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] bg-linear-to-r from-orange-100 via-pink-50 to-blue-50 py-20">
        <div className="absolute top-10 right-20 text-pink-300 text-6xl opacity-50">
          <FaPaw />
        </div>
        <div className="absolute md:top-32 md:right-40 bottom-10 left-20 text-blue-300 text-5xl opacity-50">
          <FaPaw />
        </div>
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl mb-6 opacity-90">
            We'd love to hear from you! Get in touch with our team
          </p>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Have questions about our services? We're here to help you and your
            pets stay warm and happy this winter.
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

export default ContactBanner;