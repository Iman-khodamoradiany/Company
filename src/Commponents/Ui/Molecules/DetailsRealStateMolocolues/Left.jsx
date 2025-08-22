import Icon from "../../Atom/Icon/Icon"
import Text from "../../Atom/Text/Text"
function Left() {
    return (
        <>
            <div className="w-[100%] flex  flex-col gap-7 h-[60%]  ">
                <div className="w-[100%] flex pt-6">
                    <Icon Name={"save"} />
                    <Icon Name={"done"} />

                </div>
                <div className="w-[75%] text-[#505050]  flex justify-center flex-col p-10 gap-4 rounded-[16px] border-2 shadow-md border-[#E1E1E1] items-center ">
                    <Text>میزان رضایتمندی کاربران: ۴/۹ از ۵</Text>
                    <div className="flex gap-2">

                    <Text>گزارش تخلف </Text> <Icon Name={"error"}/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Left