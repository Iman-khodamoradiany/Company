import HeaderFilter from "../../Commponents/Ui/Organisms/HeaderFilter/HeaderFilter";
import PaginationBox from "../../Commponents/Ui/Organisms/PaginationBox/PaginationBox";
import WindowFilter from "../../Commponents/Ui/Organisms/WindowFilter/WindowFilter";

function PageRents() {
  return (
    <div>
      <div>
        <HeaderFilter />
        <PaginationBox />
      </div>
      <WindowFilter />
    </div>
  );
}

export default PageRents;
