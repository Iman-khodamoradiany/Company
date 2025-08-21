import { useContext, useState } from "react";
import Button from "../../Atom/Button/Button";
import Input from "../../Atom/Input/Input";
import Text from "../../Atom/Text/Text";
import { MyContext } from "../../../../App";

function TitelInput({ setSC, setshaw, setNumber, Number }) {
  const { PopUp, setPopUp } = useContext(MyContext);
  const [Rules, setRules] = useState(true);
  function confirmNumber() {
    if (Number != "" && Rules == false) {
      return false;
    } else {
      return true;
    }
  }

  function handelButton() {
    setshaw("1");
    setPopUp("2");
    setSC(true);
  }

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`${
        PopUp == "1" ? "flex" : "hidden"
      }  h-[380px] z-20 pt-7  justify-center items-center flex-col bg-white w-1/2 px-4 rounded-xl border-3 gap-5`}
    >
      <div className="text-center flex justify-between w-[90%] h-full items-center pb-6 flex-col gap-5">
        <Text style={"font-bold text-[1.5vw] text-[#212121]"}>ورود</Text>
        <div className="text-[#353535] flex justify-between items-center flex-col gap-1">
          <Text>به سقفینو خوش آمدید</Text>
          <Text>لطفا برای ورود شماره موبایل خود را وارد کنید</Text>
        </div>
        <div
          className="flex justify-between h-full items-center w-full flex-col"
          dir="rtl"
        >
          <div className="w-full flex justify-center items-center gap-5 flex-col">
            <div className="w-[95%]">
              <Input
                type={"number"}
                onChange={(e) => setNumber(e.target.value)}
                className={
                  "Remove_Icon w-full focus:ring-4 focus:ring-[#2F80ED30] h-[40px] border-2 rounded-lg px-2 focus:border-[#2F80ED] outline-none"
                }
              />
            </div>
            <div className="flex justify-start items-center gap-2 w-[95%]">
              <Input
                onChange={() => setRules(!Rules)}
                className="flex items-center justfiy-center appearance-none w-[24px] h-[24px] border-2 border-[#CBCBCB] rounded-lg
             checked:bg-red-600 checked:border-red-600
             checked:before:content-['✓']  checked:before:text-white
             checked:before:block checked:before:mx-auto checked:before:text-center
             transition-colors"
                type={"checkbox"}
              />
              <Text style={"corsur-pointer text-[#909090]"}>
                با <span className="text-[#CB1B1B]">قوانین سقفینو </span>موافق
                هستم
              </Text>
            </div>
          </div>
          <div className="w-full disabled">
            <Button
              onClick={handelButton}
              disabled={confirmNumber()}
              className={`w-full disabled:bg-[#9e5252]  h-[50px] bg-[#CB1B1B] rounded-md text-white`}
            >
              ورود{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TitelInput;
