import React, { useEffect, useRef } from "react";

const AuroraBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const bands = [
      { color: "rgba(0,180,100,0.32)", amp: 90, freq: 0.002, speed: 0.12, offset: 0 }, // deep green
      { color: "rgba(0,90,200,0.25)", amp: 130, freq: 0.0015, speed: 0.09, offset: 200 }, // deep blue
      { color: "rgba(100,0,180,0.22)", amp: 110, freq: 0.0018, speed: 0.07, offset: 400 }, // deep purple
    ];

    let frame = 0;
    let animationId: number;

    function drawAurora() {
      ctx.clearRect(0, 0, width, height);
      bands.forEach((band, i) => {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(0, height);
        for (let x = 0; x <= width; x += 2) {
          const y =
            height * 0.3 +
            band.offset +
            Math.sin((x + frame * band.speed * 40 + i * 100) * band.freq) * band.amp +
            Math.sin((x * 0.5 + frame * band.speed * 20 + i * 50) * band.freq * 2) * (band.amp / 2);
          ctx.lineTo(x, y);
        }
        ctx.lineTo(width, height);
        ctx.closePath();
        ctx.fillStyle = band.color;
        ctx.shadowColor = band.color;
        ctx.shadowBlur = 120;
        ctx.fill();
        ctx.restore();
      });
      frame++;
      animationId = requestAnimationFrame(drawAurora);
    }

    drawAurora();

    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -50,
        pointerEvents: "none",
        background: "transparent",
      }}
    />
  );
};

export default AuroraBackground; 