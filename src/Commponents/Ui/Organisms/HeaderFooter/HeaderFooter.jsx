import Text from "../../Atom/Text/Text";
import MoreListUnder from "../../Molecules/MoreListUnder/MoreListUnder";
import { Market } from "../../../Constans/Markets/Markets";
import { MoreSearch } from "../../../Constans/MoreSearch/MoreSearch";
import { MorePoint } from "../../../Constans/MorePoint/MorePoint";
import { Contact } from "../../../Constans/Contact/Contact";
import UlIcon from "../../Molecules/UlIcon/UlIcon";
import './HeaderFooter.css'

function HeaderFooter() {
    return (
        <section className="flex justify-center Navbarli items-center flex-col gap-10 w-full" dir="rtl">
            <div>
                <Text style={'text-[2.5vw] font-bold text-[#212121]'}>سقفینو؛ سقفی ایده‌آل برای زندگی</Text>
            </div>
            <div className="w-full flex justify-between items-start gap-[90px]">
                <div className="w-[25%] flex justify-center items-start">
                    <MoreListUnder style={'text-[0.8vw]'} item1={Market} items2={Market} header={'بازارهای املاک و مستغلات'} />
                </div>
                <div className="w-[25%] flex justify-center items-start">
                    <MoreListUnder style={'text-[0.8vw]'} item1={MoreSearch} items2={MoreSearch} header={'بیشترین جست‌وجوها'} />
                </div>
                <div className="w-[25%] flex justify-center items-start">
                    <MoreListUnder style={'text-[0.8vw]'} item1={MorePoint} items2={MorePoint} header={'پرامتیازترین مشاوران املاک'} />
                </div>
                <div className="w-[25%] flex justify-center items-start">
                    <UlIcon style={'text-[#717171] flex flex-col gap-1 justify-center items-start text-[1vw]'} headerStyle={'text-[#353535] text-[1.2vw] mb-2'} items={Contact} header={'با ما در ارتباط باشید'} />
                </div>
            </div>
        </section>
    )
}

export default HeaderFooter;