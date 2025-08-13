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
import SignUp from "../../Commponents/Ui/Molecules/SignUp/SignUp";
import { createContext, useState } from "react";
export const Ejare = createContext();

function HomePage() {
  const [ButtonEJ, setButtonEJ] = useState(false)
  return (
    <Ejare.Provider value={{ ButtonEJ, setButtonEJ }}>
      <div>
        <SignUp />
        <Header />

        <section className={`w-[90%] mx-auto flex justify-center items-center flex-col gap-[70px] font-bold my-10`}>
          <div className={`w-full h-full mx-auto ${ButtonEJ ? 'hidden' : 'flex'} justify-between items-center flex-col gap-[70px] font-bold`}>
            <ListO />
            <HomeList />
            <BoxCouncil />
            <Slider />
          </div>
          <div className={`w-full h-full mx-auto ${ButtonEJ ? 'flex' : 'hidden'} justify-between gap-10 items-center flex-col font-bold`}>
            <ListUnderRent />
            <BoxRent />
            <Suggested />
            <SliderRents />
            <SliderUsers />
          </div>
        </section>
      </div>
    </Ejare.Provider>
  );
}
export default HomePage;
