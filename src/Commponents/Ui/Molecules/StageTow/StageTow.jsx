import { useContext, useState } from "react";
import {
  PropertyType,
  TransactionType,
} from "../../../Constans/StageTow/StageTow";
import DropDownStage from "../../../HOC/DropDownStage/DropDownStage";
import Text from "../../Atom/Text/Text";
import ButtonStage from "../ButtonStage/ButtonStage";
import Convertible from "../Convertible/Convertible";
import InputStage from "../InputStage/InputStage";
import { MyContext } from "../../../../App";

function StageTow() {
  const { PopUp, setPopUp } = useContext(MyContext);

  const [formData, setformData] = useState({
    text1: "",
    text2: "",
  });
  const [error, setError] = useState({});
  console.log(error);

  const handelChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const ValidationForm = (data) => {
    let errors = {};
    if (!data.text1) {
      errors.text1 = ".فیلداجاره ضرورت دارد ";
    }
    if (!data.text2) {
      errors.text2 = ".فیلد رهن ضرورت دارد ";
    }
    return errors;
  };

  const handelNext = (e) => {
    if (error) {
      e.preventDefault();
      const ValidationError = ValidationForm(formData);
      setError(ValidationError);
    }
    if (formData.text1 && formData.text2) {
      setPopUp("6");
    }
  };

  return (
    <div className="w-[80%]  flex flex-col items-end justify-center ">
      <Text style="text-[#353535] text-[1.45vw] py-[40px] ">
        لطفا موارد زیر را تکمیل کنید
      </Text>

      <div className="w-full flex items-center justify-center gap-2">
        <div className=" flex flex-col items-end justify-center ">
          <div className="text-[#353535] text-[1.2vw] font-meduim  ">
            <Text>نوع ملک</Text>
          </div>
          <DropDownStage
            Option={TransactionType}
            TextDefult="لطفاً نوع ملک ر را انتخاب کنید"
          />
        </div>
        <div className="w-full flex flex-col items-end justify-center ">
          <div className="text-[#353535] text-[1.2vw] font-meduim  ">
            <Text>نوع معامله</Text>
          </div>
          <DropDownStage
            Option={PropertyType}
            TextDefult="لطفاً نوع معامله رانتخاب کنید"
          />
        </div>
      </div>

      <div className=" w-full flex flex-col my-8 gap-2 items-end justify-center">
        <div className="w-full flex items-center justify-between gap-2">
          <div className="w-full flex flex-col items-end ">
            <InputStage
              text="اجاره"
              value={formData.text1}
              onChange={handelChange}
              name="text1"
              placeholder="مثلاً ۲ میلیون تومان"
            />

            {error.text1 && <Text>{error.text1}</Text>}
          </div>
          <div className="w-full flex flex-col items-end ">
            <InputStage
              placeholder="مثلاً ۵۰ میلیون تومان"
              text="رهن "
              name="text2"
              value={formData.text2}
              onChange={handelChange}
            />
            {error.text2 && <Text>{error.text2}</Text>}
          </div>
        </div>
        <Convertible />
      </div>

      <div className="w-full my-5  flex items-center justify-between ">
        <ButtonStage
          text="ادامه"
          OnClick1={handelNext}
          OnClick2={() => setPopUp("4")}
        />
      </div>
    </div>
  );
}

export default StageTow;
