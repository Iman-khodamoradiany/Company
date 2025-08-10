import Text from "../../Atom/Text/Text";
import FormSearch from "../../Molecules/FormSearch/FormSearch";

function Header() {
    return (
        <header className="text-center text-[#EDEDED] font-bold flex justify-end h-[100vh] gap-[70px] items-center flex-col bg-contain lg:bg-cover bg-[url(/Background/Photo.png)] bg-cover bg-no-repeat relative w-full flex justify-start items-end">
            <section className="flex justify-evenly items-center flex-col h-[70%] gap-8">
                <div>
                    <Text style={'text-[3.5vw] text-[#EDEDED] font-[HORIZONTAL]'}>سقفینو؛ سقفی برای همه</Text>
                    <Text style={'text-[2.2vw] text-[#EDEDED] font-[HORIZONTAL]'}>آسانی و سرعت در پیدا کردن یک سقف تازه را در سقفینو تجربه کنید</Text>
                </div>
                <div className="w-full">
                    <FormSearch />
                </div>
            </section>
        </header>
    )
}

export default Header;