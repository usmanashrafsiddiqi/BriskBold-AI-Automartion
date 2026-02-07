import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (id) => {
    setActive(id);
    setMobileOpen(false);

    const scrollToSection = () => {
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -80;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };

    // If we are already on homepage, just scroll
    if (location.pathname === "/") {
      scrollToSection();
    } else {
      // Navigate to homepage first, then scroll after navigation
      navigate("/", { state: { scrollTo: id } });
    }
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* ================= DESKTOP NAVBAR ================= */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <img src="/desklogo.png" alt="Company Logo" className="w-[142px] h-[51px]" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white text-sm">
          {[
            { id: "home", label: "HOME" },
            { id: "services", label: "SERVICES" },
            { id: "resources", label: "RESOURCES" },
            { id: "about", label: "ABOUT" },
            { id: "contact", label: "CONTACT US" },
          ].map((item) => {
            const isActive = active === item.id;
            return (
              <li
                key={item.id}
                onClick={() => handleScroll(item.id)}
               className={`
  cursor-pointer px-5 py-2 rounded-md
  transition-all duration-300
  hover:text-sky-400
  font-heading font-medium uppercase
  text-[18px]
  ${isActive ? "text-white" : ""}
`}
                style={{
                  ...(isActive && {
                    background:
                      "linear-gradient(97.75deg, #9ACEEE 26.04%, #389ADB 106.73%)",
                    boxShadow: "0 4px 12px rgba(56,154,219,0.35)",
                  }),
                }}
              >
                {item.label}
              </li>
            );
          })}
        </ul>

        {/* Mobile Hamburger */}
        <button onClick={() => setMobileOpen(true)} className="md:hidden text-white text-2xl">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm
        bg-gradient-to-br from-[#0B1220]/95 via-[#0F172A]/95 to-[#020617]/95
        backdrop-blur-2xl border-l border-white/10
        shadow-[-12px_0_40px_rgba(56,154,219,0.25)]
        transform transition-transform duration-500 ease-in-out md:hidden z-50
        ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-6">
          <button onClick={() => setMobileOpen(false)} className="text-white text-2xl">
            ✕
          </button>
        </div>

        <div className="flex flex-col gap-6 px-8 mt-10">
          {[
            { id: "home", label: "HOME" },
            { id: "services", label: "SERVICES" },
            { id: "resources", label: "RESOURCES" },
            { id: "about", label: "ABOUT" },
            { id: "contact", label: "CONTACT US" },
          ].map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`cursor-pointer text-lg tracking-wide uppercase transition-all duration-300 font-heading font-medium ${
                active === item.id ? "text-sky-400" : "text-white/80 hover:text-white"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
