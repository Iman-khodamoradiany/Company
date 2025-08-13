import Icon from "../../Atom/Icon/Icon";
import Text from "../../Atom/Text/Text";

function HeaderFilters() {
  return (
    <div className="w-full bg-slate-400 flex items-center justify-center py-[15px] ">
      <div className="w-[45%] flex items-center justify-end text-[#353535] text-[1.7vw] font-bold ">
        <Text>فیلترها</Text>
      </div>
      <div className="w-[30%] flex items-center justify-end  ">
        <Icon Name="Backe2" />
      </div>
    </div>
  );
}

export default HeaderFilters;
