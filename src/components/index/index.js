import React, { Component } from "react";
import Home from "../Home";
import About from "../About";
import Footer from "../Footer";
import Portfolio from "../Portfolio";
import SocialMedia from "../SocialMedia";
import Work from "../Work";
import Skills from "../Skills";



class Index extends Component{
  state = {
    icon: "",
    work: "",
    paragraph:""
  }
  render(){
    return(
      <div>
        <Home />
        <Work />
        <Portfolio />
        <Skills />
        <About />
        <SocialMedia />
        <Footer />
      </div>
    )
  }
}

export default Index;
