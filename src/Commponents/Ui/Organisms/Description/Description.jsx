import Text from "../../Atom/Text/Text"
import DescriptionM from "../../Molecules/DescriptionM/DescriptionM"

function Description() {

    

    return (
        <div className="w-full flex items-center justify-center my-[50px] ">
            <div className="w-[85%]  flex items-end flex-col  justify-end  gap-5  ">
                <Text style="text-[#212121] text-[1.7vw] font-bold ">توضیحات</Text>
                <DescriptionM/>
            </div>
        </div>
    )
}

export default Description
