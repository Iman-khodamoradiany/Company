import { useEffect, useState } from "react";
import ListUnder from "../../Molecules/ListUder/ListUnder";
import Text from "./../../Atom/Text/Text";

function ListO() {
  const MAX_MOBILE_WIDTH = 428;

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width > MAX_MOBILE_WIDTH;

  return (
    <div className="w-full flex flex-col items-center justify-center  mx-auto ">
      {isMobile ? (
        <>
          <div className="w-full text-end py-[40px] ">
            <Text style=" font-bold text-[2vw] text-[#353535]  ">
              سقفینو چطور به خانه‌دار شدن شما کمک می‌کند
            </Text>
          </div>
          <ListUnder />
        </>
      ) : (
        <>
          <div className="w-full text-end py-[20px] mt-10 ">
            <Text style=" font-bold text-[4.9vw] text-[#353535]  ">
              سقفینو چطور به خانه‌دار شدن شما کمک می‌کند
            </Text>
          </div>
          <ListUnder />
        </>
      )}
    </div>
  );
}

export default ListO;
