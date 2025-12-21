import React from "react";

const HyperAutomation = () => {
  const logos = [
    "/hyper1.jpg","/hyper2.jpg","/hyper3.jpg","/hyper4.jpg",
    "/hyper5.jpg","/hyper6.jpg","/hyper7.jpg","/hyper8.jpg",
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="heading-primary py-10">HyperAutomation</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {logos.map((logo, i) => (
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
                alt="automation"
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

export default HyperAutomation;
