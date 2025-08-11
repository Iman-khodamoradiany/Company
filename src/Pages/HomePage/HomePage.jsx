import Text from "../../Commponents/Ui/Atom/Text/Text";
import FormSearch from "../../Commponents/Ui/Molecules/FormSearch/FormSearch";
import Header from "../../Commponents/Ui/Organisms/Header/Header";
import ListO from './../../Commponents/Ui/Organisms/ListUnder/ListO';
import HomeList from './../../Commponents/Ui/Organisms/HomeList/HomeList';
import BoxCouncil from './../../Commponents/Ui/Organisms/BoxCouncil/BoxCouncil';
import Slider from './../../Commponents/Ui/Organisms/Slider/Slider';
import SignUp from "../../Commponents/Ui/Molecules/SignUp/SignUp";
import { useState } from "react";
function HomePage() {
  return (
    <div>
      <SignUp />
      <header className="h-[100vh] w-full bg-contain lg:bg-cover bg-[url(/Background/Photo.png)] bg-cover bg-no-repeat relative w-full flex justify-start items-end">
        <Header />
      </header>
      
      <section className={`w-[90%] mx-auto flex justify-center items-center flex-col gap-[70px] mb-20 font-bold`}>
        <ListO />
        <HomeList />
        <BoxCouncil />
        <Slider/>
      </section>
    </div>
  );
}

export default HomePage;
