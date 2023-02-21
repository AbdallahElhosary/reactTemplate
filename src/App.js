import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Index from "./components/index";


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            
            <Route exact path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
