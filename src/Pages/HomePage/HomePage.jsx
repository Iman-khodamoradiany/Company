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
import RentButton from "../../Commponents/Ui/Organisms/RentButton/RentButton";
import DefaultHome from "../../Commponents/Ui/Organisms/DefaultHome/DefaultHome";

export const Ejare = createContext();

function HomePage() {
  const [ButtonEJ, setButtonEJ] = useState(false)
  return (
    <Ejare.Provider value={{ ButtonEJ, setButtonEJ }}>
      <SignUp />
      <Header />
      <section className={`w-[85%] mx-auto flex justify-center items-center font-bold pb-20 pt-10`}>
        {ButtonEJ ? <RentButton /> : <DefaultHome />}
      </section>
    </Ejare.Provider>
  );
}
export default HomePage;
