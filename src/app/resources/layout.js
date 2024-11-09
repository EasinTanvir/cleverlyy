import ResourceLayout from "@/components/Resources/ResourceLayout";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <ResourceLayout />

      <div className="mt-4">{children}</div>
    </div>
  );
};

export default layout;
