import Left1 from "../DetailsDeviceMoecules/Left1"
import Rigth1 from "../DetailsDeviceMoecules/Rigth1"
function ParentUnderHeader() {
    return (
        <>
            <div className="w-[35%]  flex flex-col gap-3 ">
                <Left1 />
            </div>
            <div className="  w-[50%]">
                <Rigth1 />
            </div>
        </>
    )
}
export default ParentUnderHeader