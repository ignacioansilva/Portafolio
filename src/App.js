import './App.css';
import Footer from "./Components/Footer"
import SectionGetInTouch from './Components/Section-1';
import DiagonalSection from './Components/diagonal-section';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Card from './Components/cards';
import ContactMe from './Components/Contact-me';

function App() {
  return (
    <div className="App">
      <Zoom>
      <DiagonalSection />
      </Zoom>
      <br/>
      <Zoom>
      <SectionGetInTouch />
      </Zoom>
      <Fade right>
      
      <Card />
      
      </Fade>
      <Zoom>
      <ContactMe />
      </Zoom>
     <Footer />
    </div>
  );
}

export default App;
