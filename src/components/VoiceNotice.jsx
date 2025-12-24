import React, { useState } from "react";

const VoiceNotice = ({ onEnable }) => {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-40" />

      {/* Popup */}
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div
          className="
            relative rounded-2xl shadow-xl 
            flex flex-col items-center text-center
            px-8 py-10
            max-w-sm w-[90%]
          "
          style={{
            borderRadius: "16px",
            background: "linear-gradient(180deg,#0C1B32 0%,#061327 100%)",
          }}
        >
          {/* Title */}
          <h2 className="text-[#B5D4FF] text-2xl font-semibold leading-snug">
            Voice navigation<br />is available.
          </h2>

          {/* Subtitle */}
          <p className="text-[#9EC3FF] text-sm mt-3 max-w-xs">
            You can navigate this website using your voice.
          </p>

          {/* Mic icon */}
          <div className="mt-6 w-20 h-20 rounded-full bg-[#183760] flex items-center justify-center shadow-inner">
            <span className="text-white text-4xl">🎤</span>
          </div>

          {/* Examples */}
          <p className="text-[#9EC3FF] text-xs mt-5 leading-relaxed">
            For example, say<br />
            <span className="font-semibold">
              “Home”, “Services”, “Contact”
            </span>
          </p>

          {/* Buttons row */}
          <div className="flex justify-between items-center w-full mt-8 text-sm">
            <button
              onClick={() => setShow(false)}
              className="text-white/70 hover:text-white transition"
            >
              Not now
            </button>

            <button
              onClick={() => {
                setShow(false);
                onEnable && onEnable();
              }}
              className="border border-white/30 text-white px-4 py-2 rounded-md hover:bg-white/10 transition"
            >
              Enable Voice Navigation
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VoiceNotice;
