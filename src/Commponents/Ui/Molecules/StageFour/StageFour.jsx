import { useContext, useState } from "react";
import { MyContext } from "../../../../App";
import Text from "../../Atom/Text/Text";
import InputStage from "../InputStage/InputStage";
import ButtonStage from "../ButtonStage/ButtonStage";
import DropDownStage from "../../../HOC/DropDownStage/DropDownStage";
import {
  coolingSystem,
  FloorMaterial,
  HeatingSystem,
  TypeOfToilet,
} from "../../../Constans/StageFour/StageFour";

function StageFour() {
  const { PopUp, setPopUp } = useContext(MyContext);

  const [formData, setformData] = useState({
    text1: "",
    text2: "",
    text3: "",
    text4: "",
  });
  const [error, setError] = useState({});

  const handelChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const ValidationForm = (data) => {
    let errors = {};
    if (!data.text1) {
      errors.text1 = ".فیلد سرویس بهداشتی  ضرورت دارد ";
    }
    if (!data.text2) {
      errors.text2 = ".فیلد پارکینگ ضرورت دارد ";
    }
    if (!data.text3) {
      errors.text3 = ".فیلد  انباری  ضرورت دارد ";
    }
    if (!data.text4) {
      errors.text4 = ".فیلد آسانسور ضرورت دارد ";
    }
    return errors;
  };

  const handelNext = (e) => {
    if (error) {
      e.preventDefault();
      const ValidationError = ValidationForm(formData);
      setError(ValidationError);
    }
    if (formData.text1 && formData.text2 && formData.text3 && formData.text4) {
      setPopUp("8");
    }
  };

  return (
    <div className="w-[80%]  flex flex-col items-end justify-center ">
      <Text style="text-[#353535] text-[1.45vw] py-[20px] ">
        لطفا موارد زیر را انتخاب کنید
      </Text>

      <div className=" w-full grid grid-cols-2  gap-3 ">
        <div className="w-full flex flex-col items-end">
          <InputStage
            name="text1"
            value={formData.text1}
            onChange={handelChange}
            text=" سرویس بهداشتی "
            placeholder="تعداد سرویس بهداشتی را وارد کنید"
          />
          {error.text1 && <Text style="text-[#ED2E2E] ">{error.text1}</Text>}
        </div>

        <div className="w-full flex flex-col items-end">
          <InputStage
            name="text2"
            value={formData.text2}
            onChange={handelChange}
            text="پارکینگ"
            placeholder="تعداد پارکینگ‌ را بنویسید"
          />
          {error.text2 && <Text style="text-[#ED2E2E] ">{error.text2}</Text>}
        </div>

        <div className="w-full flex flex-col items-end justify-center ">
          <div className="text-[#353535] text-[1.2vw] font-meduim  ">
            <Text>نوع سرویس بهداشتی</Text>
          </div>
          <DropDownStage Zed="12" Option={TypeOfToilet} TextDefult="فرنگی" />
        </div>

        <div className="w-full flex flex-col items-end">
          <InputStage
            name="text3"
            value={formData.text3}
            onChange={handelChange}
            text="انباری"
            placeholder="تعداد انباری را بنویسید"
          />
          {error.text3 && <Text style="text-[#ED2E2E] ">{error.text3}</Text>}
        </div>
        <div className="w-full flex flex-col items-end justify-center ">
          <div className="text-[#353535] text-[1.2vw] font-meduim  ">
            <Text>سیستم سرمایش</Text>
          </div>
          <DropDownStage Zed="11" Option={coolingSystem} TextDefult="چیلر" />
        </div>

        <div className="w-full flex flex-col items-end">
          <InputStage
            name="text4"
            value={formData.text4}
            onChange={handelChange}
            text="آسانسور"
            placeholder="تعداد آسانسور را مشخص کنید"
          />
          {error.text4 && <Text style="text-[#ED2E2E] ">{error.text4}</Text>}
        </div>

        <div className="w-full flex flex-col items-end justify-center ">
          <div className="text-[#353535] text-[1.2vw] font-meduim  ">
            <Text>سیستم گرمایش</Text>
          </div>
          <DropDownStage
            Zed="10"
            Option={HeatingSystem}
            TextDefult="رادیاتور"
          />
        </div>

        <div className="w-full flex flex-col items-end justify-center ">
          <div className="text-[#353535] text-[1.2vw] font-meduim  ">
            <Text>جنس کف</Text>
          </div>
          <DropDownStage Zed="10" Option={FloorMaterial} TextDefult="سرامیک" />
        </div>
      </div>

      <div className="w-full my-10  flex items-center justify-between ">
        <ButtonStage
          text="ادامه"
          OnClick1={handelNext}
          OnClick2={() => setPopUp("6")}
        />
      </div>
    </div>
  );
}

export default StageFour;
