import { createContext, useState } from "react"
import Layout from "./Commponents/Partial/Layout"
import HomePage from "./Pages/HomePage/HomePage"
import { Route, Routes } from "react-router"
import Page2Homes from "./Pages/Page2Homes/Page2Homes"
import PageRents from "./Pages/PageRents/PageRents"

export const MyContext = createContext()

function App() {
  const [PopUp, setPopUp] = useState('2')
  const [Token, setToken] = useState(false);
  const [Card , setCard] = useState(false)
  const [Report , setReport] = useState(false)
  const [Title , setTitle] = useState(false)

  return (
    <>
      <MyContext.Provider value={{ PopUp, setPopUp, Token, setToken , Card , setCard, Report , setReport , Title , setTitle }}>
          <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/RentHome/:id' element={<Page2Homes />} />
          <Route path="/PageRents" element={<PageRents/>} />
          <Route path="/But" element={<h1>iman</h1>} />
        </Routes>
      </Layout>

      </MyContext.Provider>
    </>
  )
}

export default App
