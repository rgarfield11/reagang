import Navbar from './Navbar'
import About from './pages/About'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import Home from './pages/Home'
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
