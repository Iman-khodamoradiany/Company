import MoreListUnder from "../../Molecules/MoreListUnder/MoreListUnder";
import Slogan from "../../Molecules/Slogan/Slogan";
import { Services } from "../../../Constans/Services/Services";
import Img from "../../Atom/Img/Img";
import { PersonLink } from "../../../Constans/PersonLink/PersonLInk";
import { Info } from "../../../Constans/Info/Info";
function Ffotter() {
    return (
        <section className="w-full flex justify-between items-start gap-[90px]">
            <div className="w-[25%] flex justify-center items-start">
                <Slogan />
            </div>
            <div className="w-[25%] flex justify-center items-start">
                <MoreListUnder style={'text-[0.8vw]'} item1={Services} header={'خدمات'} more={false} />
            </div>
            <div className="w-[25%] flex justify-center items-start">
                <MoreListUnder style={'text-[0.8vw]'} item1={Info} header={'اطلاعات'} more={false} />
            </div>
            <div className="w-[25%] flex justify-end items-start">
                <div className="flex justify-between items-center flex-col h-[280px]">
                    <MoreListUnder style={'text-[0.8vw]'} item1={PersonLink} header={'حساب کاربری'} more={false} />
                    <Img className='w-[20%]' src='/Logo/FooterLogo.jpg' />
                </div>
            </div>
        </section>
    )
}
export default Ffotter;