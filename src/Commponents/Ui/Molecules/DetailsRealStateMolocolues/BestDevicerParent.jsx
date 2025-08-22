import BestDevicerChild from "./BestDevicerChild"
function BestDevicerParent (){
    return(
        <>
        <div className="w-[100%]    flex  justify-center items-center">

        <BestDevicerChild/>
        </div>
        </>
    )
}
export default BestDevicerParent