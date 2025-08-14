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
  const [activ1, setactiv1] = useState(null);
  const [activ2, setactiv2] = useState(null);
  const [activ3, setactiv3] = useState(null);
  const [activ4, setactiv4] = useState(null);
  const [activ5, setactiv5] = useState(null);
  return (
    <div className="flex gap-5">
      <Button onClick={set}>
        <div
          className={
            activ1
              ? " h-[50px]  text-[#505050] border-blue-400 shadow-[0px_0px_0px_3px_#0085FF30] flex items-center justify-around gap-3 px-3 [direction:rtl]  border-[1px] rounded-[8px]   "
              : " h-[50px]  text-[#505050]  flex items-center justify-around gap-3 px-3 [direction:rtl]  border-[#ADADAD] border-[1px] rounded-[8px]   "
          }
          onClick={() => setactiv1(!activ1)}
        >
          <Icon Name="Filter" />
          <Text>فیلترهای بیشتر</Text>
        </div>
      </Button>

      <div
        className={
          activ2
            ? " h-[50px] flex    text-[#505050] border-blue-400 shadow-[0px_0px_0px_3px_#0085FF30]  border-[1px] rounded-[8px]   "
            : " h-[50px] flex    text-[#505050]  border-[#ADADAD] border-[1px] rounded-[8px]   "
        }
        onClick={() => setactiv2(!activ2)}
      >
        <CustomDropdown option={Meterage} TextDefulte="متراژ" />
      </div>
      <div
        className={
          activ3
            ? " h-[50px] flex    text-[#505050] border-blue-400 shadow-[0px_0px_0px_3px_#0085FF30]  border-[1px] rounded-[8px]   "
            : " h-[50px] flex    text-[#505050]  border-[#ADADAD] border-[1px] rounded-[8px]   "
        }
        onClick={() => setactiv3(!activ3)}
      >
        <CustomDropdown option={Price} TextDefulte="قیمت" />
      </div>
      <div
        className={
          activ4
            ? " h-[50px] flex    text-[#505050] border-blue-400 shadow-[0px_0px_0px_3px_#0085FF30]  border-[1px] rounded-[8px]   "
            : " h-[50px] flex    text-[#505050]  border-[#ADADAD] border-[1px] rounded-[8px]   "
        }
        onClick={() => setactiv4(!activ4)}
      >
        <CustomDropdown option={Country} TextDefulte="نوع ملک" />
      </div>
      <div
        className={
          activ5
            ? " h-[50px] flex    text-[#505050] border-blue-400 shadow-[0px_0px_0px_3px_#0085FF30]  border-[1px] rounded-[8px]   "
            : " h-[50px] flex    text-[#505050]  border-[#ADADAD] border-[1px] rounded-[8px]   "
        }
        onClick={() => setactiv5(!activ5)}
      >
        <CustomDropdown option={Area} TextDefulte="منطقه" />
      </div>
    </div>
  );
}

export default DropDownRent;
