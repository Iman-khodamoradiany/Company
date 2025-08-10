import Img from "../../Atom/Img/Img";
import Text from "../../Atom/Text/Text";
import { BoxRentAray } from "./../../../Constans/BoxRentItem/BoxRentAray";

function BoxRentItem() {
  return (
    <div className="w-full flex items-center justify-center gap-10 my-10  ">
      {BoxRentAray.map((item) => (
        <div className="w-full rounded-[16px] border-[#F9F9F9] border-[1px] py-[40px] gap-10 bg-white flex flex-col items-center justify-center shadow-[0px_1px_2px_0px_#0000000D,0px_2px_8px_0px_#00000014]  ">
          <Img src={item.img} />
          <Text style="w-[70%] text-[#353535] text-[1.4vw] font-medium text-center " >{item.text}</Text>
        </div>
      ))}
    </div>
  );
}

export default BoxRentItem;

