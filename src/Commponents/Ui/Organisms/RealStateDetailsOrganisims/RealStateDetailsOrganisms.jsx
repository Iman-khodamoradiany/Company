import { useLocation } from "react-router"
import RealStateDetailsHeader from "../../Molecules/DetailsRealStateMolocolues/RealStateDetailsHeader"
import RealStateDetailsUnderHeaderParent from "../../Molecules/DetailsRealStateMolocolues/RealStateDetailsUnderHeaderParent"
import { useContext, useEffect } from "react"
import { Ejare } from "../../../../Pages/HomePage/HomePage"
import { MyContext } from "../../../../App"
import DeafultHeader from "../DeafultHeader/DeafultHeader"
import BestDevicerParent from "../../Molecules/DetailsRealStateMolocolues/BestDevicerParent"

function RealStateDetailsOrgainsms() {
    const location = useLocation()
    const { setheader } = useContext(MyContext)

    return (
        <>

            <div className=" w-[100%]   flex flex-col  mx-auto">
                <div className=" w-full    ">

                    <RealStateDetailsHeader />
                </div>
            </div>

            <div className="w-[85%] mx-auto  h-[60vh] flex justify-between ">
                <RealStateDetailsUnderHeaderParent />
            </div>

            <div className="w-[85%] mx-auto bg-red-500  flex flex-col " >
                <BestDevicerParent />
            </div>

        </>
    )
}
export default RealStateDetailsOrgainsms