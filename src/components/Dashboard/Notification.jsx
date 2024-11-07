// Notifications.js
import React from "react";

import { notificationsData } from "@/utils";
import NotificationItem from "./NotificationItem";

const Notifications = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="title">Notifications</h2>
        <button className="text-sm text-gray-500 hover:text-gray-700">
          Clear
        </button>
      </div>
      {notificationsData.map((notification, index) => (
        <NotificationItem key={index} notification={notification} />
      ))}
    </div>
  );
};

export default Notifications;
