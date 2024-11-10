import { FaBook, FaStickyNote, FaUsers } from "react-icons/fa";

const Action = () => {
  return (
    <div className="p-4 w-52 bg-blankCircle rounded-lg space-y-5  md:absolute right-0 top-0 bottom-0 my-auto h-fit z-40">
      <h3 className="text-center">Actions</h3>

      <button className="flex items-center text-xs justify-between gap-2 w-full px-3 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-100">
        <FaBook size={15} className="" />
        <span className="">Add to Your Subjects</span>
      </button>

      <button className="flex items-center text-xs justify-between gap-2 w-full px-3 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-100">
        <FaStickyNote size={15} />
        <span>Create Notebook</span>
      </button>

      <button className="flex items-center text-xs justify-between gap-2 w-full px-3 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-100">
        <FaUsers size={15} />
        <span>See thread in Forum</span>
      </button>
    </div>
  );
};

export default Action;
