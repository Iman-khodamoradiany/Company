import ArrowBottom from "./Icons/ArrowBottom/ArrowBottom";
import Burger from "./Icons/Burger/Burger";
import Instagram from "./Icons/Instagram/Instagram";
import Logo from "./Icons/Logo/Logo";
import Phone from "./Icons/Phone/Phone";
import Search from "./Icons/Search/Search";
<<<<<<< HEAD
import Next from './Icons/Next/Next';

function Icon({Name}){
    switch(Name){
        case 'Logo': 
        return <Logo />
=======
import Telegram from "./Icons/Telegram/Telegram";
import BigLogo from "./Icons/BigLogo/BigLogo";

function Icon({ Name, style }) {
    switch (Name) {
        case 'Logo':
            return <Logo style={style} />
>>>>>>> feature/footer
        case 'Search':
            return <Search />
        case 'Burger':
            return <Burger />
<<<<<<< HEAD
        case 'Next': 
        return <Next />
=======
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
>>>>>>> feature/footer
    }
}
export default Icon;