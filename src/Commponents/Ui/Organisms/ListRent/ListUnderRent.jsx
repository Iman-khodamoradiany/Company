import Button from "../../Atom/Button/Button";
import Text from "./../../Atom/Text/Text";
import ListRentM from "../../Molecules/ListRentM/ListRentM";

function ListUnderRent() {
  return (
    <div className="w-full  flex items-center justify-center my-[15px] ">
      <div className="w-full">
        <div className="w-full flex items-center justify-between py-[30px] ">
          <Button className="text-[1.2vw] text-[#717171] " >مشاهده همه</Button>
          <Text style="text-[2.5vw] text-[#353535]  " >جدیدترین خانه‌های اجاره‌ای تهران </Text>
        </div>
        <div className="w-full ">
          <ListRentM start="0" end="8" stay="w-full grid grid-cols-4 gap-[20px]"/>
        </div>
      </div>
    </div>
  );
}

export default ListUnderRent;
