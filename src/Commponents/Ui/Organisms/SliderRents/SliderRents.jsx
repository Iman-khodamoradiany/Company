import Text from "../../Atom/Text/Text"
import SliderOptionLeft from "../../Molecules/SliderOptionLeft/SliderOptionLeft"

function SliderRents({text,Modules,staylParent,staylText,stayl,SlidesPerView,...props}) {
    return (
        <div className="w-full  flex items-center justify-center ">
            <div className="w-full flex flex-col gap-[30px]">
                <Text style={staylText} >{text}</Text>
                <SliderOptionLeft staylParent={staylParent} stayl={stayl} {...props} SlidesPerView={SlidesPerView} Modules={Modules}/>
            </div>
        </div>
    )
}

export default SliderRents
