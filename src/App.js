import React from 'react';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Causes from './pages/Causes';

function App() {
  return (
    <div >
         <Header/>
      {/* <Boob/> */}
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/causes" element={<Causes/>} />

        </Routes>
      </BrowserRouter>
 <Footer/>
    </div>
  );
}

export default App;
