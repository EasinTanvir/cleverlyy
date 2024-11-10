import React from "react";
import { FaFileAlt, FaArrowRight, FaBook } from "react-icons/fa";

const OtherResourceCard = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      <div className="bg-cardColor p-6 rounded-lg w-80 ">
        <div className="flex items-center space-x-5  justify-center">
          <FaFileAlt size={20} className="text-purple-500" />
          <h2 className="text-[16px]">Specimen Paper</h2>
        </div>
        <div className="space-y-3.5 pt-7">
          <button className="bg-white p-2 w-full rounded-md text-left">
            Paper 1
          </button>
          <button className="bg-white p-2 w-full rounded-md text-left">
            Paper 2
          </button>
          <button className="bg-white p-2 w-full rounded-md text-left">
            Paper 3
          </button>
          <button className="bg-white p-2 w-full rounded-md text-left">
            Paper 4
          </button>
          <button className="bg-white p-2 w-full rounded-md text-left">
            Examiner’s Report
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 w-96">
        <div className="bg-cardColor p-6 rounded-lg  flex-1">
          <div className="flex items-center space-x-5  justify-center">
            <FaArrowRight size={20} className="text-purple-500" />
            <h2 className="text-[16px]">Grade Boundary</h2>
          </div>
          <div className="flex items-end justify-between pt-7">
            <div className="space-y-2 w-[80%]">
              <select className="w-full p-2 rounded-md bg-white border">
                <option>Select year</option>
              </select>
              <select className="w-full p-2 rounded-md bg-white border">
                <option>Select season</option>
              </select>
            </div>
            <div>
              <button className="flex items-center space-x-1 text-purple-600 font-semibold">
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* Learning Guides Section */}
        <div className="bg-cardColor p-6 rounded-lg flex-1 flex  flex-col justify-between">
          <button className="flex items-center space-x-1 text-purple-600 font-semibold">
            <FaArrowRight />
          </button>
          <div>
            <div className="w-full flex justify-between">
              <h2 className="text-[16px]">Learning Guides</h2>
              <button className="flex items-center space-x-1 text-purple-600 font-semibold">
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-cardColor p-6 rounded-lg w-[340px] ">
        <div className="flex items-center space-x-5  justify-center">
          <FaBook size={22} className="text-purple-500" />
          <h2 className="text-[16px]">Recommended Books</h2>
        </div>
        <ul className="list-disc pl-6 text-sm space-y-4 pt-7">
          <li>Hodder Cambridge O Level Chemistry Student`&apos;`s Book</li>
          <li>
            Oxford Cambridge IGCSE® & O Level Complete Chemistry: Student Book
            (4th Edition)
          </li>
          <li>
            Cambridge IGCSE (R) & O Level Chemistry: Exam Success Practical
            Workbook
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OtherResourceCard;
