import React from "react";
import MyContainer from "../../components/container/MyContainer";

import ScheduleForm from "../ScheduleForm";
import AboutContent from "./AboutContent";
import HeroAbout from "./HeroAbout";
import WhyChooseUs from "../whyChoose/WhyChooseUs";
import Testimonial from "../Testimonial";

const AboutUs = () => {
  return (
    <div className="mb-10">
      {/* Hero Section */}
      <HeroAbout />

      <MyContainer>
        {/* Main Content Section */}
        <div className="my-10">
          <AboutContent />
        </div>

        {/* Consultation Section */}
        <div className="my-10">
          <ScheduleForm />
        </div>

        {/* Why Choose Us Section */}
        <div className="my-10">
          <WhyChooseUs />
        </div>
              <div className="my-10">
                  {/* Testimonials Section */}
        <Testimonial /> 
        </div>
       
      </MyContainer>
    </div>
  );
};

export default AboutUs;
