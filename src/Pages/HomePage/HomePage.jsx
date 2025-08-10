import Text from "../../Commponents/Ui/Atom/Text/Text";
import FormSearch from "../../Commponents/Ui/Molecules/FormSearch/FormSearch";
import Header from "../../Commponents/Ui/Organisms/Header/Header";
import ListO from './../../Commponents/Ui/Organisms/ListUnder/ListO';
import HomeList from './../../Commponents/Ui/Organisms/HomeList/HomeList';
import BoxCouncil from './../../Commponents/Ui/Organisms/BoxCouncil/BoxCouncil';
import Slider from './../../Commponents/Ui/Organisms/Slider/Slider';
import BoxRent from "../../Commponents/Ui/Organisms/BoxRent/BoxRent";
import ListUnderRent from "../../Commponents/Ui/Organisms/ListRent/ListUnderRent";
import Suggested from "../../Commponents/Ui/Organisms/Suggested/Suggested";
import SliderRents from "../../Commponents/Ui/Organisms/SliderRents/SliderRents";
import SliderUsers from "../../Commponents/Ui/Organisms/SliderUsers/SliderUsers";
function HomePage() {

  return (
    <>
      <header className="h-[100vh] w-full bg-contain lg:bg-cover bg-[url(/Background/Photo.png)] bg-cover bg-no-repeat relative w-full flex justify-start items-end">
        <Header />
        
      </header>
      
      <section>
        {/* <ListO />
        <HomeList />
        <BoxCouncil />
        <Slider/> */}
        <ListUnderRent/>
        <BoxRent/>
        <Suggested/>
        <SliderRents/>
        <SliderUsers/>
      </section>
    </>
  );
}

export default HomePage;
