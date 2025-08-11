import Text from "./../../Atom/Text/Text";
import Button from "./../../Atom/Button/Button";
import Img from "./../../Atom/Img/Img";

function HomeTitleProfile() {
  return (
    <div className="w-[400px] bg-white border-[1px] flex items-start px-[20px] py-[30px] justify-center border-[#D9D9D9] rounded-[16px] gap-3 ">
      <div className="w-full  [direction:rtl] flex flex-col items-start justify-center gap-1 ">
        <div className=" flex items-end justify-center gap-2">
            <Img src="/brand3.png" className="w-[25px] h-[26px]" />
          <Text style="text-[#505050] text-[1vw] font-bold">املاک ولیعصر</Text>
        </div>
        <Text style="text-[#212121] text-[1.5vw] font-bold " >علی پرتو</Text>
        <Text style="text-[#353535] text-[1vw]  " >امتیاز ۴ از ۵</Text>
        <Text style="text-[#353535] text-[1vw]  " >۵۰۰ آگهی فعال</Text>
        <Button style="px-[80px] py-[7px] bg-[#CB1B1B] rounded-[8px] text-center text-white text-[1vw]  " >اطلاعات تماس</Button>
      </div>
      <div className=" flex items-center justify-center  ">
        <div className="w-[80px] h-[80px] bg-teal-600 rounded-full ">
          <Img src="/user4.jpg" className=" w-full h-full object-cover rounded-full flex items-center justify-center"  />
        </div>
      </div>
    </div>
  );
}

export default HomeTitleProfile;
