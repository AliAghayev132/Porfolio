import './App.css';
import 'animate.css';
import Home from './Components/pages/Home';
import Navbar from './Components/pages/Navbar';
import About from './Components/pages/About';
import Skills from './Components/pages/Skills';
import Projects from './Components/pages/Projects';
import Contact from './Components/pages/Contact';
import Footer from './Components/pages/Footer';

function App() {
  return (
    <div className="body mx-auto animate__animated animate__fadeIn relative">
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
