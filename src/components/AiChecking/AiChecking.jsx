import React from "react";
import ResourceLayout from "../Resources/ResourceLayout";
import AiPaperSelector from "./AiPaperSelector";
import AiLayoutWrapper from "./AiLayoutWrapper";

const AiChecking = ({ subjectLists }) => {
  return (
    <div>
      <ResourceLayout subjectLists={subjectLists} />
      <AiLayoutWrapper>
        <div className="md:p-8 p-4">
          <AiPaperSelector />
        </div>
      </AiLayoutWrapper>
    </div>
  );
};

export default AiChecking;
