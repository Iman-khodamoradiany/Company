import InformationChild from "./InformationChild"
import InformationChild2 from "./InformationChild2"

function InformationStateParent() {
    return (
        <>
            <div className="w-[100%]    flex flex-col    ">

                <div className="w-[100%]  py-3 flex flex-col items-end  justify-end  ">
                  <InformationChild/>
                </div>
                <div className="w-[100%]   flex  justify-center flex-col items-center   ">
                   <InformationChild2/>
                </div>

            </div>
        </>
    )
}
export default InformationStateParent