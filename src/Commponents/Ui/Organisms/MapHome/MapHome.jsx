import CostomMap from "../../../HOC/Map/Map";
import MapHomeText from "../../Molecules/MapHomeText/MapHomeText";
import MapHomeLike from "../../Molecules/MapHomeLike/MapHomeLike";
import Text from "../../Atom/Text/Text";

function MapHome({Home}) {
  return (
    <div className="w-full  flex items-center justify-center my-[60px] ">
      <div className="w-[85%]  flex flex-col items-end justify-center gap-5 ">
        <Text style="text-[1.8vw] text-[#212121] font-bold ">موقعیت </Text>
        <CostomMap Home={Home}/>
        <MapHomeText />
        <MapHomeLike />
      </div>
    </div>
  );
}

export default MapHome;
