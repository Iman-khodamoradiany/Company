import { createContext, useState } from "react"
import Layout from "./Commponents/Partial/Layout"
import HomePage from "./Pages/HomePage/HomePage"
import { Route, Routes } from "react-router"
import Page2Homes from "./Pages/Page2Homes/Page2Homes"

export const MyContext = createContext()

function App() {
  const [PopUp, setPopUp] = useState(false)
  const [Token, setToken] = useState(false);
  const [Card , setCard] = useState(false)
  return (
      <MyContext.Provider value={{ PopUp, setPopUp, Token, setToken , Card , setCard }}>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/But" element={<h1>iman</h1>} />
          </Routes>
        </Layout>
      </MyContext.Provider>

  )
}

export default App
