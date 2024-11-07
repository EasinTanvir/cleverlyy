import { dashboardImg } from "@/constant";

const subjects = [
  "Mathematics",
  "English",
  "Physics",
  "Chemistry",
  "Biology",
  "History",
  "Geography",
  "Science",
  "Economics",
  "Psychology",
];

export default subjects;

// meetingsData.js
export const meetingsData = [
  {
    timeRange: "10:30-12:00",
    title: "Team meeting",
    details: "Motion design",
    startTime: "12:00",
    endTime: "12:30",
  },
  {
    timeRange: "12:30-01:30",
    title: "Meeting with supervisor",
    details: "Job interview",
    startTime: "12:30",
    endTime: "01:30",
  },
  {
    timeRange: "2:00-3:00",
    title: "Project Discussion",
    details: "Development Updates",
    startTime: "2:00",
    endTime: "3:00",
  },
];

// notificationsData.js
export const notificationsData = [
  {
    title: "Upcoming event",
    description: "Product design meeting",
    timeDuration: "120 min",
    date: "Wed, 20 Apr",
    startTime: "11 AM",
    endTime: "11:45 AM",
  },
  {
    title: "Team sync",
    description: "Weekly project update",
    timeDuration: "60 min",
    date: "Thu, 21 Apr",
    startTime: "2 PM",
    endTime: "3 PM",
  },
];

export const bannerLists = [
  {
    id: 1,
    image: dashboardImg,
    title: "Mathematics",
    subtitle: "Experience the latest in home entertainment",
  },
  {
    id: 2,
    image: dashboardImg,
    title: "English",
    subtitle: "Experience the latest in home entertainment",
  },
  {
    id: 3,
    image: dashboardImg,
    title: "Physics",
    subtitle: "Experience the latest in home entertainment",
  },
];
