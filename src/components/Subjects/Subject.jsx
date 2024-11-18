import React from "react";

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
    <>
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
    </>
  );
};

export default Subject;
