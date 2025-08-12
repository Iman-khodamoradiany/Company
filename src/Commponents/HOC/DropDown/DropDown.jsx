import { useState } from "react";
import Icon from "./../../Ui/Atom/Icon/Icon";
import Input from "./../../Ui/Atom/Input/Input";
import Button from "./../../Ui/Atom/Button/Button";

function CustomDropdown({ option, TextDefulte }) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setinput] = useState(false);
  const [icon, seticon] = useState(false);
  const [selected, setselected] = useState(TextDefulte);
  const [iconToggled, seticonToggled] = useState("down");
  console.log(input);

  const toggle = () => {
    setIsOpen(!isOpen);
    if (iconToggled == "up") {
      seticonToggled("down");
      seticon(true);
    } else {
      seticonToggled("up");
    }
  };

  const pineActive = (id) => {
    setinput((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // const handleselect = (name) => {
  //   setselected(name);
  //   setIsOpen(false);
  //   if (iconToggled == "up") {
  //     seticonToggled("down");
  //   } else {
  //     seticonToggled("up");
  //   }
  // };

  return (
    <div className="w-[100px] py-[5px] px-[12px] m-auto flex items-center justify-center flex-col ">
      <div
        className="w-full flex items-center justify-center   "
        onClick={toggle}
      >
        <Icon
          Name={
            input
              ? icon
                ? "Backe"
                : isOpen
                ? "DropTop"
                : "FlashDown"
              : isOpen
              ? "DropTop"
              : "FlashDown"
          }
        />
        <div className="w-full h-full flex items-center justify-center ">
          {selected}
        </div>
      </div>
      {isOpen && (
        <div className="w-[140px] my-7  mr-10   border-[2px] border-blue-400 shadow-[0px_0px_0px_3px_#0085FF30]  bg-white rounded-lg">
          <ul className=" w-[140px] h-[100px] [direction:rtl] overflow-y-scroll  ">
            {option.map((item, index) => (
              <div
                className={
                  input[item.id]
                    ? "flex items-center justify-center gap-2 bg-red-200 mx-1"
                    : "flex items-center justify-center gap-2 mx-1"
                }
              >
                <Input
                  type="checkbox"
                  DefaultChecked={input}
                  style="flex items-center justfiy-center appearance-none w-4 h-4 border-2 border-red-600 rounded-sm
             checked:bg-red-600 checked:border-red-600
             checked:before:content-['✓']  checked:before:text-white
             checked:before:block checked:before:text-center
             transition-colors"
                  Onclick={() => pineActive(item.id)}
                />
                <li key={index} value={item.value}>
                  {item.name}
                </li>
              </div>
            ))}
          </ul>
          <div className="w-full bg-[#FAFAFA] flex items-center justify-center gap-2 p-[10px] ">
            <Button
              OnClick={input ? toggle : ""}
              style="  text-white  bg-[#CB1B1B]  rounded-[8px] py-[4px] px-[10px] "
            >
              انتخاب
            </Button>
            <Button
              OnClick={() => setinput(!input)}
              style="border-[#CB1B1B] border-[1px] text-[#CB1B1B] rounded-[8px] py-[4px] px-[10px]  bg-white  "
            >
              حذف
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomDropdown;
