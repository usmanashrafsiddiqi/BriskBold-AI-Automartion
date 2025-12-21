import React from "react";

const Customer = () => {
  const logos = [
    "/customer1.jpg",
    "/customer2.jpg",
    "/customer3.jpg",
    "/customer4.jpg",
    "/customer5.jpg",
    "/customer6.jpg",
    "/customer7.jpg",
    "/customer8.jpg",
    "/customer9.jpg",
  
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading + Arrows */}
      <div className="flex items-center justify-center gap-10 mb-16">
  {/* Left Arrow */}
  <button
    className="flex items-center justify-center transition hover:opacity-80"
    style={{
      width: "69px",
      height: "80px",
      opacity: 1,
    }}
  >
    <img
      src="/leftarrow.png"
      alt="Previous"
      style={{
        width: "69px",
        height: "80px",
        objectFit: "contain",
      }}
    />
  </button>

 <h2
  className="text-center heading-primary"

>
  Trusted by Top Analysts. Loved by Customers.
</h2>


  {/* Right Arrow */}
  <button
    className="flex items-center justify-center transition hover:opacity-80"
    style={{
      width: "69px",
      height: "80px",
      opacity: 1,
    }}
  >
    <img
      src="/rightarrow.png"
      alt="Next"
      style={{
        width: "69px",
        height: "80px",
        objectFit: "contain",
      }}
    />
  </button>
</div>

        {/* Logos Grid */}
        {/* Logos Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
  {logos.map((logo, i) => (
    <div
      key={i}
      className="flex items-center justify-center"
      style={{
        width: "350px",
        height: "106px",
        borderRadius: "10px",
        border: "1px solid #24C6FF",
        opacity: 1,
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(12px)",
      }}
    >
      <img
        src={logo}
        alt="client logo"
        style={{
          width: "221px",
          height: "53px",
          objectFit: "contain",
          opacity: 1,
        }}
      />
    </div>
  ))}
</div>


      </div>
    </section>
  );
};

export default Customer;
