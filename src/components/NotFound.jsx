import { FiSearch } from "react-icons/fi";

export const NotFound = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <FiSearch className="text-6xl text-blue-500 mb-4" />
      <h1 className="text-2xl font-semibold text-gray-700 mb-2">{title}</h1>
      <p className="text-gray-500">
        Please try searching again with different keywords.
      </p>
    </div>
  );
};
