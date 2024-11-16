import React from "react";
import { FaHamburger } from "react-icons/fa";

const PricingHeader = () => {
  return (
    <div className=" px-6 text-center">
      <h1 className="text-4xl font-bold mb-4 italic">
        CHOOSE THE <span className="text-purple-600 underline">RIGHT PLAN</span>{" "}
        FOR YOU
      </h1>
      <p className="text-lg mb-4 xl:w-[32%] lg:w-[40%] w-[80%] mx-auto">
        Select from multiple annual & multiple plans to find the perfect match
        for your studies. All for a{" "}
        <span className="font-semibold italic">price less than that of a</span>{" "}
        <span className="font-bold italic">burger</span>.
      </p>
      <div className="flex justify-center mt-4">
        <FaHamburger className="text-yellow-600 text-4xl" />
      </div>
    </div>
  );
};

export default PricingHeader;
