import Homepage from 'components/home';
import './App.css';
import Navbar from 'components/navbar';
import AboutUs from 'components/about us';
import Values from 'components/values';
import Team from 'components/team';
import Contato from 'components/contato';
import Footer from 'components/footer';


function App() {
  return (
    <>
    <Navbar></Navbar>
    <Homepage></Homepage>
    <AboutUs></AboutUs>
    <Values></Values>
    <Team></Team>
    <Contato></Contato>
    <Footer></Footer>
    </>
    
  );
}

export default App;
