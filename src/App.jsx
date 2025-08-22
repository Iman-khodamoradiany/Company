import { createContext, useState } from "react"
import Layout from "./Commponents/Partial/Layout"
import HomePage from "./Pages/HomePage/HomePage"
import { Route, Routes } from "react-router"
import Page2Homes from "./Pages/Page2Homes/Page2Homes"
import PageRents from "./Pages/PageRents/PageRents"
import ParentReal from "./Commponents/Ui/Molecules/RealStatePage/ParentReal"
import RealStateOrganisms from "./Commponents/Ui/Organisms/RealStatePageOrganism/RealStateOrgainsms"
import DeatilsRealState from "./Pages/DetailsRealState/DetailsRealState"
import AdvicerPageOrgainsms from "./Commponents/Ui/Organisms/AdvicerPage/AdvicerPageOrganisms"

export const MyContext = createContext()

function App() {
  const [PopUp, setPopUp] = useState("3")
  const [Token, setToken] = useState(false);
  const [Card , setCard] = useState(false)
  const [Report , setReport] = useState(false)
  const [Title , setTitle] = useState(false)

  const [Save , setSave] = useState(false)
  const [City, setCity] = useState("لطفاً شهر مورد نظر را انتخاب کنید");
  const [Get, setGet] = useState();
  const [Distri, setDistri] = useState("لطفاً منطقه مورد نظر را انتخاب کنید");

  return (
    <>
      <MyContext.Provider value={{ PopUp, setPopUp,Save , setSave, Token,Get,setGet, City,setCity,Distri,setDistri, setToken , Card , setCard, Report , setReport , Title , setTitle }}>

          <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/RentHome/:id' element={<Page2Homes />} />
          <Route path="/PageRents" element={<PageRents/>} />
          <Route path="/Amlak" element={<RealStateOrganisms/>}/>
          <Route path="/RealState/:id" element={<DeatilsRealState/>}/>
          <Route path="/Advicer" element={<AdvicerPageOrgainsms/>} />
        </Routes>
      </Layout>

      </MyContext.Provider>
    </>
  )
}

export default App
