import Button from "../../Atom/Button/Button";
import Icon from "../../Atom/Icon/Icon";
import Text from "../../Atom/Text/Text";

function RegisterNotDone() {
  return (
    <div className="w-[80%]   flex flex-col items-center justify-center ">
      <Text style="text-[#353535] text-[1.7vw] font-bold text-center ">
        مشکلی در ثبت آگهی شما به‌وجود آمده!
      </Text>
      <Text style="w-[20vw] my-5 [direction:rtl] text-[#717171] font-bold text-[1.1vw] text-center">
        در قسمت ثبت آگهی، خطای مربوط به اطلاعات برای شما مشخص شده‌ است.
      </Text>
      <div className="transition-all duration-200 ease-linear">
        <Button className=" border-[#CB1B1B] transition-all duration-200 ease-linear  focus:text-white  focus:bg-[#CB1B1B] border-[1px] rounded-lg my-5 py-3 px-6 text-[#CB1B1B] bg-white ">
          بازگشت به ثبت آگهی
        </Button>
      </div>
      
      <div className=" flex flex-col items-center justify-center ">
        <div className=" ">
          <Icon Name="notdone" />
        </div>
      </div>
    </div>
  );
}

export default RegisterNotDone;
