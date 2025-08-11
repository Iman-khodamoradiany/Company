import ArrowBottom from "./Icons/ArrowBottom/ArrowBottom";
import Burger from "./Icons/Burger/Burger";
import Instagram from "./Icons/Instagram/Instagram";
import Logo from "./Icons/Logo/Logo";
import Phone from "./Icons/Phone/Phone";
import Search from "./Icons/Search/Search";
import Next from './Icons/Next/Next';
import Telegram from "./Icons/Telegram/Telegram";
import BigLogo from "./Icons/BigLogo/BigLogo";
import Clock from "./Icons/Clock/Clock";
import Profile from "./Icons/Profile/Profile";
function Icon({ Name, style }) {
    switch (Name) {
        case 'Logo':
            return <Logo style={style} />
        case 'Search':
            return <Search />
        case 'Burger':
            return <Burger />
        case 'Next':
            return <Next />
        case 'ArrowBottm':
            return <ArrowBottom />
        case 'Phone':
            return <Phone />
        case 'Instagram':
            return <Instagram />
        case "Telegramn":
            return <Telegram />
        case "BigLogo":
            return <BigLogo />
        case "Clock": 
            return <Clock />
        case "Profile":
            return <Profile />
    }
}
export default Icon;