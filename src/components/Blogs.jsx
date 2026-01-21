import React, { useState } from "react";
import blogsData from "../data/blogsData";
import BlogOverlay from "./BlogOverlay";

const Blogs = () => {
  const [activeBlog, setActiveBlog] = useState(null);

  return (
    <>
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">

          {/* ================= HEADING ================= */}
          <div className="text-center mb-16">
            <h3 className=" inline-block px-6 py-2 heading-primary font-heading  text-sky-400 border border-sky-400/40 rounded-md">
              OUR BLOGS
            </h3>
          </div>

          {/* ================= BLOG CARDS ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogsData.map((blog) => (
              <div
                key={blog.id}
                onClick={() => setActiveBlog(blog)}
                className="
                  relative overflow-hidden cursor-pointer
                  rounded-[16px]
                  border border-sky-400/40
                  h-[220px]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-sky-400
                "
              >
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <div className="absolute bottom-0 p-5">
                  {/* BLOG TITLE */}
                  <h4 className="
                    font-heading font-semibold
                    text-white text-lg
                  ">
                    {blog.title}
                  </h4>

                  {/* BLOG SUBTITLE */}
                  <p className="
                    font-body text-gray-300 text-sm
                  ">
                    {blog.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BLOG OVERLAY ================= */}
      {activeBlog && (
        <BlogOverlay
          blog={activeBlog}
          onClose={() => setActiveBlog(null)}
        />
      )}
    </>
  );
};

export default Blogs;
