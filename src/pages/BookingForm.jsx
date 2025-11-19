import React, { useState } from "react";
import toast from "react-hot-toast";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      
    // console.log("name:", formData.name);
    //   console.log("email:", formData.email);
      
    toast.success("Booking submitted successfully!");
    setFormData({ name: "", email: "" });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl bg-linear-to-r from-blue-50 to-orange-50 rounded-xl">
        <div className="text-center mb-8">
          <div className="mt-8 inline-block bg-linear-to-r from-orange-300 to-orange-100  text-white text-4xl font-bold rounded-full w-16 h-16 items-center justify-center mb-2">
            <span className="text-white text-2xl">🐱</span>
          </div>
          <h2 className=" font-bold text-2xl text-[#031b4b]">WarmPaws</h2>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Book Your Service
          </h1>
          <p className="p-2 text-gray-600">
            Fill out the form below to schedule your service. We'll get back to
            you shortly with confirmation.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="card-body ">
          <div className="form-control my-2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              onChange={handleChange}
              value={formData.name}
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              onChange={handleChange}
              value={formData.email}
              type="email"
              name="email"
              placeholder="your@email.com"
              className="input input-bordered focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-style w-full">Book Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
