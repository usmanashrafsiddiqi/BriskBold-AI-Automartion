import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const locations = [
    {
      img: "/uaeflag.png",
      title: "Dubai",
      address:
        "Office 3507, Churchill Executive Tower, Business Bay, Dubai, UAE",
      phone1: "+(97) 554372731",
      phone2: "+(97) 554372731",
    },
    {
      img: "/jpflag.png",
      title: "Japan",
      address:
        "7th Floor Wakamatsu building, Honchome 3-3-6, Chuo-ku, Tokyo, Japan",
      phone1: "+(97) 554372731",
      phone2: "+(97) 554372731",
    },
    {
      img: "/inflag.png",
      title: "India",
      address: "Delhi, Jaipur & Kerala",
      phone1: "+(97) 554372731",
      phone2: "+(97) 554372731",
    },
    {
      img: "/canadaflag.png",
      title: "Canada",
      address:
        "100-4310 Sherwoodtowne Boulevard, Mississauga, Ontario, Canada, L4Z4C4",
      phone1: "+(97) 554372731",
      phone2: "+(97) 554372731",
    },
  ];

  return (
    <section className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h3
            className="heading-primary "         >
            GET IN TOUCH
          </h3>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[501px_1fr] gap-10 items-start">

          {/* LEFT IMAGE */}
          <div
            className="
              rounded-[21px]
              border-[2px]
              border-[#41ADD3]
              overflow-hidden
              w-full
              h-auto
              lg:w-[501px]
              lg:h-[448px]
            "
          >
            <img
              src="/robot.png"
              alt="robot"
              className="w-full h-full object-cover"
              style={{
                transform: "scale(1.2)",
                transformOrigin: "center center",
              }}
            />
          </div>

          {/* RIGHT LOCATION CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {locations.map((loc, index) => (
              <div
                key={index}
                className="
                  bg-white/5
                  backdrop-blur-lg
                  border
                  border-[#41ADD3]
                  rounded-[10px]
                  p-5
                  text-white
                  transition-all
                  duration-300
                  hover:border-sky-400/40
                  w-full
                  h-auto
                  lg:w-[261px]
                  lg:h-[211px]
                "
              >
                {/* Country */}
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src={loc.img}
                    alt={loc.title}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <h4 className="text-lg font-semibold text-sky-400">
                    {loc.title}
                  </h4>
                </div>

                {/* Address */}
                <p className="text-gray-300 text-xs leading-relaxed mb-4">
                  {loc.address}
                </p>

                {/* Contact */}
                <div className="space-y-2 text-sm">
                  <p className="flex items-center gap-2">
                    <FaWhatsapp className="text-sky-400" />
                    {loc.phone1}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaPhoneAlt className="text-sky-400" />
                    {loc.phone2}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
