// MeetingItem.js
import React from "react";
import { RiTeamLine, RiSuitcaseLine } from "react-icons/ri";

const MeetingItem = ({ meeting }) => {
  return (
    <div className=" ">
      <div className="flex items-center">
        <h3 className="text-textColor2 text-sm">{meeting.timeRange}</h3>
        <div className="flex-grow border-t border-dashed border-gray-300 ml-2"></div>
      </div>
      <div className="flex items-center space-x-2 py-2 mt-4">
        {meeting.title.includes("Team") ? (
          <RiTeamLine size={20} className="text-textColor2" />
        ) : (
          <RiSuitcaseLine size={20} className="text-textColor2" />
        )}
        <div className="flex-grow">
          <h3 className="title">{meeting.title}</h3>
          <div className="text-textColor2 text-sm flex items-center space-x-1">
            <span>
              {meeting.startTime} - {meeting.endTime}
            </span>
            <span className="w-2 h-2 bg-yellow-500 rounded-full inline-block"></span>
            <span>{meeting.details}</span>
          </div>
        </div>

        <div className="text-textColor2 cursor-pointer">
          <span className="text-2xl">⋮</span>
        </div>
      </div>
    </div>
  );
};

export default MeetingItem;
