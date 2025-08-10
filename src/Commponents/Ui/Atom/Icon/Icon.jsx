import Burger from "./Icons/Burger/Burger";
import Logo from "./Icons/Logo/Logo";
import Search from "./Icons/Search/Search";
import Next from "./Icons/Next/Next";
import Pine from "./Icons/Pine/Pine";
import PineActiv from './Icons/PineActiv/PineActiv';
import TikeBlue from "./Icons/TikeBlue/TikeBlue";

function Icon({ Name }) {
  switch (Name) {
    case "Logo":
      return <Logo />;
    case "Search":
      return <Search />;
    case "Burger":
      return <Burger />;
    case "Next":
      return <Next />;
    case "Pine":
      return <Pine />;
    case "PineActiv":
      return <PineActiv />;
    case "TikeBlue":
      return <TikeBlue />;
  }
}
export default Icon;
