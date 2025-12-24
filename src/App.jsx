import React from "react";
import useVoice from "./hooks/useVoice";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Customer from "./components/Customer";
import About from "./components/About";
import Contact from "./components/Contact";
import VoiceNotice from "./components/VoiceNotice";
import Event from "./components/Event";
import Partners from "./components/Partners";
import SoftwareDevelopment from "./components/SoftwareDevelopment";
import LowCode from "./components/LowCode";
import HyperAutomation from "./components/HyperAutomation";
import Blogs from "./components/Blogs";
import Job from "./components/Job";
import Footer from "./components/Footer";

function App() {
  const { startListening } = useVoice();

  return (
<div
  className="
    min-h-screen
    w-full
    relative
    overflow-x-hidden
    bg-cover
    bg-center
    bg-no-repeat

    bg-[url('/mob1.webp')]
    md:bg-[url('/main4.webp')]
    md:bg-fixed
  "
>

      {/* Dark overlay (important for readability) */}
      <div className="abimport SoftwareDevelopment from './components/SoftwareDevelopment';
solute inset-0 bg-black/50"></div>

      {/* Website Content */}
      <div className="relative z-10">
        <VoiceNotice onEnable={startListening} />
        <Navbar />

        <section id="home">
          <Hero />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="customers">
          <Customer />
        </section>

        <section id="about">
          <About />
        </section>
         <Blogs/>
        <Partners/>
      <SoftwareDevelopment/>
      <LowCode/>
      <HyperAutomation/>
  <section id="event">
          <Event />
        </section>
       <section id="job">
          <Job />
        </section>
        <section id="contact">
          <Contact />
        </section>
       <section id="contact">
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default App;
