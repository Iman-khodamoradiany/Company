import Text from "../../Atom/Text/Text";
import FormSearch from "../../Molecules/FormSearch/FormSearch";

function Header() {
    return (
        <header className="text-center text-[#EDEDED] font-bold flex justify-center h-[70%] gap-[70px] items-center flex-col w-full">
            <section>
                <Text style={'text-[4vw] text-[##EDEDED]'}>سقفینو؛ سقفی برای همه</Text>
                <Text style={'text-[3vw] text-[#EDEDED]'}>آسانی و سرعت در پیدا کردن یک سقف تازه را در سقفینو تجربه کنید</Text>
            </section>
            <section className="w-3/5">
                <FormSearch />
            </section>
        </header>
    )
}

export default Header;