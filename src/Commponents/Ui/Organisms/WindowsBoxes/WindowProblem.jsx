import React, { useContext } from "react";
import { MyContext } from "../../../../App";
import WinodowReportProblem from "../../Molecules/WinodowReportProblem/WinodowReportProblem";

function WindowProblem() {
  const { Report } = useContext(MyContext);

  return (
    <div
      className={`h-[100vh] ${
        Report ? "flex" : "hidden"
      }  fixed flex z-20 w-full top-0 justify-center items-center bg-[rgba(0,0,0,0.54)]`}
    >
      <WinodowReportProblem />
    </div>
  );
}

export default WindowProblem;
