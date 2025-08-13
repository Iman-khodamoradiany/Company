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
import FlashDown from './Icons/FlashDown/FlashDown';
import DropTop from './Icons/DropTop/DropTop';

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
    case "FlashDown":
      return <FlashDown />;
    case "DropTop":
      return <DropTop />;
    case "Backe":
      return (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99967 15.1668C4.04634 15.1668 0.833008 11.9535 0.833008 8.00016C0.833008 4.04683 4.04634 0.833496 7.99967 0.833496C11.953 0.833496 15.1663 4.04683 15.1663 8.00016C15.1663 11.9535 11.953 15.1668 7.99967 15.1668ZM7.99967 1.8335C4.59967 1.8335 1.83301 4.60016 1.83301 8.00016C1.83301 11.4002 4.59967 14.1668 7.99967 14.1668C11.3997 14.1668 14.1663 11.4002 14.1663 8.00016C14.1663 4.60016 11.3997 1.8335 7.99967 1.8335Z" fill="#353535"/>
<path d="M6.11357 10.3869C5.9869 10.3869 5.86023 10.3402 5.76023 10.2402C5.5669 10.0469 5.5669 9.7269 5.76023 9.53357L9.53357 5.76023C9.7269 5.5669 10.0469 5.5669 10.2402 5.76023C10.4336 5.95357 10.4336 6.27357 10.2402 6.4669L6.4669 10.2402C6.37357 10.3402 6.24023 10.3869 6.11357 10.3869Z" fill="#353535"/>
<path d="M9.8869 10.3869C9.76023 10.3869 9.63357 10.3402 9.53357 10.2402L5.76023 6.4669C5.5669 6.27357 5.5669 5.95357 5.76023 5.76023C5.95357 5.5669 6.27357 5.5669 6.4669 5.76023L10.2402 9.53357C10.4336 9.7269 10.4336 10.0469 10.2402 10.2402C10.1402 10.3402 10.0136 10.3869 9.8869 10.3869Z" fill="#353535"/>
</svg>)
    case "Filter":
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.9298 22.75C10.4498 22.75 9.96985 22.63 9.52985 22.39C8.63985 21.89 8.1098 21 8.1098 19.99V14.64C8.1098 14.13 7.77979 13.38 7.46979 12.99L3.6698 9.00003C3.0398 8.37003 2.5498 7.27002 2.5498 6.46002V4.14005C2.5498 2.53005 3.76982 1.27002 5.31982 1.27002H18.6598C20.1898 1.27002 21.4298 2.51004 21.4298 4.04004V6.26004C21.4298 7.31004 20.7998 8.52002 20.1998 9.11002C19.9098 9.40002 19.4298 9.40002 19.1398 9.11002C18.8498 8.82002 18.8498 8.34002 19.1398 8.05002C19.5098 7.68002 19.9298 6.85004 19.9298 6.26004V4.04004C19.9298 3.34004 19.3598 2.77002 18.6598 2.77002H5.31982C4.60982 2.77002 4.0498 3.37005 4.0498 4.14005V6.46002C4.0498 6.83002 4.34981 7.56004 4.73981 7.95004L8.58984 12C9.09984 12.63 9.59979 13.69 9.59979 14.64V19.99C9.59979 20.65 10.0498 20.97 10.2498 21.08C10.6798 21.32 11.1898 21.31 11.5898 21.07L12.9898 20.17C13.2798 20 13.5598 19.45 13.5598 19.08C13.5598 18.67 13.8998 18.33 14.3098 18.33C14.7198 18.33 15.0598 18.67 15.0598 19.08C15.0598 19.98 14.4998 21.01 13.7898 21.44L12.3998 22.34C11.9498 22.61 11.4398 22.75 10.9298 22.75Z" fill="#505050"/>
<path d="M16.0701 17.2701C13.8901 17.2701 12.1201 15.5001 12.1201 13.3201C12.1201 11.1401 13.8901 9.37012 16.0701 9.37012C18.2501 9.37012 20.0201 11.1401 20.0201 13.3201C20.0201 15.5001 18.2501 17.2701 16.0701 17.2701ZM16.0701 10.8701C14.7201 10.8701 13.6201 11.9701 13.6201 13.3201C13.6201 14.6701 14.7201 15.7701 16.0701 15.7701C17.4201 15.7701 18.5201 14.6701 18.5201 13.3201C18.5201 11.9701 17.4201 10.8701 16.0701 10.8701Z" fill="#505050"/>
<path d="M19.8705 17.8701C19.6805 17.8701 19.4905 17.8001 19.3405 17.6501L18.3405 16.6501C18.0505 16.3601 18.0505 15.8801 18.3405 15.5901C18.6305 15.3001 19.1105 15.3001 19.4005 15.5901L20.4005 16.5901C20.6905 16.8801 20.6905 17.3601 20.4005 17.6501C20.2605 17.7901 20.0605 17.8701 19.8705 17.8701Z" fill="#505050"/>
</svg>
)
     case "treeLuin":
      return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 7.75H3C2.59 7.75 2.25 7.41 2.25 7C2.25 6.59 2.59 6.25 3 6.25H21C21.41 6.25 21.75 6.59 21.75 7C21.75 7.41 21.41 7.75 21 7.75Z" fill="#505050"/>
<path d="M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z" fill="#505050"/>
<path d="M14 17.75H10C9.59 17.75 9.25 17.41 9.25 17C9.25 16.59 9.59 16.25 10 16.25H14C14.41 16.25 14.75 16.59 14.75 17C14.75 17.41 14.41 17.75 14 17.75Z" fill="#505050"/>
</svg>


  }
}
export default Icon;
