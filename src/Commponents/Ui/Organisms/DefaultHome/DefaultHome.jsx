import BoxCouncil from "../BoxCouncil/BoxCouncil";
import HomeList from "../HomeList/HomeList";
import ListO from "../ListUnder/ListO";
import Slider from "../Slider/Slider";

function DefaultHome() {
    return (
        <div className={`w-full h-full mx-auto flex justify-between items-center flex-col gap-[40px] font-bold`}>
            <ListO />
            <HomeList />
            <BoxCouncil />
            <Slider />
        </div>

    )
}
export default DefaultHome;