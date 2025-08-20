import { useContext, useEffect, useState } from "react";
import Icon from "../../Atom/Icon/Icon";
import { MyContext } from "../../../../App";
import { Distri } from "../../../Constans/DistrictsIran/DistrictsIran";
import Text from "../../Atom/Text/Text";

function DropDownCity({ Option }) {
  const [isOpen, setIsOpen] = useState(false);
  const [iconToggled, seticonToggled] = useState("down");
  const { City, setCity, setGet, Get } = useContext(MyContext);
  const [Ca, setCa] = useState(Distri);

  const toggle = () => {
    setIsOpen(!isOpen);
    if (iconToggled == "up") {
      seticonToggled("down");
    } else {
      seticonToggled("up");
    }
  };

  const handleselect = (name, province_id) => {
    setCity(name);
    if (name !== "لطفاً شهر مورد نظر را انتخاب کنید") {
      setGet(province_id);
    }

    setIsOpen(false);
    if (iconToggled == "up") {
      seticonToggled("down");
    } else {
      seticonToggled("up");
    }
  };
  console.log(Get);

  return (
    <div className="flex flex-col items-end justify-center relative ">
      <div className="text-[#353535] text-[1.2vw] font-meduim  ">
        <Text>شهر</Text>
      </div>
      <div className="w-[250px] h-[50px] bg-[#FFFFFF] border-[#ADADAD] border-[1px] rounded-lg ">
        <div
          className="w-full flex items-center justify-between px-[10px]  mx-auto my-[15px] "
          onClick={toggle}
        >
          <Icon Name={iconToggled} />
          <div className="text-[#ADADAD] text-[0.9vw] font-bold ">{City}</div>
        </div>
        {isOpen && (
          <div className="h-[100px] scrollbar-custom2 overflow-y-auto  absolute shadow-lg top-[80px] left-0 w-full z-50 ">
            <ul className=" flex flex-col rounded-l-md bg-[#FFFFFF]   items-center justify-center  ">
              {Option.map((item, index) => (
                <li
                  key={index}
                  value={item.name}
                  className=" w-[95%] text-right px-5 py-1  text-[#ADADAD]  font-bold   "
                  onClick={() => handleselect(item.name, item.province_id)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default DropDownCity;
