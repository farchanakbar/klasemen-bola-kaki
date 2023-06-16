import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LigaDetailPage from "./pages/LigaDetailPage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/liga/:id" element={<LigaDetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
