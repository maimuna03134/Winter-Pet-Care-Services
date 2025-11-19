import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSlider = () => {
  const slides = [
    {
      image:
        "https://i.ibb.co.com/1C24FBK/woman-walking-her-dog-winter-both-explore-snow-together-playful-mood-162469431.jpg",
      title: "Keep Your Pets Cozy This Winter 😍 ",
      subtitle:
        "Professional winter care services for your beloved furry friends",
    },
    {
      image:
        "https://i.ibb.co.com/cK1zbbYw/Play-fetch-with-dogs-in-the-snow.jpg",
      title: "Warm Blankets & Love 💕",
      subtitle: "Because your pets deserve comfort even on the coldest nights",
    },
    {
      image:
        "https://i.ibb.co.com/vCrDZKVB/neakasa-Eh5-UBn-RR3-GI-unsplash.jpg",
      title: "Cozy Sweaters, Happy Hearts 🧣",
      subtitle: "Stylish winter outfits to keep your pets snug and smiling",
    },

    {
      image:
        "https://i.ibb.co.com/cKJRwDw0/benjamin-lehman-qw-Ieh5-M8b-F8-unsplash.jpg",
      title: "Snowy Walks, Warm Paws 🐾",
      subtitle: "Protect those tiny paws with our winter care products",
    },
    {
      image: "https://i.ibb.co.com/qLG0gfRD/R.jpg",
      title: "Cozy Sweaters, Happy Hearts 🧣",
      subtitle: "Stylish winter outfits to keep your pets snug and smiling",
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
     
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      className="h-[90vh] w-full my-10"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="h-[90vh] w-full bg-center bg-cover flex flex-col justify-center items-center text-white relative"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 text-center px-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 drop-shadow-lg hover:text-orange-500 transition-all">
                {slide.title}
              </h2>
              <p className="text-sm md:text-lg lg:text-xl mb-8 drop-shadow-md hover:text-orange-500 transition-all">
                {slide.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 md:px-6 md:py-3 rounded-lg transition">
                  Explore Services
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-orange-600 text-white font-semibold px-4 py-2 md:px-6 md:py-3 rounded-lg transition">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
