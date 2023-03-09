import './App.css';
import Footer from "./Components/Footer"
import SectionGetInTouch from './Components/Section-1';
import DiagonalSection from './Components/diagonal-section';
import Card from './Components/cards';
import ContactMe from './Components/Contact-me';

function App() {
  return (
    <div className="App">
     
      <DiagonalSection />
     
      <br/>
     
      <SectionGetInTouch />
      
      <Card />
   
      <ContactMe />
    
     <Footer />
    </div>
  );
}

export default App;
