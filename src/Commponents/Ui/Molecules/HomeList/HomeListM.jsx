import { useEffect, useState } from "react";
import Img from "../../Atom/Img/Img";
import Text from "../../Atom/Text/Text";
import ListUnderRespansiv from "../ListUder/ListUnderRespansiv";
import { ArayList } from "./../../../Constans/HomeList/List";
import HomeListRespansiv from "./HomeListRespansiv";

function HomeListM() {

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
        <div className="w-full grid grid-cols-4 grid-rows-[fr] gap-5">
          {ArayList.map((item) => (
            <div className="w-full flex items-center justify-between flex-col  gap-[10px]  bg-[#F9F9F9] border-[1px] rounded-[10px] border-[#D9D9D9] ">
              <div className="w-full ">
                <Img
                  className="w-full h-[240px]  object-cover  rounded-tr-[10px] rounded-tl-[12px]"
                  src={item.img}
                />
              </div>
              <div className="w-full flex items-center justify-start flex-col mb-10 ">
                <Text style="text-[1.5vw] text-[#505050] font-bold ">
                  {item.number}
                </Text>
                <Text style="text-[1vw] text-[#505050]  ">{item.text}</Text>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <HomeListRespansiv
          slidesPerView="2"
          spaceBetween="20"
          AraySwiper={ArayList}
        />
      )}
    </>
  );
}

export default HomeListM;
