import './assets/css/hero.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/nav'
import Footer from './components/footer'
import About from './components/about'
import Contact from './components/contact'
import Projects from './components/projects'
import Resume from './components/resume'
import {useState} from 'react'




function App() {

  const [currentSelection, setCurrentSelection] = useState('About');

  return (
    <div>
      <Navigation
      currentSelection={currentSelection}
      setCurrentSelection={setCurrentSelection}
      ></Navigation>
       {currentSelection === 'About' && <About currentSelection={currentSelection} setCurrentSelection={setCurrentSelection}/>} 
       {currentSelection === 'Projects' && <Projects />} 
       {currentSelection === 'Contact' && <Contact />} 
       {currentSelection === 'Resume' && <Resume />} 
      <Footer></Footer>
    </div>
  );
}

export default App;
