import "./App.css";
import Navs from "./components/navs/Navs";
import Hero from "./components/hero/Hero";
import Project from "./components/projects/Project";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <Navs />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
