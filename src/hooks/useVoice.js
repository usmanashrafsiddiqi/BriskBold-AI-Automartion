import { useEffect, useRef } from "react";

const useVoice = () => {
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.warn("Speech Recognition not supported");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript
        .trim()
        .toLowerCase();

      console.log("User said:", transcript);

      if (transcript.includes("home")) {
        document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
      }
      if (transcript.includes("services")) {
        document
          .getElementById("services")
          ?.scrollIntoView({ behavior: "smooth" });
      }
      if (transcript.includes("customers")) {
        document
          .getElementById("customers")
          ?.scrollIntoView({ behavior: "smooth" });
      }
      if (transcript.includes("about")) {
        document
          .getElementById("about")
          ?.scrollIntoView({ behavior: "smooth" });
      }
      if (transcript.includes("contact")) {
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" });
      }
    };

    recognitionRef.current = recognition;
  }, []);

  const startListening = () => {
    recognitionRef.current?.start();
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
  };

  return { startListening, stopListening };
};

export default useVoice;
