import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="home1" element={<Home />} />



        </Routes>

      </BrowserRouter>
      <Footer/>
    </div>


  );
}

export default App;