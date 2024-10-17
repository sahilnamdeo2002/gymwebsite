import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Slider from "./slider/slider.js";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
     
          <Route path="/" element={<Home />} />
       
          <Route path="/home" element={<Home />} />
          <Route path="/features" element={<Slider/>} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
