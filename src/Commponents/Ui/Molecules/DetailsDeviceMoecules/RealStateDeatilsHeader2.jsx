import { useLocation } from "react-router"

import { useContext, useEffect } from "react"
import { MyContext } from "../../../../App"
import DeafultHeader from "../../Organisms/DeafultHeader/DeafultHeader"
import Img from "../../Atom/Img/Img"
function RealStateDetailsHeader2({image}) {
    const location = useLocation()
    const { setheader } = useContext(MyContext)
    useEffect(() => {
        setheader(<DeafultHeader />)
    }, [location.pathname])
    return (
        <>
            <header className="text-center flex justify-end items-start h-[100vh] gap-[70px] z-10  flex-col bg-contain lg:bg-cover bg-[url(/Background/Photo2.jpg)] bg-cover bg-no-repeat relative flex  ">
 
            </header>
            <div className="flex justify-end  w-full h-[120px]  " >

                <div className=" w-[230px] translate-y-[-65%] mx-[150px] h-[230px] bg-[#F9F9F9] rounded-full  flex justify-center items-center z-50">
                    <Img src={image} className="w-full h-full rounded-full text-black" />
                </div>
            </div>
        </>
    )
}
export default RealStateDetailsHeader2