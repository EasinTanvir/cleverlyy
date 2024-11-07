// NotificationItem.js
import React from "react";
import { RiCalendarLine, RiTimeLine, RiMore2Fill } from "react-icons/ri";

const NotificationItem = ({ notification }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-4 mt-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-blacktitle">
          {notification.title}
        </h3>
        <RiMore2Fill size={20} className="text-textColor2" />
      </div>
      <p className="text-sm text-textColor2">
        {notification.description} | Time: {notification.timeDuration}
      </p>
      <div className="flex items-center space-x-4 mt-3 text-black font-medium  text-sm">
        <div className="flex items-center space-x-1">
          <RiCalendarLine />
          <span>{notification.date}</span>
        </div>
        <div className="flex  items-center space-x-1">
          <RiTimeLine />
          <span>
            {notification.startTime} - {notification.endTime}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;
