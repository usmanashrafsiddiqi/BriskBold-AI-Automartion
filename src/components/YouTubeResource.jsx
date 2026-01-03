import React, { useState } from "react";
import "./YouTubeResource.css";

const YouTubeResource = () => {

  const slides = [
    { img: "/ai1.png", title: "AI is no longer just supporting decisions", link: "https://www.youtube.com/shorts/yXPG6W7e3kE" },
    { img: "/blog4.jpg", title: "BriskBold — Automate tasks, save time, work smarter.", link: "https://www.youtube.com/shorts/yVLDRBar7CQ" },
    { img: "/ai3.png", title: "Automation is the new business infrastructure", link: "https://www.youtube.com/shorts/Ah91914siuc" },
    { img: "/blog3.jpg", title: "AI Isn’t Coming. It’s Already Winning the Market. ", link: "https://www.youtube.com/shorts/uzFXG77mA38" },
    { img: "/blog5.jpg", title: "Consistency builds confidence—and that’s where trust begins.", link: "https://www.youtube.com/shorts/UmXFYgW2TsM" },
    { img: "/ai2.png", title: "Stop wasting time on tasks.", link: "https://www.youtube.com/shorts/LKMvTw9FtbM" },
    
  ];

  const [current, setCurrent] = useState(2);

  const prevSlide = () =>
    setCurrent((p) => (p - 1 + slides.length) % slides.length);

  const nextSlide = () =>
    setCurrent((p) => (p + 1) % slides.length);

  return (
    <div id="resouces" className="yt-container">

      <h2 className="yt-title">YOUTUBE RESOURCE</h2>

      <div className="yt-carousel">

        <button className="yt-arrow left" onClick={prevSlide}>❮</button>

        <div className="yt-cards">
          {slides.map((slide, index) => {
            const offset = index - current;

            return (
              <a
                key={index}
                href={slide.link}
                target="_blank"
                rel="noreferrer"
                className="yt-card"
                style={{
                  transform: `
                    translateX(${offset * 180}px)
                    scale(${index === current ? 1.1 : 0.85})
                    rotateY(${offset * -15}deg)
                  `,
                  zIndex: 100 - Math.abs(offset),
                  opacity: Math.abs(offset) > 2 ? 0 : 1,
                }}
              >
                <div className="yt-inner">
                  <img src={slide.img} alt={slide.title} />
                </div>
              </a>
            );
          })}
        </div>

        <button className="yt-arrow right" onClick={nextSlide}>❯</button>

      </div>

      <p className="yt-caption">{slides[current].title}</p>
    </div>
  );
};

export default YouTubeResource;
