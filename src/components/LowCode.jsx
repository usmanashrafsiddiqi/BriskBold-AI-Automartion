import React, { useState, useEffect } from "react";

const LowCode = () => {
  const logos = ["/low1.jpg","/low2.jpg","/low3.jpg","/low4.jpg","/low5.jpg"];

  const [start, setStart] = useState(0);

  const visibleLogos = [
    logos[start % logos.length],
    logos[(start + 1) % logos.length],
    logos[(start + 2) % logos.length],
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setStart(prev => prev + 3);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="heading-primary py-4">Low Code Expertise</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">

          {visibleLogos.map((logo, i) => (
            <div
              key={i}
              style={{
                width: "328px",
                height: "135px",
                borderRadius: "11px",
                border: "0.4px solid #24C6FF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(12px)",
              }}
            >
              <img
                src={logo}
                alt="lowcode"
                style={{
                  width: "274px",
                  height: "101px",
                  borderRadius: "10px",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default LowCode;
