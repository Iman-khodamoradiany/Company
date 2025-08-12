import Icon from "../../Atom/Icon/Icon"
import Input from "../../Atom/Input/Input"

function InputRent() {
    return (
        <div className="w-[620px]  bg-white  flex items-center justify-end p-[20px] gap-2 border-[#ADADAD]  border-[1px] rounded-[8px]   ">
            <Input title="شهر مورد نظر را اضافه کنید" style="w-[75%] text-[#505050]  outline-none [direction:rtl]   " />
            <Icon Name="Search" />
        </div>
    )
}

export default InputRent
