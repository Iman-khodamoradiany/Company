import Icon from "../../Atom/Icon/Icon";
import Text from "../../Atom/Text/Text";

function RegisterDone() {
  return (
    <div className="w-[80%]   flex flex-col items-center justify-center ">
      <Text style="text-[#353535] text-[1.7vw] font-bold text-center " >آگهی شما با موفقیت ثبت شد</Text>
      <div className=" flex flex-col items-center justify-center ">
        <div className=" relative top-[150px]">
          <Icon
            Name="done"
          />
        </div>
        <div className=" z-10 relative bottom-[150px]">
          <Icon
            Name="donesmall"
          />
        </div>
      </div>
    </div>
  );
}

export default RegisterDone;
