import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const WinterTips = () => {
  const tips = [
    {
      icon: "🧥",
      title: "Dress for the Weather",
      description:
        "Small or short-haired dogs need extra warmth during walks. Cozy sweaters or waterproof coats help them stay comfortable and safe in chilly winds.",
    },
    {
      icon: "🐾",
      title: "Protect the Paws",
      description:
        "Ice, snow, and salt can damage your pet’s paws. Use booties or apply paw wax before walks, and always wipe their feet afterward.",
    },
    {
      icon: "🥣",
      title: "Keep Them Hydrated",
      description:
        "Even in cold weather, pets need plenty of water. Dry air from heaters can make them dehydrated faster than you think!",
    },
    {
      icon: "🔥",
      title: "Create a Cozy Space",
      description:
        "Give your pet a warm, draft-free area to rest. Use blankets or a heated pad, but ensure there’s room to move away if it gets too warm.",
    },
    {
      icon: "🩺",
      title: "Watch for Cold Symptoms",
      description:
        "Shivering, lethargy, or whining can be signs your pet is too cold. Bring them indoors and contact your vet if symptoms persist.",
    },
    {
      icon: "🌨️",
      title: "Limit Outdoor Playtime",
      description:
        "Avoid long outdoor sessions in freezing weather. Short, frequent walks are better than one long exposure to the cold.",
    },
    {
      icon: "🚿",
      title: "Avoid Overbathing",
      description:
        "Frequent baths remove natural oils that protect against dryness. Use moisturizing pet shampoo and limit baths during winter.",
    },
    {
      icon: "🚗",
      title: "Beware of Car Engines",
      description:
        "Cats often crawl under car hoods for warmth. Tap your car’s hood before starting to prevent accidents.",
    },
    {
      icon: "🧴",
      title: "Moisturize Their Skin",
      description:
        "Cold air can cause flaky skin. Use vet-approved moisturizers and ensure your home isn’t too dry by using a humidifier.",
    },
    {
      icon: "🍲",
      title: "Adjust Their Diet",
      description:
        "Pets may burn more calories in winter. Offer slightly larger portions or nutrient-rich food if your vet recommends it.",
    },
  ];

  return (
    <div className="px-4 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" data-aos="zoom-in">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Winter Care Tips for Your Pets ❄️
          </h2>
          <p className="text-gray-600 text-lg">
            Expert advice to keep your furry friends safe and comfortable
          </p>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          centeredSlides={true}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={3000}
          modules={[Pagination, Autoplay]}
          module
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {tips.map((tip, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-60 flex flex-col items-center text-center  ">
                <div className="text-5xl text-center mb-4">{tip.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 ">
                  {tip.title}
                </h3>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination mt-4 flex justify-center"></div>
      </div>
    </div>
  );
};

export default WinterTips;
