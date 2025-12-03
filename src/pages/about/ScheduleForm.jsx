import React, { useState } from "react";
import toast from "react-hot-toast";
import MyContainer from "../../components/container/MyContainer";

const ScheduleForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    email: "",
    service: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success(
      "Thank you! We'll contact you soon to confirm your appointment."
    );
    // 🔥 Reset the form
    setFormData({
      name: "",
      phone: "",
      date: "",
      email: "",
      service: "",
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-linear-to-r from-orange-100 via-pink-50 py-16 rounded-2xl">
      <div>
        <div className="px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="">
              <div className="text-orange-500 font-semibold mb-2 uppercase text-sm tracking-wide">
                Book A Consultation
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Schedule a Visit Today!
              </h2>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
                >
                  <option value="">Select Service</option>
                  <option value="checkup">Veterinary Check-up</option>
                  <option value="grooming">Pet Grooming</option>
                  <option value="training">Pet Training</option>
                  <option value="emergency">Emergency Care</option>
                </select>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-linear-to-r from-orange-400 to-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                >
                  Submit Now
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600"
                alt="Happy family with pet"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleForm;
