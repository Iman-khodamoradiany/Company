import { useContext, useEffect, useState } from "react";
import Input from "../../Atom/Input/Input";
import Text from "./../../Atom/Text/Text";
import { MyContext } from "../../../../App";
import ButtonStage from "../ButtonStage/ButtonStage";
function Stagefive() {
  const { PopUp, setPopUp } = useContext(MyContext);
  const [formData, setformData] = useState({
    text1: "",
    text2: "",
    text3: "",
    text4: "",
    text5: "",
    text6: "",
    text7: "",
    text8: "",
    text9: "",
    text10: "",
  });

  const Win = window.localStorage;

  const handleSubmit = (e) => {
    e.preventDefault();
    Win.removeItem("StageFive");
    setformData({
      text1: "",
      text2: "",
      text3: "",
      text4: "",
      text5: "",
      text6: "",
      text7: "",
      text8: "",
      text9: "",
      text10: "",
    });
  };

  useEffect(() => {
    const savedData = Win.getItem("StageFive");
    if (savedData) {
      try {
        setformData(JSON.parse(savedData));
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

  useEffect(() => {
    Win.setItem("StageFive", JSON.stringify(formData));
  }, [formData]);

  const listTitle = [
    { id: 1, number: "۱", text: "text1" },
    { id: 2, number: "۲", text: "text2" },
    { id: 3, number: "۳", text: "text3" },
    { id: 4, number: "۴", text: "text4" },
    { id: 5, number: "۵", text: "text5" },
    { id: 6, number: "۶", text: "text6" },
    { id: 7, number: "۷", text: "text7" },
    { id: 8, number: "۸", text: "text8" },
    { id: 9, number: "۹", text: "text9" },
    { id: 10, number: "۱۰", text: "text10" },
  ];

  return (
    <div
      onSubmit={handleSubmit}
      className="w-[80%]  flex flex-col gap-3 items-end justify-center"
    >
      <Text style="text-[1.2vw] text-[#353535]">
        اگر توضیحات اضافی دارید در این قسمت بنویسید
      </Text>
      <div className="w-[69%]  flex flex-col gap-1 items-end justify-center bg-white ">
        {listTitle.map((item) => (
          <div className="w-full  [direction:rtl]  flex items-center justify-center">
            <Text style=" text-[1.5vw] text-[#ADADAD] flex items-center justify-center ">
              {item.number}
            </Text>

            <div className="w-full mx-2  text-[1.1vw] bg-[url(/Logo/D2.png)]  bg-no-repeat bg-cover object-cover text-[#ADADAD] flex items-center justify-center ">
              <Input
                className="w-full outline-none bg-[#35353500]"
                value={formData[item.text]}
                name={item.text}
                onChange={(e) =>
                  setformData({ ...formData, [item.text]: e.target.value })
                }
              />
            </div>
          </div>
        ))}
      </div>

      <div className="w-full my-5  flex items-center justify-between ">
        <ButtonStage
          text="ادامه"
          OnClick1={() => setPopUp("9")}
          OnClick2={() => setPopUp("7")}
        />
      </div>
    </div>
  );
}

export default Stagefive;
