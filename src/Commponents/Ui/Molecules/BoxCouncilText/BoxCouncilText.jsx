import { useEffect, useState } from "react";
import Text from "./../../Atom/Text/Text";

function BoxCouncilText() {
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
        <div className="flex flex-col items-center justify-center [direction:rtl] ">
          <Text style="text-[#212121] font-bold text-[1.8vw] ">
            همه به شما مشاوره می‌دهند!
          </Text>
          <Text style="text-[#353535]  text-[1.5vw] ">
            اما در سقفینو مشاوران املاک کِنار شما می‌مانند
          </Text>
        </div>
      ) : (
        <div className="flex flex-col items-center  justify-center [direction:rtl] ">
          <Text style="text-[#212121] font-bold text-[4.5vw] ">
            همه به شما مشاوره می‌دهند!
          </Text>
          <Text style="text-[#353535] font-medium text-[3.6vw] ">
            اما در سقفینو مشاوران املاک کِنار شما می‌مانند
          </Text>
        </div>
      )}
    </>
  );
}

export default BoxCouncilText;
