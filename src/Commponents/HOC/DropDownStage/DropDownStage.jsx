import { useEffect, useState } from "react";
import Icon from "../../Ui/Atom/Icon/Icon";

function DropDownStage({ Option, TextDefult, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(value || TextDefult);
  const [iconToggled, seticonToggled] = useState("down");

  useEffect(() => {
    if (value) {
      setSelected(value);
    }
  }, [value]);

  const toggle = () => {
    setIsOpen(!isOpen);
    seticonToggled((prev) => (prev === "up" ? "down" : "up"));
  };

  const handleSelect = (name) => {
    setSelected(name);
    onChange && onChange(name);
    setIsOpen(false);
    seticonToggled("down");
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
                onClick={() => handleSelect(item.name)}
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
