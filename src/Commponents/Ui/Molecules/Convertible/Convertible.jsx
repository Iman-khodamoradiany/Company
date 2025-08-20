import Icon from "../../Atom/Icon/Icon"
import Input from "../../Atom/Input/Input"
import Text from "../../Atom/Text/Text"

function Convertible() {
    return (
        <div className="w-full flex items-center justify-start [direction:rtl] text-[#353535] gap-2 ">
            <Input type="checkbox" className="w-[16px] h-[16px] border-[#353535]  " />
            <Text>قابل تبدیل</Text>
            <Icon Name="cheng"/>
        </div>
    )
}

export default Convertible
