import React from "react";
import heroImage from "../../images/hero-image-001.png";

const Hero = () => {
  return (
    <div className="py-12 bg-yellow-100 flex justify-center flex-col relative">
      <div className="container mx-auto px-3 space-y-8">
        <div className="font-sans text-[40px] leading-[1.1]  font-bold lg:w-3/4">
          Collaborate with anyone you want, however you want.
        </div>
        <div className="font-sans text-lg lg:w-3/5">
          LGR is an online creator marketplace that gives you the freedom to
          find collaborations opportunities, grow your brand and learn from
          others.
        </div>
        <button className="p-3 bg-[#FFB613] rounded-md">
          <span className="font-sans text-base font-medium">Get Started</span>
          <span className="font-sans text-base font-thin">-It's free</span>
        </button>
        <img
          className="w-[200px] absolute right-0 bottom-0"
          src={heroImage}
          alt="Logo"
        />
      </div>
    </div>
  );
};

export default Hero;
