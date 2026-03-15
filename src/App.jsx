import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Framework from "./components/Framework";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Framework />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}

export default App