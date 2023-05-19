import './App.css';
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import About from './components/About';
import Contact from './components/Contact';
import CurrentTime from './components/CurrentTime';
import Projects from './components/Projects';
import Skills from './components/Skills';
// import Testimonials from './components/Testimonials';
import TopPage from './components/TopContainer';
// import Nav from './components/Nav';
import Footer from './components/footer';





function App() {

  return (
    <div className="App bg-white dark:bg-black" >
      <header > </header>
      {/* <Nav /> */}
      <Zoom top> 
        <TopPage /> 
      </Zoom>
      <Fade>   
        <About />
      </Fade> 
      <Fade>
        <Skills />
      </Fade>
      <Projects />     
      {/* <Testimonials /> */}
      <Contact /> 
      <Fade> 
       <Footer /> 
      </Fade>
      <CurrentTime />
       
     
    </div>

   
  )
}

export default App;
