const YearWiseAction = () => {
  return (
    <div className="p-4  bg-blankCircle rounded-lg space-y-5  h-fit ">
      <h3 className="text-center">Actions</h3>

      <button className="flex-center text-xs gap-2 w-full px-3 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-100">
        <span className="">View Paper</span>
      </button>
      <button className="flex-center text-xs gap-2 w-full px-3 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-100">
        <span className="">View markscheme</span>
      </button>
      <button className="flex-center text-xs gap-2 w-full px-3 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-100">
        <span className="">View Both</span>
      </button>
      <button className="flex-center text-xs gap-2 w-full px-3 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-100">
        <span className="">View Grade Boundary</span>
      </button>

      <button className="flex-center text-xs gap-2 w-full px-3 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-100">
        <span className="">Solve</span>
      </button>
    </div>
  );
};

export default YearWiseAction;
