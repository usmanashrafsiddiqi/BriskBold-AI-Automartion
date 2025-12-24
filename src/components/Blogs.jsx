import React, { useState } from "react";
import blogsData from "../data/blogsData";
import BlogOverlay from "./BlogOverlay";

const Blogs = () => {
  const [activeBlog, setActiveBlog] = useState(null);

  return (
    <>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h3 className="heading-primary">OUR BLOGS</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogsData.map((blog) => (
              <div
                key={blog.id}
                onClick={() => setActiveBlog(blog)}
                className="relative overflow-hidden cursor-pointer"
                style={{
                  height: "220px",
                  borderRadius: "16px",
                  border: "1px solid rgba(56,189,248,0.35)",
                }}
              >
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <div className="absolute bottom-0 p-5">
                  <h4 className="text-white text-lg font-semibold">
                    {blog.title}
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {blog.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Overlay */}
      {activeBlog && (
        <BlogOverlay blog={activeBlog} onClose={() => setActiveBlog(null)} />
      )}
    </>
  );
};

export default Blogs;
