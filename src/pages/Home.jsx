import React from 'react';
import MeetExpertVets from './MeetExpertVets';
import WinterTips from './WinterTips';
import WhyChoose from './WhyChoose';
import ServicesSlice from './ServicesSlice';

const Home = () => {
    

  return (
    <div>
      {/* services section*/}
      <section>
        <ServicesSlice></ServicesSlice>
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
      <section>
        <WhyChoose></WhyChoose>
      </section>
    </div>
  );
};

export default Home;