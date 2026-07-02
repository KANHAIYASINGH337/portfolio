import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const cursor = document.querySelector(".cursor-glow");

    const moveCursor = (e) => {
      if (cursor) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div className={theme}>
      <div className="cursor-glow"></div>

      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;