import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderRentBrands } from "../../../Constans/SliderRents/SliderRentsBrand";
import Icon from "./../../Atom/Icon/Icon";
import Img from "./../../Atom/Img/Img";
import Text from "../../Atom/Text/Text";
import Button from "../../Atom/Button/Button";
import { MyContext } from "../../../../App";
import { useContext } from "react";
import { Card as infocard } from "../../../../Features/Bussins_Card/Bussins_Card";
import { useDispatch } from "react-redux";

function SliderOptionLeft({
  Modules,
  stayl,
  staylParent,
  SlidesPerView,
  ...props
}) {
  const { Card, setCard  } = useContext(MyContext);
  const dispatch = useDispatch();

  function HandelButton(info) {
    setCard(true);
    dispatch(infocard(info));
  }

  return (
    <div className={`w-full flex items-center justify-center${staylParent}`}>
      <div
        className={`custom-prev w-[60px] h-[60px] absolute left-[75px] z-10  shadow-[0px_3px_10px_0px_#00000033]  bg-[#FFFFFF] rounded-full flex items-center justify-center   cursor-pointer ${stayl}`}
      >
        <Icon Name="Next" />
      </div>
      <Swiper
        modules={Modules}
        slidesPerView={SlidesPerView}
        spaceBetween={20}
        loop={true}
        {...props}
        navigation={{
          prevEl: ".custom-prev",
        }}
      >
        {SliderRentBrands.map((item) => (
          <SwiperSlide
            key={item.id}
            className="w-full bg-[#FFFFFF] rounded-[10px] border-[#E1E1E1]  border-[2px] shadow-[0px_1px_2px_0px_#0000000D,0px_2px_8px_0px_#00000014] "
          >
            <Button
              onClick={() => HandelButton(item)}
              className={"flex justify-center items-center flex-col w-full z-50"}
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
                    مشاور {item.name}
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
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderOptionLeft;
