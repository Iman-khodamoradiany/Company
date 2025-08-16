
import Header from "../../Commponents/Ui/Organisms/Header/Header";
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
