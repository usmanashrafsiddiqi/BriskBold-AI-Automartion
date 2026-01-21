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

        {/* ================= HEADING + ARROWS ================= */}
        <div className="flex items-center justify-center gap-10 mb-16">
          
          {/* Left Arrow */}
          <button className="flex items-center justify-center transition hover:opacity-80 w-[69px] h-[80px]">
            <img
              src="/leftarrow.png"
              alt="Previous"
              className="w-[69px] h-[80px] object-contain"
            />
          </button>

          {/* Heading */}
          <h2 className="heading-primary font-heading text-center">
            Trusted by Top Analysts. Loved by Customers.
          </h2>

          {/* Right Arrow */}
          <button className="flex items-center justify-center transition hover:opacity-80 w-[69px] h-[80px]">
            <img
              src="/rightarrow.png"
              alt="Next"
              className="w-[69px] h-[80px] object-contain"
            />
          </button>

        </div>

        {/* ================= LOGOS GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="
                flex items-center justify-center
                w-[350px] h-[106px]
                rounded-[10px]
                border border-[#24C6FF]
                bg-white/5
                backdrop-blur-xl
                transition-all duration-300
                hover:border-sky-400
              "
            >
              <img
                src={logo}
                alt="client logo"
                className="w-[221px] h-[53px] object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Customer;
