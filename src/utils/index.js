import {
  dashboardImg,
  englishLanguage,
  furtherMathematics,
  physics,
} from "@/constant";

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
    image: furtherMathematics,
    title: "Mathematics",
    subtitle: "Learn the language of numbers, shapes, and patterns",
  },
  {
    id: 2,
    image: englishLanguage,
    title: "English",
    subtitle: "Develop skills in reading, writing, and communication",
  },
  {
    id: 3,
    image: physics,
    title: "Physics",
    subtitle: "Explore the fundamental principles of nature",
  },
];

export const chapters = [
  {
    name: "Chapter 1: Introduction to Physics",
    progress: 75,
    topics: [
      {
        name: "Basic Concepts",
        isExpanded: false,
        progress: 60,
        subtopics: [
          { name: "What is Physics?", isSolved: true },
          { name: "Importance of Physics", isSolved: false },
        ],
      },
      {
        name: "Physical Quantities and Units",
        isExpanded: false,
        progress: 90,
        subtopics: [
          { name: "Measurement Units", isSolved: true },
          { name: "SI Units", isSolved: true },
        ],
      },
    ],
  },
  {
    name: "Chapter 2: Forces and Motion",
    progress: 50,
    topics: [
      {
        name: "Types of Forces",
        isExpanded: false,
        progress: 40,
        subtopics: [
          { name: "Contact Forces", isSolved: false },
          { name: "Non-contact Forces", isSolved: false },
        ],
      },
      {
        name: "Newton's Laws of Motion",
        isExpanded: false,
        progress: 60,
        subtopics: [
          { name: "First Law of Motion", isSolved: true },
          { name: "Second Law of Motion", isSolved: false },
          { name: "Third Law of Motion", isSolved: false },
        ],
      },
    ],
  },
];

export const barChartDummyData = [
  { revisionNotes: 12, chapterwiseQP: 8, yearwiseQP: 15 },
  { revisionNotes: 14, chapterwiseQP: 10, yearwiseQP: 20 },
  { revisionNotes: 9, chapterwiseQP: 6, yearwiseQP: 11 },
  { revisionNotes: 16, chapterwiseQP: 12, yearwiseQP: 18 },
  { revisionNotes: 10, chapterwiseQP: 7, yearwiseQP: 13 },
  { revisionNotes: 13, chapterwiseQP: 9, yearwiseQP: 17 },
];
