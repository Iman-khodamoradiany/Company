import HeaderFilter from "../../Commponents/Ui/Organisms/HeaderFilter/HeaderFilter";
import ListLikeRent from "../../Commponents/Ui/Organisms/ListLikeRent/ListLikeRent";
import RentalProperties from "../../Commponents/Ui/Organisms/RentalProperties/RentalProperties";
import RentHomeList from "../../Commponents/Ui/Organisms/RentHomeList/RentHomeList";
import SliderBrandRent from "../../Commponents/Ui/Organisms/SliderBrandRent/SliderBrandRent";

function PageRents() {
  return (
    <div>
      <HeaderFilter />
      <RentalProperties />
      <SliderBrandRent />
      <RentHomeList start="4" end="8" />
      <ListLikeRent/>
      <RentHomeList start="2" end="8" />
    </div>
  );
}

export default PageRents;
