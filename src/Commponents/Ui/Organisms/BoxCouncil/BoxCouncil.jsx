import BoxCouncilMap from "../../Molecules/BoxCouncilMap/BoxCouncilMap";
import BoxCouncilText from "../../Molecules/BoxCouncilText/BoxCouncilText";

function BoxCouncil() {
  return (
    <div className="w-full flex items-center justify-center flex-col ">
      <BoxCouncilText />
      <BoxCouncilMap />
    </div>
  );
}

export default BoxCouncil;
