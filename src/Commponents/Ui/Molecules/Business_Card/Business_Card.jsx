import { useContext } from "react"
import Button from "../../Atom/Button/Button"
import Icon from "../../Atom/Icon/Icon"
import Img from "../../Atom/Img/Img"
import Text from "../../Atom/Text/Text"
import { MyContext } from "../../../../App"
import { SliderRentBrands } from "../../../Constans/SliderRents/SliderRentsBrand"
import { useParams } from "react-router"

function Business_Card() {
    const { Card, setCard } = useContext(MyContext)
    const { id } = useParams();
  const FindHome = SliderRentBrands.find((item) => item.id == id);
    return (
        <div onClick={(e) => e.stopPropagation()} className={`${Card ? 'flex' : 'hidden'} h-[350px] z-20 pt-4  justify-center items-center flex-col bg-white w-5/12 px-4 rounded-xl border-3 gap-5`}>
            {FindHome && (
                <div className="text-center flex justify-start w-full h-full items-center pb-6 flex-col gap-7">
                    <div className="flex justify-start items-center w-full">
                        <Button onClick={() => setCard(false)}>
                            <Icon Name={'Close'} />
                        </Button>
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <Img className={'w-3/12 h-[75px]'} src={FindHome.img}/>
                    </div>
                    <div>
                        <Text style={'text-[1.8vw] text-[#353535]'}>{FindHome.name}</Text>
                    </div>
                    <div className="flex justify-center items-center flex-col gap-3">
                        <div className="flex justify-center items-center gap-1 text-[#353535]">
                            <Icon Name={"BluePhone"} />
                            <Text style={'text-[1.4vw]'}>۰۹۱۲۳۴۵۶۷۸۹</Text>
                        </div>
                        <div className="flex justify-center items-center gap-1 text-[#353535]">
                            <Icon Name={"BluePhone"} />
                            <Text style={'text-[1.4vw]'}>۰۲۱۱۲۳۴۵۶۷۸</Text>
                        </div>
                    </div>
                </div>

            )}
        </div>
    )
}

export default Business_Card