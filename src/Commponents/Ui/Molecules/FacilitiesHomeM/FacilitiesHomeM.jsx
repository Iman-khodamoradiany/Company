import { Facilities } from "../../../Constans/FacilitiesHomeText/FacilitiesHomeText"
import Icon from "../../Atom/Icon/Icon"
import Text from "../../Atom/Text/Text"

function FacilitiesHomeM() {
    return (
        <div className="grid grid-cols-2 [direction:rtl] gap-5 ">
            {Facilities.map((item)=>(
                <div className="flex items-center justify-start gap-2 text-[#353535] text-[1.1vw] ">
                    <Icon Name={item.icon} />
                    <Text>{item.text}</Text>
                    <Text>{item.title}</Text>
                </div>
            ))}
        </div>
    )
}

export default FacilitiesHomeM
