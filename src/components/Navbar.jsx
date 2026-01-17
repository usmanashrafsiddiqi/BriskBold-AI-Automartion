import React, { useState, useEffect } from "react";

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">

      {/* ================= DESKTOP NAVBAR (UNTOUCHED) ================= */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* Logo */}
        <img
          src="/desklogo.png"
          alt="Company Logo"
          style={{ width: "142px", height: "51px" }}
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white text-sm font-medium">
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
                className="cursor-pointer px-4 py-1.5 rounded-md transition-all duration-300 hover:text-sky-400"
                style={{
                  fontFamily: "Creato Display",
                  fontWeight: 500,
                  fontSize: "16.68px",
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

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* ================= BACKDROP ================= */}
      <div
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 bg-black/50 backdrop-blur-md transition-opacity duration-500 md:hidden
          ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      {/* ================= RIGHT SLIDE MOBILE MENU ================= */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm
        bg-gradient-to-br from-[#0B1220]/95 via-[#0F172A]/95 to-[#020617]/95
        backdrop-blur-2xl border-l border-white/10
        shadow-[-12px_0_40px_rgba(56,154,219,0.25)]
        transform transition-transform duration-500 ease-in-out md:hidden z-50
        ${mobileOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Close Button */}
        <div className="flex justify-end p-6">
          <button
            onClick={() => setMobileOpen(false)}
            className="text-white text-2xl"
          >
            ✕
          </button>
        </div>

        {/* Accent Line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />

        {/* Menu Items */}
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
              className={`text-white text-lg tracking-wide cursor-pointer transition-all duration-300
                ${active === item.id ? "text-sky-400" : "opacity-80 hover:opacity-100"}
              `}
              style={{
                fontFamily: "Creato Display",
                transitionDelay: `${index * 80}ms`,
              }}
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
