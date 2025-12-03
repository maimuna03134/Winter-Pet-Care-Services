import React from 'react';
import PricingBanner from './PricingBanner';
import PlansAndPricing from './PlansAndPricing';
import FAQ from './FAQ';
import MyContainer from '../../components/container/MyContainer';
import ScrollTop from '../../components/scrollToTopButton/ScrollTop';

const Pricing = () => {
    return (
      <div>
        {/* Pricing Banner */}
        <PricingBanner />

            <MyContainer className={"pb-16"}>
                
          {/* plan and pricing */}
          <PlansAndPricing />

          {/* FAQ */}
          <FAQ/>
        </MyContainer>

        {/* Scroll to Top Button */}
        <ScrollTop/>
      </div>
    );
};

export default Pricing;