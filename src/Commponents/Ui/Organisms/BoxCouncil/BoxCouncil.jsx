import { useEffect, useState } from "react";
import BoxCouncilMap from "../../Molecules/BoxCouncilMap/BoxCouncilMap";
import BoxCouncilText from "../../Molecules/BoxCouncilText/BoxCouncilText";

function BoxCouncil() {
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
        <div className="w-full flex items-center justify-center flex-col pt-10">
          <BoxCouncilText />
          <BoxCouncilMap />
        </div>
      ) : (
        <div className="w-full flex items-center justify-center flex-col pt-10">
          <BoxCouncilText />
          <BoxCouncilMap />
        </div>
      )}
    </>
  );
}

export default BoxCouncil;
