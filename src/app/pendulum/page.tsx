"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  return (
    <main>
      <h2>Pendulum motion simulation</h2>
      <SetupCanvas />
    </main>
  );
}

function SetupCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let theta = 0;
    let omega = 0.02;
    let L = 50;
    const pivot = { x: canvas.width / 2, y: canvas.height / 2 };
    const bob = { x: canvas.width / 2, y: canvas.height / 2 };

    function draw() {
      if (!ctx) return;
      if (!canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update position for current drawin settings
      const xBob = bob.x + L * Math.sin(theta);
      const yBob = bob.y + L * Math.cos(theta);

      // Pivot point
      ctx.beginPath();
      ctx.arc(pivot.x, pivot.y, 5, 0, 2 * Math.PI);
      ctx.fillStyle = "green";
      ctx.fill();

      // Moving circle
      ctx.beginPath();
      ctx.arc(xBob, yBob, 10, 0, 2 * Math.PI);
      ctx.fillStyle = "black";
      ctx.fill();
    }

    function animate() {
      theta += omega;
      draw();
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width="600"
      height="600"
      style={{ background: "white", border: "1px solid red" }}
    ></canvas>
  );
}
