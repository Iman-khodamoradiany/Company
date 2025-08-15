import { useContext } from "react";
import { MyContext } from "../../../../App";
import WinodowTitleBox from "../../Molecules/WinodowTitleBox/WinodowTitleBox";

function WindowTitele() {
      const { Title } = useContext(MyContext);
    
    return (
         <div
      className={`h-[100vh] ${
        Title ? "flex" : "hidden"
      }  fixed flex z-20 w-full top-0 justify-center items-center bg-[rgba(0,0,0,0.54)]`}
    >
      <WinodowTitleBox />
    </div>
    )
}

export default WindowTitele
