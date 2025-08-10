import Button from "../../Atom/Button/Button";
import Icon from "../../Atom/Icon/Icon";
import Input from "../../Atom/Input/Input";
import Line from "../../Atom/Line/Line";
function FormSearch(){
    return(
        <form className="bg-white px-6  text-black flex justify-center items-center flex-col w-11/12 mx-auto rounded-[12px]  py-3">
             <div className="w-full flex justify-between" dir="rtl">
                <Button style={'w-1/2 text-[1.5vw] text-[#353535] border-b-[2px] pb-3 focus:border-b-[#CB1B1B] focus:border-b-[2px]'}>اجاره</Button>
                <Button style={'w-1/2 text-[1.5vw] text-[#353535] border-b-[2px] focus:border-b-[#CB1B1B] focus:border-b-[2px]'}>خرید</Button>
             </div>
             <div className="flex justify-start items-center gap-2 h-[55px] w-full" dir="rtl">
                <Icon Name={'Search'} />
                <Input style={'w-full h-full outline-none text-[#353535] placeholder:text-[1.5vw]'} title={'شهر مورد نظر را جست‌وجو کنید'}/>
             </div>
        </form>
    )
}

export default FormSearch;