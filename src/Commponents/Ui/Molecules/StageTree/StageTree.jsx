import { useContext, useState } from "react";
import { MyContext } from "../../../../App";
import Text from "../../Atom/Text/Text";
import InputStage from "../InputStage/InputStage";
import ButtonStage from "../ButtonStage/ButtonStage";

function StageTree() {
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
      errors.text1 = ".فیلد اتاق ضرورت دارد ";
    }
    if (!data.text2) {
      errors.text2 = ".فیلد متراژ ضرورت دارد ";
    }
    if (!data.text3) {
      errors.text3 = ".فیلد تعداد طبقات  ضرورت دارد ";
    }
    if (!data.text4) {
      errors.text4 = ".فیلد طبقه ضرورت دارد ";
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
      setPopUp("7");
    }
  };

  return (
    <div className="w-[80%]  flex flex-col items-end justify-center ">
      <Text style="text-[#353535] text-[1.45vw] py-[40px] ">
        لطفا موارد زیر را انتخاب کنید
      </Text>

      <div className=" w-full grid grid-cols-2  gap-6 ">
        <div className="w-full flex flex-col items-end">
          <InputStage
            text="اتاق"
            name="text1"
            value={formData.text1}
            onChange={handelChange}
            placeholder="تعداد اتاق‌ها را بنویسید "
          />
          {error.text1 && <Text>{error.text1}</Text>}
        </div>

        <div className="w-full flex flex-col items-end">
          <InputStage
            name="text2"
            value={formData.text2}
            onChange={handelChange}
            placeholder=" مساحت ملک خود را وارد کنید  "
            text="متراژ(متر مربع) "
          />
          {error.text2 && <Text>{error.text2}</Text>}
        </div>

        <div className="w-full flex flex-col items-end">
          <InputStage
            text=" تعداد طبقات "
            name="text3"
            value={formData.text3}
            onChange={handelChange}
            placeholder=" طبقه ملک خود را بنویسید  "
          />
          {error.text3 && <Text>{error.text3}</Text>}
        </div>

        <div className="w-full flex flex-col items-end">
          <InputStage
            name="text4"
            value={formData.text4}
            onChange={handelChange}
            placeholder=" طبقه ملک خود را بنویسید  "
            text="طبقه "
          />
          {error.text4 && <Text>{error.text4}</Text>}
        </div>
      </div>

      <div className="w-full my-20  flex items-center justify-between ">
        <ButtonStage
          text="ادامه"
          OnClick1={handelNext}
          OnClick2={() => setPopUp("5")}
        />
      </div>
    </div>
  );
}

export default StageTree;
