import React, { useEffect, useState } from 'react';
import ServicesCard from '../components/ServicesCard';
import { useLoaderData} from 'react-router';
import MyContainer from '../components/container/MyContainer';

const Services = () => {

  const data = useLoaderData();
  // console.log(data)

     const [services, setServices] = useState([]);

     console.log(data);

     useEffect(() => {
       
        setServices(data)
       
     }, [data]);
    return (
      <MyContainer className={'mt-10'}>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Keep Your Pets Cozy This Winter
          </h2>
          <p className="text-gray-600 text-lg">
            Choose from our curated selection of winter pet care services
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {services.map((service) => (
            <ServicesCard
              key={service.serviceId}
              service={service}
            ></ServicesCard>
          ))}
        </div>
      </MyContainer>
    );
};

export default Services;