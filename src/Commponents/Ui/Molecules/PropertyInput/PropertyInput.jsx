import { useContext, useEffect, useState } from "react";
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

const [formData, setFormData] = useState({
  text1: "",
  text2: "",
  text3: ""
});

const Win = window.localStorage;

const handleSubmit = (e) => {
  e.preventDefault();
  Win.removeItem("property");
  setFormData({
    text1: "",
    text2: "",
    text3: ""
  });
};

useEffect(() => {
  const savedData = Win.getItem("property");
  if (savedData) {
    try {
      setFormData(JSON.parse(savedData));
    } catch (err) {
      console.error(err);
    }
  }
}, []);

useEffect(() => {
  Win.setItem("property", JSON.stringify(formData));
}, [formData]);


      


  const [error, setError] = useState({});

  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const ValidationForm = (data) => {
    let errors = {};
    if (!data.text1) {
      errors.text1 = ".فیلد نام ضرورت دارد ";
    }
    if (!data.text2) {
      errors.text2 = ".فیلد نام و نام خانوادگی ضرورت دارد ";
    }
    if (!data.text3) {
      errors.text3 = ".فیلد رمز ضرورت دارد ";
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
    <div onSubmit={handleSubmit} className="w-[70%] flex flex-col items-center justify-center  ">
      <div className="w-full flex flex-col items-center justify-center  ">
        <div className="w-[350px] px-[10px] py-[20px] bg-white rounded-xl border-[#ADADAD] border  hover:ring-4 hover:ring-[#2F80ED30] hover:border-[#2F80ED] flex items-center justify-between [direction:rtl] mb-3">
          <div className="w-full flex items-center  justify-center gap-3 text-[#505050]">
            <Icon Name="user" />
            <Input
              placeholder=" نام را وارد کنید"
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
          {error.text1 && <Text style="text-[#ED2E2E] ">{error.text1}</Text>}
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center  ">
        <div className="w-[350px] px-[10px] py-[20px] bg-white rounded-xl border-[#ADADAD] border-[1.5px] flex items-center hover:ring-4 hover:ring-[#2F80ED30] hover:border-[#2F80ED] justify-between [direction:rtl] mb-3">
          <div className="w-full flex items-center justify-center gap-3 text-[#505050]">
            <Icon Name="user" />
            <Input
              placeholder="   نام و نام خانوادگی را وارد کنید"
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
          {error.text2 && <Text style="text-[#ED2E2E] ">{error.text2}</Text>}
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center  ">
        <div className="w-[350px] px-[10px] py-[20px] bg-white rounded-xl border-[#ADADAD] hover:ring-4 hover:ring-[#2F80ED30] hover:border-[#2F80ED] border-[1.5px] flex items-center justify-between [direction:rtl] mb-3">
          <div className="w-full flex items-center justify-center gap-3 text-[#505050]">
            <Icon Name="keys" />
            <Input
              placeholder="  رمز را وارد کنید"
              className="w-full outline-none Remove_Icon"
              value={formData.text3}
              onChange={handelChange}
              name="text3"
              type={icon3 == true ? "text" :"password" }
            />
          </div>
          <Button onClick={() => seticon3(!icon3)}>
            <Icon Name={icon3 ? "eye" :"eyeActive" } />
          </Button>
        </div>
        <div className="w-[80%] mb-3 flex items-center justify-end">
          {error.text3 && <Text style="text-[#ED2E2E] ">{error.text3}</Text>}
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
