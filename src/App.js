import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero"
import Examinations from "./Components/Examinations/Examinations";
import SliderComp from "./Components/SliderComp/SliderComp";
import Info from "./Components/Info/Info";
import FAQ from "./Components/FAQ/FAQ";
import Subscribe from "./Components/Subscribe/Subscribe";
import Footer from "./Components/Footer/Footer";

function App() {
  return <div className="App">
    <Navbar/>
    <Hero/>
    <Examinations/>
    <SliderComp/>
    <Info/>
    <FAQ/>
    <Subscribe/>
    <Footer/>
  </div>;
}

export default App;
