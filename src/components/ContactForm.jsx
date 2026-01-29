import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(e.target);
    formData.append(
      "access_key",
      import.meta.env.VITE_WEB3FORMS_KEY
    );
    formData.append("subject", "New Contact Form Message");
    formData.append("from_name", "Website Contact Form");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Message sent successfully 🚀");
        e.target.reset();
      } else {
        setStatus("Something went wrong. Try again!");
      }
    } catch (error) {
      setStatus("Network error. Please try later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full py-12 px-4 flex justify-center">
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-8 sm:p-10 md:p-14">

        {/* Heading */}
       <h2 className="
  text-center
  text-3xl md:text-4xl
  font-heading font-semibold
  text-sky-400
  tracking-wide
  mb-10
">
  Send Us a Message
</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 font-body">

          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full px-5 py-4 rounded-xl bg-black/40 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-sky-500 font-body"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full px-5 py-4 rounded-xl bg-black/40 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-sky-500 font-body"
            />
          </div>

          {/* Message */}
          <textarea
            name="message"
            required
            rows="6"
            placeholder="Tell us about your project..."
            className="w-full px-5 py-4 rounded-xl bg-black/40 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-sky-500 resize-none font-body"
          />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white text-lg font-heading font-semibold transition hover:scale-[1.02] disabled:opacity-70"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Status Message */}
          {status && (
            <p className="text-center mt-4 text-green-400 font-body">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
