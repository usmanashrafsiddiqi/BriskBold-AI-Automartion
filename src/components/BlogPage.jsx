import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import blogsData from "../data/blogsData";

const BlogPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = blogsData.find((b) => b.id === id);

  // Scroll to top when page opens
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Blog not found
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 px-6 max-w-6xl mx-auto text-white">

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-sky-400 hover:underline"
      >
        ← Back
      </button>

      {/* Blog Title */}
      <h1 className="text-3xl font-heading font-semibold mb-2">
        {blog.title}
      </h1>

      {/* Blog Subtitle */}
      {blog.subtitle && (
        <p className="text-gray-400 mb-6">{blog.subtitle}</p>
      )}

      {/* Blog Image */}
      <img
        src={blog.img}
        alt={blog.title}
        className="w-full max-h-[420px] object-cover rounded-xl mb-8 border border-white/20"
      />

      {/* Blog Content */}
      <div className="text-gray-300 leading-relaxed whitespace-pre-line">
        {blog.content}
      </div>
    </div>
  );
};

export default BlogPage;
