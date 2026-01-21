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
        <h2 className="heading-primary mb-10">Partners and Vendors</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {visibleLogos.map((logo, i) => (
            <div
              key={i}
              className="w-[328px] h-[135px] rounded-[11px] border border-[#24C6FF]/60 bg-white/5 backdrop-blur-md flex items-center justify-center"
            >
              <img
                src={logo}
                alt="partner logo"
                className="w-[274px] h-[101px] object-contain rounded-[10px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
