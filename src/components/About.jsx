import React from "react";
import {
  FaUsers,
  FaLightbulb,
  FaSyncAlt,
  FaCogs,
  FaSmile,
  FaHandshake,
} from "react-icons/fa";

const features = [
  { icon: <FaUsers />, title: "Expertise", desc: "20+ Years of Excellence", color: "bg-pink-500" },
  { icon: <FaLightbulb />, title: "Innovation", desc: "Cutting-Edge Solutions", color: "bg-green-500" },
  { icon: <FaSyncAlt />, title: "Agility", desc: "Flexible & Adaptive", color: "bg-orange-500" },
  { icon: <FaCogs />, title: "Adaptability", desc: "Customizable Processes", color: "bg-sky-500" },
  { icon: <FaSmile />, title: "Customer Centric", desc: "Satisfaction First", color: "bg-yellow-500" },
  { icon: <FaHandshake />, title: "Expertise", desc: "20+ Years of Excellence", color: "bg-blue-500" },
];

const About = () => {
  return (
    <section className="relative overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* ABOUT HEADER */}
        <div className="text-center mb-20">
          <h3 className="heading-primary"
            
          >
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
                className={`w-11 h-11 ${item.color} rounded-full flex items-center justify-center mb-4 text-white text-lg`}
              >
                {item.icon}
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

        {/* WHY CHOOSE US – BOTTOM SECTION */}
        <div className="mt-28 grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <span
              className="inline-block px-4 py-2 rounded-md mb-6"
              style={{
                border: "1px solid rgba(56,189,248,0.4)",
                color: "#38BDF8",
                fontSize: "13px",
                fontFamily: "Montserrat",
                fontWeight: 600,
              }}
            >
              Why Choose Us?
            </span>

            <p
              className="mb-8"
              style={{
                fontFamily: "Creato Display",
                fontWeight: 400,
                fontSize: "17px",
                lineHeight: "26px",
                color: "#D1D5DB",
                maxWidth: "620px",
              }}
            >
              We are a dedicated group of technology professionals, data analysts,
              and engineering specialists focused on advancing the power of AI and
              automation. Our mission is to support organizations in boosting
              productivity by streamlining workflows, uncovering data-driven insights,
              and deploying intelligent systems designed for continuous improvement.
            </p>

            <div className="grid grid-cols-2 gap-y-4 gap-x-12 text-sm">
              <div><p className="text-sky-400 font-semibold">Expertise</p><p className="text-gray-300">20+ Years of Excellence</p></div>
              <div><p className="text-sky-400 font-semibold">Innovation</p><p className="text-gray-300">Cutting-Edge Solutions</p></div>
              <div><p className="text-sky-400 font-semibold">Agility</p><p className="text-gray-300">Flexible & Adaptive</p></div>
              <div><p className="text-sky-400 font-semibold">Customer-Centric</p><p className="text-gray-300">Satisfaction First</p></div>
              <div><p className="text-sky-400 font-semibold">Adaptability</p><p className="text-gray-300">Customizable Processes</p></div>
              <div><p className="text-sky-400 font-semibold">Collaboration</p><p className="text-gray-300">Seamless Partnerships</p></div>
            </div>
          </div>

        {/* RIGHT IMAGE */}
<div
  className="
    w-full
    mx-auto
    lg:w-[530.67px]
    lg:h-[318.59px]
    rounded-[23.36px]
    border
    border-sky-400/40
    bg-white/5
    backdrop-blur-[14px]
    overflow-hidden
  "
>
  <img
    src="/aboutright.jpg"
    alt="Why Choose Us"
    className="w-full h-full object-cover"
  />
</div>
        </div>

      </div>
    </section>
  );
};

export default About;
