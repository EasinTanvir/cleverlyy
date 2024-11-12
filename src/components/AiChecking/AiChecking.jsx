import React from "react";
import ResourceLayout from "../Resources/ResourceLayout";
import AiPaperSelector from "./AiPaperSelector";
import AiLayoutWrapper from "./AiLayoutWrapper";

const AiChecking = () => {
  return (
    <div>
      <ResourceLayout />
      <AiLayoutWrapper>
        <div>
          <AiPaperSelector />
        </div>
      </AiLayoutWrapper>
    </div>
  );
};

export default AiChecking;
