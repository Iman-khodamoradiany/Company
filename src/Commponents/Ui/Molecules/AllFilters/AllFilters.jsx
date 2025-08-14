import AllFiltersMap from "../AllFiltersMap/AllFiltersMap";

export default function AllFilters() {
  return (
    <div className="w-full h-[78%] bg-[#F9F9F9] flex justify-center ">
      <div className="w-full flex flex-col min-h-0 py-4">
        <div className="flex-1 min-h-0 overflow-y-auto scrollbar-custom">
          <AllFiltersMap />
        </div>
      </div>
    </div>
  );
}
