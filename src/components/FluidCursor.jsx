import { useEffect, useRef } from "react";

export default function FluidCursor() {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let hue = 0;
    let lastX = 0;
    let lastY = 0;
    let firstMove = true;

    class Particle {
      constructor(x, y, dx, dy, size) {
        this.x = x;
        this.y = y;
        this.dx = dx; // velocity X (front direction)
        this.dy = dy; // velocity Y (front direction)
        this.size = size || Math.random() * 12 + 8;
        this.alpha = 1;
      }
      update() {
        this.x += this.dx;
        this.y += this.dy;
        this.alpha -= 0.03; // fade out
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${hue}, 95%, 65%, ${this.alpha})`;
        ctx.shadowBlur = 25;
        ctx.shadowColor = `hsl(${hue}, 95%, 65%)`;
        ctx.fill();
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((p, index) => {
        p.update();
        if (p.alpha <= 0) particles.current.splice(index, 1);
        else p.draw();
      });

      hue = (hue + 1) % 360;
      requestAnimationFrame(animate);
    };
    animate();

    const move = (e) => {
      if (firstMove) {
        lastX = e.clientX;
        lastY = e.clientY;
        firstMove = false;
      }

      const dx = (e.clientX - lastX) * 0.3; // movement velocity X
      const dy = (e.clientY - lastY) * 0.3; // movement velocity Y

      // Front: concentrated energetic particles
      for (let i = 0; i < 5; i++) {
        const offsetX = (Math.random() - 0.5) * 8;
        const offsetY = (Math.random() - 0.5) * 8;
        particles.current.push(
          new Particle(e.clientX + offsetX, e.clientY + offsetY, dx, dy)
        );
      }

      // Trailing side: more spread out, slower, dissipating particles
      for (let i = 0; i < 4; i++) {
        const offsetX = (Math.random() - 0.5) * 30;
        const offsetY = (Math.random() - 0.5) * 30;
        particles.current.push(
          new Particle(lastX + offsetX, lastY + offsetY, dx * 0.1, dy * 0.1)
        );
      }

      lastX = e.clientX;
      lastY = e.clientY;
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0, // behind website content
      }}
    />
  );
}
