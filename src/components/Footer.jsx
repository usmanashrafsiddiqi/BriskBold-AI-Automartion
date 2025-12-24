import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#070B18]/70 backdrop-blur-md border-t border-white/20 pt-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-14">

          {/* Brand */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">
              BriskBOLD
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Building the future of business
              with intelligent, automated AI systems.
            </p>

            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/briskbold_ai_automation/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center border border-white/20 rounded-md text-gray-400 hover:text-sky-400 hover:border-sky-400 transition"
              >
                <FaInstagram size={14} />
              </a>

              <a
                href="https://www.facebook.com/BriskBoldAIAutomation/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center border border-white/20 rounded-md text-gray-400 hover:text-sky-400 hover:border-sky-400 transition"
              >
                <FaFacebookF size={14} />
              </a>

              <a
                href="https://www.linkedin.com/company/briskboldai/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center border border-white/20 rounded-md text-gray-400 hover:text-sky-400 hover:border-sky-400 transition"
              >
                <FaLinkedinIn size={14} />
              </a>

              <a
                href="https://x.com/BriskBoldAI"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center border border-white/20 rounded-md text-gray-400 hover:text-sky-400 hover:border-sky-400 transition"
              >
                <FaTwitter size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-4">
              Quick Links
            </h4>

            <ul className="space-y-2 text-sm text-gray-400">

             <li>
  <button
    onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
    className="hover:text-sky-400"
  >
    Home
  </button>
</li>

<li>
  <button
    onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
    className="hover:text-sky-400"
  >
    About Us
  </button>
</li>

<li>
  <button
    onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
    className="hover:text-sky-400"
  >
    Services
  </button>
</li>

<li>
  <button
    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
    className="hover:text-sky-400"
  >
    Contact Us
  </button>
</li>

              <li>
                <a href="#privacy" className="hover:text-sky-400">
                  Privacy Policy
                </a>
              </li>

            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-medium mb-4">
              Subscribe to Our Newsletter
            </h4>

            <div className="flex bg-[#0B1220] border border-white/20 rounded-md overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent text-sm text-white px-3 py-2 w-full focus:outline-none"
              />
              <button className="bg-sky-500 hover:bg-sky-600 transition px-4 text-sm text-white">
                Subscribe
              </button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium mb-4">
              Contact Us
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: info@briskbold.com</li>
              <li>Phone: (+97) 55432733</li>
              <li>Address: Business Bay, Dubai, UAE</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            © 2025 BriskBold AI Automation. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-sky-400">
              Privacy
            </a>
            <a href="#terms" className="hover:text-sky-400">
              Terms
            </a>
            <a href="#cookies" className="hover:text-sky-400">
              Cookies
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
