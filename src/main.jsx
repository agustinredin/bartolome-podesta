import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import Footer from "./components/Footer.jsx";
import NavBar from "./components/NavBar.jsx";

import App from "./App.jsx";
import Products from "./pages/Products.jsx";
import Contact from "./pages/Contact.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import FrequentlyAsked from "./pages/FrequentlyAsked.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="bg"/>
    <div className="antialiased">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/faq" element={<FrequentlyAsked />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  </StrictMode>
);
