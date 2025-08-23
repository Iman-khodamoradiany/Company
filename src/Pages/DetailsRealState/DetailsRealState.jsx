import { useParams } from "react-router";
import RealStateDetailsOrgainsms from "../../Commponents/Ui/Organisms/RealStateDetailsOrganisims/RealStateDetailsOrganisms";
import { SliderRentBrands } from "../../Commponents/Constans/SliderRents/SliderRentsBrand";
import WindowShair from "../../Commponents/Ui/Molecules/WindowShair/WindowShair";
import Business_Card from "../../Commponents/Ui/Molecules/Business_Card/Business_Card";
import { useContext } from "react";
import { MyContext } from "../../App";
function DeatilsRealState() {
  const { Card } = useContext(MyContext);

  const { id } = useParams();
  const FindHome = SliderRentBrands.find((item) => item.id == id);
  
  return (
    <>
      <div className="w-full  ">
        <RealStateDetailsOrgainsms name={FindHome.name} img={FindHome.img} />
      </div>
      <WindowShair />
      <div
        className={`h-[100vh] ${
          Card ? "flex" : "hidden"
        } fixed flex z-20 w-full top-0 justify-center items-center bg-[rgba(0,0,0,0.54)]`}
      >
        <Business_Card img={FindHome.img} />
      </div>
    </>
  );
}
export default DeatilsRealState;
