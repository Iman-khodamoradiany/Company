import { useContext } from "react";
import Icon from "../../Atom/Icon/Icon";
import Text from "../../Atom/Text/Text";
import { MyContext } from "../../../../App";
import Button from "../../Atom/Button/Button";

function HomeTitleReng() {
  const { setReport } = useContext(MyContext);

  const getAdress = JSON.parse(localStorage.getItem("StageTow"));
  const aray = getAdress && Object.entries(getAdress);

  return (
    <div className="w-full flex items-end justify-center flex-col  ">
      <div className="w-[74%] flex items-end justify-center flex-col gap-5 ">
        <div className="w-full border-[#E1E1E1] text-[#212121] border-[1px] [direction:rtl] flex items-center justify-between rounded-[12px] p-[10px] ">
          <Text style="text-[1.3vw]  font-bold ">ودیعه</Text>
          {aray.slice(1,2).map((item)=>(
            <Text style="text-[1.1vw]   ">{item[1]} میلیون تومان</Text>
          ))}
        </div>
        <div className="w-full border-[#E1E1E1] text-[#212121] border-[1px] [direction:rtl] flex items-center justify-between rounded-[12px] p-[10px] ">
          <Text style="text-[1.3vw]  font-bold ">اجاره ماهیانه</Text>
          {aray.slice(0,1).map((item)=>(
            <Text style="text-[1.1vw]   ">{item[1]} میلیون تومان </Text>
          ))}
        </div>
        <div className="w-full text-[#353535] text-[1vw] border-[#E1E1E1] border-[1px] [direction:rtl] flex items-start justify-between rounded-[12px] p-[10px] ">
          <div className="flex flex-col gap-2">
            <Text>ساعاتی پیش تهران</Text>
            <Text>شناسه آگهی: ۲۳۴۴</Text>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Button onClick={() => setReport(true)}>
              <Icon Name="Erorr" />
            </Button>
            <Text>گزارش تخلف آگهی</Text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeTitleReng;
