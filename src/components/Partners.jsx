import React, { useState, useEffect } from "react";

const Partners = () => {
  const logos = [
    "/partner1.jpg",
    "/partner2.jpg",
    "/partner3.jpg",
    "/partner4.jpg",
    "/partner5.jpg",
    "/partner6.jpg",
    "/partner7.jpg",
    "/partner8.jpg",
    "/partner9.jpg",
    "/partner10.jpg",
    "/partner11.jpg",
  ];

  const [index, setIndex] = useState(0);

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /* MANUAL CONTROLS */
  const handleNext = () => {
    setIndex((prev) => (prev + 3) % logos.length);
  };

  const handlePrev = () => {
    setIndex((prev) =>
      prev - 3 < 0 ? logos.length - 3 : prev - 3
    );
  };

  const visibleLogos = [
    logos[index % logos.length],
    logos[(index + 1) % logos.length],
    logos[(index + 2) % logos.length],
  ];

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="heading-primary mb-12 text-center">
          Partners and Vendors
        </h2>

        {/* Slider Wrapper */}
        <div className="relative flex items-center justify-center">

          {/* LEFT ARROW */}
          <button
            onClick={handlePrev}
            className="absolute left-0 z-10 hover:scale-110 transition"
          >
            <img
              src="/leftarrow.png"
              alt="Previous"
              className="w-10 h-10"
            />
          </button>

          {/* LOGOS */}
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
                  alt="partner logo"
                  className="w-[274px] h-[101px] object-contain rounded-[10px]"
                />
              </div>
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={handleNext}
            className="absolute right-0 z-10 hover:scale-110 transition"
          >
            <img
              src="/rightarrow.png"
              alt="Next"
              className="w-10 h-10"
            />
          </button>

        </div>
      </div>
    </section>
  );
};

export default Partners;
