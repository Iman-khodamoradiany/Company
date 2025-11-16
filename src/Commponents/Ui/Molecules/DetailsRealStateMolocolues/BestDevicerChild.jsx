import Button from "../../Atom/Button/Button"
import Icon from "../../Atom/Icon/Icon"
import Img from "../../Atom/Img/Img"
import Text from "../../Atom/Text/Text"
import { AnimatePresence } from "motion/react"
import { useDispatch } from "react-redux"
import { useContext } from "react"
import { MyContext } from "../../../../App"
import { useState } from "react"
import { useEffect } from "react"
import { Link, Links } from "react-router"
import { motion } from "framer-motion";

import { BestDevicejs } from "../../../Constans/BestDevice/BestDevicejs"
import LinkPage from "../../Atom/LinkPage/LinkPage"
function BestDevicerChild() {

    const { Card, setCard, setPopUp } = useContext(MyContext);
    const dispatch = useDispatch();
    const [slice, setslice] = useState(9);
    const [open, setopen] = useState(false);

    useEffect(() => {
        if (open) {
            setslice(12);
        } else {
            setslice(12);
        }
    }, [open]);

    function HandelButton(info) {
        setCard(true);
        dispatch(infocard(info));
    }
    return (
        <>

            <div className="w-[100%] flex  flex-col justify-end  ">

                <div className=" w-[100%] text-[1.7vw] font-semibold  flex text-[#353535] justify-end p-1  ">
                    <Text>مشاورین توسی</Text>
                </div>
                <div className="w-full  flex flex-col items-center justify-center">

                    <div dir="rtl" className="w-full  grid grid-cols-6 gap-3">
                        <AnimatePresence>
                            {BestDevicejs.slice(0, slice).map((item) => (
                                <Link to={`/RealState/${item.id}`}>
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -50 }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                        className="w-[100%]   bg-[#F9F9F9] mx-auto rounded-[10px] border-[#E1E1E1] "
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

                                                <div className="flex  items-center justify-center gap-2">

                                                    <Text style="text-[#212121] text-[1.5vw] font-bold text-center ">

                                                        {item.name}

                                                        <LinkPage To={"/advicer"}>

                                                        <div className={item.style}>

                                                            <Text>

                                                                {item.name1}
                                                            </Text>
                                                            <Text>
                                                                {item.name2}

                                                            </Text>

                                                        </div>
                                                        </LinkPage>
                                                    </Text>
                                                </div>

                                            </div>
                                        </Button>
                                    </motion.div>
                                </Link>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </>

    )
}
export default BestDevicerChild