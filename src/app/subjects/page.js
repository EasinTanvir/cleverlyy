import React, { Suspense } from "react";
import { FaPlus } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import { TfiMenuAlt } from "react-icons/tfi";

import Subject from "@/components/Subjects/Subject";
import Skeleton from "@/components/Skeleton";
import Sorting from "@/components/Subjects/Sorting";

const findBoardSubjects = (data, boardName) =>
  data.find((item) => item.board_name === boardName);

const SubjectWrapper = async () => {
  const response = await fetch(`${process.env.BACKEND_URL}/users/7/subjects`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      errorData.message || `HTTP error! status: ${response.status}`
    );
  }
  const data = await response.json();
  if (!data) {
    throw new Error("Failed to fetch subject data");
  }

  const edexcelSubjectLists = findBoardSubjects(data, "Edexcel");
  const cambridgeSubjectLists = findBoardSubjects(data, "Cambridge");

  return (
    <Subject
      edexcelSubjectLists={edexcelSubjectLists}
      cambridgeSubjectLists={cambridgeSubjectLists}
    />
  );
};

const Subjects = () => {
  return (
    <div className="bg-dashboardBd md:p-8 p-4">
      <div className="space-y-10 bg-dashboardBd">
        <div>
          <h1 className="text-bold text-[27px] font-bold">Hi, Easin</h1>
          <h1 className="text-bold text-xl">
            Start exploring your subjects for smarter, stress-free exam prep
          </h1>
        </div>

        <div className="flex sm:flex-row flex-col sm:gap-0 gap-4">
          <div className="xl:w-[23%] sm:w-[40%] w-full flex justify-between items-center">
            <div className="text-sm">
              <p>Chemistry, Chapterwise, Organic 2.2</p>
              <p className="text-textColor text-[13px]">
                Continue from where you left
              </p>
            </div>
            <button className="sm:block hidden">
              <RiArrowRightSLine size={45} />
            </button>
          </div>
          <div className="flex-1 flex lg:flex-row flex-col justify-end lg:items-center items-end gap-4">
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
        <Suspense fallback={<Skeleton />}>
          <SubjectWrapper />
        </Suspense>
      </div>
    </div>
  );
};

export default Subjects;
