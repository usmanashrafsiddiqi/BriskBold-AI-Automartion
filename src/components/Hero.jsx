import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* LEFT IMAGE */}
          <div
            className="
              overflow-hidden
              w-full
              md:w-[712px]
              h-auto
              md:h-[365px]
            "
            style={{
              borderRadius: "19px",
              opacity: 1,
            }}
          >
            <img
              src="/topban.png"
              alt="Left Hero Visual"
              className="w-full h-full object-cover block"
              style={{ borderRadius: "19px" }}
            />
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="
              overflow-hidden
              w-full
              md:w-[410px]
              h-auto
              md:h-[216px]
            "
            style={{
              borderRadius: "19px",
              opacity: 1,
            }}
          >
            <img
              src="/textimg.png"
              alt="Right Hero Visual"
              className="w-full h-full object-cover block"
              style={{ borderRadius: "19px" }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
