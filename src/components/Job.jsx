import React from "react";
import { useState } from "react";
import ApplyModal from "./ApplyModal";
const jobs = [
  {
    id: 1,
    title: "RPA Developer",
    type: "Full Time / Part Time",
    desc:
      "Help us automate business processes by designing, developing, and maintaining intelligent RPA solutions that improve efficiency, accuracy, and operational performance.",
    available: true,
  },
  {
    id: 2,
    title: "UiPath Infrastructure Engineer",
    type: "Full Time / Part Time",
    desc:
      "Help us design, deploy, and manage UiPath infrastructure by ensuring secure, scalable, and high-performance environments that support reliable automation across the organization.",
    available: true,
  },
  {
    id: 3,
    title: "System Business Analyst",
    type: "Full Time / Part Time",
    desc:
      "Help us analyze business needs, define system requirements, and bridge the gap between stakeholders and technical teams to deliver efficient, scalable, and value-driven solutions.",
    available: true,
  },
  {
    id: 4,
    title: "Marketing Advisor",
    type: "Full Time / Part Time",
    desc:
      "Help us build strong market strategies, grow our brand presence, and connect with clients through smart digital marketing.",
    available: false, // 🔒 Not available
  },
];

const Job = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* ---- SAME UI ---- */}
        <div className="text-center mb-14">
          <span className="inline-block px-6 py-2 text-sky-400 border border-sky-400/40 rounded-md text-sm tracking-widest mb-4">
            JOIN OUR TEAM
          </span>

          <p className="text-gray-400 max-w-xl mx-auto">
            Be a part of BriskBold AI Automation and help build the future
            of intelligent technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* JOB CARDS */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {jobs.map(job => (
              <div
                key={job.id}
                className={`bg-[#0B1220] border border-sky-400/30 rounded-xl p-6`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <img src="/jobpro.png" className="w-10 h-10 rounded-full" />

                    <div>
                      <h4 className="text-white font-semibold">{job.title}</h4>
                      <p className="text-sm text-gray-400">{job.type}</p>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm">
                    {job.desc}
                  </p>
                </div>

                <button
                  disabled={!job.available}
                  onClick={() => setSelectedJob(job)}
                  className={`mt-6 px-5 py-2 text-sm rounded-md 
                    ${job.available
                      ? "bg-sky-500 hover:bg-sky-600"
                      : "bg-gray-600 cursor-not-allowed"
                    }`}
                >
                  {job.available ? "APPLY NOW" : "NOT AVAILABLE"}
                </button>
              </div>
            ))}
          </div>

          {/* APPLY FORM RIGHT BOX (unchanged) */}
         <div className="bg-[#0B1220] border border-sky-400/40 rounded-xl p-8">
            <h3 className="text-sky-400 text-xl font-semibold mb-6 text-center">
              JOIN OUR TEAM
            </h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name*"
                className="w-full bg-transparent border-b border-white/20 text-white py-2 focus:outline-none focus:border-sky-400"
              />

              <input
                type="email"
                placeholder="Your Email*"
                className="w-full bg-transparent border-b border-white/20 text-white py-2 focus:outline-none focus:border-sky-400"
              />

              <input
                type="text"
                placeholder="Your Position*"
                className="w-full bg-transparent border-b border-white/20 text-white py-2 focus:outline-none focus:border-sky-400"
              />

              <textarea
                rows="4"
                placeholder="Enter your message..."
                className="w-full bg-transparent border border-white/20 rounded-md p-3 text-white focus:outline-none focus:border-sky-400"
              />

              <button
                type="submit"
                className="w-full bg-sky-500 hover:bg-sky-600 transition text-white py-3 rounded-md"
              >
                APPLY NOW
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {selectedJob && (
        <ApplyModal
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
        />
      )}

    </section>
  );
};

export default Job;
