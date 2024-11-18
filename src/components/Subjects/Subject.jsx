import React from "react";
import { FaPlus } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import { TfiMenuAlt } from "react-icons/tfi";

import Sorting from "./Sorting";
import InternationalGcse from "./Subjectcards/InternationalGcse/InternationalGcse";
import InterNationalALevel from "./Subjectcards/InterNationalALevel/InterNationalALevel";

const findExamByName = (exams, names) =>
  exams?.find((exam) => names.includes(exam.exam_name));

const Subject = ({ edexcelSubjectLists, cambridgeSubjectLists }) => {
  const edexcelGcseOLevelExamLists = findExamByName(
    edexcelSubjectLists?.exams,
    ["IGCSE", "O Level"]
  );
  const edexcelInternationalALevelExamLists = findExamByName(
    edexcelSubjectLists?.exams,
    ["International A Levels"]
  );
  const edexcelALevelExamListsExamLists = findExamByName(
    edexcelSubjectLists?.exams,
    ["AD", "A Level"]
  );

  const cambridgeGcseOLevelExamLists = findExamByName(
    cambridgeSubjectLists?.exams,
    ["IGCSE", "O Level"]
  );
  const cambridgeInternationalALevelExamLists = findExamByName(
    cambridgeSubjectLists?.exams,
    ["International A Levels"]
  );
  const cambridgeALevelExamListsExamLists = findExamByName(
    cambridgeSubjectLists?.exams,
    ["AD", "A Level"]
  );

  return (
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

      <React.Fragment>
        {edexcelGcseOLevelExamLists && (
          <InternationalGcse
            subjectLists={edexcelGcseOLevelExamLists}
            board_name={edexcelSubjectLists.board_name}
          />
        )}
        {cambridgeGcseOLevelExamLists && (
          <InternationalGcse
            subjectLists={cambridgeGcseOLevelExamLists}
            board_name={cambridgeSubjectLists.board_name}
          />
        )}
        {edexcelInternationalALevelExamLists && (
          <InterNationalALevel
            subjectLists={edexcelInternationalALevelExamLists}
            board_name={edexcelSubjectLists.board_name}
            title="International A-Level"
          />
        )}
        {cambridgeInternationalALevelExamLists && (
          <InterNationalALevel
            subjectLists={cambridgeInternationalALevelExamLists}
            board_name={cambridgeSubjectLists.board_name}
            title="A-Level"
          />
        )}
        {edexcelALevelExamListsExamLists && (
          <InterNationalALevel
            subjectLists={edexcelALevelExamListsExamLists}
            board_name={edexcelSubjectLists.board_name}
            title="International A-Level"
          />
        )}
        {cambridgeALevelExamListsExamLists && (
          <InterNationalALevel
            subjectLists={cambridgeALevelExamListsExamLists}
            board_name={cambridgeSubjectLists.board_name}
            title="A-Level"
          />
        )}
      </React.Fragment>
    </div>
  );
};

export default Subject;
