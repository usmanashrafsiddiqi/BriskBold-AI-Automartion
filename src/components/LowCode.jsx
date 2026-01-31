import React, { useState, useEffect } from "react";

const LowCode = () => {
  const logos = [
    "/low1.jpg",
    "/low2.jpg",
    "/low3.jpg",
    "/low4.jpg",
    "/low5.jpg",
  ];

  const ITEMS_PER_SLIDE = 9;
  const [index, setIndex] = useState(0);

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, []);

  /* MANUAL CONTROLS */
  const handleNext = () => {
    setIndex((prev) => (prev + ITEMS_PER_SLIDE) % logos.length);
  };

  const handlePrev = () => {
    setIndex((prev) =>
      prev - ITEMS_PER_SLIDE < 0
        ? Math.max(logos.length - ITEMS_PER_SLIDE, 0)
        : prev - ITEMS_PER_SLIDE
    );
  };

  /* VISIBLE LOGOS (9) */
  const visibleLogos = Array.from({ length: ITEMS_PER_SLIDE }, (_, i) =>
    logos[(index + i) % logos.length]
  );

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="heading-primary mb-12 text-center">
          Low Code Expertise
        </h2>

        <div className="relative flex items-center justify-center">

          {/* LEFT ARROW */}
          <button
            onClick={handlePrev}
             className="hidden md:flex absolute left-0 z-10 hover:scale-110 transition"
          >
            <img src="/leftarrow.png" alt="Previous" className="w-10 h-10" />
          </button>

          {/* LOGOS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
            {visibleLogos.map((logo, i) => (
              <div
                key={i}
                className="
                  w-[328px] h-[135px]
                  rounded-[11px]
                  border border-[#24C6FF]/60
                  bg-white/5 backdrop-blur-md
                  flex items-center justify-center
                  transition-all duration-500
                "
              >
                <img
                  src={logo}
                  alt="low code logo"
                  className="w-[274px] h-[101px] rounded-[10px] object-contain"
                />
              </div>
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={handleNext}
            className="hidden md:flex absolute right-0 z-10 hover:scale-110 transition"
          >
            <img src="/rightarrow.png" alt="Next" className="w-10 h-10" />
          </button>

        </div>
      </div>
    </section>
  );
};

export default LowCode;
