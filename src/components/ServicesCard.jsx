import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';




const ServicesCard = ({ service , index}) => {
  const {serviceId, image, serviceName, category, rating, price } = service;
  return (
    <div
      key={serviceId}
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="hover:shadow-2xl transition-all duration-1000  h-full"
    >
      {/* card body */}
      <div className="card bg-base-100 shadow-sm h-full overflow-hidden flex flex-col justify-between">
        <figure>
          <img
            src={image}
            alt={serviceName}
            className="w-full h-56 object-cover transition-transform duration-500 "
          />
        </figure>
        <div className="card-body flex flex-col ">
          <h2 className="card-title">
            {serviceName}
            <div className="badge bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {category}
            </div>
          </h2>

          <div className="card-actions justify-between mt-2">
            <div className="border border-orange-500 text-orange-600 hover:bg-orange-500 transition-all hover:text-white px-3 font-semibold rounded-2xl">
              $ {price}
            </div>
            <div className="flex items-center gap-1 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={
                    i < Math.round(rating) ? "text-yellow-500" : "text-gray-300"
                  }
                />
              ))}
              <span className="ml-1 text-gray-700 font-semibold">
                {parseFloat(rating).toFixed(1)}
              </span>
            </div>
          </div>

          <div className="mt-auto text-right pt-4">
            <Link
              to={`/services/${serviceId}`}
              className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition w-full text-center"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;