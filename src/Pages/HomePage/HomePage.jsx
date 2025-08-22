import Header from "../../Commponents/Ui/Organisms/Header/Header";
import SignUp from "../../Commponents/Ui/Molecules/SignUp/SignUp";
import { createContext, useContext, useEffect, useState } from "react";
import RentButton from "../../Commponents/Ui/Organisms/RentButton/RentButton";
import DefaultHome from "../../Commponents/Ui/Organisms/DefaultHome/DefaultHome";

import StartRegister from "../../Commponents/Ui/Organisms/StartRegister/StartRegister";

import DeafultHeader from "../../Commponents/Ui/Organisms/DeafultHeader/DeafultHeader";
import { MyContext } from "../../App";


export const Ejare = createContext();


function HomePage() {



  const [ButtonEJ, setButtonEJ] = useState(false)
  const {setheader} = useContext(MyContext)
  useEffect(() => {
    setheader(<><DeafultHeader /></>)
  },[])


  return (
    <Ejare.Provider value={{ ButtonEJ, setButtonEJ }}>
      <SignUp />
      <Header />
      <section className={`w-[85%] mx-auto flex justify-center items-center font-bold pb-20 pt-10 z-10`}>
        {ButtonEJ ? <RentButton /> : <DefaultHome />}
      </section>

   
      
    </Ejare.Provider>
  );
}
export default HomePage;
