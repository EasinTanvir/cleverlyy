import React from "react";
import AiPaperSelector from "./AiPaperSelector";
import AiLayoutWrapper from "./AiLayoutWrapper";
import AiPageLayout from "./AiPageLayout";

const AiChecking = ({ subjectLists }) => {
  return (
    <div>
      <AiPageLayout subjectLists={subjectLists} />
      <AiLayoutWrapper>
        <div className="md:p-8 p-4">
          <AiPaperSelector />
        </div>
      </AiLayoutWrapper>
    </div>
  );
};

export default AiChecking;
