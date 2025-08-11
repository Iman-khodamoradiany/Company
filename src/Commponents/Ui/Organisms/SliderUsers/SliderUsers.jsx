
import SliderUserM from '../../Molecules/SliderUser/SliderUserM';
import Text from './../../Atom/Text/Text';
function SliderUsers() {
    return (
        <div className="w-full flex items-center justify-center my-[60px]  ">
            <div className="w-full  flex flex-col gap-[20px] px-[10px]   ">
                <Text style="w-full font-semibold text-[2.5vw] [direction:rtl] text-[#212121] ">مشاورین برتر تهران </Text>
                <SliderUserM/>
            </div>
        </div>
    )
}

export default SliderUsers
