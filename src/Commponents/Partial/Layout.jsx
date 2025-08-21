/* eslint-disable no-unused-vars */
import Footer from "../Ui/Organisms/Footer/Footer"
import Navbar from "../Ui/Organisms/Navbar/Navbar"

function Layout({ children, props }) {
    return (
        <>
            <Navbar></Navbar>
            <main>{children}</main>
            <Footer />
        </>
    )
}
export default Layout