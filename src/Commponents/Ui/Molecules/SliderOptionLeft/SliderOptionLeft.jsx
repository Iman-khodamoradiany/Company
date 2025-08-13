import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderRentBrands } from "../../../Constans/SliderRents/SliderRentsBrand";
import Icon from "./../../Atom/Icon/Icon";
import Img from "./../../Atom/Img/Img";
import Text from "../../Atom/Text/Text";

function SliderOptionLeft({Modules,stayl,staylParent,SlidesPerView,...props}) {
  return (
    <div className={`w-full flex items-center justify-center${staylParent}`} >
      <div className={stayl}>
        <Icon Name="Next" />
      </div>
      <Swiper
        modules={Modules}
        slidesPerView={SlidesPerView}
        spaceBetween={20}
        loop={true}
        {...props}
      >
        {SliderRentBrands.map((item) => (
          <SwiperSlide
            key={item.id}
            className="w-full   bg-[#FFFFFF] rounded-[10px] border-[#E1E1E1]  border-[2px] shadow-[0px_1px_2px_0px_#0000000D,0px_2px_8px_0px_#00000014] "
          >
            <div className="w-full  flex flex-col items-center justify-center gap-[15px] py-[30px]">
              <div className="w-full flex items-center justify-center ">
                <Img
                  src={item.img}
                  className="flex items-center justify-center"
                />
              </div>

              <div className="flex items-center justify-center gap-2 ">
                <Icon Name={item.icon} />
                <Text style="text-[#212121] text-[1.5vw] font-bold text-center ">
                  {item.name}
                </Text>
              </div>
              <Text style="text-[#353535] text-[1.2vw]  text-center ">
                {item.text}
              </Text>
              <div className="text-[#717171] text-[1.1vw]  text-center flex flex-col gap-4 ">
                <Text>{item.number1}</Text>
                <Text>{item.number2}</Text>
                <Text>{item.number3}</Text>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderOptionLeft;
