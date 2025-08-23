import Button from "../../Atom/Button/Button"
import Icon from "../../Atom/Icon/Icon"
import Text from "../../Atom/Text/Text"
function Rigth1({role}){
    return(
        <>
                    <div className="w-[100%] flex  flex-col gap-2 h-[90%]  ">
                <div className="w-[100%]  p-2 pt-2 ">
                   <div className="flex gap-2 font-semibold justify-end items-center text-[#353535] text-[2.3vw]">
                    <Icon   Name={"check"}/>
                    <Text > {role}</Text>
                   </div>
                </div>
                <div className="w-[100%]  p-2 pt-2 text-[#505050] text-[1vw] font-semibold  flex justify-end ">
                    <Text>میزان رضایتمندی کاربران: ۴/۹ از ۵</Text>
                </div>
                <div className="w-[100%] text-[#353535] pt-2   p-2 font-semibold text-[2vw]  flex justify-end ">
                    <Text>تخصص ما یافتن خانه دلخواه شماست </Text>
                </div>
                <div className="w-[100%]  p-1 pt-2   gap-1 text-[1.5vw] font-semibold text-[#505050] justify-end flex  ">
                   <div className=" flex justify-center items-center gap-1">

                     <Text>تهران، نیاوران، سه راه یاسر</Text>
                    <Icon Name={"loc"}/>
                   </div>
       
                </div>
                <div className="w-[100%]  text-[1.5vw] font-semibold text-[#505050] p-1 pt-2   gap-1 justify-end flex">
                   <div className=" flex justify-center items-center gap-1">
                     <Text> ۵۰۰ آگهی‌های فعال </Text>
                    <Icon  Name={"home"}/>
                   </div>
                </div>
                <div className="w-[100%]  justify-end flex  p-2">
                    <Button className=" w-[25%] p-2.5 rounded-[8px] text-[#9E1515] border border-[#9E1515] hover:bg-red-900 "><Text> تماس با مشاور </Text></Button>
                </div>
            </div>
        </>
    )
}
export default Rigth1