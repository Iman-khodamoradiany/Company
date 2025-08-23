import ParentUnderHeader from "../../Molecules/DetailsDeviceMoecules/ParentUnderHeader"
import RealStateDetailsHeader from "../../Molecules/DetailsDeviceMoecules/RealStateDetailsHeader"
import InformationStateParent from "../../Molecules/DetailsDeviceMoecules/InformationStateParent"
import UserIdeaParent2 from "../../Molecules/DetailsDeviceMoecules/UserIdeaParent2"
function DeviceDetailsOrganisms() {
    return (
        <>
            <div className=" w-[100%]   flex flex-col  mx-auto">
                <div className=" w-full    ">

                    <RealStateDetailsHeader />
                
                </div>

                <div className="w-[85%] mx-auto  h-[60vh] flex justify-between ">
                    
                    <ParentUnderHeader />
                
                </div>
                <div className="w-[85%] mx-auto  flex flex-col ">
                   
                    <InformationStateParent />
               
                </div>
                <div className="w-[85%] mx-auto   flex flex-col " >
                  
                    <UserIdeaParent2/>
                
                </div>
            </div>
        </>
    )
}
export default DeviceDetailsOrganisms