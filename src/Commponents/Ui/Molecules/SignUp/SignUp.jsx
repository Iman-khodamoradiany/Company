import TitelInput from "../TitelInput/TitelInput"
import { MyContext } from "../../../../App"
import { useContext, useEffect, useState } from "react"
import ConfirmPopUp from "../ConfirmPopUp/ConfirmPopUp"
import Property from './../Property/Property';
import StartRegister from "../../Organisms/StartRegister/StartRegister";
import EndRegister from "../EndRegister/EndRegister";
import Business_Card from './../Business_Card/Business_Card';
import DitelsHomes from "../../Organisms/DitelHomes/DitelsHomes";
import LinkPage from "../../Atom/LinkPage/LinkPage";
import { useNavigate } from "react-router";

function SignUp() {
    const { PopUp, setPopUp, Card,Save } = useContext(MyContext)
    const [SC, setSC] = useState(null)
    const [Number, setNumber] = useState()
    const [shaw, setshaw] = useState("off")
    const [Ditil, setDitil] = useState(false)
    const navigate = useNavigate();
    
   

   useEffect(() => {
    if (PopUp === "10") {
      setTimeout(() => {
        navigate("/RentHome/1"); 
        setDitil(true)
      }, 1000);
    }
  }, [PopUp, navigate]);

    return (
        <>
            <div onClick={() => setPopUp("0")} className={`h-[100vh] fixed ${PopUp=="1" ? 'flex' : 'hidden'} z-50 w-full top-0 justify-center items-center ${Save?"bg-[#F9F9F9]":"bg-[rgba(0,0,0,0.54)]"}`}>
                {PopUp=="1" && <TitelInput SC={SC} setshaw={setshaw} setSC={setSC} setNumber={setNumber} Number={Number} /> }
            </div>
            <div onClick={() => setPopUp("0")} className={`h-[100vh] fixed ${PopUp=="2" ? 'flex' : 'hidden'} z-50 w-full top-0 justify-center items-center  ${Save?"bg-[#F9F9F9]":"bg-[rgba(0,0,0,0.54)]"}`}>
                {PopUp=="2" && <ConfirmPopUp SC={SC} setshaw={setshaw} setSC={setSC} Number={Number} />  }
            </div>

           {Save? 
            <div  className={`h-[100vh] fixed ${PopUp=="3" ? 'flex' : 'hidden'} z-50 w-full top-0 justify-center items-center bg-[#F9F9F9]`}>
                {PopUp=="3" && <Property /> }
            </div>
            :""}

             <div  className={`h-[100vh] fixed ${PopUp=="4" ? 'flex' : 'hidden'} z-50 w-full top-0 justify-center items-center bg-[#F9F9F9]`}>
                {PopUp=="4" && <StartRegister/> }
            </div>
            <div  className={`h-[100vh] fixed ${PopUp=="5" ? 'flex' : 'hidden'} z-50 w-full top-0 justify-center items-center bg-[#F9F9F9]`}>
                {PopUp=="5" && <StartRegister/> }
            </div>

            <div  className={`h-[100vh] fixed ${PopUp=="6" ? 'flex' : 'hidden'} z-50 w-full top-0 justify-center items-center bg-[#F9F9F9]`}>
                {PopUp=="6" && <StartRegister/> }
            </div>
            <div  className={`h-[100vh] fixed ${PopUp=="7" ? 'flex' : 'hidden'} z-50 w-full top-0 justify-center items-center bg-[#F9F9F9]`}>
                {PopUp=="7" && <StartRegister/> }
            </div>
            <div  className={`h-[100vh] fixed ${PopUp=="8" ? 'flex' : 'hidden'} z-50 w-full top-0 justify-center items-center bg-[#F9F9F9]`}>
                {PopUp=="8" && <StartRegister/> }
            </div>
            
            <div  className={`h-[100vh] fixed ${PopUp=="9" ? 'flex' : 'hidden'} z-50 w-full top-0 justify-center items-center bg-[#F9F9F9]`}>
                {PopUp=="9" && <StartRegister/> }
            </div>

              {PopUp=="10"&&(
                Ditil==false?
                <div  className={`h-[100vh] fixed ${PopUp=="10" ? 'flex' : 'hidden'} z-50 w-full top-0 justify-center items-center bg-[#F9F9F9]`}>
                    {PopUp=="10" && <EndRegister/> }
                </div>
              :
                    <DitelsHomes/>
              )}   

            <div className={`h-[100vh] ${Card ? 'flex' : 'hidden'} fixed flex z-20 w-full top-0 justify-center items-center bg-[rgba(0,0,0,0.54)]`}>
                <Business_Card/>
            </div>
        </>

    )
}
export default SignUp