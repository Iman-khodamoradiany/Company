import { useContext } from "react";
import Button from "../../Atom/Button/Button";
import Icon from "../../Atom/Icon/Icon";
import Input from "../../Atom/Input/Input";
import Text from "../../Atom/Text/Text";
import { MyContext } from "../../../../App";
import PropertyInput from "../PropertyInput/PropertyInput";

function Property() {
  const { PopUp, setPopUp } = useContext(MyContext);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`${
        PopUp == "3" ? "flex" : "hidden"
      } h-[650px] z-20 flex justify-start items-center flex-col bg-white w-2/5 px-4 rounded-xl border-3 gap-5`}
    >
      <Button
        onClick={() => setPopUp("0")}
        className="w-full flex items-center justify-start py-4"
      >
        <Icon Name="Backe3" />
      </Button>

      <Text style="text-[2vw] text-[#353535] font-bold ">ثبت نام</Text>

      <div className="text-[1.2vw] text-[#505050] flex flex-col gap-2 ">
        <Text>با این موبایل حساب کاربری وجود ندارد</Text>
        <Text>برای ثبت‌ نام اطلاعات زیر را تکمیل نمایید</Text>
      </div>
      
      <PropertyInput/>
    </div>
  );
}

export default Property;
