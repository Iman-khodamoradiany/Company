import Text from "../../Atom/Text/Text";
import Img from "./../../Atom/Img/Img";
import Button from "./../../Atom/Button/Button";
import { ListAray } from "../../../Constans/ListUnders/ArayList";
import { useEffect, useState } from "react";
import ListUnderRespansiv from "./ListUnderRespansiv";

function ListUnder() {
  const MAX_MOBILE_WIDTH = 428;

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width > MAX_MOBILE_WIDTH;

  return (
    <div className=" grid grid-cols-3 gap-20  ">
      {isMobile ? (
        <>
          {ListAray.map((item) => (
            <div className="flex items-center justify-between flex-col gap-20 py-[20px] px-[30px] bg-[#F9F9F9] border-[1px] rounded-[12px] border-[#E1E1E1] ">
              <div className="w-full flex flex-col items-center justify-between gap-5 ">
                <div className="w-full flex items-center justify-center ">
                  <Img src={item.img} />
                </div>
                <Text style="text-center text-[#353535] font-bold text-[1.5vw] ">
                  {item.text1}
                </Text>
                <div className="text-center text-[#505050]">
                  <span>{item.text3}</span>
                  <Text>{item.text2}</Text>
                </div>
              </div>
              <Button style=" w-full bg-[#CB1B1B] text-[#FFFFFF] rounded-[8px] py-[10px] flex items-center justify-center ">
                {item.button}
              </Button>
            </div>
          ))}
        </>
      ) : (
        <ListUnderRespansiv slidesPerView="1" spaceBetween="0" AraySwiper={ListAray} />
      )}
    </div>
  );
}

export default ListUnder;
