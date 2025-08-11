import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Text from "../../Atom/Text/Text";
import Img from "../../Atom/Img/Img";
import { AraySlider } from "./../../../Constans/SliderHome/SliderHome";
import Icon from "./../../Atom/Icon/Icon";
import useTuncateText from "./../../../HOC/Text/Text";

function SliderHome() {
 
  

  return (
    <div className="flex items-center w-full justify-center  ">
      <div className="custom-prev w-[52px] h-[52px] relative left-[30px] z-10  shadow-[0px_3px_10px_0px_#00000033]  bg-[#FFFFFF] rounded-full flex items-center justify-center   cursor-pointer">
        <Icon Name="Next" />
      </div>

      <Swiper
        modules={[Navigation]}
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        navigation={{
          prevEl: ".custom-prev",
        }}
        className="w-full h-[350px]  "
      >
        {AraySlider.map((item) => (
          <SwiperSlide
            key={item.id}
            className=" bg-[#F9F9F9] rounded-[10px] border-[#E1E1E1] pb-4 border-[1px] h-full"
          >
            <div
              dir="rtl"
              className="w-full gap-[25px] flex flex-col items-center justify-evenly h-full">
              <Img
                src={item.img}
                className="w-full h-full rounded-t-[10px]"
              />
              <Text style="text-[1.4vw] text-[#505050] font-bold px-2"> {useTuncateText(item.text,55)}</Text>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderHome;
