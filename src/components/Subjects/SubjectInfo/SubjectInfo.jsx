import React from "react";
import Image from "next/image";
import { PiBookOpenTextDuotone } from "react-icons/pi";

import { chemistry } from "../../../constant";
import YearWiseQuestion from "./YearWiseQuestion";
import ChapterWiseNotes from "./ChapterWiseNotes";
import ChapterWiseQuestion from "./ChapterWiseQuestion";

const SubjectInfo = () => {
  return (
    <div className="">
      <div className="flex items-center gap-2 ">
        <PiBookOpenTextDuotone size={25} /> <span className="-me-1">/</span>
        <span className="text-sm underline ">
          Cambridge Chemistry : O-level
        </span>
      </div>

      <div className="flex lg:flex-row flex-col items-center">
        <div className="flex-1  space-y-5">
          <h1 className="text-[30px] font-bold mt-5">
            Cambridge Chemistry : O level
          </h1>
          <p>
            From concise and detailed
            <span className=" text-textColor font-bold">
              {" "}
              revision notes
            </span>{" "}
            that simplify complex concepts to{" "}
            <span className=" text-textColor font-bold">
              chapterwise
            </span> and{" "}
            <span className=" text-textColor font-bold">
              yearwise question papers
            </span>{" "}
            that allow you to practice with real{" "}
            <span className=" text-textColor font-bold">exam questions</span>,
            you’ll find all the tools necessary to{" "}
            <span className=" text-textColor font-bold">
              master the syllabus
            </span>
            .
          </p>
          <div className="flex text-[18px] gap-2 items-center">
            <span className="underline">Specifications </span> |
            <span className="underline">Specimen Papers </span> |{" "}
            <span className="underline"> Recommended Books </span>
          </div>
        </div>

        <div className="w-96 flex flex-col items-center   justify-center space-y-2">
          <div>
            <div className="relative w-40">
              <Image
                className="max-w-full min-w-full"
                src={chemistry}
                alt="data"
              />
            </div>
          </div>
          <button className="text-sm font-bold bg-textColor4 text-white px-4 py-2 rounded-xl">
            <span className="underline">Days left till exam:</span> 7 months
          </button>
        </div>
      </div>

      <div className="mt-20 flex flex-wrap gap-9  ">
        <ChapterWiseNotes />
        <YearWiseQuestion />
        <ChapterWiseQuestion />
      </div>
    </div>
  );
};

export default SubjectInfo;
