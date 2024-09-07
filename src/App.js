import './App.css';
import AboutSection from './Components/About/AboutSection'; 
import Contact from './Components/Contact/Contact.jsx';
import Experience from './Components/Experience/Experience.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Header from './Components/Header/Header';
import NavbarComponent from './Components/Navbar/NavbarComponent.js';
import Project from './Components/Projects/Project.jsx';
import Skills from './Components/Skills/Skills.js';



function App() {
  return (
    <div className="App">  
      <NavbarComponent/>
      <Header/>
      <AboutSection />  
      <Skills/>
      <Experience /> 
      <Project /> 
      <Contact /> 
      <Footer/>
    </div>
  );
}

export default App;
