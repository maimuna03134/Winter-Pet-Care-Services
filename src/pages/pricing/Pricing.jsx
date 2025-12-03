import React from 'react';
import PricingBanner from './PricingBanner';
import PlansAndPricing from './PlansAndPricing';
import FAQ from './FAQ';
import MyContainer from '../../components/container/MyContainer';


const Pricing = () => {
    return (
      <div>
        {/* Pricing Banner */}
        <PricingBanner />

        <MyContainer>
          <div className="my-10">
            {/* plan and pricing */}
            <PlansAndPricing />
          </div>
          <div className="my-10">
            {/* FAQ */}
            <FAQ />
          </div>
        </MyContainer>
      </div>
    );
};

export default Pricing;