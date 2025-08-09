import Button from "../../Atom/Button/Button";
import Text from "./../../Atom/Text/Text";
import ListRentM from "../../Molecules/ListRentM/ListRentM";

function ListUnderRent() {
  return (
    <div className="w-full  flex items-center justify-center my-[50px] ">
      <div className="w-[85%]  ">
        <div className="w-full flex items-center justify-between py-[30px] ">
          <Button style="text-[1.2vw] text-[#717171] font-bold " >مشاهده همه</Button>
          <Text style="text-[2.5vw] text-[#353535] font-bold " >جدیدترین خانه‌های اجاره‌ای تهران </Text>
        </div>
        <div className="w-full ">
          <ListRentM />
        </div>
      </div>
    </div>
  );
}

export default ListUnderRent;
