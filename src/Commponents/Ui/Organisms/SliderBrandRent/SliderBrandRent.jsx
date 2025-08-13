import { Autoplay } from "swiper/modules";
import SliderRents from "./../SliderRents/SliderRents";

function SliderBrandRent() {
  return (
    <div className=" w-full flex items-center justify-center  ">
      <div className=" w-[85%] [direction:rtl]   ">
        <div className="w-[650px] bg-[#F9F9F9] rounded-lg py-5 ">
          <SliderRents
            stayl="opacity-0"
            SlidesPerView={1.9}
            text={"دفاتر املاک مرتبط"}
            Modules={[Autoplay]}
            autoplay={{ delay: 2000 }}
            staylParent=" w-[600px]    "
            staylText="text-[#353535] text-[2vw] font-bold mx-[30px] "
          />
        </div>
      </div>
    </div>
  );
}

export default SliderBrandRent;
