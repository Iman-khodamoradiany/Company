import Icon from "../../Atom/Icon/Icon"
import Ul from "../../Molecules/Ul/Li"
import Button from "../../Atom/Button/Button"
import './Navbar.css'
import { useContext, useState } from "react"
import { MyContext } from "../../../../App"
import Text from "../../Atom/Text/Text"
import { ListNavbar } from "../../../Constans/ListNavbar/ListNavbar"
function Navbar() {
    const { PopUp, setPopUp, Token } = useContext(MyContext)
    return (
        <nav className="flex justify-between items-center z-10 w-full left-[50%] top-[35px] rounded-0 bg-white px-5 py-4 rounded-0 lg:w-[85%] lg:absolute lg:top-[80px] lg:rounded-xl lg:translate-x-[-50%] lg:translate-y-[-50%]" dir="rtl">
            <div className="w-[25%] block lg:hidden">
                <Icon Name={'Burger'}></Icon>
            </div>
            <div className="flex justify-center items-center gap-10 w-1/2 lg:w-[75%] lg:justify-start">
                <Icon style={'w-[100px]'} Name={"Logo"}></Icon>
                <Ul style={' hidden lg:flex justify-center items-center gap-6 text-[#505050] Navbarli'} items={ListNavbar} Fal={true}></Ul>
            </div>
            <div className="flex justify-end gap-8  w-[25%]">
                {Token ? <Button className="flex justify-center items-center gap-2 text-[#505050]"><Icon Name={'Profile'}></Icon><Text>پویا موحد</Text></Button> : <Button onClick={() => setPopUp(!PopUp)} className={'text-[1.2vw] text-[#505050] font-bold'}>ورود</Button>}
                <Button className={'text-[1vw] font-bold border-[1px] border-[#CB1B1B] text-[#CB1B1B] hover:bg-[#CB1B1B] hover:text-white transition-all duration-200 ease-linear w-[8vw] h-[3.5vw] rounded-[10px] flex justify-center items-center'}>ثبت آگاهی</Button>
            </div>
        </nav>
    )
}
export default Navbar