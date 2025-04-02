import "./App.css";
import Hero from "./components/Hero";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import FrequentlyAsked from "./pages/FrequentlyAsked";
import ProductSlider from "./components/ProductSlider";

function App() {
  return (
    <>
        <Hero/>
        <Contact/>
        <ProductSlider/>
        <AboutUs/>
        <FrequentlyAsked/>
    </>
  );
}

export default App;
