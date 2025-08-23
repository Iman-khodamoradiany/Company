import Left from "./Left"
import Rigth from "./Rigth"

function RealStateDetailsUnderHeaderParent() {
    return (
        <>
            <div className="w-[35%]  flex flex-col gap-3 ">
                <Left />
            </div>
            <div className="  w-[50%]">
                <Rigth/>
            </div>
        </>
    )
}
export default RealStateDetailsUnderHeaderParent