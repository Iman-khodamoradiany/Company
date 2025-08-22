import { Facilities } from "../../../Constans/FacilitiesHomeText/FacilitiesHomeText"
import Icon from "../../Atom/Icon/Icon"
import Text from "../../Atom/Text/Text"

function FacilitiesHomeM() {

  const getAdress=JSON.parse(localStorage.getItem("StageFour"))
  const aray=getAdress&&Object.entries(getAdress)

    return (
        <div className="grid grid-cols-2 [direction:rtl] gap-5 ">
            {aray?
            Facilities.map((item)=>(
                <div className="flex items-center justify-start gap-2 text-[#353535] text-[1.1vw] ">
                    <Icon Name={item.icon} />
                    <Text>{item.text}</Text>
                    {aray.slice(item.start,item.end).map((item)=>(
                        <Text>{item[1]}</Text>
                     ))}
                </div>
            ))
            :
            Facilities.map((item)=>(
                <div className="flex items-center justify-start gap-2 text-[#353535] text-[1.1vw] ">
                    <Icon Name={item.icon} />
                    <Text>{item.text}</Text>
                    <Text>{item.title}</Text>
                </div>
            ))
            }
        </div>
    )
}

export default FacilitiesHomeM
