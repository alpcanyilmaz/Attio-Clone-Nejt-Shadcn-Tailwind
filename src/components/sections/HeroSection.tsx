import React from "react";
import HeroHeaderSection from "./HeroHeaderSection";
import MainButton from "../common/MainButton";
import { HeroYoutubeModal } from "../modals/HeroYoutubeModal";

function HeroSection() {
  return (
    <section className="max-w-[1250px] mx-auto">
      <HeroHeaderSection />
      <div className="mt-10 flex flex-col gap-10 mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold text-center text-[#1D1F20]">
          Customer <br /> relationship magic.
        </h1>
        <span className="text-[20px] md:text-[22px] text-center max-w-[800px] mx-auto px-10 text-[#31373D]">
          Powerful, flexible and data-driven, Attio makes it easy <br /> to
          build the exact CRM your business needs.
        </span>
        <div className="flex gap-10 justify-center px-10">
          <MainButton
            text="Start for free"
            size="small"
            classes="border-none rounded-[12px]"
          />
          <MainButton
            text="Talk to sales"
            size="small"
            classes="bg-white border-slate-50 text-[#31373D]"
          />
        </div>
        <div className="flex justify-center w-full">
          <HeroYoutubeModal />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
