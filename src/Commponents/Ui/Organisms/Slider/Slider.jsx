import SliderHome from "../../Molecules/SliderHome/SliderHome";
import Text from "./../../Atom/Text/Text";
import { useEffect, useState } from "react";
function Slider() {
  const MAX_MOBILE_WIDTH = 428;

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width > MAX_MOBILE_WIDTH;
  return (
    <>
      {isMobile ? (
        <div className="w-full flex items-center justify-center flex-col mx-auto">
          <Text style="w-full font-bold text-[#353535] text-[2vw] text-end ">
            آخرین اخبار املاک را از سقفینو دنبال کنید
          </Text>
          <div className="w-full flex items-center justify-center my-[30px] ">
            <SliderHome />
          </div>
        </div>
      ) : (
        <div className="w-full flex items-center justify-center flex-col mx-auto ">
          <Text style="w-full font-bold text-[#353535] text-[4vw] text-end ">
            آخرین اخبار املاک را از سقفینو دنبال کنید
          </Text>
          <div className="w-full flex items-center justify-center my-[20px] [direction:rtl]  ">
            <SliderHome />
          </div>
        </div>
      )}
    </>
  );
}

export default Slider;
