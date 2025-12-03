import React from "react";
import MeetExpertVets from "./MeetExpertVets";
import WinterTips from "./WinterTips";
import WhyChoose from "./whyChoose/WhyChooseUs";
import ServicesSlice from "./ServicesSlice";
import MyContainer from "../components/container/MyContainer";
import AboutContent from "./about/AboutContent";
import ScheduleForm from "./ScheduleForm";
import PlansAndPricing from "./pricing/PlansAndPricing";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <MyContainer>
      {/* services section*/}
      <section  className="py-16 ">
        <ServicesSlice></ServicesSlice>
      </section>
      <section  className="py-16 ">
        <AboutContent />
      </section>
      {/* winter tips section*/}
      <section className="py-16 ">
        <WinterTips></WinterTips>
      </section>
      {/* meet experts section */}
      <section className="py-16 ">
        <MeetExpertVets></MeetExpertVets>
      </section>
      {/* choose section */}
      <section  className="py-16 ">
        <WhyChoose></WhyChoose>
      </section>
      <section className="py-16 ">
        <ScheduleForm/>
      </section>
      <section className="py-16 ">
        <PlansAndPricing/>
      </section>
      <section className="py-16 ">
        <Testimonial/>
      </section>
    </MyContainer>
  );
};

export default Home;
