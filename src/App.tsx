import React from 'react';
import "./styles/App/App.css";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <section id="home"><Home/></section>
      <section id="AboutMe">AboutMe</section>
      <section id="MeSkills">MeSkills</section>
      <section id="Projects">Projects</section>
      <section id="ContactMe">ContactMe</section>
    </div>
  );
}

export default App;
