import { useEffect, useState } from "react";
import HomeListM from "../../Molecules/HomeList/HomeListM";
import Text from "./../../Atom/Text/Text";

function HomeList() {
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
        <div className="w-full  flex flex-col items-center  justify-center  mx-auto  ">
          <div className="w-full text-end py-10 ">
            <Text style=" font-bold text-[2vw] text-[#353535]  ">
              در سقفینو دنبال چه نوع ملکی هستید
            </Text>
          </div>
          <HomeListM />
        </div>
      ) : (
        <div className="w-full  flex flex-col items-center  justify-center  mx-auto  ">
          <div className="w-full text-end py-5 flex items-center justify-end ">
            <Text style=" font-bold text-[4vw] text-[#353535]  ">
              در سقفینو دنبال چه نوع ملکی هستید
            </Text>
          </div>
          <HomeListM />
        </div>
      )}
    </>
  );
}

export default HomeList;
