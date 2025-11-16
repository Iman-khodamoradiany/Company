import Lihidden from "../Lihidden/Lihidden";
import Button from "../../Atom/Button/Button";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import '../../Organisms/Navbar/Navbar.css'


function MoreListUnder({ item1, items2, header, more = true , style }) {

    const [showMore, setShowMore] = useState(false);

    function handleMoreClick() {
        setShowMore(!showMore);
    }
    return (
        <div className="flex justify-start items-start flex-col Navbarli">
            <Lihidden items={item1} header={header} style={style}/>
            <AnimatePresence initial={false}>
                {showMore && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                    >
                        <Lihidden items={items2} style={style}/>
                    </motion.div>
                )}
            </AnimatePresence>
            {more ?
                <div className="flex justify-center items-center gap-3 mt-2 cursor-pointer" onClick={handleMoreClick}>
                    <Button className={'text-[#871212] text-[1vw]'}>
                        مشاهده بیشتر
                    </Button>
                    <motion.svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"
                        initial={{ rotate: 0 }}
                        animate={{ rotate: showMore ? -180 : 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}>
                        <path d="M8.00026 8.00003C7.41693 8.00003 6.83359 7.77503 6.39193 7.33337L0.958594 1.90003C0.716927 1.65837 0.716927 1.25837 0.958594 1.0167C1.20026 0.775033 1.60026 0.775033 1.84193 1.0167L7.27526 6.45003C7.67526 6.85003 8.32526 6.85003 8.72526 6.45003L14.1586 1.0167C14.4003 0.775033 14.8003 0.775033 15.0419 1.0167C15.2836 1.25837 15.2836 1.65837 15.0419 1.90003L9.60859 7.33337C9.16693 7.77503 8.58359 8.00003 8.00026 8.00003Z" fill="#871212" />
                    </motion.svg>
                </div> :
                <div className="flex justify-center items-center gap-3 cursor-pointer" onClick={handleMoreClick}>
                </div>
            }
        </div>
    )
}

export default MoreListUnder