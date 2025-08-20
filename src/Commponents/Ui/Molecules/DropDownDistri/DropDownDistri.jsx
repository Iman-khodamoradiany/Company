import { useContext, useState } from "react";
import Icon from "../../Atom/Icon/Icon";
import { MyContext } from "../../../../App";
import Text from "../../Atom/Text/Text";

function DropDownDistri({ Option  }) {
  const [isOpen, setIsOpen] = useState(false);
  const [iconToggled, seticonToggled] = useState("down");
  const {  Distri, setDistri, Get } = useContext(MyContext);

  const toggle = () => {
    setIsOpen(!isOpen);
    if (iconToggled == "up") {
      seticonToggled("down");
    } else {
      seticonToggled("up");
    }
  };

  const handleselect = (name) => {
    setDistri(name);
    setIsOpen(false);
    if (iconToggled == "up") {
      seticonToggled("down");
    } else {
      seticonToggled("up");
    }
  };

  return (
    <div className="flex flex-col items-end justify-center relative">
      <div className="text-[#353535] text-[1.2vw] font-meduim  ">
        <Text>منطقه</Text>
      </div>
      <div className="w-[250px] h-[50px] bg-[#FFFFFF] border-[#ADADAD] border-[1px] rounded-lg ">
        <div
          className="w-full flex items-center justify-between px-[10px]  mx-auto my-[15px] "
          onClick={toggle}
        >
          <Icon Name={iconToggled} />
          <div className="text-[#ADADAD] text-[0.9vw] font-bold ">{Distri}</div>
        </div>
          {isOpen && (
        <div className="h-[100px] scrollbar-custom2 overflow-y-auto absolute shadow-lg top-[80px] left-0 w-full z-50 ">
            <ul className=" flex flex-col rounded-l-md  bg-[#FFFFFF]   items-center justify-center  ">
              {Option.map((item, index) => (
                <li
                  key={index}
                  value={item.name}
                  className=" w-[95%] text-right px-5   text-[#ADADAD]  font-bold   "
                  onClick={() => handleselect(item.name)}
                >
                  {Get == item.province_id ? item.name : <></>}
                </li>
              ))}
            </ul>
        </div>
          )}
      </div>
    </div>
  );
}

export default DropDownDistri;
