"use client";

import { useEffect, useRef, useState } from "react";

// Need KaTeX CSS for built in styling
import "katex/dist/katex.min.css";
// @ts-expect-error // no types for ts
import { BlockMath, InlineMath } from "react-katex";

export default function Home() {
  const [angle, setAngle] = useState(45); // degrees
  const [rodLength, setRodLength] = useState(1.5); // meters
  const [gravity, setGravity] = useState(9.81); // m/s^2, default Earth
  const [dampening, setDampening] = useState(0); // friction coefficient

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
      <h2 className="text-3xl font-bold text-white">
        Pendulum motion simulation
      </h2>
      <div className="flex flex-row gap-8 items-start w-full justify-center mt-4">
        <SetupCanvas
          angle={angle}
          rodLength={rodLength}
          gravity={gravity}
          dampening={dampening}
        />
        <form
          className="flex flex-col gap-4 p-4 bg-gray-100 rounded shadow min-w-[220px]"
          onSubmit={(e) => e.preventDefault()}
        >
          <label className="flex flex-col text-sm font-medium">
            Initial angle (degrees)
            <input
              type="number"
              min="0"
              max="180"
              value={angle}
              onChange={(e) => setAngle(Number(e.target.value))}
              className="mt-1 p-1 border rounded"
            />
          </label>
          <label className="flex flex-col text-sm font-medium">
            Rod length (meters)
            <input
              type="number"
              min="0.1"
              step="0.1"
              value={rodLength}
              onChange={(e) => setRodLength(Number(e.target.value))}
              className="mt-1 p-1 border rounded"
            />
          </label>
          <label className="flex flex-col text-sm font-medium">
            Gravity
            <select
              className="mt-1 p-1 border rounded"
              value={gravity}
              onChange={(e) => setGravity(Number(e.target.value))}
            >
              <option value={9.81}>Earth (9.81 m/s²)</option>
              <option value={1.62}>Moon (1.62 m/s²)</option>
              <option value={3.71}>Mars (3.71 m/s²)</option>
              <option value={24.79}>Jupiter (24.79 m/s²)</option>
              <option value={274}>Sun (274 m/s²)</option>
            </select>
          </label>
          <label className="flex flex-col text-sm font-medium">
            Dampening coefficient
            <input
              type="number"
              min="0"
              step="0.01"
              value={dampening}
              onChange={(e) => setDampening(Number(e.target.value))}
              className="mt-1 p-1 border rounded"
            />
            <span className="text-xs text-gray-500">0 = no friction</span>
          </label>
        </form>
      </div>
      <section className="max-w-xl mt-8 p-4 bg-gray-50 rounded-lg shadow">
        <h3 className="text-xl font-bold">What is this?</h3>
        <p>
          This interactive canvas demonstrates a simple pendulum, modeled using
          the Euler method for numerical integration.
        </p>

        <h3 className="text-xl font-bold">
          Deriving the physics of pendulum motion
        </h3>
        <p>
          Consider an ideal mathematical model of a pendulum. A point mass, is
          suspended from a fixed pivot point by a rigid, weightless rod.
          Newton's second law of motion can then be used to find the force
          acting on the mass. The law states that &quot;The net force{" "}
          <InlineMath>{"\\vec F"}</InlineMath> on an object is proportional to
          the acceleration <InlineMath>{"\\alpha"}</InlineMath> and the mass m
          of the object.&quot; Formulated as:
        </p>
        <BlockMath math={"\\vec F = m \\alpha"} />
        <p>
          Two forces act on the bob: the tension in the rod and the force of
          gravity. The tension force exerted by the rod is cancelled by the
          component of gravity acting along the rod. This is easily seen when
          the pendulum is at rest in the vertical position. Because the bob is
          restricted to move in a circle, the gravitational force can be split
          into tangential and radial components. Only the tangential component
          is of interest, since the radial is cancelled by tension, and can be
          derived using trigonometry:
        </p>
        <BlockMath math={"F_{tan} = -mg \\sin(\\theta) = m\\alpha"} />
        <p>
          Where g is the gravitational acceleration, and theta is the angle
          between the rod and the vertical. The negative sign indicates that
          this force acts to restore the pendulum to its equilibrium position.
        </p>
        <div className="flex flex-col items-center mb-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/66/Pendulum_gravity.svg"
            alt="Diagram of a simple pendulum"
            className="w-72 h-auto mb-2 border rounded shadow"
          />
          <span className="text-xs text-gray-500">
            Figure: Simple pendulum diagram.{" "}
            <sup>
              <a href="#pendulum-wiki-footnote" className="underline">
                [1]
              </a>
            </sup>
          </span>
        </div>
        <h3 className="text-xl font-bold">
          Arriving at the motion of a pendulum
        </h3>
        <p>
          The motion of the pendulum is defined by the angle{" "}
          <InlineMath>{"\\theta"}</InlineMath>, in radians. The distance moved
          by the bob is given by the arc length{" "}
          <InlineMath>{"s=l \\theta"}</InlineMath>, where l is the rod length.
          The angular velocity is the time derivative of distance, and the
          angular acceleration is the time derivative of the velocity:
        </p>
        <BlockMath math={"v_{tan} = \\frac{ds}{dt}=l \\frac{d\\theta}{dt}"} />
        <BlockMath
          math={"\\alpha_{tan} = \\frac{dv}{dt}=l \\frac{d^2\\theta}{dt^2}"}
        />
        <p>
          Using the previous force equation, we finally arrive at the second
          order differential equation describing the motion of a simple
          pendulum:
        </p>
        <BlockMath
          math={
            "-mg \\sin(\\theta) = ml \\frac{d^2\\theta}{dt^2} \\Leftrightarrow"
          }
        />
        <BlockMath
          math={"\\frac{d^2\\theta}{dt^2} + \\frac{g}{l} \\sin(\\theta) = 0"}
        />
        <p>
          Because of the sine function, this is a non-linear second order
          ordinary differential equation. It is difficult to solve, and a
          solution cannot be written using elementary functions (continuous in
          their domain). Thus, for practical purposes, numerical methods like
          Euler or Runge-Kutta methods can be used to simulate the pendulum
          motion.
        </p>
      </section>
      <footer className="max-w-xl mx-auto mt-2 text-xs text-gray-500">
        <span id="pendulum-wiki-footnote">
          [1] Image source:{" "}
          <a
            href="https://en.wikipedia.org/wiki/Pendulum_(mechanics)#/media/File:Pendulum_gravity.svg"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Wikipedia - Pendulum (mechanics)
          </a>
        </span>
      </footer>
    </main>
  );

  function SetupCanvas({
    angle,
    rodLength,
    gravity,
    dampening,
  }: {
    angle: number;
    rodLength: number;
    gravity: number;
    dampening: number;
  }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      let theta = (angle * Math.PI) / 180; // initial angle, degrees to radians
      let omega = 0; // initial angular velocity
      const scale = 100; // 1 m = 100 pixels
      const L_meters = rodLength; // physics length in meters for calculations
      const g = gravity; // gravity (m/s^2)
      const mass = 0.1; // mass of the bob (kg)
      const fps = 60;
      const dt = 1 / fps;
      const pivot = { x: canvas.width / 2, y: canvas.height / 2 };
      const bob = { x: canvas.width / 2, y: canvas.height / 2 };

      function update() {
        const L_pixels = L_meters * scale; // recalc in case rodLength changes
        // Euler method for pendulum motion with friction
        // Torque = -m * g * L * sin(theta)
        // theta = Torque / (m * L^2) = -(g / L) * sin(theta)
        // Add friction: -dampening * omega
        const torque = -mass * g * L_meters * Math.sin(theta);
        const alpha = torque / (mass * L_meters * L_meters) - dampening * omega; // angular acceleration with friction
        omega += alpha * dt; // update angular velocity
        theta += omega * dt; // update angle

        draw(L_pixels);
        requestAnimationFrame(update);
      }

      function draw(L_pixels: number) {
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
        ctx.strokeStyle = "#3C3D37";
        ctx.lineWidth = 2;
        ctx.stroke();

        // Pivot point
        ctx.beginPath();
        ctx.arc(pivot.x, pivot.y, 5, 0, 2 * Math.PI);
        ctx.fillStyle = "#697565";
        ctx.fill();

        // Moving circle
        ctx.beginPath();
        ctx.arc(xBob, yBob, 10, 0, 2 * Math.PI);
        ctx.fillStyle = "#1E201E";
        ctx.fill();
      }

      update();
    }, [angle, rodLength, gravity, dampening]);

    return (
      <canvas
        ref={canvasRef}
        width="600"
        height="600"
        style={{ backgroundColor: "#ECDFCC", border: "1px solid black" }}
      ></canvas>
    );
  }
}
