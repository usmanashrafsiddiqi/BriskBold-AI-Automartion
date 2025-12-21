import React, { useState } from "react";

const VoiceNotice = ({ onEnable }) => {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <>
      {/* Background Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-40 z-40"></div>

      {/* Popup Container */}
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div
          className="rounded-2xl p-6 w-[90%] max-w-md relative overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #4DBBFF, #C7E9FF)",
          }}
        >
          {/* Title */}
          <h3 className="font-semibold text-xl text-white flex items-center gap-2">
            🎤 Voice Navigation Available
          </h3>

          {/* Subtitle */}
          <p className="text-white text-sm opacity-90 mt-2">
            You can navigate this website using your voice.
            For example, say <b>“Home”</b>, <b>“Services”</b>, <b>“Contact”</b>.
          </p>

          {/* Wave Image BELOW TEXT */}
       <img
  src="/popbg.jpg"
  alt="wave"
  className="w-full h-24 object-cover opacity-100 mt-4 "
 />

          {/* Bottom Row */}
          <div className="flex items-center justify-between mt-2">
            {/* Not Now */}
            <button
              onClick={() => setShow(false)}
              className="text-white text-sm opacity-80 hover:opacity-100"
            >
              Not now
            </button>

            {/* Enable Button */}
            <button
              onClick={() => {
                setShow(false);
                onEnable();
              }}
              className="bg-white text-blue-600 px-5 py-1 rounded-lg shadow hover:opacity-90"
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
