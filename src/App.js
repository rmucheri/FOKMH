import React from 'react';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div >
         <Header/>
      {/* <Boob/> */}
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />


        </Routes>
      </BrowserRouter>
 <Footer/>
    </div>
  );
}

export default App;
