import SignUp from "../../Commponents/Ui/Molecules/SignUp/SignUp";
import { useState } from "react";
import HeaderFilter from "../../Commponents/Ui/Organisms/HeaderFilter/HeaderFilter";
import PaginationBox from "../../Commponents/Ui/Organisms/PaginationBox/PaginationBox";
import WindowFilter from "../../Commponents/Ui/Organisms/WindowFilter/WindowFilter";
 import { MyContext } from "../../App";
import { useContext, useEffect } from "react"
import DefaulrHeader2 from "../../Commponents/Ui/Organisms/DeafultHeader/DefaultHeader2";
import { useLocation } from "react-router";
import DeafultHeader from "../../Commponents/Ui/Organisms/DeafultHeader/DeafultHeader";
function PageRents() {
  const [click, setclick] = useState();
  const location = useLocation()
  const { setheader } = useContext(MyContext)
  useEffect(() => {
    setheader(<DefaulrHeader2 />)
  }, [location.pathname])
  return (
    <div>
      <SignUp />
      <div>
        <HeaderFilter set={() => setclick("on")} />
        <PaginationBox />
      </div>
      <WindowFilter
        stayle={click == "on" ? "fixed" : "hidden"}
        get={() => setclick("off")}
      />
    </div>
  );
}

export default PageRents;
