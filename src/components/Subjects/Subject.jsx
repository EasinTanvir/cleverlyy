import React from "react";
import { FaFlask, FaAtom, FaChartLine, FaPlus } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import { TfiMenuAlt } from "react-icons/tfi";

import SubjectCard from "./SubjectCart";
import Sorting from "./Sorting";

const subjects = [
  {
    title: "Chemistry",
    code: "4CH1 | Science (Double Award) 4SD0",
    color: "#F9FDE7",
    icon: FaFlask,
    progress: [
      { label: "Yearwise QP", value: 80, details: "8/14" },
      { label: "Chapterwise QP", value: 80, details: "18/24" },
      { label: "Revision Notes", value: 80, details: "240/300" },
    ],
  },
  {
    title: "Physics",
    code: "4PH1 | Science (Double Award) 4SD0",
    color: "#EAF4FF",
    icon: FaAtom,
    progress: [
      { label: "Yearwise QP", value: 80, details: "8/14" },
      { label: "Chapterwise QP", value: 80, details: "18/24" },
      { label: "Revision Notes", value: 80, details: "240/300" },
    ],
  },
  {
    title: "Economics",
    code: "4PH1 | Science (Double Award) 4SD0",
    color: "#FFFBEB",
    icon: FaChartLine,
    progress: [
      { label: "Yearwise QP", value: 80, details: "8/14" },
      { label: "Chapterwise QP", value: 80, details: "18/24" },
      { label: "Revision Notes", value: 80, details: "240/300" },
    ],
  },
];

const Subject = () => {
  return (
    <div className="space-y-10 px-4">
      <div>
        <h1 className="text-bold text-[27px] font-bold">Hi, Easin</h1>
        <h1 className="text-bold text-xl ">
          Start exploring your subjects for smarter, stress-free exam prep
        </h1>
      </div>

      <div className="flex  ">
        <div className="w-[23%]  flex justify-between items-center">
          <div className="text-sm">
            <p>Chemistry, Chapterwise, Organic 2.2</p>
            <p className=" text-textColor text-[13px]">
              Continue from where you left
            </p>
          </div>
          <button>
            <RiArrowRightSLine size={35} />
          </button>
        </div>
        <div className="flex-1  flex justify-end items-center gap-4">
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

      <div className="grid grid-cols-4">
        {/* {subjects.map((subject, index) => (
          <SubjectCard
            key={index}
            color={subject.color}
            icon={subject.icon}
            title={subject.title}
            code={subject.code}
            progress={subject.progress}
          />
        ))} */}
        <SubjectCard />
      </div>
    </div>
  );
};

export default Subject;

const SubjectCards = ({ color, icon: Icon, title, code, progress }) => {
  return (
    <div className={`bg-[${color}] rounded-lg shadow-lg p-6 w-96 border`}>
      <div className="flex items-center space-x-4">
        <div className="bg-white p-4 rounded-full">
          <Icon className="text-gray-700 text-3xl" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-gray-500">{code}</p>
        </div>
      </div>
      <div className="mt-4  gap-4">
        {progress.map((item, index) => (
          <div key={index} className="flex">
            <p className="text-sm text-gray-600">{item.label}</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-green-500 h-2.5 rounded-full"
                style={{ width: `${item.value}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500">{item.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
