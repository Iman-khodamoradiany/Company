import Input from "../../Atom/Input/Input"
import Text from "../../Atom/Text/Text"
import TitelInput from "../TitelInput/TitelInput"
import { MyContext } from "../../../../App"
import { useContext, useState } from "react"
import ConfirmPopUp from "../ConfirmPopUp/ConfirmPopUp"
import Business_Card from "../Business_Card/Business_Card"
import { UNSAFE_decodeViaTurboStream } from "react-router"

function SignUp() {
    const { PopUp, setPopUp, Card } = useContext(MyContext)
    const [SC, setSC] = useState(null)
    const [Number, setNumber] = useState()


    return (
        <>
            <div onClick={() => setPopUp(!PopUp)} className={`h-[100vh] fixed ${PopUp ? 'hidden' : 'flex'} z-50 w-full top-0 justify-center items-center bg-[rgba(0,0,0,0.54)]`}>
                {SC ? <ConfirmPopUp SC={SC} setSC={setSC} Number={Number} /> : <TitelInput SC={SC} setSC={setSC} setNumber={setNumber} Number={Number} />}
                <Business_Card />
            </div>
            <div className={`h-[100vh] ${Card ? 'flex' : 'hidden'} fixed flex z-20 w-full top-0 justify-center items-center bg-[rgba(0,0,0,0.54)]`}>
                <Business_Card />
            </div>


        </>

    )
}
export default SignUp