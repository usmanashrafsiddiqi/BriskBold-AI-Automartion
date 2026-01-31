import React from "react";

const services = [
  {
    logo: "/automation.png",
    title: "Automation",
    desc: "We build bots to remove the repetitive, mundane tasks that your employees perform on a regular basis.",
    gradient: "linear-gradient(286.2deg, #CB59CE -9.12%, #D932A2 113.22%)",
  },
  {
    logo: "/scalability.png",
    title: "Scalability",
    desc: "Our focused approach brings from 'low hanging fruits' to complete digital transformation programmes of all shapes.",
    gradient: "linear-gradient(288.19deg, #F3AB2D 1.51%, #E88412 98.49%)",
  },
  {
    logo: "/accelerate.png",
    title: "Accelerate",
    desc: "As the business environment grows more complex, there's a need to re-evaluate tried-and-tested automation.",
    gradient: "linear-gradient(180deg, #01B6F8 0%, #0089FE 100%)",
  },
  {
    logo: "/enable.png",
    title: "Enablement",
    desc: "We will work with you towards the digitalization, a path to technical self-sufficiency.",
    gradient: "linear-gradient(107.43deg, #4778FC 1.92%, #3956F1 98.08%)",
  },
  {
    logo: "/hyperautomation.png",
    title: "Hyperautomation",
    desc: "We will work with you towards the digitalization, a path to technical self-sufficiency.",
    gradient: "linear-gradient(109.4deg, #F78136 0.77%, #EE4413 99.23%)",
  },
  {
    logo: "/training.png",
    title: "Training",
    desc: "Most organizations want to have accountability and expertise to reside in-house.",
    gradient: "linear-gradient(114.39deg, #16DA82 6.01%, #04AE67 93.99%)",
  },
];

const Services = () => {
  return (
    <section className="relative">
      {/* ================= HEADING ================= */}
      <div className="text-center mb-8">
        <h3 className="heading-primary font-heading inline-block px-6 py-2  text-sky-400 border border-sky-400/40 rounded-md">
          OUR SERVICES
        </h3>

        <p className="mt-4 paragraph-primary font-body">
          We Build Robots.{" "}
          <span>For a Better Future of Human Force.</span>
        </p>
      </div>

      {/* ================= CARDS ================= */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {services.map((service, i) => (
          <div
            key={i}
            className="
              bg-white/5
              backdrop-blur-lg
              border border-white/15
              rounded-[18px]
              p-8
              text-white
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-sky-400/40
              flex flex-col
            "
            style={{
              width: "369px",
              height: "300px",
            }}
          >
            {/* LOGO BOX */}
            <div
              className="flex items-center justify-center mb-6"
              style={{
                width: "85px",
                height: "52px",
                borderRadius: "3px",
                background: service.gradient,
              }}
            >
              <img
                src={service.logo}
                alt={service.title}
                className="w-[57px] h-[36px] object-contain"
              />
            </div>

            {/* TITLE */}
            <h4
              className="
                font-heading font-medium
                text-[37.86px]
                leading-[80.7px]
                mb-2
                uppercase
              "
            >
              {service.title}
            </h4>

            {/* DESCRIPTION */}
            <p
              className="
                font-body font-normal
                text-[17.26px]
                leading-[21px]
                text-gray-300
              "
            >
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
