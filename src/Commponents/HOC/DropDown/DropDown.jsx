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


  return (
        
    <div  className=" py-[5px] px-2  m-auto flex items-center justify-center flex-col ">
      <div
      onClick={toggle}
        className="w-full gap-3 h-[35px]  flex items-center justify-center   "
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
        <div className="h-full flex items-center justify-center text-[1vw]">
          {selected}
        </div>
      </div>
      {isOpen && (
        <div className="w-[140px] my-7  mr-10 z-10  border-[2px] border-blue-400 shadow-[0px_0px_0px_3px_#0085FF30]  bg-white rounded-lg">
          <ul className=" w-[140px] h-[100px] [direction:rtl]  overflow-y-auto scrollbar-custom  ">
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
                  className="flex items-center justfiy-center appearance-none w-4 h-4 border-2 border-red-600 rounded-sm
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
          <div className="w-full rounded-b-lg bg-[#FAFAFA] flex items-center justify-center gap-2 p-[10px] ">
            <Button
              OnClick={input ? toggle : ""}
              className="  text-white  bg-[#CB1B1B]  rounded-[8px] py-[4px] px-[10px] "
            >
              انتخاب
            </Button>
            <Button
              OnClick={() => setinput(!input)}
              className="border-[#CB1B1B] border-[1px] text-[#CB1B1B] rounded-[8px] py-[4px] px-[10px]  bg-white  "
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
