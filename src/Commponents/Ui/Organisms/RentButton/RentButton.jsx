import BoxRent from "../BoxRent/BoxRent"
import ListUnderRent from "../ListRent/ListUnderRent"
import SliderRents from "../SliderRents/SliderRents"
import SliderUsers from "../SliderUsers/SliderUsers"
import Suggested from "../Suggested/Suggested"

function RentButton() {
    return (
        <div className={`w-full h-full mx-auto flex justify-between gap-10 items-center flex-col font-bold`}>
            <ListUnderRent />
            <BoxRent />
            <Suggested />
            <SliderRents />
            <SliderUsers />
        </div>
    )
}

export default RentButton