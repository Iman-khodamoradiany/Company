import { useParams } from "react-router";
import HomeParts from "../HomeParts/HomeParts";
import HomeText from "../HomeText/HomeText";
import HomeTitle from "../HomeTitle/HomeTitle";
import FacilitiesHome from "../FacilitiesHome/FacilitiesHome";
import Description from "../Description/Description";
import MapHome from "../MapHome/MapHome";
import SimilarAds from "../SimilarAds/SimilarAds";
import WindowProblem from "../WindowsBoxes/WindowProblem";
import WindowTitele from "../WindowsBoxes/WindowTitele";
import { ArayListRent } from "../../../Constans/ListUnderRent/ListRent";
function DitelsHomes() {
  const { id } = useParams();
  const FindHome = ArayListRent.find((item) => item.id == id);
  return (
    <>
      <section>
        <HomeParts />
        <HomeText />
        <HomeTitle />
        <FacilitiesHome />
        <Description />
        <MapHome Home={FindHome} />
        <SimilarAds />
      </section>
      <WindowProblem />
      <WindowTitele />
    </>
  );
}

export default DitelsHomes;
