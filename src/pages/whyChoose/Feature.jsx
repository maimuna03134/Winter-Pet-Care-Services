import React from "react";
import { MdLocalHospital, MdPets } from "react-icons/md";
import { GiDogBowl, GiSittingDog } from "react-icons/gi";
import MyContainer from "../../components/container/MyContainer";

const WhyChoose = () => {
  const features = [
    {
      icon: <MdPets className="text-4xl text-orange-500" />,
      title: "Pet Nutrition",
      description:
        "Premium quality food and dietary plans tailored to your pet's specific needs and health requirements.",
    },
    {
      icon: <MdLocalHospital className="text-4xl text-blue-500" />,
      title: "Medical Care",
      description:
        "Expert veterinary services with state-of-the-art facilities ensuring your pet's health and wellness.",
    },
    {
      icon: <GiDogBowl className="text-4xl text-purple-500" />,
      title: "Grooming Services",
      description:
        "Professional grooming and spa treatments to keep your furry friends looking and feeling their best.",
    },
    {
      icon: <GiSittingDog className="text-4xl text-pink-500" />,
      title: "Pet Training",
      description:
        "Certified trainers helping your pets learn good behavior and essential skills for happy living.",
    },
  ];

  return (
    <div className=" py-16" data-aos="fade-down-right">
      <MyContainer>
        <div className="px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-orange-500 font-semibold mb-2 uppercase text-sm tracking-wide">
                What We Provide
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Why Do People Choose Us?
              </h2>
              <p className="text-gray-600 mb-4">
                We stand out from other pet care providers through our
                commitment to excellence, personalized attention, and genuine
                love for animals. Our integrated approach combines medical
                expertise with emotional care.
              </p>
              <p className="text-gray-600 mb-6">
                Every pet that walks through our doors becomes part of the
                WarmPaws family. We take time to understand your pet's unique
                personality, health needs, and preferences to deliver truly
                customized care.
              </p>
              <button className="bg-linear-to-r from-orange-400 to-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
                Read more
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md transition-all hover:shadow-xl hover:border-2 hover:border-orange-400"
                >
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="font-bold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default WhyChoose;
