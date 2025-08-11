import ArrowBottom from "./Icons/ArrowBottom/ArrowBottom";
import Burger from "./Icons/Burger/Burger";
import Instagram from "./Icons/Instagram/Instagram";
import Logo from "./Icons/Logo/Logo";
import Phone from "./Icons/Phone/Phone";
import Search from "./Icons/Search/Search";
import Next from "./Icons/Next/Next";
import Pine from "./Icons/Pine/Pine";
import PineActiv from "./Icons/PineActiv/PineActiv";
import TikeBlue from "./Icons/TikeBlue/TikeBlue";
import Telegram from "./Icons/Telegram/Telegram";
import BigLogo from "./Icons/BigLogo/BigLogo";
function Icon({ Name, style }) {
  switch (Name) {
    case "Logo":
      return <Logo style={style} />;
    case "Search":
      return <Search />;
    case "Burger":
      return <Burger />;
    case "Next":
      return <Next />;
    case "ArrowBottm":
      return <ArrowBottom />;
    case "Phone":
      return <Phone />;
    case "Instagram":
      return <Instagram />;
    case "Telegramn":
      return <Telegram />;
    case "BigLogo":
      return <BigLogo />;
    case "Pine":
      return <Pine />;
    case "PineActiv":
      return <PineActiv />;
    case "TikeBlue":
      return <TikeBlue />;
  }
}
export default Icon;
