import { Link } from "react-router"

function LinkPage({To , children}){
    return(
        <Link to={To}>{children}</Link>
    )
}
export default LinkPage