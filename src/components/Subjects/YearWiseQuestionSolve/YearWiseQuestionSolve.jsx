import React from "react";
import { PiBookOpenTextDuotone } from "react-icons/pi";

import { YearSelector } from "./YearSelector";
import PaperView from "./PaperView";

const YearWiseQuestionSolve = () => {
  return (
    <div className="">
      <div className="flex items-center gap-2">
        <PiBookOpenTextDuotone size={25} /> <span className="-me-1">/</span>
        <span className="text-sm underline ">
          Cambridge Chemistry : O-level / Yearwise QPs
        </span>
      </div>

      <div className="mt-10 bg-yearBg p-5 rounded-2xl space-y-1">
        <div className="flex justify-between items-center">
          <h1 className="text-[22px]">
            Year <span className="text-textColor4">(+/-)</span>
          </h1>
          <h1 className="underline text-textColor4"> Specimen Papers</h1>
        </div>
        <YearSelector />
      </div>

      <div className="mt-20 ">
        <PaperView />
      </div>
    </div>
  );
};

export default YearWiseQuestionSolve;
