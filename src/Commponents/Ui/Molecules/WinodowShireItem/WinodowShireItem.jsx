import { useContext } from "react";
import { MyContext } from "../../../../App";
import Button from "../../Atom/Button/Button";
import Icon from "../../Atom/Icon/Icon";
import Text from "../../Atom/Text/Text";
import Input from "../../Atom/Input/Input";

function WinodowShireItem() {
  const { setShire } = useContext(MyContext);

  const Problems = [
    { id: 1, text: "تلگرام" ,icon:"Telegram2" },
    { id: 2, text: "واتس‌اپ" ,icon:"WhatsApp" },
    { id: 3, text: "توییتر" ,icon:"Twitter" },
    { id: 4, text: " فیس‌ بوک " ,icon:"Facebook"  },
    { id: 5, text: "ایمیل" ,icon:"Email" },
  ];

  return (
    <div
      className={` w-[500px]  h-[600px] z-20 py-4   justify-center items-center flex-col bg-white px-4 rounded-xl border-3 gap-5`}
    >
      <Button onClick={() => setShire(false)}>
        <Icon Name="Backe3" />
      </Button>
      <Text style="w-full flex items-center justify-center my-5 text-[#353535] text-[1.8vw] font-bold ">
        اشتراک‌گذاری
      </Text>
      <Text style="w-full flex items-center justify-center my-9 text-[#505050] text-[1.2vw] [direction:rtl] ">
        این پروفایل را با دیگران به اشتراک بگذارید:
      </Text>
      <div className="w-[85%] flex items-end justify-center flex-col gap-7 ">
        {Problems.map((item) => (
          <div className="[direction:rtl] text-[#505050] font-mono text-[1.3vw] flex items-center justify-start gap-3">
         <Icon Name={item.icon} />
            <Text>{item.text}</Text>
          </div>
        ))}
      </div>
     
    </div>
  );
}

export default WinodowShireItem;
