
import { Link } from "react-router";
import { SliderRentBrands } from "../../../Constans/SliderRents/SliderRentsBrand";
import Icon from "./../../Atom/Icon/Icon";
import Img from "./../../Atom/Img/Img";
import Text from "../../Atom/Text/Text";
import Button from "../../Atom/Button/Button";
import { MyContext } from "../../../../App";
import { useContext, useEffect, useState } from "react";
import { Card as infocard } from "../../../../Features/Bussins_Card/Bussins_Card";
import { useDispatch } from "react-redux";

import { motion, AnimatePresence } from "framer-motion";

function RealStatetwoChild() {
    const { Card, setCard, setPopUp } = useContext(MyContext);
    const dispatch = useDispatch();
    const [slice, setslice] = useState(9);
    const [open, setopen] = useState(false);

    useEffect(() => {
        if (open) {
            setslice(21);
        } else {
            setslice(12);
        }
    }, [open]);

    function HandelButton(info) {
        setPopUp(true);
        setCard(true);
        dispatch(infocard(info));
    }

    return (
        <>

            <div className="w-full  flex flex-col items-center justify-center">
                
                <div className="w-full  grid grid-cols-3 gap-3">
                    <AnimatePresence>
                        {SliderRentBrands.slice(0, slice).map((item) => (
                        <Link to={`/RealState/${item.id}`}>
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -50 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="w-[95%] bg-white mx-auto rounded-[10px] border-[#E1E1E1] border-[2px] shadow-[0px_1px_2px_0px_#0000000D,0px_2px_8px_0px_#00000014]"
                            >
                                <Button
                                    onClick={() => HandelButton(item)}
                                    className="flex justify-center items-center flex-col w-full z-50"
                                >
                                    <div className="w-full flex flex-col items-center justify-center gap-[15px] py-[30px]">
                                        <div className="w-full flex items-center justify-center">
                                            <Img
                                                src={item.img}
                                                className="flex items-center justify-center"
                                            />
                                        </div>

                                        <div className="flex items-center justify-center gap-2">
                                            <Icon Name={item.icon} />
                                            <Text style="text-[#212121] text-[1.5vw] font-bold text-center ">
                                                {item.name}
                                            </Text>
                                        </div>
                                        <Text style="text-[#353535] text-[1.2vw] text-center ">
                                            {item.text}
                                        </Text>
                                        <div className="text-[#717171] text-[1.1vw] text-center flex flex-col gap-4">
                                            <Text>{item.number1}</Text>
                                            <Text>{item.number2}</Text>
                                            <Text>{item.number3}</Text>
                                        </div>
                                    </div>
                                </Button>
                            </motion.div>
                        </Link>
                        ))}
                    </AnimatePresence>
                </div>

                <div className="w-[20%] h-[100px] flex justify-center items-end">

                     
                      
                    <Button
                        onClick={() => setopen(!open)}
                        className="w-[100%] p-4 rounded-[8px] border-none text-white bg-[#CB1B1B]"
                    >
                        {open ? "مشاهده کمتر" : "مشاهده بیشتر"}
                    </Button>
                </div>
            </div>

        </>
    );
}

export default RealStatetwoChild;


