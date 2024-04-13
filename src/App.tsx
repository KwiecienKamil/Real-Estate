import { AnimatePresence } from "framer-motion"
import About from "./pages/About"
import Home from "./pages/Home"
import {Routes, Route} from 'react-router-dom'


function App() {

  return (
    <>
    <AnimatePresence >
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/aboutUs" element={<About />}/>
      </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
