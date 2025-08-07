import Burger from "./Icons/Burger/Burger";
import Logo from "./Icons/Logo/Logo";
import Search from "./Icons/Search/Search";

function Icon({ Name , style}) {
    switch (Name) {
        case 'Logo':
            return <Logo style={style}/>
        case 'Search':
            return <Search />
        case 'Burger':
            return <Burger />
    }
}
export default Icon;