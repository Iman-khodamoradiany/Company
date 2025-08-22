import Text from "../../Atom/Text/Text"
import { useState } from "react";
import CustomDropdown from "../../../HOC/DropDown/DropDown";
import { Meterage } from "../../../Constans/DropDown/DropDown";

import { Country } from "../../../Constans/DropDown/DropDown";
import { Price } from "../../../Constans/DropDown/DropDown";
import { Area } from "../../../Constans/DropDown/DropDown";
function InformationChild() {
    const [activ, setactiv] = useState();

    return (
        <>
            <div className=" w-[100%]   flex  justify-end flex-col items-end ">
                <div className="text-[1.9vw]  p-2 font-semibold text-[#353535] pb-5" >

                    <Text>آگهی‌های املاک توسی</Text>
                </div>
                <div className="flex justify-center p-2 items-center  gap-2">
                    <div
                        className={
                            activ == "2"
                                ? " h-[50px] flex  w-[100px] items-center justify-center  text-[#505050]  shadow-[0px_0px_0px_3px_#0085FF30]  border-[1px] rounded-[8px]   "
                                : " h-[50px] flex  w-[100px] items-center justify-center  text-[#505050]  border-[#ADADAD] border-[1px] rounded-[8px]   "
                        }
                        onClick={() => setactiv("2")}
                    >
                        <CustomDropdown option={Meterage} TextDefulte="متراژ" />
                    </div>
                    <div
                        className={
                            activ == "3"
                                ? " h-[50px] flex  w-[100px] items-center justify-center   text-[#505050]  shadow-[0px_0px_0px_3px_#0085FF30]  border-[1px] rounded-[8px]   "
                                : " h-[50px] flex  w-[100px] items-center justify-center   text-[#505050]  border-[#ADADAD] border-[1px] rounded-[8px]   "
                        }
                        onClick={() => setactiv("3")}
                    >
                        <CustomDropdown option={Price} TextDefulte="قیمت" />
                    </div>
                    <div
                        className={
                            activ == "4"
                                ? " h-[50px] flex  w-[110px] items-center justify-center   text-[#505050]  shadow-[0px_0px_0px_3px_#0085FF30]  border-[1px] rounded-[8px]   "
                                : " h-[50px] flex  w-[110px] items-center justify-center   text-[#505050]  border-[#ADADAD] border-[1px] rounded-[8px]   "
                        }
                        onClick={() => setactiv("4")}
                    >
                        <CustomDropdown option={Country} TextDefulte="نوع ملک" />
                    </div>
                    <div
                        className={
                            activ == "5"
                                ? " h-[50px] flex  w-[100px] items-center justify-center   text-[#505050]  shadow-[0px_0px_0px_3px_#0085FF30]  border-[1px] rounded-[8px]   "
                                : " h-[50px] flex  w-[100px] items-center justify-center   text-[#505050]  border-[#ADADAD] border-[1px] rounded-[8px]   "
                        }
                        onClick={() => setactiv("5")}
                    >
                        <CustomDropdown option={Area} TextDefulte="منطقه" />
                    </div>
                    <div
                        className={
                            activ == "5"
                                ? " h-[50px] flex  w-[100px] items-center justify-center   text-[#505050]  shadow-[0px_0px_0px_3px_#0085FF30]  border-[1px] rounded-[8px]   "
                                : " h-[50px] flex  w-[100px] items-center justify-center   text-[#505050]  border-[#ADADAD] border-[1px] rounded-[8px]   "
                        }
                        onClick={() => setactiv("6")}
                    >
                        <CustomDropdown option={Area} TextDefulte="شهر " />
                    </div>
                </div>

            </div>
        </>
    )
}

export default InformationChild