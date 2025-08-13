import Layout from "./Commponents/Partial/Layout"
import HomePage from "./Pages/HomePage/HomePage"
import { Route, Routes } from "react-router"
import Page2Homes from "./Pages/Page2Homes/Page2Homes"
import PageRents from "./Pages/PageRents/PageRents"


function App() {

  return (
    <>

      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/RentHome" element={<Page2Homes />} />
          <Route path="/PageRents" element={<PageRents/>} />
          <Route path="/But" element={<h1>iman</h1>} />
        </Routes>
      </Layout>
  </>
  )
}

export default App
