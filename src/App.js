import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Project from "./components/Project";
import "./App.css";
// import "./index.css"
import Portfolio from './components/Portfolio';
function App () {
  return (
    <div className="App">
      <Navbar />
      <Portfolio />
      <Footer />
    </div>
  )
}

export default App;