import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './sections/Home'
import Cta from './sections/Cta'
import Cta2 from './sections/Cta2'
import Features from './sections/Features'
import Footer from './sections/Footer'
import About from './sections/About'
import Preloader from './sections/Preloader'
import { useEffect } from 'react'


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState === "complete") {
      
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);
  

   return (
    <>  
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Home />
          <About />
          <Cta />
          <Features />
          <Cta2 />
          <Footer />
        </>
      )}
    </>
  );
}

export default App
