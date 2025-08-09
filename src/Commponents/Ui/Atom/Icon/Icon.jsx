import Burger from "./Icons/Burger/Burger";
import Logo from "./Icons/Logo/Logo";
import Search from "./Icons/Search/Search";
import Next from "./Icons/Next/Next";
import Pine from "./Icons/Pine/Pine";

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
  }
}
export default Icon;
