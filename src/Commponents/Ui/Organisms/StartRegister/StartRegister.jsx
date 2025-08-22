// bg-[url(/register/bag.jpg)]
import { useContext } from "react";
import Img from "../../Atom/Img/Img";
import StageOne from "../../Molecules/StageOne/StageOne";
import StageSign from "../../Molecules/StageSign/StageSign";
import { MyContext } from "../../../../App";
import StageTow from "../../Molecules/StageTow/StageTow";
import StageTree from "../../Molecules/StageTree/StageTree";
import StageFour from "../../Molecules/StageFour/StageFour";
import Stagefive from "../../Molecules/Stagefive/Stagefive";
import StageSix from "../../Molecules/StageSix/StageSix";

function StartRegister() {
  const { PopUp } = useContext(MyContext);

  return (
    <div className="w-[140vh] h-[90vh] bg-white rounded-xl mx-auto my-10 flex items-start justify-between  bg-center bg-contain  bg-no-repeat   ">
      <div className="w-[65%]  flex flex-col items-center justify-start my-[100px] gap-5  ">
        <StageSign />
        {PopUp == "4" && <StageOne />}
        {PopUp == "5" && <StageTow />}
        {PopUp == "6" && <StageTree />}
        {PopUp == "7" && <StageFour />}
        {PopUp == "8" && <Stagefive />}
        {PopUp == "9" && <StageSix />}
      </div>
      <div className=" w-[35%] h-full ">
        <Img
          src="/register/bag.jpg"
          className="w-full object-cover h-full  rounded-r-xl   "
        />
      </div>
    </div>
  );
}

export default StartRegister;
