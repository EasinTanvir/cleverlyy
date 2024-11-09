import React from "react";
import { ResourceYearSelector } from "./ResourceYearSelector";
import ResourcePaperView from "./ResourcePaperView";

const ResourceYearWiseQp = () => {
  return (
    <div className="flex md:flex-row flex-col gap-12">
      <div className="min-w-fit  ms-8 ">
        <ResourceYearSelector />
      </div>
      <div className="min-w-full max-w-full ">
        <ResourcePaperView />
      </div>
    </div>
  );
};

export default ResourceYearWiseQp;
