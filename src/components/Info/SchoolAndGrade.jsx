import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useContextProvider } from "../../../hooks/useContextProvider";
import { NotFound } from "../NotFound";

const schools = [
  { id: 1, name: "Mastermind English Medium School" },
  { id: 2, name: "Scholastica" },
];

const grades = [7, 8, 9, 10, 11, 12];

const SchoolAndGrade = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { selectedGrade, setSelectedGrade, selectedSchool, setSelectedSchool } =
    useContextProvider();

  const handleGradeSelect = (grade) => {
    setSelectedGrade(grade);
  };

  const filteredSchools = schools.filter((school) =>
    school.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 flex flex-col items-center xl:w-[78%] md:w-[88%] w-full  mx-auto">
      <div className="w-full  ">
        <h2 className="text-black text-center md:text-3xl text-xl  font-bold mb-4 uppercase">
          SELECT YOUR{" "}
          <span className="text-textColor">School & Class/Grade</span>
        </h2>

        <hr className="border border-black  mt-7 w-[85%] mx-auto " />
      </div>

      {/* Grade Selector */}
      <div className="flex lg:flex-wrap flex-wrap justify-center items-center gap-4 mt-9">
        <h3 className=" text-xl">Class/Grade:</h3>
        <div className="flex flex-wrap justify-center  gap-4 ">
          {grades.map((grade) => (
            <button
              key={grade}
              onClick={() => handleGradeSelect(grade)}
              className={`px-10 py-2.5 text-xl border-[3px] bg-white rounded-xl text-textColor ${
                selectedGrade === grade
                  ? " border-green-600 "
                  : "border-transparent"
              }`}
            >
              {grade}
            </button>
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex flex-wrap justify-between items-center mt-16 w-full  ">
        <h1 className="text-xl">Dhaka</h1>
        <div className="relative flex items-center gap-3 mb-4 w-96">
          <input
            type="text"
            className="w-full px-10 py-1.5 text-black rounded-[14px]  bg-transparent border border-black"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FiSearch className="absolute left-3 top-2.5 text-black" size={20} />
          <button className="ml-4 bg-white  px-6 py-2 rounded-xl">
            Private
          </button>
        </div>
      </div>

      <hr className="border border-black w-full my-2" />

      {/* School List */}

      <div className="flex flex-wrap gap-5 mt-5 w-full">
        {filteredSchools.length > 0 &&
          filteredSchools.map((school) => (
            <div
              onClick={() => setSelectedSchool(school)}
              key={school.id}
              className={` bg-white cursor-pointer px-6 py-3.5 rounded-xl text-center border-[3px] min-w-fit  ${
                selectedSchool?.name === school.name
                  ? " border-green-600 "
                  : "border-transparent"
              } `}
            >
              {school.name}
            </div>
          ))}
      </div>

      {filteredSchools.length === 0 && (
        <div className=" mt-1">
          <NotFound title="No School Found" />
        </div>
      )}
    </div>
  );
};

export default SchoolAndGrade;
