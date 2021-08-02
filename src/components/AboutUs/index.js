import React from 'react';
import heroImage from '../../images/hero-image-001.png';
import ribbon from '../../images/ribbon.png';
import './about-us.css';

const AboutUs = () => {
  return (
    <div className="py-12 bg-yellow-100 flex justify-center flex-col z-[0] relative">
      <div className="container mx-auto px-3 py-6 space-y-24 z-[-10] overflow-hidden relative">
        {/* <div className="image-container overflow-hidden border border-black absolute z-[-1] h-full w-full"> */}
        <img src={ribbon} className="absolute ribbon" />
        {/* </div> */}

        <div className="font-sans text-[40px] leading-[1.1]  font-bold lg:w-3/4">
          Why We Are Different
        </div>
        <div className="space-y-3">
          <div className="font-heading text-[20px] font-thin text-3xl lg:w-3/5">
            Help Creators Be Proactive
          </div>
          <div className="font-heading font-thin text-lg lg:w-3/5">
            Our marketplace platform gives creators the ability to pick and
            choose among all collaboration opportunities available out there. So
            no more sit and wait!
          </div>
        </div>
        <div className="space-y-3">
          <div className="font-heading text-[20px] font-thin text-3xl lg:w-3/5">
            Build a Community
          </div>
          <div className="font-heading font-thin text-lg lg:w-3/5">
            Creators are able to share their personal experience and ask
            questions through blog posts and Q&#38;A panels. We want to help you
            find friends and mentors
          </div>
        </div>
        <div className="space-y-3">
          <div className="font-heading text-[20px] font-thin text-3xl lg:w-3/5">
            Authenticity + Growth
          </div>
          <div className="font-heading font-thin text-lg lg:w-3/5">
            Authenticity and growth can co-live! Each creator can see analytics
            of personal growth and insights on how sponsored content is
            affecting their audience.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
