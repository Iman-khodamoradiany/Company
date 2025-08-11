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
import Download from './Icons/Download/Download';
import Home from './Icons/Home/Home';
import Room from './Icons/Room/Room';
import Size from './Icons/Size/Size';
import Erorr from './Icons/Eror/Erorr';
import Car from './Icons/Car/Car';
import House from './Icons/House/House';
import Elevator from './Icons/Elevator/Elevator';
import Material from './Icons/Material/Material';
import Bathroom from './Icons/Bathroom/Bathroom';
import TypeOfBathroom from './Icons/TypeOfBathroom/TypeOfBathroom';
import Cooling from './Icons/Cooling/Cooling';
import Heating from './Icons/Heating/Heating';
import Like from "./Icons/Like/Like";
import Dislike from "./Icons/Dislike/Dislike";
import LikeActiv from './Icons/LikeActiv/LikeActiv';
import DislikeActiv from './Icons/DislikeActiv/DislikeActiv';
import DownloadActiv from './Icons/DownloadActiv/DownloadActiv';

function Icon({ Name, style,Fill }) {
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
      return <Pine Fill={Fill} />;
    case "PineActiv":
      return <PineActiv />;
    case "TikeBlue":
      return <TikeBlue />;
    case "Download":
      return <Download />;
    case "DownloadActiv":
      return <DownloadActiv />;
    case "Home":
      return <Home />;
    case "Room":
      return <Room />;
    case "Size":
      return <Size />;
    case "Erorr":
      return <Erorr />;
    case "Car":
      return <Car />;
    case "House":
      return <House/>;
    case "Elevator":
      return <Elevator />;
    case "Material":
      return <Material />;
    case "Bathroom":
      return <Bathroom />;
    case "TypeOfBathroom":
      return <TypeOfBathroom />;
    case "Cooling":
      return <Cooling />;
    case "Heating":
      return <Heating />;
    case "Like":
      return <Like />;
    case "Dislike":
      return <Dislike />;
    case "LikeActiv":
      return <LikeActiv />;
    case "DislikeActiv":
      return <DislikeActiv />;
  }
}
export default Icon;
