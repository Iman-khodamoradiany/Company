import { useContext } from "react";
import { MyContext } from "../../../../App";
import Button from "../../Atom/Button/Button";
import Icon from "../../Atom/Icon/Icon";
import Text from "../../Atom/Text/Text";
import ScoreBox from "../ScoreBox/ScoreBox";

function WinodowTitleBox() {
  const {  setTitle } = useContext(MyContext);

  
const NumberPhone=localStorage.getItem("number")



  const ArayIcon = [
    { id: 1, text: "۰۹۱۲۳۴۵۶۷۸۹" },
    { id: 2, text: "۰۲۱۱۲۳۴۵۶۷۸" },
  ];

  return (
    <div
      className={` w-[550px]  h-[600px] z-20 py-4   justify-center items-center flex-col bg-white px-4 rounded-xl border-3 gap-5`}
    >
      <Button onClick={() => setTitle(false)}>
        <Icon Name="Backe3" />
      </Button>
      <div className="w-full flex items-center justify-center  ">
        <Icon Name="tosy" />
      </div>
      <Text style="w-full flex items-center justify-center text-[#353535] text-[1vw] py-[20px] ">
        املاک توسی
      </Text>
      <Text style="w-full flex items-center justify-center text-[#353535] text-[2.1vw] font-bold ">
        علی پرتو
      </Text>
      <div className="w-full flex-col flex items-center justify-center py-[20px] gap-4">
        {ArayIcon.map((item) => (
          <div className="[direction:rtl] gap-2 flex items-center justify-center text-[#353535] text-[1.4vw] ">
            <Text>{NumberPhone?NumberPhone:item.text}</Text>
            <Icon Name="Phone2" />
          </div>
        ))}
      </div>
      <div className="w-full flex items-center py-[7px]  justify-center [direction:rtl] text-[#2F80ED] gap-1 ">
        <Icon Name="erorBlue" />
        <Text>شناسه آگهی ملک: </Text>
        <Text style="underline ">۲۳۴۴</Text>
      </div>
      <Text style="w-full flex items-center justify-center text-[] text-[#909090] ">
        لطفاً این شناسه را هنگام تماس با مشاور به‌یاد داشته باشید
      </Text>
      <Text style="w-full flex items-center justify-center text-[] text-[#353535] pt-[40px] ">
        چه امتیازی به مشاور املاک توسی می‌دی؟
      </Text>

      <ScoreBox />
    </div>
  );
}

export default WinodowTitleBox;
