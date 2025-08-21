import { useContext, useState } from "react";
import { City } from "../../../Constans/CitiIran/CitiIran";
import Text from "../../Atom/Text/Text";
import ButtonStage from "../ButtonStage/ButtonStage";
import DropDownCity from "../DropDownCity/DropDownCity";
import DropDownDistri from "../DropDownDistri/DropDownDistri";
import InputStage from "../InputStage/InputStage";
import { Distri } from "./../../../Constans/DistrictsIran/DistrictsIran";
import { MyContext } from "../../../../App";

function StageOne() {
  const { PopUp, setPopUp } = useContext(MyContext);
  const [formData, setformData] = useState({
    text1: "",
    text2: "",
  });
  const [error, setError] = useState({});

  const handelChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const ValidationForm = (data) => {
    let errors = {};
    if (!data.text1) {
      errors.text1 = ".فیلد خیابان اصلی ضرورت دارد ";
    }
    if (!data.text2) {
      errors.text2 = ".فیلد خیابان فرعی/کوچه ضرورت دارد ";
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
      setPopUp("5");
    }
  };

  return (
    <div className="w-[80%]  flex flex-col items-end justify-center ">
      <Text style=" text-[#353535] text-[1.45vw] py-[40px] ">
        لطفا موارد زیر را تکمیل کنید
      </Text>
      <div className="w-full flex items-center justify-center gap-5">
        <DropDownDistri Option={Distri} />
        <DropDownCity Option={City} />
      </div>
      <div className="w-full my-10  flex items-center justify-center gap-5  ">
        <div className="w-full flex flex-col items-end">
          <InputStage
            placeholder={"جزئیات آدرس را وارد کنید"}
            text={"خیابان فرعی/کوچه"}
            value={formData.text2}
            onChange={handelChange}
            name="text2"
          />
          {error.text2 && <Text style="text-[#ED2E2E] " >{error.text2}</Text>}
        </div>
        <div className="w-full flex flex-col items-end">
          <InputStage
            placeholder={"آدرس خود را وارد کنید"}
            text={"خیابان اصلی"}
            value={formData.text1}
            onChange={handelChange}
            name="text1"
          />
          {error.text1 && <Text style="text-[#ED2E2E] " >{error.text1}</Text>}
        </div>
      </div>

      <div className="w-full my-10  flex items-center justify-between  ">
        <ButtonStage
          OnClick1={handelNext}
          OnClick2={() => setPopUp("3")}
          text={" ادامه"}
        />
      </div>
    </div>
  );
}

export default StageOne;
