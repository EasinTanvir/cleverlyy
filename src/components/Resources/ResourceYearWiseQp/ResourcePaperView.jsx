import React from "react";
import { IoScan } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { useContextProvider } from "../../../../hooks/useContextProvider";
import Skeleton from "@/components/Skeleton";

const ResourcePaperView = ({
  selectedPaper,
  setSelectedPaper,
  yearWiseQpLists,
}) => {
  const { selectedYear, selectedSession, setSelectedSession, selectedSubject } =
    useContextProvider();
  const router = useRouter();
  const data = yearWiseQpLists[Number(selectedYear)];

  const handleTabClick = (session) => {
    setSelectedPaper(null);
    setSelectedSession(session);
  };

  const onNavigateHandler = () => {
    if (!selectedSubject?.subject_id) {
      toast.error("SubjectId is require");
      return router.push(`/subjects`);
    }
    router.push(
      `/subjects/yearwise-question-solve/${selectedSubject?.subject_id}`
    );
  };

  if (!data) return <Skeleton />;

  return (
    <div>
      <div className=" flex flex-row min-h-80">
        <div className="flex flex-col">
          {Object.keys(data).map((session) => (
            <div
              className={`h-full overflow-hidden flex-center rounded-md rounded-tr-none rounded-br-none ${
                selectedSession === session ? "bg-yearBg" : ""
              }`}
              key={session}
            >
              <button
                onClick={() => handleTabClick(session)}
                className="transform rotate-90"
                title={session} // Tooltip shows the full session text
              >
                {/* Show first 10 characters with ellipsis if text is longer */}
                <p className="max-w-20 min-w-20 truncate">
                  {session.length > 10 ? `${session.slice(0, 10)}...` : session}
                </p>
              </button>
            </div>
          ))}
        </div>

        {/* Variants Display */}
        <div className="bg-yearBg rounded-2xl p-5 rounded-l-none rounded-br-none min-h-80  xl:max-w-[600px] xl:min-w-[600px] md:max-w-[400px] md:min-w-[400px] max-w-[350px] ">
          <div className="flex flex-col gap-7  ">
            {Object.entries(data[selectedSession]).map(([variant, papers]) => (
              <div
                key={variant}
                className="px-4 py-5 flex flex-row items-center gap-8  rounded-xl bg-white   w-full "
              >
                <h2 className="text-[18px] font-medium min-w-fit ">
                  {variant}
                </h2>

                <ul className="flex  items-center gap-4 overflow-x-auto overflow-y-hidden custom-scrollbar">
                  {papers.map((paper) => (
                    <li
                      onClick={() => setSelectedPaper(paper.paper_id)}
                      key={paper.paper_id}
                      className={`cursor-pointer min-w-fit px-4 py-1 rounded-lg ${
                        selectedPaper === paper.paper_id
                          ? "bg-selectExamBg  "
                          : ""
                      } `}
                    >
                      {paper.paper}

                      {/* <a
                      href={paper.file_url}
                      className="text-blue-500 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View
                    </a> */}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-yearBg ml-[80px] rounded-b-xl flex justify-between items-center xl:max-w-[600px] xl:min-w-[600px] md:max-w-[400px] md:min-w-[400px] max-w-[350px] p-5">
        <IoScan size={28} />
        <button onClick={onNavigateHandler}>
          <button className="bg-boxColor px-3 text-sm py-1.5 rounded-md">
            View All
          </button>
        </button>
        <MdOutlineKeyboardArrowDown size={28} className="text-iconColor" />
      </div>
    </div>
  );
};

export default ResourcePaperView;
