import { useState } from "react";
import Text from "./../../Atom/Text/Text";
import DropRentTitel from "./DropDownRent";

function RentTitele() {
  const [activ2, setactiv2] = useState(null);

  return (
    <div className="w-full flex flex-col  ">
      <Text style="[direction:rtl] text-[2vw] font-bold text-[#353535] ">املاک اجاره‌ای</Text>
      <div className=" w-full flex items-start  justify-between ">
        <div
          className={
            activ2
            ? " h-[50px] flex    text-[#505050] border-blue-400 shadow-[0px_0px_0px_3px_#0085FF30]  border-[1px] rounded-[8px]   "
            : " h-[50px] flex    text-[#505050]  border-[#ADADAD] border-[1px] rounded-[8px]   "
          }
          onClick={() => setactiv2(!activ2)}
        >
          <DropRentTitel />
        </div>
        <Text style="[direction:rtl] text-[1.5vw] text-[#CB1B1B] ">۴۷.۵۰۷ مورد یافت شد</Text>
      </div>
    </div>
  );
}

export default RentTitele;
