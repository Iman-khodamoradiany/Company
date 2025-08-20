import { useContext } from "react";
import { MyContext } from "../../../../App";
import Icon from "../../Atom/Icon/Icon";
import Img from "../../Atom/Img/Img";

function StageSign() {
  const { PopUp } = useContext(MyContext);

  const ArayStageSign = [
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
  ];
  return (
    <div className="w-full flex justify-center items-center  transition-[4s]  ">
      <div className="w-[80%] h-[2px] flex justify-between  items-center gap-[4 vw] [direction:rtl] bg-[#E1E1E1]  ">
        {ArayStageSign.map((item) => (
          <div className={`  flex justify-center items-center  `}>
            {item.id !== 4 && (
              <div
                className={`w-[80px] h-[2px] flex justify-between  items-center gap-[4 vw] [direction:rtl]  transition-[4s]  ${
                  PopUp == item.id
                    ? "bg-[#F66262]"
                    : PopUp > item.id
                    ? "bg-[#F66262]"
                    : ""
                }   `}
              ></div>
            )}
            <div className={
                  PopUp >= item.id
                    ? ` w-[23px] h-[23px]  rounded-full  flex items-center justify-center ${
                        PopUp > item.id
                          ? "bg-[url(/register/Stepper2.png)] bg-center bg-no-repeat bg-cover"
                          : "bg-[#F66262]"
                      }  `
                    : " w-[23px] h-[23px]  rounded-full  bg-[#EDEDED] flex items-center justify-center "
                }>
              <div
                className={
                  PopUp >= item.id
                    ? ` w-fuul h-full  bg-center rounded-full  bg-no-repeat bg-cover  transition-[4s]  ${
                        PopUp > item.id
                          ? "bg-[url(/register/Stepper2.png)]"
                          : "  loader"
                      } `
                    : " w-fuul h-full  rounded-full  bg-[#EDEDED] "
                }
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StageSign;
