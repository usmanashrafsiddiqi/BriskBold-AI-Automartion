import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

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
import SplashCursor from "./components/SplashCursor";
import YouTubeResource from "./components/YouTubeResource";
import ContactForm from "./components/ContactForm";
import BlogPage from "./components/BlogPage";

function App() {
  const { startListening } = useVoice();
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to section if coming from navigate with state.scrollTo
  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        const yOffset = -80; // navbar offset
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });

        // Clear the state after scrolling so it doesn't run again
        navigate(location.pathname, { replace: true, state: {} });
      }
    }
  }, [location, navigate]);

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
        bg-[url('/images/mob1.webp')]
        md:bg-[url('/newbgdes.webp')]
        bg-fixed
      "
    >
      <SplashCursor />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10">
        <VoiceNotice onEnable={startListening} />
        <Navbar />

        <Routes>
          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <>
                <section id="home"><Hero /></section>
                <section id="services"><Services /></section>
                <section><Customer /></section>
                <section id="about"><About /></section>
                <section id="resources"><YouTubeResource /></section>

                <Blogs />
                <Partners />
                <SoftwareDevelopment />
                <LowCode />
                <HyperAutomation />

                <section id="event"><Event /></section>
                <section id="job"><Job /></section>
                <section id="contact"><Contact /></section>

                <ContactForm />
                <Footer />
              </>
            }
          />

          {/* BLOG DETAIL PAGE */}
          <Route path="/blogs/:id" element={<BlogPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
