import Img from "../../Atom/Img/Img";
import Text from "../../Atom/Text/Text";
import Lihidden from "../../Molecules/Lihidden/Lihidden";
import MoreListUnder from "../../Molecules/MoreListUnder/MoreListUnder";
import Slogan from "../../Molecules/Slogan/Slogan";
import Ffotter from "../Ffooter/Ffooter";
import HeaderFooter from "../HeaderFooter/HeaderFooter";
function Footer() {


    return (
        <footer className="flex justify-center items-center flex-col bg-[#F9F9F9] w-full pt-10" dir="rtl">
            <div className="w-[85%] flex justify-evenly items-center flex-col gap-10">
                <HeaderFooter />
                <div className="w-[110%] h-[2px] bg-[#D9D9D9]"></div>
                <Ffotter />
                <div className="flex justify-center items-end">
                    <Img src='/FooterPhoto/FooterPhoto.png' className='h-full' />
                </div>
            </div>
            <div className="w-full bg-[#EDEDED] text-center py-5">
                <Text style={'text-[#909090]'}>حقوق این سایت متعلق به سقفینو است</Text>
            </div>
        </footer>
    )
}

export default Footer