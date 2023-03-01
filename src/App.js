import Visitorabout from './Visitorabout';
import Digitalsysytem from './Digitalsysytem';
import Features from './Features';
import TypeVisitor from './TypeVisitor';
import Crousel from './Crousel';
import Price from './Price';
import Footer from './Footer';
import Navbar from "./Navbar"
import './App.css';


function App() {
  return (
    <>
    <Navbar />
    <Visitorabout />
    <Digitalsysytem />
    <Features />
    <TypeVisitor />
    <Crousel />
    <Price className="vvv" />
    <Footer />
    </>
  );
}

export default App;
