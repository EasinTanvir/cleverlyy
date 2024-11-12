import React from "react";
import { FaUserCircle, FaRobot } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import { HiOutlinePencil } from "react-icons/hi";

// Dummy messages array
const messages = [
  {
    sender: "user",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    sender: "ai",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

const ResponseDisplay = () => {
  return (
    <div className="pt-10  flex flex-col items-center ">
      {/* Messages Display */}
      <div className="flex flex-col lg:flex-row gap-10 w-full ">
        {/* User Response Box */}
        <div className="flex-1 ">
          <div className="flex justify-between items-center mb-5">
            <h2 className="">Your Solved Paper</h2>
            <span className="text-textColor  italic  underline">
              Mark Schem
            </span>
          </div>

          <div className="space-y-4 border border-borderColor2  min-h-[420px] max-h-[420px] overflow-auto p-4 rounded-xl">
            {messages
              .filter((msg) => msg.sender === "user")
              .map((msg, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <FaUserCircle className="text-purple-500 text-3xl" />
                  <div className=" rounded-lg  text-sm max-w-[90%]">
                    {msg.text}
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* AI Response Box */}
        <div className="flex-1   ">
          <div className="flex justify-between items-center mb-3">
            <h2 className="">AI Response</h2>
            <div className="flex items-center gap-4">
              <BsDownload size={20} />
              <div className="bg-textColor4 px-2.5 py-1 rounded-md flex items-center gap-3">
                <span>Marks : 77/80</span>
                <HiOutlinePencil />
              </div>
            </div>
          </div>

          <div className="space-y-4 border border-blue-300 min-h-[420px] max-h-[420px] overflow-auto p-4 rounded-xl">
            {messages
              .filter((msg) => msg.sender === "ai")
              .map((msg, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <FaRobot className="text-blue-500 text-3xl" />
                  <div className=" rounded-lg  text-sm max-w-[90%] pt-2">
                    {msg.text}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponseDisplay;
