import Footer from "../Ui/Organisms/Footer/Footer"
import Navbar from "../Ui/Organisms/Navbar/Navbar"

function Layout({children}) {
    return(
        <>
            <Navbar></Navbar>
            <main>{children}</main>
            <Footer />
        </>
    )
}
export default Layout