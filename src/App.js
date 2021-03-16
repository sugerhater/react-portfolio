import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Project from "./components/Project";
import Intro from "./components/Intro";
import "./App.css";
// import "./index.css"
import Portfolio from './components/Portfolio';
function App () {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Portfolio />
      <Footer />
    </div>
  )
}

export default App;