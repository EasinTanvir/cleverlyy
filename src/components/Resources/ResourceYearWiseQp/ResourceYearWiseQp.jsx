"use client";
import React, { useState } from "react";
import { ResourceYearSelector } from "./ResourceYearSelector";
import ResourcePaperView from "./ResourcePaperView";
import YearWiseAction from "./YearWiseAction";

const ResourceYearWiseQp = () => {
  const [selectedPaper, setSelectedPaper] = useState(null);
  return (
    <div>
      <div className="flex lg:flex-row flex-col-reverse gap-10  lg:justify-between justify-center items-center">
        <div className="flex md:flex-row flex-col gap-12">
          <div className="min-w-fit ms-8 ">
            <ResourceYearSelector />
          </div>
          <div className="xl:w-[700px]  w-[500px] ">
            <ResourcePaperView
              selectedPaper={selectedPaper}
              setSelectedPaper={setSelectedPaper}
            />
          </div>
        </div>

        {selectedPaper && (
          <div className="w-[200px]">
            <div className="flex justify-end">
              <div className="space-y-4">
                <div className="flex justify-center">
                  <button className="bg-examBg px-3 py-1.5 text-sm rounded-lg max-w-56">
                    Add to Your Subjects
                  </button>
                </div>
                <div>
                  <YearWiseAction />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourceYearWiseQp;
