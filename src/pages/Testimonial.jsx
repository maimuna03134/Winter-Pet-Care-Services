import React, { useState } from "react";
import MyContainer from "../components/container/MyContainer";
import { FaPaw, FaStar } from "react-icons/fa";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Dog Owner",
      rating: 5,
      text: "WarmPaws has been a blessing for my golden retriever. The staff is caring, professional, and truly understands pet needs.",
      image: "https://i.pravatar.cc/150?img=5",
    },
    {
      name: "James Wilson",
      role: "Cat Owner",
      rating: 5,
      text: "Best pet care service in town! My cat receives excellent grooming and medical attention. Highly recommended!",
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Emily Chen",
      role: "Pet Parent",
      rating: 5,
      text: "The team at WarmPaws treats my pets like family. Their dedication and expertise give me complete peace of mind.",
      image: "https://i.pravatar.cc/150?img=9",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="py-16 bg-white">
      <MyContainer>
        <div className="px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-orange-500 font-semibold mb-2 uppercase text-sm tracking-wide">
                Testimonials
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                What Our Client's Have to Say!
              </h2>
              <p className="text-gray-600 mb-8">
                Don't just take our word for it. Hear from pet parents who trust
                WarmPaws with their beloved companions. Their stories inspire us
                to continue providing exceptional care every single day.
              </p>
              <div>
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <FaStar key={i} className="text-orange-400" />
                    )
                  )}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div className="font-bold text-gray-800">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-sm text-gray-500">
                  {testimonials[currentTestimonial].role}
                </div>
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="grid grid-cols-3 gap-4">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`rounded-full overflow-hidden shadow-lg transition-all ${
                      index === currentTestimonial
                        ? "ring-4 ring-orange-400"
                        : ""
                    } ${index === 0 ? "w-24 h-24" : ""} ${
                      index === 1 ? "w-24 h-24 mt-8" : ""
                    } ${index === 2 ? "w-32 h-32" : ""}`}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div className="w-24 h-24 rounded-full bg-linear-to-br from-orange-300 to-orange-500 flex items-center justify-center">
                  <FaPaw className="text-white text-3xl" />
                </div>
                <div className="w-20 h-20 rounded-full bg-linear-to-br from-purple-300 to-purple-500 mt-12"></div>
                <div className="w-24 h-24 rounded-full bg-linear-to-br from-pink-300 to-pink-500"></div>
              </div>
            </div>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Testimonial;
