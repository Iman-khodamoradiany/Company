import Button from "../../Atom/Button/Button"
import Icon from "../../Atom/Icon/Icon"
import LinkPage from "../../Atom/LinkPage/LinkPage"
import Ul from "../../Molecules/Ul/Li"
import { MyContext } from "../../../../App"
import { ListNavbar } from "../../../Constans/ListNavbar/ListNavbar"
import { useContext } from "react"
function DefaulrHeader2() {
    const {Token} = useContext(MyContext)
    return (

        <nav className={`flex justify-between items-center z-20 w-full left-[50%] top-[35px] rounded-0 bg-[#F9F9F9] mx-auto px-5 py-4 mt-10 rounded-0 lg:w-[85%]  lg:top-[50px] lg:rounded-xl `} dir="rtl">
            <div className="w-[25%] block lg:hidden">
                <Icon Name={'Burger'}></Icon>
            </div>
            <div className="flex justify-center items-center gap-10 w-1/2 lg:w-[75%] lg:justify-start">
                <LinkPage To={'/'}>
                    <Icon style={'w-[100px]'} Name={"Logo"}></Icon>
                </LinkPage>
                <Ul style={' hidden lg:flex justify-center items-center gap-6 text-[#505050] Navbarli'} items={ListNavbar} Fal={true}></Ul>
            </div>
            <div className="flex justify-end gap-8  w-[25%]">
                {Token ? <Button className="flex justify-center items-center gap-2 text-[#505050]"><Icon Name={'Profile'}></Icon><Text>پویا موحد</Text></Button> : <Button onClick={() => setPopUp(!PopUp)} className={'text-[1.2vw] text-[#505050] font-bold'}>ورود</Button>}
                <Button className={'text-[1vw] font-bold border-[1px] border-[#CB1B1B] text-[#CB1B1B] hover:bg-[#CB1B1B] hover:text-white transition-all duration-200 ease-linear w-[7.5vw] h-[3.5vw] rounded-lg flex justify-center items-center'}>ثبت آگاهی</Button>
            </div>
        </nav>

    )
}
export default DefaulrHeader2