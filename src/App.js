import Navbar from './Navbar'
import About from './pages/About'
import Resume from './pages/Resume'
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
        </Routes>
      </div>
    </div>
  );
}

export default App;
