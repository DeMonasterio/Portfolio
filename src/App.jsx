import './App.css'
import Main from "./components/Main/Main.jsx";
import Aboutme from "./components/Aboutme/Aboutme.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";

import bbeam from "./assets/beacon/beacon-beamm.png"
import beacon from "./assets/beacon/Beacon.png"
import lnkIn from "./assets/Icons/linkedin.png"
import gith from "./assets/Icons/github.png"



function App() {
  return (
    <>
      <div className="beacon-container">
        <div className='nebula'>

          <div className="beacon-cube--block">
            <div className="beacon-face--block beacon-front--block">
              <img src={beacon} alt="Beacon Beam Texture" />
            </div>
            <div className="beacon-face--block beacon-back--block">
              <img src={beacon} alt="Beacon Beam Texture" />
            </div>
            <div className="beacon-face--block beacon-left--block">
              <img src={beacon} alt="Beacon Beam Texture" />
            </div>
            <div className="beacon-face--block beacon-right--block">
              <img src={beacon} alt="Beacon Beam Texture" />
            </div>
          </div>




          <div className="beacon-cube">
            <div className="beacon-face beacon-front">
              <img src={bbeam} alt="Beacon Beam Texture" />
            </div>
            <div className="beacon-face beacon-back">
              <img src={bbeam} alt="Beacon Beam Texture" />
            </div>
            <div className="beacon-face beacon-left">
              <img src={bbeam} alt="Beacon Beam Texture" />
            </div>
            <div className="beacon-face beacon-right">
              <img src={bbeam} alt="Beacon Beam Texture" />
            </div>
          </div>
          



          <div className='orden'>
            <Main />
            <Aboutme />
            <Projects />
          </div>

          <div className='icons-container'>
            <a className='icons' href="https://www.linkedin.com/in/juanmanueldemonasterio/">
              <img className='icons-img' src={lnkIn} alt="" />
            </a>

            <a className='icons' href="">
              <img className='icons-img' src={gith} alt="" />
            </a>
          </div>

        </div>
      </div>
      <Contact />
    </>
  )
}

export default App;
