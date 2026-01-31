import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import blogsData from "../data/blogsData";

const Blogs = () => {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(6); // first 6 visible

  const openBlog = (id) => {
    // Save current scroll position before navigating
    sessionStorage.setItem("blogScroll", window.scrollY);
    navigate(`/blogs/${id}`);
  };

  // Restore scroll position when returning to Blogs component
  useEffect(() => {
    const scroll = sessionStorage.getItem("blogScroll");
    if (scroll) {
      window.scrollTo(0, Number(scroll));
      sessionStorage.removeItem("blogScroll");
    }
  }, []);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 3); // load 3 more blogs
    setTimeout(() => {
      const newBlog = document.getElementById(`blog-${visibleCount}`);
      if (newBlog) {
        newBlog.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const visibleBlogs = blogsData.slice(0, visibleCount);

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="inline-block px-6 py-2 heading-primary font-heading text-sky-400 border border-sky-400/40 rounded-md">
            OUR BLOGS
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {visibleBlogs.map((blog, index) => (
            <div
              key={blog.id}
              id={`blog-${index}`}
              onClick={() => openBlog(blog.id)}
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
                <h4 className="font-heading font-semibold text-white text-lg">
                  {blog.title}
                </h4>
                <p className="font-body text-gray-300 text-sm">
                  {blog.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < blogsData.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={loadMore}
              className="px-6 py-3 bg-sky-400 text-white font-semibold rounded-md hover:bg-sky-500 transition-colors duration-300"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogs;
