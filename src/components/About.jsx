import React from "react";

/* FEATURE DATA (CUSTOM ICONS) */
const features = [
  {
    icon: "/expertise.png",
    title: "Expertise",
    desc: "20+ Years of Excellence",
    color: "bg-pink-500",
  },
  {
    icon: "/innovation.png",
    title: "Innovation",
    desc: "Cutting-Edge Solutions",
    color: "bg-green-500",
  },
  {
    icon: "/agility.png",
    title: "Agility",
    desc: "Flexible & Adaptive",
    color: "bg-orange-500",
  },
  {
    icon: "/adaptability.png",
    title: "Adaptability",
    desc: "Customizable Processes",
    color: "bg-sky-500",
  },
  {
    icon: "/customer.png",
    title: "Customer Centric",
    desc: "Satisfaction First",
    color: "bg-yellow-500",
  },
  {
    icon: "/partnership.png",
    title: "Partnership",
    desc: "Trusted Collaboration",
    color: "bg-blue-500",
  },
];

const About = () => {
  return (
    <section className="relative overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* ABOUT HEADER */}
        <div className="text-center mb-20">
          <h3 className="heading-primary">
            ABOUT US
          </h3>

          <p
            className="max-w-4xl mx-auto mt-6 text-center"
            style={{
              fontFamily: "Creato Display",
              fontWeight: 500,
              fontSize: "28.19px",
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#E5E7EB",
            }}
          >
            <span style={{ fontWeight: 600, color: "#FFFFFF" }}>
              BriskBold AI & Automation:
            </span>{" "}
            Pioneering the Future with Scalable, Tailor-Made Solutions Empowering
            Industries with Cutting-Edge AI and Automation to Simplify Operations,
            Ignite Innovation, and Drive Business Growth.
          </p>

          <div className="mt-10">
            <button className="px-8 py-3 rounded-md border border-sky-400/30 text-sky-400 text-sm tracking-widest uppercase hover:bg-sky-400/10 transition">
              Why Choose Us?
            </button>
          </div>
        </div>

        {/* FEATURE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {features.map((item, index) => (
            <div
              key={index}
              className="
                bg-white/5
                backdrop-blur-lg
                rounded-[13px]
                border-l
                border-white/20
                flex
                flex-col
                items-center
                justify-center
                text-center
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-sky-400/50
                w-full
                max-w-[295px]
              "
              style={{
                width: "295px",
                height: "206px",
                opacity: 1,
                borderLeft: "1px solid #41ADD3",
              }}
            >
              {/* ICON */}
              <div
                className={`w-11 h-11 ${item.color} rounded-full flex items-center justify-center mb-4`}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-5 h-5 object-contain"
                />
              </div>

              {/* TITLE */}
              <h4
                style={{
                  fontFamily: "Creato Display",
                  fontWeight: 400,
                  fontSize: "31.03px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#FFFFFF",
                  textAlign: "center",
                  marginBottom: "6px",
                }}
              >
                {item.title}
              </h4>

              {/* DESCRIPTION */}
              <p
                style={{
                  fontFamily: "Creato Display",
                  fontWeight: 400,
                  fontSize: "16.73px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#D1D5DB",
                  textAlign: "center",
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
