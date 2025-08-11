import Text from "../../Atom/Text/Text";
import SuggestedText from "../../Molecules/SuggestedText/SuggestedText";

function Suggested() {
  return (
    <div className="w-full  flex items-center justify-center my-10   ">
      <div className="w-[85%]   ">
        <Text style="text-[#212121] text-[2.8vw] [direction:rtl] font-medium " >جستجوهای پیشنهادی</Text>
        <SuggestedText />
      </div>
    </div>
  );
}

export default Suggested;
