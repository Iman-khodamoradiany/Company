import Text from "../../Atom/Text/Text";
import Icon from "./../../Atom/Icon/Icon";
function HomePartTextM() {
  return (
    <div className="w-full flex items-center justify-between  ">
      <div className="w-[65%] flex items-center justify-end gap-2">
        <Icon Name="Pine" Fill="#353535" />
        <Icon Name="Download" />
      </div>
      <Text style="text-[#909090] text-[1.3vw] ">رهن و اجاره آپارتمان تهران</Text>
    </div>
  );
}

export default HomePartTextM;
