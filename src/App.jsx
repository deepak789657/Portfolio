
import  styles from './App.module.css';
import About from './componets/About/About';
import { Contact } from './componets/Contact/Contact';
import { Experience } from './componets/Experience.jsx/Experience';
import { Hero } from './componets/Hero/Hero';
import { Navbar } from './componets/Navbar/Navbar';
import { Projects } from './componets/projects/projects';

function App() {

  return (
    <>
      <div className={styles.App}> 
        
        <Navbar/>
        <Hero/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
         </div>
    </>
  )
}

export default App
