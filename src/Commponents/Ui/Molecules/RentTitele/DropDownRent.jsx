import { useState } from "react";
import Icon from './../../Atom/Icon/Icon';
import Input from './../../Atom/Input/Input';
import Button from './../../Atom/Button/Button';


function DropRentTitel() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setinput] = useState(false);
  const [icon, seticon] = useState(false);
  const [selected, setselected] = useState("جدیدترین");
  const [iconToggled, seticonToggled] = useState("down");
  console.log(input);

  const New = [{name:"جدیدترین"} ,{name:"قدیمی ترین"} ,{name:"همه" }];


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
    <div className="w-[150px] px-[12px] py-[5px]  m-auto  flex items-center justify-center flex-col ">
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
        <Icon Name="treeLuin" />
      </div>
      {isOpen && (
        <div className="w-[140px] my-7  mr-10 z-10  border-[2px] border-blue-400 shadow-[0px_0px_0px_3px_#0085FF30]  bg-white rounded-lg">
          <ul className=" w-[140px] h-[100px] [direction:rtl] overflow-y-auto scrollbar-custom   ">
            {New.map((item, index) => (
              <div
                className={
                  input[item.id]
                    ? "flex items-center justify-start  gap-2 bg-red-200 mx-2  "
                    : "flex items-center justify-start  gap-2 mx-2  "
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
          <div className="w-full bg-[#FAFAFA] rounded-b-lg flex items-center justify-center gap-2 p-[10px] ">
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

export default DropRentTitel;
