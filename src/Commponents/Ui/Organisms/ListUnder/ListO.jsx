import ListUnder from "../../Molecules/ListUder/ListUnder";
import Text from "./../../Atom/Text/Text";
function ListO() {
  return (
  
      <div className="w-full flex flex-col items-center justify-center mt-10 mx-auto ">
        <div className="w-full text-end py-[40px] ">
          <Text style=" font-bold text-[2vw] text-[#353535]  ">
            سقفینو چطور به خانه‌دار شدن شما کمک می‌کند
          </Text>
        </div>
        <ListUnder />
      </div>
    
  );
}

export default ListO;
