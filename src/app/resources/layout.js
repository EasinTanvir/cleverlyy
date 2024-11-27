import React from "react";

import ResourceLayoutWrapper from "@/components/Resources/ResourceLayoutWrapper";
import LayoutDataFetch from "@/components/Resources/LayoutDataFetch";

const layout = async ({ children }) => {
  return (
    <div>
      <>
        <LayoutDataFetch />
      </>

      <div className="mt-4">
        <ResourceLayoutWrapper>{children}</ResourceLayoutWrapper>
      </div>
    </div>
  );
};

export default layout;
