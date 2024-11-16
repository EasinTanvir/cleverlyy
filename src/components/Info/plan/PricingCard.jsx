import React from "react";
import { FaCrown, FaGem, FaFire } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { IoTabletLandscapeSharp } from "react-icons/io5";

const PricingCard = () => {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-1  mt-16 max-w-fit mx-auto">
      {/* Basic Plan */}
      <div className="w-[320px] bg-white rounded-xl shadow-md p-6 h-fit">
        <h3 className="text-lg font-semibold text-textColor bg-custom-pastel-gradient w-fit px-4 py-1 rounded-md mb-5">
          Basic
        </h3>
        <p className="text-sm mb-4 text-gray-600 italic">
          Upgrade to <span className="font-medium underline">Standard</span> or{" "}
          <span className="font-medium underline">Premium</span> plans for a
          whole new whole
        </p>
        <hr className="border-[1px] mb-5" />
        <ul className="space-y-4">
          <li className="flex items-center gap-5">
            <div className="min-h-[21px] min-w-[21px] rounded-full flex justify-center items-center bg-black text-white">
              <IoMdCheckmark size={15} />
            </div>
            <span>Yearwise resources (PDF).</span>
          </li>
          <li className="flex items-center gap-5">
            <div className="min-h-[21px] min-w-[21px] rounded-full flex justify-center items-center bg-black text-white">
              <IoMdCheckmark size={15} />
            </div>
            <span>Specimen papers (PDF format).</span>
          </li>
          <li className="flex items-center gap-5">
            <div className="min-h-[21px] min-w-[21px] rounded-full flex justify-center items-center bg-black text-white">
              <IoMdCheckmark size={15} />
            </div>
            <span>Grade boundaries.</span>
          </li>
          <li className="flex items-center gap-5">
            <div className="min-h-[21px] min-w-[21px] rounded-full flex justify-center items-center bg-black text-white">
              <IoMdCheckmark size={15} />
            </div>
            <span>Learning Hub.</span>
          </li>
          <li className="flex items-center gap-5">
            <div className="min-h-[21px] min-w-[21px] rounded-full flex justify-center items-center bg-black text-white">
              <IoMdCheckmark size={15} />
            </div>
            <span>Forum.</span>
          </li>
          <li className="flex items-center gap-5">
            <div className="min-h-[21px] min-w-[21px] rounded-full flex justify-center items-center bg-black text-white">
              <IoMdCheckmark size={15} />
            </div>
            <span>Scheduling.</span>
          </li>
        </ul>

        <hr className="border-[1px] my-6" />
        <button
          className="w-full px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg border-4 border-borderColor2"
          disabled
        >
          Currently on this plan
        </button>
      </div>

      {/* Standard Plan */}
      <div className="w-[330px] bg-white rounded-xl shadow-md p-6 relative h-fit">
        <div className="absolute -top-3 right-4 flex items-center bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
          <FaFire className="mr-1" /> Most Popular
        </div>
        <h3 className="text-lg font-semibold text-textColor bg-custom-pastel-gradient w-fit px-4 py-1 rounded-md   flex items-center">
          Standard <FaCrown className="ml-2 text-yellow-500" />
        </h3>
        <p className="text-xl  text-gray-800   mt-8">
          BDT
          <span className="text-[40px]  ps-1"> 300/month</span>
        </p>
        <div className="px-3 text-sm mt-6">
          <p className="text-xs text-gray-500  italic">Billed Annually</p>
          <div className="mt-3  mb-2 flex">
            <button className="bg-textColor text-white text-xs w-full py-1.5 rounded-md">
              Anual <span className="font-semibold">(80% off)</span>
            </button>
            <button className="bg-gray-200 text-xs w-full py-1.5 px-4 rounded-md font-semibold">
              Monthly
            </button>
          </div>
        </div>
        <hr className="border-[1px] mb-7 mt-4" />
        <ul className="space-y-5">
          <li className="flex items-center gap-5">
            <div className="min-h-[21px] min-w-[21px] rounded-full flex justify-center items-center bg-black text-white">
              <IoMdCheckmark size={15} />
            </div>
            <span className="font-bold">
              Includes everything in the Basic Plan
            </span>
          </li>
          <li className="flex items-center gap-5">
            <div className="min-h-[21px] min-w-[21px] rounded-full flex justify-center items-center bg-black text-white">
              <IoMdCheckmark size={15} />
            </div>
            <span>Revision Notes</span>
          </li>
          <li className="flex items-center gap-5">
            <div className="min-h-[21px] min-w-[21px] rounded-full flex justify-center items-center bg-black text-white">
              <IoMdCheckmark size={15} />
            </div>
            <span>Chapterwise Notes</span>
          </li>
          <li className="flex items-center gap-5">
            <div className="min-h-[21px] min-w-[21px] rounded-full flex justify-center items-center bg-black text-white">
              <IoMdCheckmark size={15} />
            </div>
            <span>Progress tracking</span>
          </li>
          <li className="flex items-center gap-5">
            <div className="min-h-[21px] min-w-[21px] rounded-full flex justify-center items-center bg-black text-white">
              <IoMdCheckmark size={15} />
            </div>
            <span>Manual checking capabilities</span>
          </li>
        </ul>

        <hr className="border-[1px] my-6" />
        <button className="w-full px-4 py-2 bg-purple-600 text-white font-semibold rounded-xl ">
          Get Started
        </button>
      </div>

      {/* Premium Plan */}

      <div className="w-[365px] p-4 bg-white rounded-xl h-[585px] lg:-mt-20">
        <div className="flex items-start gap-5">
          <IoTabletLandscapeSharp size={70} />
          <h3 className="text-sm">
            Recommended for <br />
            <span className="font-semibold underline">iPad/Tab</span> users
          </h3>
        </div>
        <div className="w-full bg-custom-pastel-gradient rounded-xl shadow-md p-6 relative ">
          <h3 className="text-lg font-semibold text-textColor bg-custom-pastel-gradient w-fit px-4 py-1 rounded-md  flex items-center">
            Premium <FaGem className="ml-2 text-pink-500" />
          </h3>
          <p className="text-xl  text-gray-800   mt-8">
            BDT
            <span className="text-[40px]  ps-1"> 400/month</span>
          </p>
          <div className="px-3 text-sm mt-6">
            <p className="text-xs text-gray-500  italic">Billed Annually</p>
            <div className="mt-3  mb-2 flex">
              <button className="bg-textColor text-white text-xs w-full py-1.5 rounded-md">
                Anual <span className="font-semibold">(80% off)</span>
              </button>
              <button className="bg-gray-200 text-xs w-full py-1.5 px-4 rounded-md font-semibold">
                Monthly
              </button>
            </div>
          </div>
          <hr className="border-[1px] mb-7 mt-4" />
          <ul className="space-y-4 mb-12">
            <li className="flex items-center gap-5">
              <div className="min-h-[21px] min-w-[21px] rounded-full flex justify-center items-center bg-black text-white">
                <IoMdCheckmark size={15} />
              </div>
              <span>Includes everything in the Mid-Tier Plan</span>
            </li>
            <li className="flex items-center gap-5">
              <div className="min-h-[21px] min-w-[21px] rounded-full flex justify-center items-center bg-black text-white">
                <IoMdCheckmark size={15} />
              </div>
              <span>
                Question papers in digitally solvable format (Exam mode)
              </span>
            </li>
            <li className="flex items-center gap-5">
              <div className="min-h-[21px] min-w-[21px] rounded-full flex justify-center items-center bg-black text-white">
                <IoMdCheckmark size={15} />
              </div>
              <span>AI-powered paper checking</span>
            </li>
            <li className="flex items-center gap-5">
              <div className="min-h-[21px] min-w-[21px] rounded-full flex justify-center items-center bg-black text-white">
                <IoMdCheckmark size={15} />
              </div>
              <span>Note-taking capabilities</span>
            </li>
          </ul>

          <hr className="border-[1px] my-6" />
          <button className="w-full px-4 py-2 bg-purple-600 text-white font-semibold rounded-xl ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
