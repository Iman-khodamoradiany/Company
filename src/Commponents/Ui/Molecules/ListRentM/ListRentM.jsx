import { useState } from "react";
import { ArayListRent } from "../../../Constans/ListUnderRent/ListRent";
import Icon from "../../Atom/Icon/Icon";
import Button from "./../../Atom/Button/Button";
import Text from "./../../Atom/Text/Text";

function ListRentM() {
  const [pine, setpine] = useState({});
  const pineActive = (id) => {
    setpine((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="w-full grid grid-cols-4 gap-[20px]    ">
      {ArayListRent.map((item) => (
        <div className=" bg-[#FFFFFF] border-[1px] border-[#E1E1E1] rounded-[16px]  ">
          <div
            className="w-full h-[140px] bg-cover bg-center rounded-t-[16px]"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <Button style="w-[90px] cursor-text h-[30px] rounded-[4px] [direction:rtl] text-[0.9vw] font-bold text-white bg-[#0C0C0C66] m-[11px] ">
              {item.time}
            </Button>
          </div>
          <div className="w-full px-[10px] py-[15px] flex flex-col items-end justify-between gap-[5px] ">
            <div className="w-full  flex items-center justify-between ">
              <Button OnClick={() => pineActive(item.id)}>
                <Icon Name={pine[item.id] ? "PineActiv" : "Pine"} />
              </Button>
              <Text style="[direction:rtl] text-[#909090] text-[1.1vw]    ">
                {item.text}
              </Text>
            </div>
            <Text style="[direction:rtl] text-[#505050] text-[1.1vw]  ">
              {item.number1}
            </Text>
            <div>
              <Text style="[direction:rtl] text-[#353535] text-[1.1vw] font-bold ">
                {item.number2}
              </Text>
              <Text style="[direction:rtl] text-[#353535] text-[1vw] font-bold ">
                {item.number3}
              </Text>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListRentM;
