
import Text from '../../Atom/Text/Text';
import { DescriptionAray } from './../../../Constans/DescriptionAray/DescriptionAray';

function DescriptionM() {
    return (
        <div className="flex flex-col items-start justify-center text-[1.4vw] text-[#353535]  [direction:rtl] gap-4">
            {DescriptionAray.map((item)=>(
                <Text>{item.Text}</Text>
            ))}
        </div>
    )
}

export default DescriptionM
