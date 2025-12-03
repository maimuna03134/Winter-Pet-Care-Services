import React from 'react';
import MyContainer from './container/MyContainer';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router';
import { IoMdArrowBack } from 'react-icons/io';
import RatingChart from '../pages/RatingChart';
import { FaEnvelope, FaRankingStar, FaStar, FaUser } from 'react-icons/fa6';
import { MdCategory } from 'react-icons/md';
import { GiPriceTag } from 'react-icons/gi';
import { FaCheckCircle } from 'react-icons/fa';

const ServicesDetailsCard = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const data = useLoaderData();

  const service = data.find((item) => item.serviceId == id);

  if (!service) {
    return <h2 className="text-center mt-20 text-2xl">Service not found!</h2>;
  }

  const {
    image,
    serviceName,
    providerName,
    providerEmail,
    longDescription,
    category,
    price,
    rating,
    slotsAvailable,
  } = service;

 

  return (
    <div className="min-h-screen bg-linear-to-b from-orange-50 to-white">
      <MyContainer className={"  flex flex-col  "}>
        <div className="my-16 w-full px-4">
          <div className="" data-aos="fade-up">
            {/* left */}
            <div className="grid md:grid-cols-2 gap-0 w-full p-8 md:p-10">
              <figure className="relative w-full h-full overflow-hidden ">
                <img
                  src={image}
                  alt={serviceName}
                  className="w-full  object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div>
              </figure>
            </div>
            {/* right */}
            <div
              className="p-8 md:p-10 flex flex-col justify-between"
              data-aos="fade-up-left"
            >
              <Link to="/services">
                <span className="bg-[#FF9F1C33] text-[#FF6B35]  mt-4 rounded-full text-sm    font-bold flex items-center px-4 justify-start gap-1 bg-clip-text">
                  <IoMdArrowBack />

                  <span>Back to All Services</span>
                </span>
              </Link>
              {/* Provider Info */}
              <div className="flex items-center gap-4 mb-2  rounded-xl p-4 ">
                <div className="w-14 h-14 bg-linear-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                  {providerName.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg flex items-center gap-2">
                    <FaUser className="text-orange-500" />
                    {providerName}
                  </p>
                  <p className="flex items-center gap-2 text-gray-600 text-sm">
                    <FaEnvelope className="text-orange-500" />
                    {providerEmail}
                  </p>
                </div>
              </div>

              {/* Category Badge */}
              <div className="mb-4 flex px-4">
                <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-semibold border-2 border-orange-300">
                  <MdCategory />
                  {category}
                </span>
              </div>

              {/* Service Name */}
              <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight">
                {serviceName}
              </h1>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {/* Price */}
                <div className="bg-linear-to-br from-orange-500 to-red-500 text-white rounded-xl p-4 text-center shadow-lg">
                  <GiPriceTag className="text-2xl mx-auto mb-2" />
                  <p className="text-2xl font-black">${price}</p>
                  <p className="text-xs opacity-90">Per Session</p>
                </div>

                {/* Rating */}
                <div className="bg-linear-to-br from-yellow-400 to-orange-500 text-white rounded-xl p-4 text-center shadow-lg">
                  <FaRankingStar className="text-2xl mx-auto mb-2" />
                  <p className="text-2xl font-black">{rating}</p>
                  <div className="flex justify-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-xs ${
                          i < Math.round(rating)
                            ? "text-white"
                            : "text-white/40"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Slots */}
                <div className="bg-linear-to-br from-green-500 to-teal-500 text-white rounded-xl p-4 text-center shadow-lg">
                  <FaCheckCircle className="text-2xl mx-auto mb-2" />
                  <p className="text-2xl font-black">{slotsAvailable}</p>
                  <p className="text-xs opacity-90">Slots Left</p>
                </div>
              </div>

              {/* Book Button */}
              <div className="flex justify-center lg:justify-start gap-4 ">
                <button
                  onClick={() => navigate("/book-service")}
                  className="bg-[#FF6B35] hover:bg-[#D94F1B] text-white px-4 py-2 rounded-lg font-bold"
                >
                  Book Service
                </button>
              </div>

              {/* <p className="text-xl text-[#D90429] font-bold">$ {price} </p> */}
            </div>
          </div>

          <div className="border-t border border-gray-300 my-3"></div>
        </div>

        {/* Description Section */}
        <div
          className=" bg-white rounded-3xl shadow-xl p-8 md:p-12"
          data-aos="fade-up"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-linear-to-b from-orange-500 to-pink-500 rounded-full"></div>
            <h2 className="text-3xl font-black text-gray-900">
              Service Details
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed text-base flex items-start gap-3">
              {longDescription}
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-12 grid md:grid-cols-3 gap-6" data-aos="fade-up">
          <div className="bg-linear-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border-2 border-blue-200 hover:shadow-xl transition-all">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Professional Service
            </h3>
            <p className="text-gray-600 text-sm">
              Certified and experienced staff dedicated to your pet's care
            </p>
          </div>

          <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200 hover:shadow-xl transition-all">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Quality Guaranteed
            </h3>
            <p className="text-gray-600 text-sm">
              100% satisfaction guarantee or your money back
            </p>
          </div>

          <div className="bg-linear-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border-2 border-orange-200 hover:shadow-xl transition-all">
            <div className="text-4xl mb-4">❤️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              With Love & Care
            </h3>
            <p className="text-gray-600 text-sm">
              Treating every pet like our own family member
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className="my-10 bg-linear-to-r from-orange-500 to-pink-500 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl"
          data-aos="fade-up"
        >
          <h3 className="text-3xl font-black mb-4">
            Ready to Book This Service?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Don't wait! Only {slotsAvailable} slots remaining for this popular
            service.
          </p>
          <button
            onClick={() => navigate("/book-service")}
            className="bg-[#FF6B35] hover:bg-[#D94F1B] text-white px-4 py-2 rounded-lg font-bold"
          >
            Book Service
          </button>
        </div>
      </MyContainer>
    </div>
  );
};

export default ServicesDetailsCard;