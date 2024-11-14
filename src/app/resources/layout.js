import React from "react";
import ResourceLayout from "@/components/Resources/ResourceLayout";
import ResourceLayoutWrapper from "@/components/Resources/ResourceLayoutWrapper";

const layout = ({ children }) => {
  return (
    <div>
      <ResourceLayout />
      <div className="mt-4">
        <ResourceLayoutWrapper>{children}</ResourceLayoutWrapper>
      </div>
    </div>
  );
};

export default layout;
