import React, { useEffect, useState } from 'react';
import ServicesCard from '../components/ServicesCard';
import { Link } from 'react-router';
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesSlice = () => {
    const [services, setServices] = useState([]);
    
        useEffect(() => {
            fetch("/servicesData.json").then((res) => res.json()).then((data) => setServices(data.slice(0, 6)));

           
        }, []);
    
    return (
      <div>
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Popular Winter Care Services
          </h2>
          <p className="text-gray-600 text-lg">
            Keep your pets cozy with our top seasonal picks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-12">
          {services.map((service,index) => (
            <div
              key={service.serviceId}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <ServicesCard service={service}></ServicesCard>
            </div>
          ))}
        </div>
        <div className="text-center lg:text-right ">
          <Link
            to="/services"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            View All Services
          </Link>
        </div>
      </div>
    );
};

export default ServicesSlice;