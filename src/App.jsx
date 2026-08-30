import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import Experience from "./components/Experience";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">

        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <CustomCursor/>
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />

        <Tech />

        <Works />

     
        <Contact/>
        <Footer/>

      </div>
    </BrowserRouter>
  );
};

export default App;