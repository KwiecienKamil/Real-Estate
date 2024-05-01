import { AnimatePresence } from "framer-motion"
import About from "./pages/About"
import Home from "./pages/Home"
import {Routes, Route} from 'react-router-dom'
import Locations from "./pages/Locations"


function App() {

  return (
    <>
    <AnimatePresence >
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/aboutUs" element={<About />}/>
      <Route path="/locations" element={<Locations />}/>
      </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
