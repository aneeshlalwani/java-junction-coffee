import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/HeroSection/Hero";
import Products from "./components/ProductsCard/Products";

function App() {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  });

  return (
    <>
      <div className="">
        <Navbar />
        <Hero />
        <Products />
      </div>
    </>
  );
}

export default App;
