import Description from "../../Commponents/Ui/Organisms/Description/Description";
import FacilitiesHome from "../../Commponents/Ui/Organisms/FacilitiesHome/FacilitiesHome";
import HomeParts from "../../Commponents/Ui/Organisms/HomeParts/HomeParts";
import HomeText from "../../Commponents/Ui/Organisms/HomeText/HomeText";
import HomeTitle from "../../Commponents/Ui/Organisms/HomeTitle/HomeTitle";

function Page2Homes() {
  return (
    <>
      <section>
        <HomeParts/>
        <HomeText/>
        <HomeTitle/>
        <FacilitiesHome/>
        <Description/>
      </section>
    </>
  );
}

export default Page2Homes;
