import Footer from "../Ui/Organisms/Footer/Footer"
import Navbar from "../Ui/Organisms/Navbar/Navbar"
import { MyContext } from "../../App"
import { useContext } from "react"

function Layout({children , props}) {
    return(
        <>
            <Navbar></Navbar>
            <main>{children}</main>
            <Footer />
        </>
    )
}
export default Layout