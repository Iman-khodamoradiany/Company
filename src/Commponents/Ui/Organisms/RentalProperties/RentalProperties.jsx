import CreateMap from "../../Molecules/CreateMap/CreateMap";
import RentTitele from "../../Molecules/RentTitele/RentTitele";
import ListRentM from './../../Molecules/ListRentM/ListRentM';
import { ArayListRent } from "../../../Constans/ListUnderRent/ListRent";

function RentalProperties({CurrantPost,start,end}) {
  return (
    <div className="w-full flex items-center justify-center  mt-5 mb-10 ">
      <div className="w-[85%] flex items-center justify-between ">
        <div className=" w-[48%] h-[630px] flex items-center justify-end bg-blue-400 mt-10">
          <CreateMap click={false} items={ArayListRent}/>
        </div>
        <div className=" w-[50%] flex flex-col items-center justify-center ">
          <RentTitele />
          <ListRentM CurrantPost={CurrantPost} start={start} end={end} stay="w-full grid grid-cols-2 gap-[20px] mt-5"/>
        </div>
      </div>
    </div>
  );
}

export default RentalProperties;
