import React, { useState } from "react";
import { ResourceYearSelector } from "./ResourceYearSelector";
import ResourcePaperView from "./ResourcePaperView";
import YearWiseAction from "./YearWiseAction";
import { NotFound } from "@/components/NotFound";

const ResourceYearWiseQp = ({ yearWiseQpLists, message }) => {
  const [selectedPaper, setSelectedPaper] = useState(null);

  return (
    <div>
      <div className="flex lg:flex-row flex-col-reverse gap-10  lg:justify-between justify-center items-center">
        {yearWiseQpLists && !message ? (
          <>
            <div className="flex md:flex-row flex-col gap-12">
              <div className="min-w-fit ms-8 ">
                <ResourceYearSelector yearWiseQpLists={yearWiseQpLists} />
              </div>
              <div className="xl:w-[700px]  w-[500px] ">
                <ResourcePaperView
                  selectedPaper={selectedPaper}
                  setSelectedPaper={setSelectedPaper}
                  yearWiseQpLists={yearWiseQpLists}
                />
              </div>
            </div>
          </>
        ) : (
          <div className="my-6 mx-auto">
            <NotFound
              title={message}
              desc="Please try with different subject"
            />
          </div>
        )}
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
