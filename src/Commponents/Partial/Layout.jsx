import Navbar from "../Ui/Organisms/Navbar/Navbar"

function Layout({children}) {
    return(
        <>
            <Navbar></Navbar>
            <main>{children}</main>
            <footer>footer</footer>
        </>
    )
}
export default Layout