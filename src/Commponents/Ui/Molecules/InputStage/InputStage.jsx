import Input from "../../Atom/Input/Input"
import Text from "../../Atom/Text/Text"

function InputStage({placeholder,text,...props}) {
    return (
        <div className=" flex items-end justify-center flex-col ">
            <Text style="text-[#353535] text-[1.2vw] font-meduim ">{text}</Text>
            <div  className="w-[255px] h-[50px] bg-[#FFFFFF] flex items-center justify-end border-[#ADADAD] border-[1px] rounded-lg ">
                <Input placeholder={placeholder} {...props} className="w-full outline-none text-end mx-3 text-[#ADADAD] text-[0.9vw] font-semibold " />
            </div>
        </div>
    )
}

export default InputStage
