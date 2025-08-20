import { useContext, useState } from "react";
import Button from "../../Atom/Button/Button";
import Icon from "../../Atom/Icon/Icon";
import Input from "../../Atom/Input/Input";
import { MyContext } from "../../../../App";
import Text from "../../Atom/Text/Text";

function PropertyInput() {
  const { PopUp, setPopUp } = useContext(MyContext);
  const [icon1, seticon1] = useState();
  const [icon2, seticon2] = useState();
  const [icon3, seticon3] = useState();

  const [formData, setformData] = useState({
    text1: "",
    text2: "",
    text3: "",
  });
  const [error, setError] = useState({});

  const handelChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const ValidationForm = (data) => {
    let errors = {};
    if (!data.text1) {
      errors.text1 = ".فیلد نام ضرورت دارد ";
    }
    if (!data.text2) {
      errors.text2 = ".فیلد خیابان فرعی/کوچه ضرورت دارد ";
    }
    if (!data.text3) {
      errors.text3 = ".فیلد خیابان فرعی/کوچه ضرورت دارد ";
    }
    return errors;
  };

  const handelNext = (e) => {
    if (error) {
      e.preventDefault();
      const ValidationError = ValidationForm(formData);
      setError(ValidationError);
    }
    if (formData.text1 && formData.text2 && formData.text3) {
      setPopUp("4");
    }
  };

  return (
    <div className="w-[70%] flex flex-col items-center justify-center  ">
      <div className="w-full flex flex-col items-center justify-center  ">
        <div
          className="w-[350px] px-[10px] py-[20px] bg-white rounded-xl border-[#ADADAD] border  hover:ring-4 hover:ring-[#2F80ED30] hover:border-[#2F80ED] flex items-center justify-between [direction:rtl] mb-3"
        >
          <div className="w-full flex items-center  justify-center gap-3 text-[#505050]">
            <Icon Name="user" />
            <Input
              placeholder="خیابان اصلی را وارد کنید"
              className="w-full outline-none Remove_Icon"
              value={formData.text1}
              onChange={handelChange}
              name="text1"
              type={icon1 == true ? "password" : "text"}
            />
          </div>
          <Button onClick={() => seticon1(!icon1)}>
            <Icon Name={icon1 ? "eyeActive" : "eye"} />
          </Button>
        </div>
        <div className="w-[80%] mb-3 flex items-center justify-end">
          {error.text1 && <Text>{error.text1}</Text>}
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center  ">
        <div className="w-[350px] px-[10px] py-[20px] bg-white rounded-xl border-[#ADADAD] border-[1.5px] flex items-center hover:ring-4 hover:ring-[#2F80ED30] hover:border-[#2F80ED] justify-between [direction:rtl] mb-3">
          <div className="w-full flex items-center justify-center gap-3 text-[#505050]">
            <Icon Name="user" />
            <Input
              placeholder="خیابان فرعی / کوچه را وارد کنید"
              className="w-full outline-none Remove_Icon"
              value={formData.text2}
              onChange={handelChange}
              name="text2"
              type={icon2 == true ? "password" : "text"}
            />
          </div>
          <Button onClick={() => seticon2(!icon2)}>
            <Icon Name={icon2 ? "eyeActive" : "eye"} />
          </Button>
        </div>
        <div className="w-[80%] mb-3 flex items-center justify-end">
          {error.text2 && <Text>{error.text2}</Text>}
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center  ">
        <div className="w-[350px] px-[10px] py-[20px] bg-white rounded-xl border-[#ADADAD] hover:ring-4 hover:ring-[#2F80ED30] hover:border-[#2F80ED] border-[1.5px] flex items-center justify-between [direction:rtl] mb-3">
          <div className="w-full flex items-center justify-center gap-3 text-[#505050]">
            <Icon Name="keys" />
            <Input
              placeholder="خیابان فرعی / کوچه را وارد کنید"
              className="w-full outline-none Remove_Icon"
              value={formData.text3}
              onChange={handelChange}
              name="text3"
              type={icon3 == true ? "password" : "text"}
            />
          </div>
          <Button onClick={() => seticon3(!icon3)}>
            <Icon Name={icon3 ? "eyeActive" : "eye"} />
          </Button>
        </div>
        <div className="w-[80%] mb-3 flex items-center justify-end">
          {error.text3 && <Text>{error.text3}</Text>}
        </div>
      </div>

      <Button
        onClick={handelNext}
        className="bg-[#CB1B1B] text-white rounded-lg py-4 w-[350px] my-6"
      >
        ثبت اطلاعات
      </Button>
    </div>
  );
}

export default PropertyInput;
