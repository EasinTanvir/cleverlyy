import ResourceLayout from "@/components/Resources/ResourceLayout";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <ResourceLayout />

      <div>{children}</div>
    </div>
  );
};

export default layout;
