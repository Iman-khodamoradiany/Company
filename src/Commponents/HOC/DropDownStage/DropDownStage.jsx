import { useState } from "react";
import Icon from "../../Ui/Atom/Icon/Icon";

function DropDownStage({ Option , TextDefult }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setselected] = useState(TextDefult);
  const [iconToggled, seticonToggled] = useState("down");

  const toggle = () => {
    setIsOpen(!isOpen);
    if (iconToggled == "up") {
      seticonToggled("down");
    } else {
      seticonToggled("up");
    }
  };

  const handleselect = (name) => {
    setselected(name);
    setIsOpen(false);
    if (iconToggled == "up") {
      seticonToggled("down");
    } else {
      seticonToggled("up");
    }
  };

  return (
  <div className="w-[255px] h-[50px] bg-[#FFFFFF] border-[#ADADAD] border-[1px] rounded-lg relative">
    <div
      className="w-full flex items-center justify-between px-[10px] mx-auto my-[15px]"
      onClick={toggle}
    >
      <Icon Name={iconToggled} />
      <div className="text-[#ADADAD] text-[0.9vw] font-semibold">{selected}</div>
    </div>

    {isOpen && (
      <div className="absolute top-[50px] left-0 w-full z-50 h-[100px] scrollbar-custom2 overflow-y-auto bg-white rounded-lg shadow-md">
        <ul className="flex flex-col items-center justify-center">
          {Option.map((item, index) => (
            <li
              key={index}
              value={item.name}
              className="w-[95%] text-right px-5 py-1 text-[#ADADAD] font-bold hover:bg-gray-100 cursor-pointer"
              onClick={() => handleselect(item.name)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

}

export default DropDownStage;
