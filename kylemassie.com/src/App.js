import './App.css';
import './NavBar.css';
import NavBar from './NavBar';
import Box from './Box';
import './styles.css';
import Projects from './Projects';
import Experiences from './Experiences';
import './Experiences.css'
import Footer from './Footer'; 
import './Footer.css'; 



function App() {
  
  return (
    <div className="App">
      
      <NavBar>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
      </NavBar>
      <Section id="about" title="About">
        <Box
          title = "A1"
          description="Welcome, I'm a Junior Computer Engineer at Purdue University
          specializing in software development, embedded systems, and automotive engineering. I have a passion for all things technology and design."
          > 
          <p>Let's dive into some projects I'm really proud of.</p>

          </Box>
      </Section>
      <Section id="projects" title="Projects">
        <Projects></Projects>
      </Section>


      <Section id="experience" title="Experience">
        <Experiences></Experiences>
      </Section>
      <Section>
      <Footer /> 
      </Section>
    </div>
  );
}

function Section({ id, title, children }) {
  return (
    <div className="Section" id={id} style={{ height: '50vh' }}>
      <div className="Section-content">
        {children}
      </div>
    </div>
  );
}

export default App;
