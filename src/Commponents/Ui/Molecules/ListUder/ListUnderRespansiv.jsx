import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Img from "../../Atom/Img/Img";
import Text from "../../Atom/Text/Text";
import Button from "../../Atom/Button/Button";

function ListUnderRespansiv({slidesPerView,spaceBetween,AraySwiper}) {
  return (
    <div className="w-[48vh] h-[450px]   ">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        loop={true}
        autoplay={{
          delay: 2000,
        }}
        className=" w-full h-full  "
      >
        {AraySwiper.map((item) => (
          <SwiperSlide className=" w-full flex items-center justify-center flex-col gap-10 py-[20px] px-[30px] bg-[#F9F9F9] border-[1px] rounded-[12px] border-[#E1E1E1] ">
            <div className="w-full h-full flex flex-col items-center justify-between gap-[5px]  py-5 ">
              <div className="w-full flex items-center justify-center ">
                <Img src={item.img} />
              </div>
              <Text style="text-center text-[#353535] font-bold text-[6vw] ">
                {item.text1}
              </Text>
              <div className="text-center  text-[4.5vw] font-sans text-[#505050]">
                <span>{item.text3}</span>
                <Text>{item.text2}</Text>
              </div>
            </div>
            <Button className=" w-full bg-[#CB1B1B] text-[#FFFFFF] rounded-[8px] py-[10px] flex items-center justify-center ">
              {item.button}
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ListUnderRespansiv;
