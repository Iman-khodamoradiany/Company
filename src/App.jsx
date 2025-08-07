import Layout from "./Commponents/Partial/Layout"
import HomePage from "./Pages/HomePage/HomePage"
import { Route, Routes } from "react-router"

function App() {

  return (
    <>

      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/But" element={<h1>iman</h1>} />
        </Routes>
      </Layout>

    </>
  )
}

export default App
