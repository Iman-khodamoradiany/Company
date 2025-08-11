import Input from "../../Atom/Input/Input"
import Text from "../../Atom/Text/Text"
import TitelInput from "../TitelInput/TitelInput"
import { MyContext } from "../../../../App"
import { useContext, useState } from "react"
import ConfirmPopUp from "../ConfirmPopUp/ConfirmPopUp"

function SignUp() {
    const { PopUp, setPopUp } = useContext(MyContext)
    const [SC, setSC] = useState(false)
    const [Number, setNumber] = useState()


    return (
        <div onClick={() => setPopUp(!PopUp)} className={`h-[100vh] fixed ${PopUp ? 'hidden' : 'flex'} z-20 w-full top-0 justify-center items-center bg-[rgba(0,0,0,0.54)]`}>
            {!SC && <TitelInput SC={SC} setSC={setSC} setNumber={setNumber} Number={Number} />}
            {SC && <ConfirmPopUp SC={SC} setSC={setSC} Number={Number} />}
        </div>

    )
}
export default SignUp