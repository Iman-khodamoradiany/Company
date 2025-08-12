import { Autoplay } from "swiper/modules";
import { SuggestedAray } from "./../../../Constans/SuggestedAray/SuggestedAray";
import Text from "./../../Atom/Text/Text";
import { Swiper, SwiperSlide } from "swiper/react";

function ListLinkesPart() {
  return (
    <div className="w-[600px]  [direction:rtl] ">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={4.5}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 2000 }}
      >
        {SuggestedAray.map((item) => (
          <SwiperSlide>
            <Text style=" bg-white border-[#EDEDED] border-[1px] py-2 text-center text-[#505050] text-[1.1vw] font-medium   ">
              {item.text}
            </Text>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ListLinkesPart;
