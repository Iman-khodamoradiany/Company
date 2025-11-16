import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Img from "../../Atom/Img/Img";
import Text from "../../Atom/Text/Text";
import Button from "../../Atom/Button/Button";

function SliderBoxCouncilMap({ slidesPerView, spaceBetween, AraySwiper }) {
  return (
    <div className="w-screen">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        loop={true}
        autoplay={{
          delay: 2000,
        }}
        className=" w-[90%] h-full   "
      >
        {AraySwiper.map((item) => (
          <SwiperSlide>
            <div className="  flex flex-col items-center justify-between gap-5 p-[30px] my-[20px] rounded-[16px] shadow-[0px_2px_8px_0px_#00000014,0px_1px_2px_0px_#0000000D]  ">
              <div className="w-full flex items-center justify-center  ">
                <Img src={item.img} />
              </div>
              <Text style="text-center text-[#353535] font-medium text-[3.3vw]  ">
                {item.text}
              </Text>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderBoxCouncilMap;
