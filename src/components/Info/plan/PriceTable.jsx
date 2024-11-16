import React from "react";

const PricingTable = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-4xl">
        {/* Header section */}
        <div className="overflow-x-auto mb-[30px]">
          <table className="w-full border-collapse text-center table-fixed">
            <colgroup>
              <col className="w-[40%]" />
              <col className="w-[20%]" />
              <col className="w-[20%]" />
              <col className="w-[20%]" />
            </colgroup>
            <thead>
              <tr>
                <th className="p-4 text-lg font-semibold border border-black">
                  <h2 className="text-3xl italic  text-center text-gray-700 mb-2">
                    <span className="font-extrabold">COMPARE</span>{" "}
                    <span className="text-purple-500">PLANS</span>
                  </h2>
                  <p className="text-center italic">
                    Find one that&apos;s right for you
                  </p>
                </th>
                <th className="p-4 text-lg font-semibold border border-black">
                  <span className="text-xl"> Basic</span>
                </th>
                <th className="p-4 text-lg  text-start font-semibold border border-black">
                  <span className="text-xl">Standard</span>

                  <button className="w-full px-4 py-1  bg-textColor text-white  rounded-xl mt-3">
                    Get Started
                  </button>
                </th>
                <th className="p-4 text-lg text-start font-semibold border border-black">
                  <span className="text-xl "> Premium</span>{" "}
                  <button className="w-full px-4 py-1  bg-textColor text-white  rounded-xl mt-3">
                    Get Started
                  </button>
                </th>
              </tr>
              <tr className="border-b border-black">
                <td className="p-4 font-semibold border border-black">
                  Monthly Plan
                </td>
                <td className="p-4 border border-black">Free</td>
                <td className="p-4 border border-black">1000/month</td>
                <td className="p-4 border border-black">1300/month</td>
              </tr>
              <tr className="border-b border-black">
                <td className="p-4 font-semibold text-purple-500 border border-black">
                  Annual Plan (70% off)
                </td>
                <td className="p-4 border border-black">—</td>
                <td className="p-4 border border-black">300/month</td>
                <td className="p-4 border border-black">400/month</td>
              </tr>
            </thead>
          </table>
        </div>

        {/* Body section */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-end table-fixed">
            <colgroup>
              <col className="w-[40%]" />
              <col className="w-[20%]" />
              <col className="w-[20%]" />
              <col className="w-[20%]" />
            </colgroup>
            <tbody>
              {[
                ["Yearwise Resources (PDF)", true, true, true],
                ["Specimen Papers", true, true, true],
                ["Grade Boundaries", true, true, true],
                ["Learning Hub", true, true, true],
                ["Forum Access", true, true, true],
                ["Scheduling", true, true, true],
                ["Revision Notes", false, true, true],
                ["Chapterwise Notes", false, true, true],
                ["Progress Tracking", false, true, true],
                ["Manual Checking", false, true, true],
                ["Digitally Solvable QP", false, false, true],
                ["AI-Powered Paper Checking", false, false, true],
                ["Note-Taking Capabilities", false, false, true],
              ].map((feature, index) => (
                <tr
                  key={feature[0]}
                  className={`border-b  border-black ${
                    index % 2 !== 0 ? "bg-white" : "bg-transparent"
                  }`}
                >
                  <td className="p-4 font-semibold border border-black">
                    {feature[0]}
                  </td>
                  <td className="p-4 border text-center border-black">
                    {feature[1] ? "✔️" : "—"}
                  </td>
                  <td className="p-4 border text-center border-black">
                    {feature[2] ? "✔️" : "—"}
                  </td>
                  <td className="p-4 border text-center border-black">
                    {feature[3] ? "✔️" : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
