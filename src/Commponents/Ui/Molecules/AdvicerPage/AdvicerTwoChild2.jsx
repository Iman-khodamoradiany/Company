import { Link } from "react-router";
import { SliderRentUsers } from "../../../Constans/SliderRents/SliderRentUsers";
import Img from "../../Atom/Img/Img";
import Text from "../../Atom/Text/Text";
import Button from "../../Atom/Button/Button";
import { MyContext } from "../../../../App";
import { useContext, useEffect, useState } from "react";
import { Card as infocard } from "../../../../Features/Bussins_Card/Bussins_Card";
import { useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

function AdvicertwoChild() {
  const { setCard, setPopUp } = useContext(MyContext);
  const dispatch = useDispatch();
  const [slice, setSlice] = useState(9);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setSlice(open ? 20 : 12);
  }, [open]);

  function handleButton(info) {
    setPopUp(true);
    setCard(true);
    dispatch(infocard(info));
  }

  
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.9, y: 20 },
  };

  return (
    <>
      <div className="w-full flex-col flex items-center justify-center">
        <div className="w-full grid grid-cols-4 gap-3">
          <AnimatePresence>
            {SliderRentUsers.slice(0, slice).map((item) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3 }}
              >
                <Link to={`/Device/${item.id}`}>
                  <div className="w-full bg-white rounded-[10px] border-[#E1E1E1] border-[2px] shadow-[0px_1px_2px_0px_#0000000D,0px_2px_8px_0px_#00000014]">
                    <div className="w-full flex flex-col items-center justify-between gap-2 py-[20px]">
                      <Img
                        src={item.image}
                        className="w-[120px] h-[120px] rounded-full object-cover flex items-center justify-center"
                      />
                      <div className="text-center">
                        <Text style="text-[1.5vw] text-[#212121] font-bold">
                          {item.name}
                        </Text>
                        <Text style="text-[1.2vw] text-[#717171]">{item.role}</Text>
                        <Text style="text-[1.2vw] text-[#717171] my-2">
                          {item.rating}
                        </Text>
                        <Button
                          onClick={() => handleButton(item)}
                          className="border-[#CB1B1B] hover:bg-[#CB1B1B] hover:text-white transition-all duration-300 ease-linear font-bold border-[2px] text-[#CB1B1B] text-center py-[10px] px-[30px] rounded-[8px]"
                        >
                          نمایش پروفایل
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <div className="w-[20%] h-[100px] flex justify-center items-end">
        <Button
          onClick={() => setOpen(!open)}
          className="w-[100%] p-4 rounded-[8px] border-none text-white bg-[#CB1B1B]"
        >
          {open ? "مشاهده کمتر" : "مشاهده بیشتر"}
        </Button>
      </div>
    </>
  );
}

export default AdvicertwoChild;



