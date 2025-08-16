import { useState } from "react";
import {
  Area,
  Country,
  Meterage,
  Price,
} from "../../../Constans/DropDown/DropDown";
import CustomDropdown from "../../../HOC/DropDown/DropDown";
import Icon from "../../Atom/Icon/Icon";
import Text from "./../../Atom/Text/Text";
import Button from "../../Atom/Button/Button";

function DropDownRent({set}) {
  const [activ, setactiv] = useState();
  
  return (
    <div className="flex justify-center items-center w-1/2 gap-2">
      <Button onClick={set}>
        <div
          className={
            activ=="1"
              ? " h-[50px]  text-[#505050] border-blue-400 shadow-[0px_0px_0px_3px_#0085FF30] flex items-center justify-around gap-2 px-1   [direction:rtl]  border-[1px] rounded-[8px]   "
              : " h-[50px]  text-[#505050]  flex items-center justify-around gap-3 px-3 [direction:rtl]  border-[#ADADAD] border-[1px] w-[150px] rounded-[8px]   "
          }
          onClick={() => setactiv("1")}
        >
          <Icon Name="Filter" />
          <Text style={'text-[1vw]'}>فیلترهای بیشتر</Text>
        </div>
      </Button>

      <div
        className={
          activ=="2"
            ? " h-[50px] flex  w-[100px] items-center justify-center  text-[#505050] border-blue-400 shadow-[0px_0px_0px_3px_#0085FF30]  border-[1px] rounded-[8px]   "
            : " h-[50px] flex  w-[100px] items-center justify-center  text-[#505050]  border-[#ADADAD] border-[1px] rounded-[8px]   "
        }
        onClick={() => setactiv("2")}
      >
        <CustomDropdown option={Meterage} TextDefulte="متراژ" />
      </div>
      <div
        className={
          activ=="3"
            ? " h-[50px] flex  w-[100px] items-center justify-center   text-[#505050] border-blue-400 shadow-[0px_0px_0px_3px_#0085FF30]  border-[1px] rounded-[8px]   "
            : " h-[50px] flex  w-[100px] items-center justify-center   text-[#505050]  border-[#ADADAD] border-[1px] rounded-[8px]   "
        }
        onClick={() => setactiv("3")}
      >
        <CustomDropdown option={Price} TextDefulte="قیمت" />
      </div>
      <div
        className={
          activ=="4"
            ? " h-[50px] flex  w-[110px] items-center justify-center   text-[#505050] border-blue-400 shadow-[0px_0px_0px_3px_#0085FF30]  border-[1px] rounded-[8px]   "
            : " h-[50px] flex  w-[110px] items-center justify-center   text-[#505050]  border-[#ADADAD] border-[1px] rounded-[8px]   "
        }
        onClick={() => setactiv("4")}
      >
        <CustomDropdown option={Country} TextDefulte="نوع ملک" />
      </div>
      <div
        className={
          activ=="5"
            ? " h-[50px] flex  w-[100px] items-center justify-center   text-[#505050] border-blue-400 shadow-[0px_0px_0px_3px_#0085FF30]  border-[1px] rounded-[8px]   "
            : " h-[50px] flex  w-[100px] items-center justify-center   text-[#505050]  border-[#ADADAD] border-[1px] rounded-[8px]   "
        }
        onClick={() => setactiv("5")}
      >
        <CustomDropdown option={Area} TextDefulte="منطقه" />
      </div>
    </div>
  );
}

export default DropDownRent;
