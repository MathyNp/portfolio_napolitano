import "./App.css";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Proyects from "./components/Proyects";
import AboutMe from "./components/AboutMe";
import { Contact } from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Proyects />
      <AboutMe />
      <Contact />

      <Footer />
    </>
  );
}

export default App;
