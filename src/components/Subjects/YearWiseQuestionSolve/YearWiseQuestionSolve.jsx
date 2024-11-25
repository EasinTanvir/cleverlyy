import React from "react";

import { YearSelector } from "./YearSelector";
import PaperView from "./PaperView";
import { NotFound } from "@/components/NotFound";

const YearWiseQuestionSolve = ({
  yearWisePapers,
  isPapaperExist,
  subjectId,
  message,
}) => {
  return (
    <React.Fragment>
      {yearWisePapers && isPapaperExist ? (
        <>
          <div className="mt-10 bg-yearBg p-5 rounded-2xl space-y-1">
            <div className="flex justify-between items-center">
              <h1 className="text-[22px]">
                Year <span className="text-iconColor4 text-[20px]">(+/-)</span>
              </h1>
              <h1 className="underline text-iconColor4 italic text-[20px]">
                Specimen Papers
              </h1>
            </div>
            <YearSelector yearWisePapers={yearWisePapers} />
          </div>
          <div className="mt-20 ">
            <PaperView yearWisePapers={yearWisePapers} subjectId={subjectId} />
          </div>
        </>
      ) : (
        <div className="my-14">
          <NotFound title={message} desc="Please try with different subject" />
        </div>
      )}
    </React.Fragment>
  );
};

export default YearWiseQuestionSolve;
