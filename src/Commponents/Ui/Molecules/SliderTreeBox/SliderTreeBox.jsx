import React from "react";
import { SwiperSlide } from "swiper/react";
import Img from "../../Atom/Img/Img";
import Text from "../../Atom/Text/Text";
import Button from "../../Atom/Button/Button";
import { ListAray } from "../../../Constans/ListUnders/ArayList";

function SliderTreeBox() {
  return (
    <>
      {ListAray.map((item) => (
        <SwiperSlide className=" w-full flex items-center justify-center flex-col  py-[50px] px-[30px] bg-[#F9F9F9] border-[1px] rounded-[12px] border-[#E1E1E1] ">
          <div className="w-full h-full flex flex-col items-center justify-between   py-5 ">
            <div className="w-full flex mb-[20px] items-center justify-center ">
              <Img src={item.img} />
            </div>
            <Text style="text-center  text-[#353535] font-bold text-[5vw] ">
              {item.text1}
            </Text>
            <div className="text-center mb-[20px] text-[4vw]  text-[#505050]">
              <span>{item.text3}</span>
              <Text>{item.text2}</Text>
            </div>
          </div>
          <Button className=" w-full   bg-[#CB1B1B] text-[#FFFFFF] rounded-[8px] py-[10px] flex items-center justify-center ">
            {item.button}
          </Button>
        </SwiperSlide>
      ))}
    </>
  );
}

export default SliderTreeBox;
