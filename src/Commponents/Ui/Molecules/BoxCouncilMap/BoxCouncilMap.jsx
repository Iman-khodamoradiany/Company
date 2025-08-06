
import Text from '../../Atom/Text/Text';
import { ArayCouncil } from './../../../Constans/BoxCouncil/BoxCouncil';
import Img from './../../Atom/Img/Img';
function BoxCouncilMap() {
    return (
        <div className=" grid grid-cols-3 items-stretch gap-[100px] my-[40px] ">
        {ArayCouncil.map((item)=>(
            <div className='w-[180px]  aspect-[4/3] flex flex-col items-center justify-between gap-5 p-[30px] rounded-[16px] shadow-[0px_2px_8px_0px_#00000014,0px_1px_2px_0px_#0000000D]  '>
                <div className="w-full flex items-center justify-center  ">
                    <Img src={item.img} />
                </div>
                <Text style="text-center text-[#0C0C0C] text-[1vw]  " >{item.text}</Text>
            </div>
        ))}
        </div>
    )
}

export default BoxCouncilMap
