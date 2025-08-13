import { ArayAllFilters } from "../../../Constans/AllFilters/AllFilters";

function AllFilters() {
  return (
    <div className="w-full h-[600px] flex flex-col items-center justify-center gap-20 overflow-y-scroll   bg-green-500 ">
      {ArayAllFilters.map((item) => (
        <div key={item.id} className="h-[200px] bg-blue-500 text-white">
          {item.name}
        </div>
      ))}
    </div>
  );
}

export default AllFilters;
