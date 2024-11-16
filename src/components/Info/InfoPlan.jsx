import React from "react";
import PricingTable from "./plan/PriceTable";
import PricingCard from "./plan/PricingCard";
import FAQAccordion from "./plan/FAQAccordion";
import PricingHeader from "./plan/PriceHeader";

const InfoPlan = () => {
  return (
    <div className="space-y-24">
      <PricingHeader />
      <PricingCard />
      <PricingTable />
      <FAQAccordion />
    </div>
  );
};

export default InfoPlan;
