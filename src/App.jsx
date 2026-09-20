import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Journey from "./components/Journey/Journey";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import useReveal from "./hooks/useReveal";

function App() {
  useReveal();

  return (
    <>
      <a className="skip-link" href="#main-content">
        Aller au contenu principal
      </a>

      <Header />

      <main id="main-content">
        <Hero />

        <div className="reveal">
          <About />
        </div>

        <div className="reveal">
          <Skills />
        </div>

        <div className="reveal">
          <Projects />
        </div>

        <div className="reveal">
          <Journey />
        </div>

        <div className="reveal">
          <Contact />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;