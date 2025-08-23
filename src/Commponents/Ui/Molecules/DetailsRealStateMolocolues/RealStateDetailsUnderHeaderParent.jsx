import Left from "./Left"
import Rigth from "./Rigth"

function RealStateDetailsUnderHeaderParent({name}) {
    return (
        <>
            <div className="w-[35%]  flex flex-col gap-3 ">
                <Left />
            </div>
            <div className="  w-[50%]">
                <Rigth name={name}/>
            </div>
        </>
    )
}
export default RealStateDetailsUnderHeaderParent