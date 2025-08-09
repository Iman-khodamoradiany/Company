import Icon from "../../Atom/Icon/Icon";
import Text from "../../Atom/Text/Text";
function Slogan() {
    return (
        <div className="flex justify-start text-[#353535] items-start flex-col gap-5">
            <div className="w-[55%] flex justify-end">
                <Icon Name={'BigLogo'} />
            </div>
            <Text style={'text-[1.2vw] font-bold'}>تجربه لذت خانه دار شدن سریع و آسان</Text>
            <div className="text-[0.9vw] w-[90%]">
                <Text>سقفینو پلی است تا به سرعت در بین هزاران آگهی ثبت‌شده جست‌وجو کنید. </Text>
                <Text>ملک مورد نظر را پیدا کنید و برای انجام معامله‌ای مطمئن، با مشاورین املاک معتمد و متخصص شهرتان در ارتباط باشید.</Text>
            </div>
        </div>
    )
}

export default Slogan;