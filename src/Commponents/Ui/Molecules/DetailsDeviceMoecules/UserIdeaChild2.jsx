import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Icon from "../../Atom/Icon/Icon";
import { SliderRentUsers } from "./../../../Constans/SliderRents/SliderRentUsers";
import Img from "../../Atom/Img/Img";
import Text from "../../Atom/Text/Text";
import Button from "./../../Atom/Button/Button";
function UserIdeaChild2() {
    return (
        <>
            <div className="w-full flex items-center gap-5 justify-center">


           
                    {SliderRentUsers. slice(0,4).map((item) => (
                        <div className="w-full   bg-[#FFFFFF] rounded-[10px] border-[#E1E1E1]  border-[2px] shadow-[0px_1px_2px_0px_#0000000D,0px_2px_8px_0px_#00000014]">
                            <div className="w-full  flex flex-col items-center justify-between gap-2 py-[20px]">
                                <div className="   ">
                                    <Img src={item.image} className="w-[120px] h-[120px] rounded-full object-cover flex items-center justify-center " />
                                </div>
                                <div >
                                    <Text style="text-[1.5vw] text-[#212121]  text-center font-bold " >{item.name}</Text>
                                    <Text style="text-[1.2vw] text-[#717171]  text-center" >{item.role}</Text>
                                    <div className=" flex pb-4  flex-col">

                                        <Text style="text-[1.2vw] text-[#717171]    text-center my-2" >{item.rating}</Text>
                                        <div className=" bg-red-600 w-[60%] mx-auto  h-[2px]"></div>
                                    </div>
                                    <div className=" w-[100%]">

                                        <Button className="border-[#CB1B1B]  hover:bg-[#CB1B1B] hover:text-white transition-all duration-300 ease-linear font-bold border-[2px] text-[#CB1B1B] text-center py-[10px] px-[30px] rounded-[8px]  " >نمایش پروفایل</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
               
            </div>
        </>
    )
}
export default UserIdeaChild2