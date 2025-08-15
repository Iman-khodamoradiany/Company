import Description from "../../Commponents/Ui/Organisms/Description/Description";
import FacilitiesHome from "../../Commponents/Ui/Organisms/FacilitiesHome/FacilitiesHome";
import HomeParts from "../../Commponents/Ui/Organisms/HomeParts/HomeParts";
import HomeText from "../../Commponents/Ui/Organisms/HomeText/HomeText";
import HomeTitle from "../../Commponents/Ui/Organisms/HomeTitle/HomeTitle";
import MapHome from "../../Commponents/Ui/Organisms/MapHome/MapHome";
import SimilarAds from "../../Commponents/Ui/Organisms/SimilarAds/SimilarAds";
import WindowProblem from "../../Commponents/Ui/Organisms/WindowsBoxes/WindowProblem";
import WindowTitele from "../../Commponents/Ui/Organisms/WindowsBoxes/WindowTitele";
import { ArayListRent } from "../../Commponents/Constans/ListUnderRent/ListRent";
import { useParams } from "react-router";

function Page2Homes() {
  const {id} = useParams();
  const FindHome = ArayListRent.find(item => item.id == id);
  
  return (
    <>
      <section>
        <HomeParts />
        <HomeText />
        <HomeTitle />
        <FacilitiesHome />
        <Description />

        <MapHome Home={FindHome}/>
        <SimilarAds/>
      </section>
      <WindowProblem/>
      <WindowTitele/>

    </>
  );
}

export default Page2Homes;
