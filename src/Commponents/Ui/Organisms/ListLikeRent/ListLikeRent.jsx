import Text from "../../Atom/Text/Text"
import ListLinkesPart from "../../Molecules/ListLinkesPart/ListLinkesPart"

function ListLikeRent() {
    return (
        <div className="w-full flex items-center justify-center my-[50px] ">
            <div className="w-[85%] flex items-center justify-end ">
                <div className="flex flex-col items-end bg-[#F9F9F9] py-[20px] pr-[30px] gap-[20px] rounded-lg  justify-center">
                    <Text style="text-[#353535] text-[1.7vw] font-bold " >لینک‌های مرتبط</Text>
                    <ListLinkesPart/>
                </div>
            </div>
        </div>
    )
}

export default ListLikeRent
