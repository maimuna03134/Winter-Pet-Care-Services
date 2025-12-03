import React from "react";
import MyContainer from "../../components/container/MyContainer";

import ScheduleForm from "../ScheduleForm";
import AboutContent from "./AboutContent";
import HeroAbout from "./HeroAbout";
import WhyChooseUs from "../whyChoose/WhyChooseUs";

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
        <WhyChooseUs />
        {/* Testimonials Section */}
        {/* <Testimonial /> */}
      </MyContainer>
    </div>
  );
};

export default AboutUs;
