import React, { useState } from "react";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUsers } from "react-icons/fa";

const Event = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const upcomingEvents = [
    {
      title: "AI Convergence 2025: Shaping Intelligent Systems",
      description:
        "Experience a full-day immersive event with innovators and engineers redefining automation, AI workflows, and smart decision systems.",
      date: "Jun 22, 2025",
      time: "10:00 AM – 6:00 PM",
      location: "Online",
      attendees: "600+",
      image: "/event.jpg",
    },
    {
      title: "AI Future Horizons Summit 2025",
      description:
        "Dive into the possibilities of AI-driven transformation across industries with keynote speakers worldwide.",
      date: "Jul 10, 2025",
      time: "11:00 AM – 5:00 PM",
      location: "Hybrid",
      attendees: "950+",
      image: "/event.jpg",
    },
    {
      title: "Automation Excellence Workshop",
      description:
        "A focused session on workflow engineering and AI system optimization for modern teams.",
      date: "Aug 15, 2025",
      time: "1:00 PM – 6:00 PM",
      location: "Online",
      attendees: "700+",
      image: "/event.jpg",
    },
  ];

  const pastEvents = [
    {
      title: "AI Convergence 2024: Intelligent Automation",
      description:
        "A successful past event focused on enterprise AI, automation frameworks, and future-ready solutions.",
      date: "Jun 18, 2024",
      time: "9:00 AM – 5:00 PM",
      location: "Online",
      attendees: "800+",
      image: "/pastevent.jpg",
    },
    {
      title: "Automation & AI Leadership Forum 2024",
      description:
        "Leaders gathered to discuss scalable AI implementation strategies and transformation roadmaps.",
      date: "Oct 21, 2024",
      time: "10:00 AM – 6:00 PM",
      location: "Dubai",
      attendees: "900+",
      image: "/pastevent.jpg",
    },
    {
      title: "Neural Intelligence Expo 2024",
      description:
        "A tech-forward event exploring machine learning ecosystems and human-AI collaboration.",
      date: "Dec 5, 2024",
      time: "12:00 PM – 7:00 PM",
      location: "Singapore",
      attendees: "1,100+",
      image: "/pastevent.jpg",
    },
  ];

  const eventsToShow =
    activeTab === "upcoming" ? upcomingEvents : pastEvents;

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <span className="heading-primary py-10">
            Events & Workshops
          </span>
          <h2 className="paragraph-primary">
            Join Our Event
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Upgrade Your Skills Through Live Experiences.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/5 border border-white/10 rounded-full p-1 flex gap-1">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`px-6 py-2 rounded-full text-sm transition ${
                activeTab === "upcoming"
                  ? "bg-sky-400 text-black"
                  : "text-gray-300"
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`px-6 py-2 rounded-full text-sm transition ${
                activeTab === "past"
                  ? "bg-sky-400 text-black"
                  : "text-gray-300"
              }`}
            >
              Past Events
            </button>
          </div>
        </div>

        {/* Events */}
        <div className="space-y-8">
          {eventsToShow.map((event, index) => (
            <div
              key={index}
              className="
                flex flex-col
                md:flex-row
                bg-white/5
                backdrop-blur-md
                border border-white/10
                rounded-[13px]
                overflow-hidden
                w-full
                md:w-[945px]
                h-auto
                md:h-[312px]
              "
              style={{ borderWidth: "0.4px" }}
            >
              {/* Image */}
              <img
                src={event.image}
                alt={event.title}
                className="
                  w-full
                  h-[220px]
                  md:w-[451px]
                  md:h-[312px]
                  object-cover
                "
                style={{ borderRadius: "13px" }}
              />

              {/* Content */}
              <div className="flex flex-col justify-between p-6 text-white flex-1">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {event.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-sky-400" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <FaClock className="text-purple-400" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-green-400" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <FaUsers className="text-orange-400" />
                      {event.attendees}
                    </div>
                  </div>
                </div>

                {/* BUTTON TEXT CHANGES HERE */}
                <button className="mt-6 self-start px-6 py-2 rounded-md bg-gradient-to-r from-sky-400 to-blue-500 text-black text-sm font-medium hover:opacity-90 transition">
                  {activeTab === "upcoming"
                    ? "Coming Soon"
                    : "Check Recap"}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Event;
