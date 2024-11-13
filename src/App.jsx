import "./App.css";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Proyects from "./components/Proyects";
import AboutMe from "./components/AboutMe";
import { Contact } from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <div className="lg:px-40 px-0">
        <Home />

        <Proyects />

        <AboutMe />

        <Contact />

        <Footer />
      </div>
    </>
  );
}

export default App;
