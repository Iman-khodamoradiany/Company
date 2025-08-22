import Text from "../../Atom/Text/Text"
import InputRent from "../InputRent/InputRent"

function RealStateFirstChild() {
    return (
        <>
            <div className=" w-[100%] text-[1.8vw] flex justify-end  font-semibold text-[#353535] ">
                <Text>  املاک و مستغلات </Text>

            </div>
            <div className="w-[80%]  flex justify-end  mt-5" >
                <InputRent/>
            </div>
        </>
    )
}
export default RealStateFirstChild