
import { useContext, useEffect } from "react"
import { useLocation } from "react-router"
import AdvicerFirstChild from "./AdvicerFirstChild2"
import AdvicertwoChild from "./AdvicerTwoChild2"
import DefaulrHeader2 from "../../Organisms/DeafultHeader/DefaultHeader2"
import { MyContext  } from "../../../../App"

function AdvicerParent() {
    const location = useLocation()
  
    const { setheader } = useContext(MyContext)
    useEffect(() => {
        setheader(<DefaulrHeader2 /> )
    }, [location.pathname])
    return (
        <>
            <div className="w-[100%]   flex flex-col py-4   ">

                <div className="w-[100%]  py-7 flex flex-col items-end  justify-end  ">
                    <AdvicerFirstChild />
                </div>
                <div className="w-[100%]  flex-col   flex  justify-center items-center   ">
                    <AdvicertwoChild />
                </div>

            </div>
        </>
    )
}
export default AdvicerParent