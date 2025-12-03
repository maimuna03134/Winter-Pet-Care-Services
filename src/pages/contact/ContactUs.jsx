import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaw } from "react-icons/fa";
import MyContainer from "../../components/container/MyContainer";
import ContactBanner from "./ContactBanner";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We'll get back to you soon.");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Hero Banner Section */}
      <ContactBanner />

      {/* Main Contact Section */}
      <MyContainer className={"px-4 py-20 -mt-10 relative z-10"}>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Contact Info */}
          <div data-aos="fade-right">
            <div className="text-orange-500 font-semibold mb-2 uppercase text-sm tracking-wide">
              Our Info
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Whether you need winter grooming, warm clothing for your pet, or
              just have questions — we're always ready to help you and your
              furry friends stay cozy and safe.
            </p>

            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Location */}
              <div className="bg-linear-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 flex items-start gap-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-white rounded-full p-4 shadow-lg">
                  <FaMapMarkerAlt className="text-3xl text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Location:
                  </h3>
                  <p className="text-gray-600">123 Cozy Paws Lane</p>
                  <p className="text-gray-600">Snowbridge, NY 12983</p>
                  <p className="text-gray-600">United States</p>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-linear-to-br from-pink-50 to-rose-50 rounded-2xl p-6 flex items-start gap-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-white rounded-full p-4 shadow-lg">
                  <FaPhone className="text-3xl text-pink-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Phone:
                  </h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">+1 (555) 123-7637</p>
                </div>
              </div>

              {/* Email */}
              <div className="bg-linear-to-br from-amber-50 to-orange-50 rounded-2xl p-6 flex items-start gap-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-white rounded-full p-4 shadow-lg">
                  <FaEnvelope className="text-3xl text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Email Us:
                  </h3>
                  <p className="text-gray-600">hello@warmpaws.com</p>
                  <p className="text-gray-600">support@warmpaws.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div data-aos="fade-left">
            <div className="bg-linear-to-r from-orange-100 via-pink-50 py-16 rounded-2xl p-8 md:p-12 shadow-2xl ">
              <div className="mb-8">
                <div className="text-orange-600 font-semibold mb-2 uppercase text-sm tracking-wider">
                  Contact Us
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Send us a Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and our team will reply within 24
                  hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="input-style"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="input-style"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="input-style"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  required
                  className="w-full px-6 py-6 rounded-3xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-3 focus:ring-orange-400 resize-none transition-all "
                ></textarea>

                <button
                  type="submit"
                  className="w-full btn btn-style rounded-full"
                >
                  Send Message Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default ContactUs;
