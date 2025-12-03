import React from "react";
import { FaPaw, FaHeart, FaStar, FaShieldAlt } from "react-icons/fa";
import { MdPets, MdLocalHospital } from "react-icons/md";
import { GiDogBowl, GiSittingDog } from "react-icons/gi";
import MyContainer from "../../components/container/MyContainer";

import ScheduleForm from "./ScheduleForm";
import AboutContent from "./AboutContent";
import HeroAbout from "./HeroAbout";

const AboutUs = () => {
  return (
    <div className="mb-10">
      {/* Hero Section */}
      <HeroAbout />

      <MyContainer>
        {/* Main Content Section */}
        <AboutContent />
        {/* Consultation Section */}
        <ScheduleForm />
        {/* Why Choose Us Section */}
        {/* <WhyChoose /> */}
        {/* Testimonials Section */}
        {/* <Testimonial /> */}
      </MyContainer>
    </div>
  );
};

export default AboutUs;
