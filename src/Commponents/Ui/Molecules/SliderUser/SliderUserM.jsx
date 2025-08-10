import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Icon from "../../Atom/Icon/Icon";
import { SliderRentUsers } from "./../../../Constans/SliderRents/SliderRentUsers";
import Img from "../../Atom/Img/Img";
import Text from "../../Atom/Text/Text";
import Button from "./../../Atom/Button/Button";

function SliderUserM() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="custom-prev2 w-[60px] h-[60px] absolute left-[90px] z-10  shadow-[0px_3px_10px_0px_#00000033]  bg-[#FFFFFF] rounded-full flex items-center justify-center   cursor-pointer">
        <Icon Name="Next" />
      </div>
      <Swiper
        modules={[Navigation]}
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        navigation={{
          prevEl: ".custom-prev2",
        }}
      >
        {SliderRentUsers.map((item) => (
          <SwiperSlide className="w-full   bg-[#FFFFFF] rounded-[10px] border-[#E1E1E1]  border-[2px] shadow-[0px_1px_2px_0px_#0000000D,0px_2px_8px_0px_#00000014]">
            <div className="w-full  flex flex-col items-center justify-between py-[20px]">
              <div className="   ">
                <Img src={item.img} className="w-[150px] h-[150px] rounded-full object-cover flex items-center justify-center " />
              </div>
              <div className="">
                <Text style="text-[1.8vw] text-[#212121]  text-center font-bold " >{item.name}</Text>
                <Text style="text-[1.3vw] text-[#717171]  text-center font-bold " >{item.address}</Text>
                <Text style="text-[1.3vw] text-[#717171]  text-center font-bold " >{item.reng}</Text>
                <Button style="border-[#CB1B1B] font-bold border-[2px] text-[#CB1B1B] text-center py-[10px] px-[30px] rounded-[8px]  " >نمایش پروفایل</Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderUserM;
