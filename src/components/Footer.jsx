import React from 'react';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaEnvelope, FaFacebook, FaPhone } from 'react-icons/fa';
import { IoLocation } from 'react-icons/io5';
import MyContainer from './container/MyContainer';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <div className="bg-[#031b4b]">
      <MyContainer>
        <div className="text-center">
          <div className="flex justify-center items-center space-x-2 mb-4 ">
            <div className="w-10 h-10 bg-linear-to-r from-orange-300 to-orange-100 rounded-full flex items-center justify-center mt-8">
              <span className="text-white text-2xl">🐱</span>
            </div>
            <span className="text-2xl font-bold text-white mt-8">WarmPaws</span>
          </div>
          <p className="text-gray-400  ">
            Your trusted partner for pet care in every season.
          </p>
        </div>
        <footer className="footer sm:footer-horizontal text-white p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          <nav>
            <h6 className="footer-title hover:text-orange-500">Quick Links</h6>
            <Link to="/about-us">
              <p className="link link-hover hover:text-orange-400 transition">
                About us
              </p>
            </Link>

            <Link to="/services">
              <p className="link link-hover hover:text-orange-400 transition">
                Services
              </p>
            </Link>
            <Link to="/contact">
              <p className="link link-hover hover:text-orange-400 transition">
                Contact Us
              </p>
            </Link>
          </nav>
          <nav>
            <h6 className="footer-title hover:text-orange-500">Contact Info</h6>
            <a className="link link-hover flex items-center space-x-2 hover:text-orange-400">
              <FaPhone className="w-4 h-4 text-orange-400 " />
              <span className="text-gray-400 hover:text-orange-400">
                +1 (555) 123-4567
              </span>
            </a>
            <a className="link link-hover flex items-center space-x-2 hover:text-orange-400">
              <FaEnvelope className="w-4 h-4 text-orange-400 " />
              <span className="text-gray-400 hover:text-orange-400">
                hello@warmpaws.com
              </span>
            </a>
            <a className="link link-hover flex items-center space-x-2 hover:text-orange-400">
              <IoLocation className="w-4 h-4 text-orange-400 " />
              <span className="text-gray-400 hover:text-orange-400">
                123 Cozy Paws Lane
                <br />
                Snowbridge, NY 12983
                <br />
                United States
              </span>
             
            </a>
          </nav>
          <div className="">
            <form>
              <h6 className="footer-title">Newsletter</h6>
              <fieldset className="w-full sm:w-72 mx-auto sm:mx-0">
                <label className="text-sm text-gray-300  mb-2">
                  Enter your email address
                </label>
                <div className="join">
                  <input
                    type="text"
                    placeholder="username@site.com"
                    className="input input-bordered join-item"
                  />
                  <button className="btn btn-primary join-item  hover:bg-orange-600">
                    Subscribe
                  </button>
                </div>
              </fieldset>
            </form>
            <nav className="mt-6 flex flex-col justify-center items-center">
              <h6 className="footer-title hover:text-orange-400">Social</h6>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition"
                >
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition"
                >
                  <BsInstagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition"
                >
                  <BsTwitter className="w-5 h-5" />
                </a>
              </div>
            </nav>
          </div>
        </footer>
        <div className="border-t border-gray-800 pt-5 flex flex-col  justify-between items-center">
          {" "}
          <p className="text-gray-400 mb-4 md:mb-0">
            {" "}
            © 2025 WarmPaws. All rights reserved.{" "}
          </p>{" "}
          <div className="flex space-x-6 my-5">
            {" "}
            <a
              href="#"
              className="text-gray-400 hover:text-orange-400 transition"
            >
              {" "}
              Privacy Policy{" "}
            </a>{" "}
            <a
              href="#"
              className="text-gray-400 hover:text-orange-400 transition"
            >
              {" "}
              Terms of Service{" "}
            </a>{" "}
          </div>{" "}
        </div>
      </MyContainer>
    </div>
  );
};

export default Footer;
