import { useState } from "react";
import HeaderFilter from "../../Commponents/Ui/Organisms/HeaderFilter/HeaderFilter";
import PaginationBox from "../../Commponents/Ui/Organisms/PaginationBox/PaginationBox";
import WindowFilter from "../../Commponents/Ui/Organisms/WindowFilter/WindowFilter";

function PageRents() {
  const [click, setclick] = useState();

  return (
    <div>
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
