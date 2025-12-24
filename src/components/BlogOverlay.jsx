import React, { useEffect } from "react";

const BlogOverlay = ({ blog, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex justify-center items-start overflow-y-auto pt-20">
      <div className="bg-[#0B1220] max-w-5xl w-full m-6 rounded-2xl border border-sky-400/30 flex flex-col lg:flex-row">

        {/* Left Content */}
        <div className="flex-1 p-6 flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl text-white font-semibold">
                {blog.title}
              </h2>
              {blog.subtitle && (
                <p className="text-gray-400 text-sm">{blog.subtitle}</p>
              )}
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-2xl"
            >
              ✕
            </button>
          </div>

          {/* Content */}
          <div className="text-gray-300 leading-relaxed whitespace-pre-line">
            {blog.content}
          </div>
        </div>

        {/* Right Image */}
        <div className="p-6 flex justify-center items-start">
          <img
            src={blog.img}
            alt={blog.title}
            className="w-[378px] h-[281px] object-cover rounded-[10px] border border-white/20"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogOverlay;
