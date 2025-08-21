import Icon from "../../Atom/Icon/Icon"
import Ul from "../../Molecules/Ul/Li"
import Button from "../../Atom/Button/Button"
import './Navbar.css'
import { useContext } from "react"
import { MyContext } from "../../../../App"
import Text from "../../Atom/Text/Text"
import { ListNavbar } from "../../../Constans/ListNavbar/ListNavbar"
import LinkPage from "../../Atom/LinkPage/LinkPage"
import { useLocation } from "react-router" 
function Navbar() {
    const id = useLocation();
    console.log(id)
    const { PopUp, setPopUp, Token  ,header} = useContext(MyContext)
    return (
      <>
            {header}
            </>
    )
}
export default Navbar