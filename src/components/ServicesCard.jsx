import React from 'react';
import { FaStar } from 'react-icons/fa';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { Link } from 'react-router';


const ServicesCard = ({ service , index}) => {
  const {
    serviceId,
    image,
    serviceName,
    category,
    rating,
    price,
    shortDescription,
  } = service;
  return (
    <div
      key={serviceId}
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="hover:shadow-2xl transition-all duration-1000  h-full"
    >
      {/* card body */}
      <div className="card bg-base-100 shadow-lg h-full overflow-hidden flex flex-col rounded-2xl border border-gray-200">
        <figure className="relative overflow-hidden">
          <img
            src={image}
            alt={serviceName}
            className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute top-3 right-3">
            <div className="badge bg-orange-500 text-white px-3 py-2 rounded-full text-xs font-bold shadow-lg">
              {category}
            </div>
          </div>
        </figure>
        <div className="card-body flex flex-col p-5 grow">
          <h2 className="card-title text-lg font-bold text-gray-800 line-clamp-2">
            {serviceName}
          </h2>
          <p className="text-gray-600 text-sm grow line-clamp-2">
            {shortDescription}
          </p>
          <div className=" ">
            <Link to={`/services/${serviceId}`}>
              <span className="text-orange-600 flex items-center justify-end gap-2">
                <span>View Details</span>
                <MdKeyboardDoubleArrowRight className="text-xl" />
              </span>
            </Link>
          </div>

          <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200">
            <div className="text-orange-600 font-bold text-xl">${price}</div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`text-sm ${
                    i < Math.round(rating) ? "text-yellow-500" : "text-gray-300"
                  }`}
                />
              ))}
              <span className="ml-1 text-gray-700 font-semibold text-sm">
                {parseFloat(rating).toFixed(1)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;