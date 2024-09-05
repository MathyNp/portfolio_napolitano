import "./App.css";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";

import Navbar from "./components/Navbar";
import Proyects from "./components/Proyects";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutMe />
      <Proyects />
    </>
  );
}

export default App;
