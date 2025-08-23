import { useContext } from "react";
import { MyContext } from "../../../../App";
import WinodowShireItem from "../WinodowShireItem/WinodowShireItem";

function WindowShair() {
      const { Shire } = useContext(MyContext);
    
    return (
       <div
      className={`h-[100vh] ${
        Shire ? "flex" : "hidden"
      }  fixed flex z-20 w-full top-0 justify-center items-center bg-[rgba(0,0,0,0.54)]`}
    >
      <WinodowShireItem/>
    </div>
    )
}

export default WindowShair
