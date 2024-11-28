import {
  accounting,
  bangla,
  biology,
  business,
  chemistry,
  commerce,
  computerScience,
  economics,
  englishLanguage,
  furtherMathematics,
  humanBiology,
  mathematics,
  physics,
} from "@/constant";

export const subjectLists = [
  {
    title: "Chemistry",
    color: "#f9fde7",
    image: chemistry,
  },
  {
    title: "Physics",
    color: "#eaf4ff",
    image: physics,
  },
  {
    title: "Economics",
    color: "#fffbeb",
    image: economics,
  },
  {
    title: "Mathematics B",
    color: "#f8e8e8",
    image: mathematics,
  },
  {
    title: "Further Pure Mathematics",
    color: "#e5f1ee",
    image: furtherMathematics,
  },
  {
    title: "Accounting",
    color: "#ffeffd",
    image: accounting,
  },
  {
    title: "English Labguage B",
    color: "#f0f4ff",
    image: englishLanguage,
  },
  {
    title: "Mathematics A",
    color: "#ffefdf",
    image: mathematics,
  },
  {
    title: "Mathematics",
    color: "#ffefdf",
    image: mathematics,
  },
  {
    title: "Additional Mathematics",
    color: "#ffefdf",
    image: mathematics,
  },
  {
    title: "Computer Science",
    color: "#e5f2ff",
    image: computerScience,
  },
  {
    title: "Commerce",
    color: "#effff9",
    image: commerce,
  },
  {
    title: "Business",
    color: "#e8fbff",
    image: business,
  },
  {
    title: "Business Studies",
    color: "#e8fbff",
    image: business,
  },
  {
    title: "Human Biology",
    color: "#ebffec",
    image: humanBiology,
  },
  {
    title: "Computer Science",
    color: "#e5f2ff",
    image: computerScience,
  },
  {
    title: "Biology",
    color: "#f1f0ff",
    image: biology,
  },
  {
    title: "Bengali",
    color: "#efefef",
    image: bangla,
  },
];

// export const subjectLists = [
//   {
//     title: "Chemistry",
//     color: "#f9fde7",
//     image: chemistry,
//   },
//   {
//     title: "Physics",
//     color: "#eaf4ff",
//     image: physics,
//   },
//   {
//     title: "Economics",
//     color: "#fffbeb",
//     image: economics,
//   },
//   {
//     title: "Mathematics",
//     color: "#f8e8e8",
//     image: mathematics,
//   },
//   {
//     title: "Further Pure Mathematics",
//     color: "#e5f1ee",
//     image: "",
//   },
//   {
//     title: "Accounting",
//     color: "#ffeffd",
//     image: "",
//   },
//   {
//     title: "English Language B",
//     color: "#f0f4ff",
//     image: "",
//   },
//   {
//     title: "Mathematics A",
//     color: "#ffefdf",
//     image: "",
//   },
//   {
//     title: "Computer Science",
//     color: "#e5f2ff",
//     image: "",
//   },
//   {
//     title: "Commerce",
//     color: "#effff9",
//     image: "",
//   },
//   {
//     title: "Business",
//     color: "#e8fbff",
//     image: "",
//   },
//   {
//     title: "Human Biology",
//     color: "#ebffec",
//     image: "",
//   },
//   {
//     title: "Computer Science",
//     color: "#e5f2ff",
//     image: "",
//   },
//   {
//     title: "Biology",
//     color: "#f1foff",
//     image: "",
//   },
//   {
//     title: "Bangla",
//     color: "#efefef",
//     image: "",
//   },
// ];

export const mapSubjectDetails = (subjects) => {
  if (!subjects || subjects?.length === 0) return;
  return subjects.map((subject) => {
    const matchedSubject = subjectLists.find(
      (item) => item.title.toLowerCase() === subject.subject_name.toLowerCase()
    );
    return {
      ...subject,
      color: matchedSubject?.color || "#ffffff", // Default color if not matched
      image: matchedSubject?.image || chemistry, // Default image if not matched
    };
  });
};

const dummyData = {
  2014: {
    "Jan/Feb": {
      "Variant-1": [
        {
          paper_id: 1701,
          paper: "Paper 1",
          type: "Markscheme",
          name: "9701_w14_ms_11.pdf",
          file_url: "https://your-s3-url/path/to/paper1.pdf",
        },
        {
          paper_id: 1702,
          paper: "Paper 2",
          type: "Question Paper",
          name: "9701_w14_qp_12.pdf",
          file_url: "https://your-s3-url/path/to/paper2.pdf",
        },
      ],
      "Variant-2": [
        {
          paper_id: 1703,
          paper: "Paper 55",
          type: "Markscheme",
          name: "9701_w14_ms_21.pdf",
          file_url: "https://your-s3-url/path/to/paper3.pdf",
        },
        {
          paper_id: 1704,
          paper: "Paper 2",
          type: "Question Paper",
          name: "9701_w14_qp_22.pdf",
          file_url: "https://your-s3-url/path/to/paper4.pdf",
        },
      ],
    },
    "May/June": {
      "Variant-1": [
        {
          paper_id: 1707,
          paper: "Paper 1",
          type: "Markscheme",
          name: "9701_s14_ms_11.pdf",
          file_url: "https://your-s3-url/path/to/paper5.pdf",
        },
        {
          paper_id: 1710,
          paper: "Paper 2",
          type: "Question Paper",
          name: "9701_s14_qp_12.pdf",
          file_url: "https://your-s3-url/path/to/paper6.pdf",
        },
      ],
    },
    "Oct/Nov": {
      "Variant-1": [
        {
          paper_id: 1721,
          paper: "Paper 1",
          type: "Markscheme",
          name: "9701_f14_ms_11.pdf",
          file_url: "https://your-s3-url/path/to/paper9.pdf",
        },
        {
          paper_id: 1722,
          paper: "Paper 2",
          type: "Question Paper",
          name: "9701_f14_qp_12.pdf",
          file_url: "https://your-s3-url/path/to/paper10.pdf",
        },
      ],
      "Variant-2": [
        {
          paper_id: 1723,
          paper: "Paper 1",
          type: "Markscheme",
          name: "9701_f14_ms_21.pdf",
          file_url: "https://your-s3-url/path/to/paper11.pdf",
        },
        {
          paper_id: 1724,
          paper: "Paper 2",
          type: "Question Paper",
          name: "9701_f14_qp_22.pdf",
          file_url: "https://your-s3-url/path/to/paper12.pdf",
        },
      ],
      "Variant-3": [
        {
          paper_id: 1733,
          paper: "Paper 1",
          type: "Markscheme",
          name: "9701_f14_ms_21.pdf",
          file_url: "https://your-s3-url/path/to/paper11.pdf",
        },
        {
          paper_id: 1734,
          paper: "Paper 2",
          type: "Question Paper",
          name: "9701_f14_qp_22.pdf",
          file_url: "https://your-s3-url/path/to/paper12.pdf",
        },
      ],
    },
  },
  2015: {
    // Add similar data structure for each year/session/variant
  },
  // Add more years if needed
};
