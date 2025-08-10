import Text from "../../Atom/Text/Text"
import SliderOptionLeft from "../../Molecules/SliderOptionLeft/SliderOptionLeft"

function SliderRents() {
    return (
        <div className="w-full  flex items-center justify-center ">
            <div className="w-[85%] flex flex-col gap-[30px] px-[10px] ">
                <Text style="w-full font-bold text-[2.5vw] [direction:rtl] text-[#212121] " >املاک برتر تهران </Text>
                <SliderOptionLeft/>
            </div>
        </div>
    )
}

export default SliderRents
