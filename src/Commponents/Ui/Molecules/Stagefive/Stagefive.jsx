import { useContext } from "react";
import Input from "../../Atom/Input/Input";
import Text from "./../../Atom/Text/Text";
import { MyContext } from "../../../../App";
import ButtonStage from "../ButtonStage/ButtonStage";
function Stagefive() {
  const { PopUp, setPopUp } = useContext(MyContext);

  const listTitle = [
    { id: 1, number: "۱" },
    { id: 2, number: "۲" },
    { id: 3, number: "۳" },
    { id: 4, number: "۴" },
    { id: 5, number: "۵" },
    { id: 6, number: "۶" },
    { id: 7, number: "۷" },
    { id: 8, number: "۸" },
    { id: 9, number: "۹" },
    { id: 10, number:"۱۰" },
  ];
  
  return (
    <div className="w-[80%]  flex flex-col gap-3 items-end justify-center">
      <Text style="text-[1.2vw] text-[#353535]">
        اگر توضیحات اضافی دارید در این قسمت بنویسید
      </Text>
      <div className="w-[69%]  flex flex-col gap-1 items-end justify-center bg-white ">
        {listTitle.map((item) => (
          <div className="w-full  [direction:rtl]  flex items-center justify-center">
            <Text style=" text-[1.5vw] text-[#ADADAD] flex items-center justify-center ">
              {item.number}
            </Text>

            <Input
              className="w-full outline-none text-[1.1vw]  text-[#ADADAD] flex items-center justify-center "
              placeholder="--------------------------------------------------------"
            />
          </div>
        ))}
      </div>

      <div className="w-full my-5  flex items-center justify-between ">
        <ButtonStage
          text="ادامه"
          OnClick1={() => setPopUp("9")}
          OnClick2={() => setPopUp("7")}
        />
      </div>
    </div>
  );
}

export default Stagefive;
