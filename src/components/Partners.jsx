import React from "react";

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

  return (
   <section className="py-20">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="py-10 heading-primary">Partners and Vendors</h2>

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
            alt="partner"
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

export default Partners;
