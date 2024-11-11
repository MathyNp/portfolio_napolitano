import "./App.css";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Proyects from "./components/Proyects";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import { Contact } from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />

      <AboutMe />
      <Contact />

      <Proyects />
    </>
  );
}

export default App;
