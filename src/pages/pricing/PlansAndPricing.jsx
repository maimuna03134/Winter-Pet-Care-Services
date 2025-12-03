import React from 'react';
import { FaPaw } from 'react-icons/fa';
import { GiDogBowl, GiSittingDog } from 'react-icons/gi';
import { MdPets, MdSpa } from 'react-icons/md';

const PlansAndPricing = () => {
    const pricingPlans = [
      {
        name: "Friendly Package",
        price: "100",
        features: [
          {
            icon: <MdSpa />,
            text: "Bath (Hypo-Allergenic)",
            color: "text-orange-500",
          },
          {
            icon: <GiDogBowl />,
            text: "Conditioning Treatment",
            color: "text-orange-500",
          },
          {
            icon: <FaPaw />,
            text: "Ears Flushed & Cleaned",
            color: "text-orange-500",
          },
          {
            icon: <MdPets />,
            text: "Watering Plants",
            color: "text-orange-500",
          },
          {
            icon: <GiSittingDog />,
            text: "Hairclipser Finish",
            color: "text-orange-500",
          },
          {
            icon: <FaPaw />,
            text: "Setting Length of Coat",
            color: "text-orange-500",
          },
        ],
      },
      {
        name: "Family Package",
        price: "140",
        features: [
          {
            icon: <MdSpa />,
            text: "Bath (Hypo-Allergenic)",
            color: "text-orange-500",
          },
          {
            icon: <GiDogBowl />,
            text: "Conditioning Treatment",
            color: "text-orange-500",
          },
          {
            icon: <FaPaw />,
            text: "Ears Flushed & Cleaned",
            color: "text-orange-500",
          },
          {
            icon: <MdPets />,
            text: "Watering Plants",
            color: "text-orange-500",
          },
          {
            icon: <GiSittingDog />,
            text: "Hairclipser Finish",
            color: "text-orange-500",
          },
          {
            icon: <FaPaw />,
            text: "Setting Length of Coat",
            color: "text-orange-500",
          },
        ],
      },
      {
        name: "Exclusive Package",
        price: "220",
        features: [
          {
            icon: <MdSpa />,
            text: "Bath (Hypo-Allergenic)",
            color: "text-orange-500",
          },
          {
            icon: <GiDogBowl />,
            text: "Conditioning Treatment",
            color: "text-orange-500",
          },
          {
            icon: <FaPaw />,
            text: "Ears Flushed & Cleaned",
            color: "text-orange-500",
          },
          {
            icon: <MdPets />,
            text: "Watering Plants",
            color: "text-orange-500",
          },
          {
            icon: <GiSittingDog />,
            text: "Hairclipser Finish",
            color: "text-orange-500",
          },
          {
            icon: <FaPaw />,
            text: "Setting Length of Coat",
            color: "text-orange-500",
          },
        ],
      },
    ];
    

    return (
      <div className="px-4">
        <div className="text-center mb-12">
          <div className="text-orange-500 font-semibold mb-2 uppercase text-sm tracking-wide">
            Our Packages
          </div>
          <h2 className="text-4xl font-bold text-gray-800">
            Our Plans & Pricing
          </h2>
        </div>

        <div className="grid md:grid-rows-3 gap-6 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md transition-all hover:shadow-xl hover:border-2 hover:border-orange-400"
            >
                  <div className="grid grid-cols-1 md:grid-cols-4">
                      {/* title and price */}
                <div className="mb-6 col-span-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {plan.name}
                  </h3>
                  <div className="flex items-start">
                    <span className="text-2xl font-bold text-gray-800">$</span>
                    <span className="text-5xl font-bold text-gray-800">
                      {plan.price}
                    </span>
                    <span className="text-gray-500 mt-6 ml-1">/Visit</span>
                  </div>
                      </div>
                      
                <div className="col-span-2">
                  <div className="space-y-3 mb-8 grid md:grid-cols-2">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className={`${feature.color} text-lg`}>
                          {feature.icon}
                        </div>
                        <span className="text-gray-600 text-sm ">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-span-1 flex justify-center items-center">
                  <button className="btn btn-style rounded-full ">
                    Purchase Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default PlansAndPricing;