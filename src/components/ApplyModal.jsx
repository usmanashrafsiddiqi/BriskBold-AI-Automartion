import React, { useState } from "react";
import Stepper, { Step } from "./Stepper";

const ApplyModal = ({ onClose }) => {
  const [name, setName] = useState("");
  const [qualification, setQualification] = useState("");
  const [cv, setCv] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent("New Job Application");
    const body = encodeURIComponent(
      `Name: ${name}\nQualification: ${qualification}\nCV: ${cv ? cv.name : "No CV uploaded"}`
    );

    // Replace with your email
    window.location.href = `mailto:sadafashraf229@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
      <div className="bg-[#0B1220] border border-sky-400/40 rounded-2xl p-8 w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-lg font-semibold">Apply Now</h2>
          <button onClick={onClose} className="text-white text-xl">✖</button>
        </div>

        <form onSubmit={handleSubmit}>
          <Stepper>
            <Step>
              <h3 className="text-white mb-3">Enter Your Name</h3>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full bg-transparent border-b border-white/30 text-white py-2 outline-none"
                required
              />
            </Step>

            <Step>
              <h3 className="text-white mb-3">Qualification</h3>
              <input
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
                placeholder="Your Qualification"
                className="w-full bg-transparent border-b border-white/30 text-white py-2 outline-none"
                required
              />
            </Step>

            <Step>
              <h3 className="text-white mb-3">Upload CV</h3>
              <input
                type="file"
                onChange={(e) => setCv(e.target.files[0])}
                className="w-full text-white"
              />
            </Step>
          </Stepper>

          <button
            type="submit"
            className="mt-6 bg-sky-500 text-white px-6 py-2 rounded-lg hover:bg-sky-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyModal;
