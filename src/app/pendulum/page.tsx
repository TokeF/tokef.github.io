"use client";

import { useEffect, useRef } from "react";

// Need KaTeX CSS for built in styling
import "katex/dist/katex.min.css";
// @ts-expect-error // no types for ts
import { BlockMath, InlineMath } from "react-katex";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "50vh",
      }}
    >
      <h2>Pendulum motion simulation</h2>
      <SetupCanvas />
      <section className="max-w-xl mt-8 p-4 bg-gray-50 rounded-lg shadow">
        <h3>About this simulation</h3>
        <p>
          This interactive canvas shows a simple pendulum, modeled using the
          Euler method for numerical integration..
        </p>

        <h3>Deriving the physics of pendulum motion</h3>
        <p>
          Newtons second law states that &quot;The acceleration
          <InlineMath>{"\\alpha"}</InlineMath> of an object, is proportional to
          the sum of all forces <InlineMath>{"\\vec F"}</InlineMath> acting on
          it, and inversely proportional to its mass m &quot;. Formulated as:
        </p>
        <BlockMath
          math={
            "\\alpha = \\frac{\\vec F}{m} \\Rightarrow \\vec F= \\frac{m}{\\alpha}"
          }
        />
      </section>
    </main>
  );

  function SetupCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      let theta = Math.PI / 4; // initial angle (45 deg)
      let omega = 0; // initial angular velocity
      const scale = 100; // 1 m = 100 pixels
      const L_meters = 1.5; // physics length in meters for calculations
      const L_pixels = L_meters * scale; // scaled for drawing
      const g = 9.81; // gravity (m/s^2)
      const mass = 0.1; // mass of the bob (kg)
      const fps = 60;
      const dt = 1 / fps;
      const pivot = { x: canvas.width / 2, y: canvas.height / 2 };
      const bob = { x: canvas.width / 2, y: canvas.height / 2 };

      function update() {
        // Euler method for pendulum motion
        // Torque = -m * g * L * sin(theta)
        // theta = Torque / (m * L^2) = -(g / L) * sin(theta)
        const torque = -mass * g * L_meters * Math.sin(theta);
        const alpha = torque / (mass * L_meters * L_meters); // angular acceleration
        omega += alpha * dt; // update angular velocity
        theta += omega * dt; // update angle

        draw();
        requestAnimationFrame(update);
      }

      function draw() {
        if (!ctx) return;
        if (!canvas) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update position for current drawin settings
        const xBob = bob.x + L_pixels * Math.sin(theta);
        const yBob = bob.y + L_pixels * Math.cos(theta);

        // Draw pendulum rod
        ctx.beginPath();
        ctx.moveTo(pivot.x, pivot.y);
        ctx.lineTo(xBob, yBob);
        ctx.strokeStyle = "gray";
        ctx.lineWidth = 2;
        ctx.stroke();

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

      update();
    }, []);

    return (
      <canvas
        ref={canvasRef}
        width="600"
        height="600"
        style={{ background: "white", border: "1px solid red" }}
      ></canvas>
    );

    return (
      <canvas
        ref={canvasRef}
        width="600"
        height="600"
        style={{ background: "white", border: "1px solid red" }}
      ></canvas>
    );
  }
}
