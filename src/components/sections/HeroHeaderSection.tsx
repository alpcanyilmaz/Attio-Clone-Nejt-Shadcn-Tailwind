import { ChevronRight } from "lucide-react";
import React from "react";

function HeroHeaderSection() {
  return (
    <div className="flex justify-center max-w-fit mx-auto py-1 px-1 bg-[#F4F5F6] rounded-full mt-10">
      <div className="bg-primary rounded-full px-3 py-1 text-white">New</div>
      <span className="px-1 py-1">
        How Pallets uses Attio to power their GTM
      </span>
      <div className="flex justify-center items-center">
        <ChevronRight className="text-primary" />
      </div>
    </div>
  );
}

export default HeroHeaderSection;
