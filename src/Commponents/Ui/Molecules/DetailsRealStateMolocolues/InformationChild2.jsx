// import { Rentjs } from "../../../Constans/Rent/Renttjs"
// import { Link } from "react-router";
// import Text from "../../Atom/Text/Text";
// import Icon from "../../Atom/Icon/Icon";
// import Button from "../../Atom/Button/Button";
// import { MyContext } from "../../../../App";
// import { useContext, useEffect, useState } from "react";
// import { Card as infocard } from "../../../../Features/Bussins_Card/Bussins_Card";
// import { useDispatch } from "react-redux";
// function InformationChild2() {

//     const { Card, setCard, setPopUp } = useContext(MyContext);
//     const dispatch = useDispatch();
//     const [slice, setslice] = useState(9);
//     const [open, setopen] = useState(false);

//     useEffect(() => {
//         if (open) {
//             setslice(12);
//         } else {
//             setslice(6);
//         }
//     }, [open]);

//     function HandelButton(info) {
//         setPopUp(true);
//         setCard(true);
//         dispatch(infocard(info));
//     }

//     return (
//         <>
//             <div className=" w-[100%] h-fit   grid grid-cols-3 ">

//                 {Rentjs.slice(0, slice).map((item) => (
//                     <>

//                         <div className=" flex justify-center    ">

//                             <div className="w-[97%] h-[330px] my-3  rounded-t-[16px]    border-2 border-[#E1E1E1] bg-[##F9F9F9] items-center flex-col gap-4 flex rounded-2xl">


//                                 <Link To={`/products/${item.id}`} style={{ backgroundImage: ` url(${item.img})` }} className=" background w-full bg-center bg-cover  h-[50%] rounded-t-[16px]  flex items-start ">

//                                     <div dir="rtl" className="w-[90px] cursor-text h-[30px] rounded-[4px]  flex items-center justify-center [direction:rtl] text-[0.9vw] font-bold text-white bg-[#0C0C0C66]  m-[11px] " >{item.time}</div>

//                                 </Link>


//                                 <div className="w-full px-[15px]  flex   items-end justify-between gap-[5px]">
//                                     <span onClick={() => SavedHandler(item.id)} className={'cursor-pointer'}>
//                                         <Icon Name={"save"} />
//                                     </span>
//                                     <Text className="  text-[#909090] text-[1.1vw] font-semibold">{item.title}</Text>
//                                 </div>

//                                 <div className=" px-[15px]   flex flex-col w-[100%]   items-end ">

//                                     <Text dir="rtl" className=" text-[16px]   text-base/9 font-medium text-[#505050] "> {item.address}</Text>
//                                     <div className=" py-3">

//                                         <h2 dir="rtl" className="  text-[13px] font-bold  text-[#353535] ">{item.price1} </h2>
//                                     </div>
//                                     <div className=" ">

//                                         <h3 dir="rtl" className=" text-[13px] font-bold  text-[#353535] ">{item.price2}</h3>
//                                     </div>

//                                 </div>
//                             </div>
//                         </div>

//                     </>
//                 ))}
//             </div>
//             <div className="w-[20%] h-[100px] flex justify-center items-end">



//                 <Button
//                     onClick={() => setopen(!open)}
//                     className="w-[100%] p-4 rounded-[8px] border-none text-white bg-[#CB1B1B]"
//                 >
//                     {open ? "مشاهده کمتر" : "مشاهده بیشتر"}
//                 </Button>
//             </div>
//         </>
//     );
// }
// export default InformationChild2;


import { Rentjs } from "../../../Constans/Rent/Renttjs";
import { Link } from "react-router-dom";
import Text from "../../Atom/Text/Text";
import Icon from "../../Atom/Icon/Icon";
import Button from "../../Atom/Button/Button";
import { MyContext } from "../../../../App";
import { useContext, useEffect, useState } from "react";
import { Card as infocard } from "../../../../Features/Bussins_Card/Bussins_Card";
import { useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

function InformationChild2() {
    const { Card, setCard, setPopUp } = useContext(MyContext);
    const dispatch = useDispatch();
    const [slice, setslice] = useState(6);
    const [open, setopen] = useState(false);

    useEffect(() => {
        if (open) {
            setslice(12);
        } else {
            setslice(6);
        }
    }, [open]);

    function HandelButton(info) {
        setPopUp(true);
        setCard(true);
        dispatch(infocard(info));
    }

    return (
        <>
            <div className="w-full h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <AnimatePresence>
                    {Rentjs.slice(0, slice).map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -40 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="flex justify-center"
                        >
                            <div className="w-[97%] h-[330px] my-3 rounded-t-[16px] border-2 border-[#E1E1E1] bg-[#F9F9F9] flex flex-col items-center gap-4 rounded-2xl">
                                <Link
                                    to={`/products/${item.id}`}
                                    style={{ backgroundImage: `url(${item.img})` }}
                                    className="w-full bg-center bg-cover h-[50%] rounded-t-[16px] flex items-start"
                                >
                                    <div
                                        dir="rtl"
                                        className="w-[90px] h-[30px] rounded-[4px] flex items-center justify-center text-[0.9vw] font-bold text-white bg-[#0C0C0C66] m-[11px]"
                                    >
                                        {item.time}
                                    </div>
                                </Link>

                                <div className="w-full text-[1.1vw] font-semibold  text-[#909090]  px-[15px] flex items-end justify-between gap-[5px]">
                                 

                                    <span className="cursor-pointer">
                                        <Icon Name={"save"} />
                                    </span>
                                    <Text >
                                        {item.title}
                                    </Text>
                                    
                                </div>

                                <div className="px-[15px] flex flex-col w-full items-end">
                                    <div  className="text-[16px] text-base/9 font-medium text-[#505050]">
                                        <Text
                                            dir="rtl"
                                           
                                        >
                                            {item.address}
                                        </Text>
                                    </div>
                                    <div className="py-3 text-[13px] font-bold text-[#353535]">
                                        <h2
                                            dir="rtl"

                                        >
                                            {item.price1}
                                        </h2>
                                    </div>
                                    <div>
                                        <h3
                                            dir="rtl"
                                            className="text-[13px] font-bold text-[#353535]"
                                        >
                                            {item.price2}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <div className="w-[20%] h-[100px] flex justify-center items-end">
                <Button
                    onClick={() => setopen(!open)}
                    className="w-full p-4 rounded-[8px] border-none text-white bg-[#CB1B1B] transition duration-300 hover:bg-red-700"
                >
                    {open ? "مشاهده کمتر" : "مشاهده بیشتر"}
                </Button>
            </div>
        </>
    );
}
export default InformationChild2;
