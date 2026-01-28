import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaUsers,
} from "react-icons/fa";

const EVENTS_PER_PAGE = 3;

const Event = () => {
  const [activeTab, setActiveTab] = useState("past");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);

  /* -------------------- DATA -------------------- */
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
      title: "Web Summit Qatar 2025",
      description:
        "An exciting Day 1 filled with innovation, meaningful networking, and game-changing discussions.We’re here to explore the future of digital transformation and connect with forward-thinking professionals and businesses.",
      date: "February 23-25, 2025",
      time: "9:00 AM – 5:00 PM",
      location: "Qatar",
      attendees: "800+",
      images: ["/web1.jpg", "/web2.jpg", "/web3.jpg","/web4.jpg","/web5.jpg","/web6.jpg"],
    },
    {
      title: "LEAPWeek Riyadh",
      description:
        "BriskBold AI & Automation had an incredible journey at #LEAPWeek in Riyadh—an inspiring week filled with innovation, meaningful connections, and transformative technology shaping the future of digital transformation.",
      date: "February 9-12, 2025,",
      time: "10:00 AM – 6:00 PM",
      location: "Riyadh-Kingdom of Saudi Arabia",
      attendees: "900+",
      images: ["/leap1.jpg", "/leap2.jpg","/leap3.jpg","/leap4.jpg"],
    },
    {
      title: "Dubai30x30 Fitness Challenge",
      description:
        "The #Dubai30x30 Fitness Challenge turned Sheikh Zayed Road into a massive open fitness track—thousands of people cycling together, wheels spinning, energy high, and motivation at its peak.The atmosphere was electric, the vibe truly inspiring, and the commitment to health and wellness felt next level.",
      date: "November 2025,",
      time: "1:00 PM – 7:00 PM",
      location: "Sheikh Zayed Road- Dubai",
      attendees: "1,100+",
      images: ["/fit1.jpg", "/fit2.jpg", "/fit3.jpg","/fit4.jpg","/ride1.jpg", "/ride2.jpg", "/ride3.jpg","/emb1.jpg", "/emb2.jpg", "/emb3.jpg"],
    },
    {
      title: "A Year to Remember, A Future to Build",
      description:
        "As 2024 comes to a close, it stands out as a truly transformational year—marked by growth, innovation, and meaningful connections. It was a year of success, strong coordination, trusted partnerships, lasting friendships, and memorable journeys that went beyond expectations.",
      date: "Dec 5, 2024",
      time: "12:00 AM – 4:00 PM",
      location: "Singapore",
      attendees: "1,100+",
      images: ["/year1.jpg", "/year2.jpg", "/year3.jpg","/year4.jpg","/year5.jpg","/year6.jpg"],
    },
    //   {
    //   title: "Embracing the Dubai 30x30 Fitness Challenge",
    //   description:
    //     "Embracing the Dubai 30x30 Fitness Challenge is a commitment to building healthier habits through consistency and movement. This challenge highlights how small daily actions—just 30 minutes of activity—can create powerful, long-term impact. It’s an inspiring reminder of the community spirit, energy, and focus on well-being that truly defines Dubai.",
    //   date: "Dec 5, 2024",
    //   time: "12:00 PM – 7:00 PM",
    //   location: "Singapore",
    //   attendees: "1,100+",
    //   images: ["/emb1.jpg", "/emb2.jpg", "/emb3.jpg"],
    // },
     
      {
      title: "An Inspiring Week at New York Climate Week 2025",
      description:
        "The past week at New York Climate Week 2025 has been nothing short of extraordinary for BriskBold AI & Automation. As global leaders, innovators, and changemakers came together to accelerate climate action, our team proudly stood at the intersection of technology and sustainability—driving meaningful conversations on how AI and automation can transform carbon reporting worldwide.",
      date: "September 21–23, 2025, ",
      time: "11:00 AM – 7:00 PM",
      location: "New York City – Javits Centre",
      attendees: "1,100+",
      images: ["/camp1.jpg", "/camp2.jpg","/camp3.jpg","/camp4.jpg","/camp5.jpg","/camp6.jpg"],
    },
      {
      title: "BriskBOLD AI & Automation at GITEX Global 2025",
      description:
        "BriskBOLD AI & Automation is thrilled to be part of GITEX Global 2025—the world’s largest technology and innovation event—bringing together global leaders, innovators, and visionaries in Dubai.We’re excited to connect, showcase breakthroughs, and shape the future of AI, Automation, and Digital",
      date: "October 15, 2025,",
      time: "10:00 AM – 7:00 PM",
      location: "Dubai World Trade Centre",
      attendees: "1,100+",
      images: ["/git1.jpg", "/git2.jpg", "/git3.jpg"],
    },
      {
      title: "Aligning Minds, Automating Futures.",
      description:
        "BriskBold AI & Automation Team Meetup | KashmirThe BriskBold AI & Automation Dubai team came together in the serene setting of a Sufi Café in Kashmir for a meaningful in-person meetup focused on alignment, innovation, and shared vision.",
      date: "july 31, 2024",
      time: "10:00 AM – 5:00 PM",
      location: "Srinagar,Jammu & Kashmir",
      attendees: "1,100+",
      images: ["/kash1.jpg", "/kash2.jpg", "/kash3.jpg","/kash4.jpg","/kash5.jpg","/kash6.jpg"],
    },
  ];  /* -------------------- PAGINATION -------------------- */

  const events =
    activeTab === "upcoming" ? upcomingEvents : pastEvents;

  const start = pageIndex * EVENTS_PER_PAGE;
  const currentEvents = events.slice(
    start,
    start + EVENTS_PER_PAGE
  );

  /* -------------------- HANDLERS -------------------- */

  const openModal = (event) => {
    if (activeTab === "past") {
      setSelectedEvent(event);
      setSlideIndex(0);
    }
  };

  const closeModal = () => setSelectedEvent(null);

  const nextSlide = () =>
    setSlideIndex(
      (prev) =>
        (prev + 1) % selectedEvent.images.length
    );

  const prevSlide = () =>
    setSlideIndex(
      (prev) =>
        (prev - 1 + selectedEvent.images.length) %
        selectedEvent.images.length
    );

  /* -------------------- UI -------------------- */

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="heading-primary">Events & Workshops</h3>
          <p className="paragraph-primary mt-2">
            Join Our Events
          </p>
          <p className="text-gray-400 text-sm mt-1">
            Upgrade your skills through live experiences.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-14">
          <div className="bg-white/5 border border-white/10 rounded-full p-1 flex">
            {["upcoming", "past"].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setPageIndex(0);
                }}
                className={`px-6 py-2 rounded-full text-sm transition ${
                  activeTab === tab
                    ? "bg-sky-400 text-black"
                    : "text-gray-300"
                }`}
              >
                {tab === "upcoming"
                  ? "Upcoming Events"
                  : "Past Events"}
              </button>
            ))}
          </div>
        </div>

        {/* Event Cards */}
        <div className="space-y-8">
          {currentEvents.map((event, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden md:h-[312px]"
            >
              <img
                src={
                  activeTab === "upcoming"
                    ? event.image
                    : event.images[0]
                }
                alt={event.title}
                className="w-full md:w-[451px] h-[220px] md:h-full object-cover"
              />

              <div className="flex flex-col justify-between p-6 text-white flex-1">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {event.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4">
                    {event.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-300">
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

                <button
                  onClick={() => openModal(event)}
                  className="mt-6 self-start px-6 py-2 rounded-md bg-gradient-to-r from-sky-400 to-blue-500 text-black text-sm font-medium hover:opacity-90 transition"
                >
                  {activeTab === "upcoming"
                    ? "Coming Soon"
                    : "Check Recap"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            disabled={pageIndex === 0}
            onClick={() =>
              setPageIndex((p) => Math.max(p - 1, 0))
            }
            className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
          >
            Previous
          </button>

          <button
            disabled={
              (pageIndex + 1) * EVENTS_PER_PAGE >=
              events.length
            }
            onClick={() =>
              setPageIndex((p) => p + 1)
            }
            className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>

        {/* Modal */}
        {selectedEvent && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0d1b2a] rounded-xl p-6 max-w-3xl w-full text-white relative"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-xl"
              >
                ✕
              </button>

              <h2 className="text-xl font-bold mb-2">
                {selectedEvent.title}
              </h2>

              <p className="text-gray-300 mb-4">
                {selectedEvent.description}
              </p>

              <div className="relative h-[340px] overflow-hidden rounded-lg">
                <img
                  src={selectedEvent.images[slideIndex]}
                  className="w-full h-full object-cover"
                  alt=""
                />

                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2"
                >
                  <img
                    src="/leftarrow.png"
                    className="w-8 h-8"
                    alt=""
                  />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <img
                    src="/rightarrow.png"
                    className="w-8 h-8"
                    alt=""
                  />
                </button>
              </div>

              <div className="text-center text-sm text-gray-400 mt-2">
                {slideIndex + 1} /{" "}
                {selectedEvent.images.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Event;
