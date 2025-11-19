import React from 'react';
import MyContainer from './container/MyContainer';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router';
import { IoMdArrowBack } from 'react-icons/io';
import RatingChart from '../pages/RatingChart';
import { FaRankingStar } from 'react-icons/fa6';

const ServicesDetailsCard = () => {
  const navigate = useNavigate();
    const { id } = useParams();
    const data = useLoaderData();

    const service = data.find((item) => item.serviceId == id);

    if (!service) {
        return (
          <h2 className="text-center mt-20 text-2xl">Service not found!</h2>
        );
    }

    const {
      image,
      serviceName,
      providerName,
      providerEmail,
      description,
      category,
      price,
      rating,
      ratings,
      slotsAvailable,
    } = service;

  return (
    <MyContainer className={"  flex flex-col  "}>
      <div className="my-16 w-full px-4">
        <div
          className="hero-content flex-col justify-center lg:flex-row gap-8 bg-linear-to-r from-blue-50 to-orange-50 rounded-xl p-5 md:p-8 lg:p-10 overflow-hidden"
          data-aos="fade-up"
        >
          {/* left */}
          <div className="w-full md:w-[350px] h-[280px] flex justify-center transition-transform duration-500 hover:scale-105">
            <figure className="w-full h-full" data-aos="fade-up-right">
              <img
                src={image}
                alt={serviceName}
                className="w-full h-full object-cover shadow-md rounded-xl  "
              />
            </figure>
          </div>
          {/* right */}
          <div
            className="flex flex-col justify-between flex-1 text-center  lg:text-left"
            data-aos="fade-up-left"
          >
            <Link to="/services">
              <span className="bg-[#FF9F1C33] text-[#FF6B35] px-3 py-1 rounded-full text-sm   mb-3 font-bold flex items-center justify-center lg:justify-start gap-1 bg-clip-text">
                <IoMdArrowBack />

                <span>Back to All Services</span>
              </span>
            </Link>
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 ">
              <div className="w-12 h-12 bg-linear-to-br from-amber-300 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg ">
                {providerName.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-left text-gray-900">
                  {providerName}
                </p>
                <div className="flex items-center gap-1 text-gray-600 text-sm">
                  <span>{providerEmail}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-2">
              <span className="bg-orange-200 text-orange-600 px-3 py-1 border border-orange-500 rounded-full text-sm hover:bg-orange-400 hover:text-white hover:border-none transition">
                {category}
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 my-2 leading-tight hover:text-orange-500 transition-all">
              {serviceName}
            </h1>
            <p className="text-xl text-[#D90429] font-bold">$ {price} </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-base">
              {description}
            </p>
            <p className="bg-[#FF9F1C33] text-[#FF6B35] px-3 py-1 rounded-full text-sm  font-bold flex items-center justify-center lg:justify-start gap-1 bg-clip-text">
              <span>Rating :</span>
              <span>
                <FaRankingStar />
              </span>
              <span>{rating}</span>
            </p>
            <p className="inline-block bg-orange-100 text-orange-700 font-semibold px-3 py-1 rounded-full mb-2 text-sm bg-clip-text ">
              Available Slots: {slotsAvailable}
            </p>
            <div className="flex justify-center lg:justify-start gap-4 ">
              <button
                onClick={() => navigate("/book-service")}
                className="bg-[#FF6B35] hover:bg-[#D94F1B] text-white px-4 py-2 rounded-lg font-bold"
              >
                Book Service
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border border-gray-300 my-3"></div>
      </div>
      <div className="mb-10" data-aos="fade-down">
        <RatingChart ratings={ratings}></RatingChart>
      </div>
    </MyContainer>
  );
};

export default ServicesDetailsCard;