import Img from "../../Atom/Img/Img";
import Text from "../../Atom/Text/Text";
import { ArayList } from "./../../../Constans/HomeList/List";

function HomeListM() {
  return (
    <div className="w-full grid grid-cols-4 grid-rows-[fr] gap-5">
      {ArayList.map((item) => (
        <div className="w-full flex items-center justify-between flex-col  gap-[10px]  bg-[#F9F9F9] border-[1px] rounded-[10px] border-[#D9D9D9] ">
          <div className="w-full ">
            <Img
              className="w-full h-[240px]  object-cover  rounded-tr-[10px] rounded-tl-[12px]"
              src={item.img}
            />
          </div>
          <div className="w-full flex items-center justify-start flex-col mb-10 ">
            <Text style="text-[1.5vw] text-[#505050] font-bold " >{item.number}</Text>
            <Text style="text-[1vw] text-[#505050]  " >{item.text}</Text>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeListM;
