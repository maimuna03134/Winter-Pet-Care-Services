import React, { useState, useEffect } from "react";
import { FaRegHeart, FaAward, FaShieldAlt } from "react-icons/fa";

const WhyChoose = () => {
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      id: 1,
      icon: FaRegHeart,
      title: "Pet-First Approach",
      description:
        "Every service designed with your pet's comfort and safety in mind",
      stats: "10K+ Happy Pets",
      color: "from-rose-600 to-pink-600",
      lightColor: "from-rose-50 to-pink-50",
    },
    {
      id: 2,
      icon: FaShieldAlt,
      title: "Trusted Professionals",
      description:
        "All providers are certified and background-checked for your peace of mind",
      stats: "100% Verified",
      color: "from-blue-600 to-cyan-600",
      lightColor: "from-blue-50 to-cyan-50",
    },
    {
      id: 3,
      icon: FaAward,
      title: "5-Star Rated",
      description: "Join thousands of happy pet parents who trust us",
      stats: "4.9/5 Rating",
      color: "from-amber-600 to-orange-600",
      lightColor: "from-amber-50 to-orange-50",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 bg-white overflow-hidden rounded-2xl hover:shadow-2xl transition-all">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-40 animate-pulse"
          style={{
            background:
              "linear-gradient(to bottom right, rgb(225, 29, 72), rgb(236, 72, 153))",
          }}
        ></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-40 animate-pulse"
          style={{
            background:
              "linear-gradient(to bottom right, rgb(59, 130, 246), rgb(34, 211, 238))",
            animationDelay: "2s",
          }}
        ></div>
      </div>

      <div className="max-w-7xl w-full relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-rose-100 to-orange-100 px-4 py-2 rounded-full mb-6 border border-rose-200">
            <span className="w-2 h-2 bg-rose-600 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-rose-700">
              Why Pet Parents Love Us
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black bg-linear-to-r from-gray-900 via-rose-700 to-gray-900 bg-clip-text text-transparent mb-6 leading-tight">
            Pet Care Reimagined
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Experience premium pet services with industry-leading standards and
            innovation
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isActive = activeCard === index;

            return (
              <div
                key={feature.id}
                onMouseEnter={() => setActiveCard(index)}
                className="group relative h-96"
              >
                {/* Card Container */}
                <div
                  className={`absolute inset-0 rounded-2xl transition-all duration-500 cursor-pointer
                                    ${
                                      isActive
                                        ? "shadow-2xl scale-100"
                                        : "shadow-lg hover:shadow-xl"
                                    }
                                    border-2 border-gray-200 hover:border-gray-300
                                    p-8 flex flex-col justify-between overflow-hidden
                                `}
                  style={{
                    background: `linear-gradient(to bottom right, ${
                      feature.lightColor === "from-rose-50 to-pink-50"
                        ? "rgb(255, 240, 245)"
                        : feature.lightColor === "from-blue-50 to-cyan-50"
                        ? "rgb(240, 249, 255)"
                        : "rgb(255, 251, 235)"
                    }, white)`,
                  }}
                >
                  {/* Animated gradient overlay */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    style={{
                      background: `linear-gradient(to bottom right, ${
                        feature.color === "from-rose-600 to-pink-600"
                          ? "rgb(225, 29, 72)"
                          : feature.color === "from-blue-600 to-cyan-600"
                          ? "rgb(37, 99, 235)"
                          : "rgb(217, 119, 6)"
                      }, ${
                        feature.color === "from-rose-600 to-pink-600"
                          ? "rgb(236, 72, 153)"
                          : feature.color === "from-blue-600 to-cyan-600"
                          ? "rgb(34, 211, 238)"
                          : "rgb(234, 88, 12)"
                      })`,
                    }}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 transition-all duration-500
                                            ${
                                              isActive
                                                ? "text-white shadow-lg border-0"
                                                : "bg-white text-gray-700 border-2 border-gray-200 group-hover:border-gray-300"
                                            }
                                        `}
                      style={
                        isActive
                          ? {
                              background: `linear-gradient(to bottom right, ${
                                feature.color === "from-rose-600 to-pink-600"
                                  ? "rgb(225, 29, 72)"
                                  : feature.color ===
                                    "from-blue-600 to-cyan-600"
                                  ? "rgb(37, 99, 235)"
                                  : "rgb(217, 119, 6)"
                              }, ${
                                feature.color === "from-rose-600 to-pink-600"
                                  ? "rgb(236, 72, 153)"
                                  : feature.color ===
                                    "from-blue-600 to-cyan-600"
                                  ? "rgb(34, 211, 238)"
                                  : "rgb(234, 88, 12)"
                              })`,
                            }
                          : {}
                      }
                    >
                      <IconComponent className="w-8 h-8" />
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-2xl md:text-3xl font-bold mb-4 transition-all duration-500
                                            ${
                                              isActive
                                                ? "text-gray-900"
                                                : "text-gray-800 group-hover:text-gray-900"
                                            }
                                        `}
                    >
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={`transition-all duration-500 leading-relaxed text-base
                                            ${
                                              isActive
                                                ? "text-gray-700"
                                                : "text-gray-600 group-hover:text-gray-700"
                                            }
                                        `}
                    >
                      {feature.description}
                    </p>
                  </div>

                  {/* Stats */}
                  <div
                    className={`relative z-10 inline-block transition-all duration-500
                                        ${
                                          isActive
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-2"
                                        }
                                    `}
                  >
                    <div
                      className="px-4 py-2 rounded-lg text-white text-sm font-semibold"
                      style={{
                        background: `linear-gradient(to bottom right, ${
                          feature.color === "from-rose-600 to-pink-600"
                            ? "rgb(225, 29, 72)"
                            : feature.color === "from-blue-600 to-cyan-600"
                            ? "rgb(37, 99, 235)"
                            : "rgb(217, 119, 6)"
                        }, ${
                          feature.color === "from-rose-600 to-pink-600"
                            ? "rgb(236, 72, 153)"
                            : feature.color === "from-blue-600 to-cyan-600"
                            ? "rgb(34, 211, 238)"
                            : "rgb(234, 88, 12)"
                        })`,
                      }}
                    >
                      {feature.stats}
                    </div>
                  </div>

                  {/* Animated border accent */}
                  <div
                    className={`absolute bottom-0 left-0 h-1 transition-all duration-500
                                            ${
                                              isActive
                                                ? "w-full"
                                                : "w-0 group-hover:w-1/3"
                                            }
                                        `}
                    style={{
                      background: `linear-gradient(to right, ${
                        feature.color === "from-rose-600 to-pink-600"
                          ? "rgb(225, 29, 72)"
                          : feature.color === "from-blue-600 to-cyan-600"
                          ? "rgb(37, 99, 235)"
                          : "rgb(217, 119, 6)"
                      }, ${
                        feature.color === "from-rose-600 to-pink-600"
                          ? "rgb(236, 72, 153)"
                          : feature.color === "from-blue-600 to-cyan-600"
                          ? "rgb(34, 211, 238)"
                          : "rgb(234, 88, 12)"
                      })`,
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mb-12">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveCard(index)}
              className={`h-3 rounded-full transition-all duration-500
                                ${
                                  activeCard === index
                                    ? "w-8"
                                    : "w-3 bg-gray-300 hover:bg-gray-400"
                                }
                            `}
              style={
                activeCard === index
                  ? {
                      background:
                        "linear-gradient(to right, rgb(225, 29, 72), rgb(234, 88, 12))",
                    }
                  : {}
              }
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>

        {/* Trust Badge */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl font-black text-rose-600">10K+</div>
            <p className="text-gray-600 text-sm">Happy Pet Parents</p>
          </div>
          <div className="hidden sm:block w-px h-12 bg-gray-200"></div>
          <div className="text-center">
            <div className="text-3xl font-black text-blue-600">500+</div>
            <p className="text-gray-600 text-sm">Verified Providers</p>
          </div>
          <div className="hidden sm:block w-px h-12 bg-gray-200"></div>
          <div className="text-center">
            <div className="text-3xl font-black text-amber-600">4.9★</div>
            <p className="text-gray-600 text-sm">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
