import { useLocation } from "react-router"
import RealStateDetailsHeader from "../../Molecules/DetailsRealStateMolocolues/RealStateDetailsHeader"
import RealStateDetailsUnderHeaderParent from "../../Molecules/DetailsRealStateMolocolues/RealStateDetailsUnderHeaderParent"
import { useContext, useEffect } from "react"
import { Ejare } from "../../../../Pages/HomePage/HomePage"
import { MyContext } from "../../../../App"
import DeafultHeader from "../DeafultHeader/DeafultHeader"
import BestDevicerParent from "../../Molecules/DetailsRealStateMolocolues/BestDevicerParent"
import InformationStateParent from "../../Molecules/DetailsRealStateMolocolues/InformationStateParent"
import UserIdeaParent from "../../Molecules/DetailsRealStateMolocolues/UsersIdeaParent"

function RealStateDetailsOrgainsms({img,name}) {
    const location = useLocation()
    const { setheader } = useContext(MyContext)

    return (
        <>

            <div className=" w-[100%]  flex flex-col  mx-auto">
                <div className=" w-full    ">

                    <RealStateDetailsHeader img={img} />
                </div>

            <div className="w-[85%] mx-auto  h-[60vh] flex justify-between ">
                <RealStateDetailsUnderHeaderParent name={name} />
            </div>

            <div className="w-[85%] mx-auto h-[85vh]  flex flex-col " >
                <BestDevicerParent />
            </div>

            <div className="w-[85%] mx-auto  flex flex-col ">
                <InformationStateParent/>
            </div>

            <div className="w-[85%] mx-auto   flex flex-col " >
                <UserIdeaParent/>
            </div>

            </div>
        </>
    )
}
export default RealStateDetailsOrgainsms