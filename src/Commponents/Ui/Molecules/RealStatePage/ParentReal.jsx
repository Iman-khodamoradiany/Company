import RealStateFirstChild from "./RealstateFirstChild"
import RealStatetwoChild from "./RealStateTwoChild"

function ParentReal(){
    return(
        <>
        <div className="w-[100%]   flex flex-col py-4   "> 

        <div className="w-[100%]  py-7 flex flex-col items-end  justify-end  ">
            <RealStateFirstChild/>
        </div>
        <div  className="w-[100%]    flex  justify-center items-center   ">
            <RealStatetwoChild  /> 
        </div>
        
        </div>
        </>
    )
}
 export default ParentReal