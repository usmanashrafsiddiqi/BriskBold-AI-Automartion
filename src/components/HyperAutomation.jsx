import React, { useState, useEffect } from "react";

const HyperAutomation = () => {
  const logos = [
    "/hyper1.jpg",
    "/hyper2.jpg",
    "/hyper3.jpg",
    "/hyper4.jpg",
    "/hyper5.jpg",
    "/hyper6.jpg",
    "/hyper7.jpg",
    "/hyper8.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 3) % logos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [logos.length]);

  const visibleLogos = [
    logos[index % logos.length],
    logos[(index + 1) % logos.length],
    logos[(index + 2) % logos.length],
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="heading-primary mb-10">
          Hyper Automation
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {visibleLogos.map((logo, i) => (
            <div
              key={i}
              className="w-[328px] h-[135px] rounded-[11px] border border-[#24C6FF]/60 bg-white/5 backdrop-blur-md flex items-center justify-center transition-all"
            >
              <img
                src={logo}
                alt="automation logo"
                className="w-[274px] h-[101px] rounded-[10px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HyperAutomation;
