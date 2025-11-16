
import Text from '../../Atom/Text/Text';
import { MapHomeTextAray } from './../../../Constans/MapHomeText/MapHomeText';
function MapHomeText() {

    return (
        <div className="flex items-center justify-center my-8">
            {MapHomeTextAray.map((item)=>(
                <div className={item.class}>
                    <Text style="text-[#212121] text-[1vw]  ">{item.text}</Text>
                    <Text style="text-[#212121] text-[1vw] font-bold ">{item.title}</Text>
                </div>
            ))}
        </div>
    )
}

export default MapHomeText
