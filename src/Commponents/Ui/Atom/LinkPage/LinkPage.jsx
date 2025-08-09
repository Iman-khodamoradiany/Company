import { Link } from "react-router"

function LinkPage({To , children , style}){
    return(
        <Link className={style} to={To}>{children}</Link>
    )
}
export default LinkPage