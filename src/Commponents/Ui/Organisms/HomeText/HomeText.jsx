import HomePartTextM from "../../Molecules/HomePartTextM/HomePartTextM";
import Text from "./../../Atom/Text/Text";

function HomeText() {
  return (
    <div className="w-full  flex items-center justify-center my-[60px] ">
      <div className="w-[85%]  flex flex-col items-end justify-center gap-3 ">
        <HomePartTextM />
        <Text style="text-[#212121] text-[1.7vw] font-bold [direction:rtl] " >۲۰۰ متر، محدوه ونک، بلوار دانش </Text>
      </div>
    </div>
  );
}

export default HomeText;
