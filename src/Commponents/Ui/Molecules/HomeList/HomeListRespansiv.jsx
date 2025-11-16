import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Img from "../../Atom/Img/Img";
import Text from "../../Atom/Text/Text";
import Button from "../../Atom/Button/Button";

function HomeListRespansiv({ slidesPerView, spaceBetween, AraySwiper }) {
  return (
    <div className="w-screen [direction:rtl]">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        loop={true}
        autoplay={{
          delay: 2000,
        }}
        className=" w-[90%] h-full  "
      >
          {AraySwiper.map((item) => (
            <SwiperSlide>
              <div className="w-full flex items-center justify-between flex-col  gap-[10px]  bg-[#F9F9F9] border-[2px] rounded-[10px] border-[#D9D9D9] ">
                <div className="w-full ">
                  <Img
                    className="w-full h-[180px]  object-cover  rounded-tr-[10px] rounded-tl-[10px]"
                    src={item.img}
                  />
                </div>
                <div className="w-full flex items-center  justify-start flex-col mb-3 ">
                  <Text style="text-[5vw] text-[#505050] font-bold ">
                    {item.number}
                  </Text>
                  <Text style="text-[4vw] text-[#505050] font-medium ">{item.text}</Text>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default HomeListRespansiv;
