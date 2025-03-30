import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Highlights from "./components/Highlights";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Footer from "./components/footer";
import Contact from "./components/Contact";
import Docs from "./components/Docs";
import DocsNavBar from "./components/DocsNavbar";
import DocsHero from "./components/DocsHero";

function App() {
  // State to track if dark theme is enabled
  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Toggle the theme
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  // Apply dark mode class to the body when isDarkTheme is true
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkTheme);
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  return (
    <Router>
      <div className="relative w-full min-h-screen">
        {/* Background image wrapper */}
        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')] z-0">
          <div className="bg-gradient-to-b from-blue-50 to-transparent dark:from-slate-950 w-full h-full absolute top-0 left-0 z-10"></div>
        </div>

        {/* Main content */}
        <div className="relative z-20">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <NavBar />
                  <div className="mx-1 md:mx-8">
                    <div id="home" className=" px-4 pt-20">
                      <HeroSection />
                    </div>
                    <div id="features" className="px-4">
                      <Features isDarkTheme={isDarkTheme} />
                    </div>
                    <div id="highlights" className="px-4">
                      <Highlights />
                    </div>
                    <div id="pricing" className="px-4">
                      <Pricing />
                    </div>
                    <div id="contact" className="px-4">
                      <Contact />
                    </div>
                    <div className="">
                      <Footer />
                    </div>
                  </div>
                </div>
              }
            />
            <Route
              path="/docs"
              element={
                <div className="dark:bg-dark">
                  <Docs />
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
