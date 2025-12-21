import React from "react";

const blogs = [
  {
    title: "Automate Everything",
    desc: "BriskBold AI makes your daily tasks run on autopilot.",
    img: "/blog1.jpg",
  },
  {
    title: "Work Faster",
    desc: "With BriskBold, your business completes tasks in seconds, not hours.",
    img: "/blog2.jpg",
  },
  {
    title: "Zero Errors",
    desc: "AI automation removes mistakes and keeps your workflow clean.",
    img: "/blog3.jpg",
  },
  {
    title: "Smarter Decisions",
    desc: "BriskBold turns your data into instant insights.",
    img: "/blog4.jpg",
  },
  {
    title: "Save Time, Save Money",
    desc: "Automation reduces workload and cuts operational costs.",
    img: "/blog5.jpg",
  },
  {
    title: "Always On",
    desc: "BriskBold AI works 24/7 even when you don’t.",
    img: "/blog6.jpg",
  },
];

const Blogs = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h3
        className="heading-primary"
          >
            OUR BLOGS
          </h3>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="relative overflow-hidden"
              style={{
                height: "220px",
                borderRadius: "16px",
                border: "1px solid rgba(56,189,248,0.35)",
              }}
            >
              {/* Background Image */}
              <img
                src={blog.img}
                alt={blog.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 p-5">
                <h4
                  style={{
                    fontFamily: "Creato Display",
                    fontWeight: 600,
                    fontSize: "20px",
                    color: "#FFFFFF",
                    marginBottom: "6px",
                  }}
                >
                  {blog.title}
                </h4>

                <p
                  style={{
                    fontFamily: "Creato Display",
                    fontWeight: 400,
                    fontSize: "14px",
                    color: "#D1D5DB",
                    lineHeight: "1.4",
                  }}
                >
                  {blog.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blogs;
