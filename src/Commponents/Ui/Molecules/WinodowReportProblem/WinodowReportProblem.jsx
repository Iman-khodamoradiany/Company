import { useContext } from "react";
import Button from "../../Atom/Button/Button";
import Icon from "../../Atom/Icon/Icon";
import Text from "../../Atom/Text/Text";
import Input from "./../../Atom/Input/Input";
import { MyContext } from "../../../../App";

function WinodowReportProblem() {
  const { setReport } = useContext(MyContext);

  const Problems = [
    { id: 1, text: "ملک واگذار شده" },
    { id: 2, text: "قیمت اشتباهه" },
    { id: 3, text: "عکس‌ها مرتبط نیست" },
    { id: 4, text: "کسی پاسخگو نیست" },
    { id: 5, text: "توضیحات ناقصه" },
  ];

  return (
    <div
      className={` w-[500px]  h-[600px] z-20 py-4   justify-center items-center flex-col bg-white px-4 rounded-xl border-3 gap-5`}
    >
      <Button onClick={() => setReport(false)}>
        <Icon Name="Backe3" />
      </Button>
      <Text style="w-full flex items-center justify-center my-5 text-[#353535] text-[1.8vw] font-bold ">
        گزارش مشکل
      </Text>
      <div className="flex flex-col gap-5">
        {Problems.map((item) => (
          <div className="[direction:rtl] text-[#505050] font-mono text-[1.3vw] flex items-center justify-start gap-3">
            <Input
              className=" rounded-[4px] flex items-center justfiy-center appearance-none w-[20px] h-[20px] border-2 border-red-600 
             checked:bg-red-600 checked:border-red-600
             checked:before:content-['✓']  checked:before:text-white
             checked:before:block checked:before:text-center
             transition-colors  "
              type="checkbox"
            />
            <Text>{item.text}</Text>
          </div>
        ))}
      </div>
      <Input
        className="bg-[#F9F9F9] w-[465px] h-[100px] rounded-[8px] my-5 mx-auto [direction:rtl] pb-[70px] px-2 text-[#ADADAD] font-bold "
        placeholder="لطفا نظر خود را درباره این مشاور بنویسید "
      />
      <div className="flex items-center justify-center ">
        <Button className="bg-[#CB1B1B] text-white px-[125px] py-[15px] rounded-[8px] my-5  ">
          ارسال گزارش
        </Button>
      </div>
    </div>
  );
}

export default WinodowReportProblem;
