import { useLocation } from "react-router"
import Icon from "../../Atom/Icon/Icon"
import Text from "../../Atom/Text/Text"
import { useContext, useEffect } from "react"
import { MyContext } from "../../../../App"
import DeafultHeader from "../../Organisms/DeafultHeader/DeafultHeader"
import Img from "../../Atom/Img/Img"

function RealStateDetailsHeader({img}) {
    const location = useLocation()
    const { setheader } = useContext(MyContext)
    useEffect(() => {
        setheader(<DeafultHeader /> )
    }, [location.pathname])
    return (
        <>
            <header className="text-center flex justify-end items-start h-[100vh] gap-[70px] z-10  flex-col bg-contain lg:bg-cover bg-[url(/Background/Photo2.jpg)] bg-cover bg-no-repeat relative flex  ">
                <section className="flex  flex-col  w-[50%] h-[45%] gap-8">
                    <div className=" bg-white  w-[55%] mx-[115px] h-[260px] rounded-[16px]   flex flex-col">
                        <div className="w-[100%]  mx-7 text-[1.2vw]   font-[HORIZONTAL]  text-[#353535]  flex justify-start items-center gap-2 h-[65px]  ">
                            <Icon Name={"Telegram2"} />
                            <Text>t.me/amlaktoosi</Text>

                        </div>
                        <div className="w-[100%]  mx-7 text-[1.2vw]   font-[HORIZONTAL] text-[#353535]   flex items-center justify-start gap-2 h-[65px] ">
                            <Icon Name={"in"} />
                            <Text>Toosi_Amlak</Text>

                        </div>
                        <div className="w-[100%]  mx-7 text-[1.2vw]   font-[HORIZONTAL] text-[#353535]   flex items-center justify-start gap-2 h-[65px] ">

                            <Icon Name={"Instagram2"} />
                            <Text>Toosi_Amlak</Text>
                        </div>
                        <div className="w-[100%]  mx-7 text-[1.2vw]   font-[HORIZONTAL] text-[#353535]  flex items-center justify-start gap-2 h-[65px] ">
                            <Icon Name={"browse"} />
                            <Text>ToosiAmlak.com</Text>

                        </div>
                    </div>
                </section>
            </header>
            <div className="flex justify-end  w-full h-[120px]  " >

                <div className=" w-[230px] translate-y-[-65%] mx-[150px] h-[230px] bg-[#F9F9F9] rounded-full  flex justify-center items-center z-50">
                    <Img src={img} className="w-14 h-14 text-black" />
                </div>
            </div>




        </>
    )
}
export default RealStateDetailsHeader

