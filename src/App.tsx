import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";

import Hero from "./components/sections/hero/Hero";
import About from "./components/sections/about/About";
import Skills from "./components/sections/skills/Skills";
import Projects from "./components/sections/projects/Projects";
import Contact from "./components/sections/contact/Contact";
import Experience from "./components/sections/experience/Experience";

import "./styles/variables.css";
import "./styles/globals.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="app__main">
        <Hero />
        <div className="divider" />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;