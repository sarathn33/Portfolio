import { BrowserRouter } from 'react-router-dom';
import './App.css';
import About from './components/About/about';
import Footer from './components/Footer/footer.js';
import Home from './components/Home/home';
import Skills from './components/Skills/skills';
import Contact from './components/Contact/contact';
import Projects from './components/Projects/projects';
import Navbar from './components/Navbar/navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
