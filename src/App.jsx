import "./App.css";
import Hero from "./components/Hero";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import FrequentlyAsked from "./pages/FrequentlyAsked";
import Cards from "./components/Cards";

function App() {
  return (
    <>
        <Hero/>
        <Contact/>
        <AboutUs/>
        {/* <Cards/> */}
        <FrequentlyAsked/>
    </>
  );
}

export default App;
