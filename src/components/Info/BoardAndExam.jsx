import React, { useEffect, useState } from "react";
import { FaUniversity } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";

import { useContextProvider } from "../../../hooks/useContextProvider";
import { NotFound } from "../NotFound";
import Skeleton from "../Skeleton";

const BoardAndExam = () => {
  const {
    selectedInfoExam,
    setSelectedInfoExam,
    infoData,
    setInfoData,
    selectedInfoBoard,
    setSelectedInfoBoard,
  } = useContextProvider();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBoardAndExam = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/subjects/all`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = await response.json();
      setInfoData(data);
    } catch (error) {
      setError(error?.message || "Internal Server Error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBoardAndExam();
  }, []);

  const cambridgeExam = infoData?.find(
    (item) => item?.board_name === "Cambridge"
  );
  const edexcelExam = infoData?.find((item) => item?.board_name === "Edexcel");

  if (error) {
    return (
      <div>
        <NotFound
          title="Internal Server Error"
          desc={error || "Failed to fetch data for revision notes"}
        />
      </div>
    );
  }

  const handleSelectExam = (exam) => {
    setSelectedInfoExam((prev) => {
      if (prev.some((selected) => selected.exam_id === exam.exam_id)) {
        return prev.filter((selected) => selected.exam_id !== exam.exam_id);
      } else {
        return [...prev, exam];
      }
    });
  };

  return (
    <div className="p-6 xl:w-[78%] md:w-[88%] w-full mx-auto">
      <div>
        <h2 className="text-black md:text-3xl text-xl font-bold uppercase">
          SELECT YOUR <span className="text-textColor">Exam & Board : </span>
        </h2>

        <hr className="border border-black w-full my-6" />
      </div>

      <div className="flex md:flex-row flex-col justify-around items-start gap-20 lg:w-[80%] w-full mx-auto pt-6">
        <div className="md:w-1/2 w-full">
          <div className="flex items-center md:justify-start justify-center gap-2">
            <FaUniversity size={30} />
            <div>
              <h2 className="font-bold text-2xl">Cambridge Assesment</h2>
              <span>International Education</span>
            </div>
          </div>
          {loading ? (
            <Skeleton />
          ) : (
            <>
              <div className="space-y-4 mt-5">
                {cambridgeExam?.exams?.map((exam) => (
                  <button
                    key={exam.exam_id}
                    onClick={() => {
                      handleSelectExam(exam);
                      setSelectedInfoBoard([
                        ...selectedInfoBoard,
                        cambridgeExam?.board_name,
                      ]);
                    }}
                    className={`flex justify-between border-[3px] bg-white items-center w-full px-4 py-5 rounded-2xl ${
                      selectedInfoExam?.some(
                        (selected) => selected.exam_id === exam.exam_id
                      )
                        ? "border-green-600"
                        : "border-transparent"
                    }`}
                  >
                    {exam.exam_name}

                    <span
                      className={`w-6 h-6 rounded-full ${
                        selectedInfoExam?.some(
                          (selected) => selected.exam_id === exam.exam_id
                        )
                          ? "bg-green-600 text-white"
                          : "bg-gray-200 text-white"
                      } flex-center`}
                    >
                      <FiCheck className="p-0.5" size={24} />
                    </span>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="md:w-1/2 w-full">
          <h2 className="font-bold mb-4 text-2xl text-center">
            Pearson | Edexcel
          </h2>
          {loading ? (
            <Skeleton />
          ) : (
            <>
              <div className="space-y-4 mt-11">
                {edexcelExam?.exams?.map((exam) => (
                  <button
                    key={exam.exam_id}
                    onClick={() => {
                      handleSelectExam(exam);
                      setSelectedInfoBoard([
                        ...selectedInfoBoard,
                        edexcelExam?.board_name,
                      ]);
                    }}
                    className={`flex justify-between border-[3px] bg-white items-center w-full px-4 py-5 rounded-2xl ${
                      selectedInfoExam?.some(
                        (selected) => selected.exam_id === exam.exam_id
                      )
                        ? "border-green-600"
                        : "border-transparent"
                    }`}
                  >
                    {exam.exam_name}

                    <span
                      className={`w-6 h-6 rounded-full ${
                        selectedInfoExam?.some(
                          (selected) => selected.exam_id === exam.exam_id
                        )
                          ? "bg-green-600 text-white"
                          : "bg-gray-200 text-white"
                      } flex-center`}
                    >
                      <FiCheck className="p-0.5" size={24} />
                    </span>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BoardAndExam;
