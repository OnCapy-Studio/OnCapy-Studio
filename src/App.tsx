import Homepage from 'components/home';
import './App.css';
import Navbar from 'components/navbar';
import AboutUs from 'components/about us';
import Values from 'components/values';
import Team from 'components/team';


function App() {
  return (
    <>
    <Navbar></Navbar>
    <Homepage></Homepage>
    <AboutUs></AboutUs>
    <Values></Values>
    <Team></Team>
    </>
    
  );
}

export default App;
