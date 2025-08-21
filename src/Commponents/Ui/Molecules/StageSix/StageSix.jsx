import { useContext } from "react";
import UploadImg from "../UploadImg/UploadImg";
import UploadVideo from "../UploadVideo/UploadVideo";
import Text from "./../../Atom/Text/Text";
import ButtonStage from "./../ButtonStage/ButtonStage";
import { MyContext } from "../../../../App";

function StageSix() {
  const { PopUp, setPopUp } = useContext(MyContext);

  return (
    <div className="w-[80%]  flex flex-col items-end justify-center my-[30px] ">
      <div className="w-full [direction:rtl] flex flex-col  gap-1 ">
        <Text style="text-[1.2vw] text-[#353535]  ">
          در این قسمت می‌توانید عکس و ویدئو ملک خود را بارگذاری کنید.
        </Text>
        <Text style="text-[1.1vw] text-[#909090]  ">
          اضافه کردن عکس و ویدئو باعث افزایش بازدید آگهی شما می‌شود.
        </Text>
        <Text style="text-[1.1vw] text-[#909090]  ">
          فرمت عکس‌ها باید webp، jpg، jpeg یا png باشد.
        </Text>
        <div className="w-full grid grid-cols-3 justify-between gap-3 ">
          <UploadImg />
          <UploadImg />
          <UploadImg />
          <UploadImg />
          <UploadImg />
          <UploadImg />
        </div>
      </div>
      <div className="my-[20px]">
        <UploadVideo />
      </div>
      <ButtonStage
        text="ثبت نهایی"
        OnClick1={() => setPopUp("10")}
        OnClick2={() => setPopUp("8")}
      />
    </div>
  );
}

export default StageSix;
