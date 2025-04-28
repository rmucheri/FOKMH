import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Causes from "./pages/Causes";
import Board from "./components/Board";
import CEO from "./pages/CEO";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/causes" element={<Causes />} />
          <Route path="/board" element={<Board />} />
          <Route path="/ceo" element={<CEO />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
