import Text from "../../Atom/Text/Text";
import { TitleHome } from "./../../../Constans/TitleHome/TitleHome";
import Icon from "./../../Atom/Icon/Icon";

function HomeTitleSize() {
  return (
    <div className="w-full flex items-center justify-end gap-5">
      {TitleHome.map((item) => (
        <div className="bg-[#F9F9F9] px-[40px] py-[20px] rounded-[16px] flex flex-col items-center justify-center gap-3">
          <div className="flex items-center justify-center">
            <Text style="text-[1.5vw] text-[#212121] font-bold ">{item.name}</Text>
            <Icon Name={item.icon} />
          </div>
          <Text style="[direction:rtl] text-[#353535] text-[1.1vw] font-bold " >{item.title}</Text>
        </div>
      ))}
    </div>
  );
}

export default HomeTitleSize;
