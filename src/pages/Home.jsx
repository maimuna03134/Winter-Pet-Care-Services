import React from "react";
import MeetExpertVets from "./MeetExpertVets";
import WinterTips from "./WinterTips";
import WhyChoose from "./whyChoose/WhyChooseUs";
import ServicesSlice from "./ServicesSlice";
import MyContainer from "../components/container/MyContainer";
import AboutContent from "./about/AboutContent";
import ScheduleForm from "./ScheduleForm";
import PlansAndPricing from "./pricing/PlansAndPricing";

const Home = () => {
  return (
    <MyContainer>
      {/* services section*/}
      <section>
        <ServicesSlice></ServicesSlice>
      </section>
      <section>
        <AboutContent />
      </section>
      {/* winter tips section*/}
      <section>
        <WinterTips></WinterTips>
      </section>
      {/* meet experts section */}
      <section>
        <MeetExpertVets></MeetExpertVets>
      </section>
      {/* choose section */}
      <section className="my-10 ">
        <WhyChoose></WhyChoose>
      </section>
      <section>
        <ScheduleForm/>
      </section>
      <section>
        <PlansAndPricing/>
      </section>
    </MyContainer>
  );
};

export default Home;
