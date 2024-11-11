import React from "react";
import { FaFlask, FaAtom, FaChartLine, FaPlus } from "react-icons/fa";
import Image from "next/image";
import { RiArrowRightSLine } from "react-icons/ri";
import { TfiMenuAlt } from "react-icons/tfi";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

import Sorting from "./Sorting";
import GcseSubjectCart from "./GcseSubjectCart";
import IntALevelSubjectCart from "./IntALevelSubjectCart";
import ALevelSubjectCart from "./ALevelSubjectCart";
import { subjectLists } from "../../utils/subject";
import { chemistry } from "../../constant";

const subjects = [
  {
    title: "Chemistry",
    code: "4CH1 | Science (Double Award) 4SD0",
    color: "#F9FDE7",
    icon: FaFlask,
    value: 70,
  },
  {
    title: "Physics",
    code: "4PH1 | Science (Double Award) 4SD0",
    color: "#EAF4FF",
    icon: FaAtom,
    value: 60,
  },
  {
    title: "Economics",
    code: "4PH1 | Science (Double Award) 4SD0",
    color: "#FFFBEB",
    icon: FaChartLine,
    value: 40,
  },
];

const Subject = () => {
  return (
    <div className="space-y-10  bg-dashboardBd ">
      <div>
        <h1 className="text-bold text-[27px] font-bold">Hi, Easin</h1>
        <h1 className="text-bold text-xl ">
          Start exploring your subjects for smarter, stress-free exam prep
        </h1>
      </div>

      <div className="flex sm:flex-row flex-col sm:gap-0 gap-4  ">
        <div className="xl:w-[23%] sm:w-[40%] w-full  flex justify-between items-center">
          <div className="text-sm">
            <p>Chemistry, Chapterwise, Organic 2.2</p>
            <p className=" text-textColor text-[13px]">
              Continue from where you left
            </p>
          </div>
          <button className="sm:block hidden">
            <RiArrowRightSLine size={45} />
          </button>
        </div>
        <div className="flex-1  flex lg:flex-row flex-col justify-end lg:items-center items-end gap-4">
          <button>
            <TfiMenuAlt size={30} />
          </button>
          <Sorting />
          <button className="flex items-center gap-2 border border-black text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition-all duration-200">
            <span>Add/Edit Subjects</span>
            <FaPlus />
          </button>
        </div>
      </div>

      <div className="pt-4 ">
        <div className="flex sm:flex-row flex-col justify-between pb-10">
          <h1 className="text-xl">International GCSE</h1>
          <div className="flex items-center gap-2 font-semibold text-lg">
            <h1>Pearson</h1> | <h1>Edescel</h1>
          </div>
        </div>
        <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-8">
          {subjectLists.map((subject, index) => (
            <GcseSubjectCart
              key={index}
              color={subject.color}
              image={subject.image}
              title={subject.title}
              value={70}
            />
          ))}
        </div>
      </div>

      <div className="pt-10">
        <div className="flex sm:flex-row flex-col justify-between pb-10">
          <h1 className="text-xl">Edexcel: International A-Level</h1>
          <div className="flex items-center gap-2 font-semibold text-lg">
            <h1>Pearson</h1> | <h1>Edescel</h1>
          </div>
        </div>

        <div className="flex gap-8 bg-[#f9fde7] shadow-md px-6 py-10 rounded-xl">
          <div className="w-80  flex flex-col items-center justify-center">
            <div className="w-[115px] ">
              <Image className="max-w-24" src={chemistry} alt="logo" />
            </div>
            <h1 className="text-[27px] font-bold">Chemistry</h1>
            <p className="text-[11px]">4CH1 | Science (Double Award) 4SD0 </p>
          </div>
          <div className="flex-1  ">
            <div className="flex flex-wrap gap-6">
              {subjects.map((subject, index) => (
                <IntALevelSubjectCart
                  key={index}
                  color={subject.color}
                  icon={MdOutlineKeyboardDoubleArrowRight}
                  title="Unit"
                  code={subject.code}
                  progress={subject.progress}
                  value={subject.value}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10">
        <div className="flex sm:flex-row flex-col justify-between pb-10">
          <h1 className="text-xl">Cambridge A-Levels</h1>
          <div className="flex items-center gap-2 font-semibold text-lg">
            <h1>Pearson</h1> | <h1>Edescel</h1>
          </div>
        </div>
        <div className="flex gap-8 bg-[#f9fde7] shadow-md px-6 py-10 rounded-xl">
          <div className="w-80  flex flex-col items-center justify-center">
            <div className="w-[115px] ">
              <Image className="max-w-24" src={chemistry} alt="logo" />
            </div>
            <h1 className="text-[27px] font-bold">Chemistry</h1>
            <p className="text-[11px]">4CH1 | Science (Double Award) 4SD0 </p>
          </div>
          <div className="flex-1 ">
            <ALevelSubjectCart
              color={"#ffffff"}
              icon={MdOutlineKeyboardDoubleArrowRight}
              title="Advanced Subsidiary (AS)"
              value={70}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subject;
