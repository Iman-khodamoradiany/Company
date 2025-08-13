import BoxCouncilMap from "../../Molecules/BoxCouncilMap/BoxCouncilMap";
import BoxCouncilText from "../../Molecules/BoxCouncilText/BoxCouncilText";

function BoxCouncil() {
  return (
    <div className="w-full flex items-center justify-center flex-col pt-10">
      <BoxCouncilText />
      <BoxCouncilMap />
    </div>
  );
}

export default BoxCouncil;
