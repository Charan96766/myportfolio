import './App.css';
import AboutSection from './Components/About/AboutSection'; 
import Contact from './Components/Contact/Contact.jsx';
import Experience from './Components/Experience/Experience.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Header from './Components/Header/Header';
import NavbarComponent from './Components/Navbar/NavbarComponent.js';
import Project from './Components/Projects/Project.jsx';
import Skills from './Components/Skills/Skills.js';
import Preloader from './Components/Preloader/Preloader';
import ParticleBackground from './Components/ParticleBackground';
import useScrollReveal from './hooks/useScrollReveal';
import useLenis from './hooks/useLenis';
import 'lenis/dist/lenis.css';



function App() {
  useScrollReveal();
  useLenis();

  return (
    <>
    <ParticleBackground />
    <div className="App">
      <Preloader/>
      <NavbarComponent/>
      <Header/>
      <AboutSection />  
      <Skills/>
      <Experience /> 
      <Project /> 
      <Contact />
      <Footer/>
    </div>
    </>
  );
}

export default App;
