import SliderHome from "../../Molecules/SliderHome/SliderHome";
import Text from "./../../Atom/Text/Text";
function Slider() {
  return (
    <div className="w-[90%] flex items-center justify-center flex-col mx-auto">
      <Text style="w-full font-bold text-[#353535] text-[2vw] text-end " >آخرین اخبار املاک را از سقفینو دنبال کنید</Text>
      <div className="w-full flex items-center justify-center my-[30px] ">
        <SliderHome />
      </div>
    </div>
  );
}

export default Slider;
