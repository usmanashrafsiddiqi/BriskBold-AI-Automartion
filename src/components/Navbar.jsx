import React, { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = (id) => {
    setActive(id);
    setMobileOpen(false);

    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y =
        el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">

      {/* ================= DESKTOP NAVBAR (UNTOUCHED) ================= */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* Logo */}
        <img
          src="/desklogo.png"
          alt="Company Logo"
          style={{
            width: "142px",
            height: "51px",
            opacity: 1,
          }}
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white text-sm font-medium">
          {[
            { id: "home", label: "HOME" },
            { id: "services", label: "SERVICES" },
            { id: "customers", label: "RESOURCES" },
            { id: "about", label: "ABOUT" },
            { id: "contact", label: "CONTACT US" },
          ].map((item) => {
            const isActive = active === item.id;

            return (
              <li
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="cursor-pointer px-4 py-1.5 rounded-md transition-all duration-300 hover:text-sky-400"
                style={{
                  fontFamily: "Creato Display",
                  fontWeight: 500,
                  fontSize: "16.68px",
                  lineHeight: "17.53px",
                  letterSpacing: "0%",
                  ...(isActive && {
                    background:
                      "linear-gradient(97.75deg, #9ACEEE 26.04%, #389ADB 106.73%)",
                    color: "#ffffff",
                    boxShadow: "0 4px 12px rgba(56,154,219,0.35)",
                  }),
                }}
              >
                {item.label}
              </li>
            );
          })}
        </ul>

        {/* Mobile Hamburger (ONLY visible on mobile) */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* ================= MOBILE MENU (NEW, SEPARATE) ================= */}
      {mobileOpen && (
        <div className="md:hidden bg-black px-6 py-6 space-y-4">
          {[
            { id: "home", label: "HOME" },
            { id: "services", label: "SERVICES" },
            { id: "resources", label: "RESOURCES" },
            { id: "about", label: "ABOUT" },
            { id: "contact", label: "CONTACT US" },
          ].map((item) => (
            <div
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`cursor-pointer text-white text-base ${
                active === item.id ? "text-sky-400" : "opacity-80"
              }`}
              style={{
                fontFamily: "Creato Display",
                fontWeight: 500,
              }}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
