import { BrowserRouter as Router,Route,Routes } from "react-router-dom"

import Home from './pages/Home';
import About from './pages/About'
import Error404 from "./pages/Error404";
import Logement from "./pages/Logement";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<Error404 />}></Route>
        <Route path="/logement/:id" element={<Logement />}></Route> 

      </Routes>
    </Router>
    
  )
}

export default App
