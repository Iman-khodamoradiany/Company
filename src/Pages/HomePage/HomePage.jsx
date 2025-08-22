import Header from "../../Commponents/Ui/Organisms/Header/Header";
import SignUp from "../../Commponents/Ui/Molecules/SignUp/SignUp";
import { createContext, useContext, useEffect, useState } from "react";
import RentButton from "../../Commponents/Ui/Organisms/RentButton/RentButton";
import DefaultHome from "../../Commponents/Ui/Organisms/DefaultHome/DefaultHome";
<<<<<<< HEAD
import StartRegister from "../../Commponents/Ui/Organisms/StartRegister/StartRegister";
=======
import DeafultHeader from "../../Commponents/Ui/Organisms/DeafultHeader/DeafultHeader";
import { MyContext } from "../../App";
>>>>>>> feature/DetailsRealState

export const Ejare = createContext();


function HomePage() {
<<<<<<< HEAD
  const [ButtonEJ, setButtonEJ] = useState(false);
=======
  const [ButtonEJ, setButtonEJ] = useState(false)
  const {setheader} = useContext(MyContext)
  useEffect(() => {
    setheader(<><DeafultHeader /></>)
  },[])


      


      
>>>>>>> feature/DetailsRealState
  return (
    <Ejare.Provider value={{ ButtonEJ, setButtonEJ }}>
      <SignUp />
      <Header />
<<<<<<< HEAD

      <section
        className={`w-[85%] mx-auto flex justify-center items-center font-bold pb-20 pt-10`}
      >
=======
      <section className={`w-[85%] mx-auto flex justify-center items-center font-bold pb-20 pt-10 z-10`}>
>>>>>>> feature/DetailsRealState
        {ButtonEJ ? <RentButton /> : <DefaultHome />}
      </section>

      <div  className={`h-[100vh] fixed  z-50 w-full top-0 justify-center items-center bg-[#F9F9F9]`}>
              <StartRegister/>
      </div>
      
    </Ejare.Provider>
  );
}
export default HomePage;
