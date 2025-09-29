export default function Home() {
  return (
    <div>
      <main>
        <div className="image-container">
          <div className="text-white pt-24 flex">
            <div className="flex-1 flex justify-center">
              <div>
                <p className="text-xl">Hi I am Toke</p>
                <h1 className="text-3xl font-bold">
                  Freelance Software Engineer
                </h1>{" "}
                <p className="text-2xl">
                  I create{" "}
                  <span className="text-[#FFE066]">
                    scalable robust solutions
                  </span>{" "}
                  across the stack.
                </p>
              </div>
            </div>
            <div className="flex-1"></div>
          </div>
        </div>
        <div className="mt-[45px]" style={{ background: "var(--color-paper)" }}>
          <div className="flex flex-wrap justify-center items-center gap-8 py-8 w-full max-w-[1100px] mx-auto">
            {/* First tile: Portfolio link */}
            <a
              href="/projects"
              className="flex items-center justify-center bg-white rounded-xl font-bold text-2xl shadow-md hover:scale-[1.02] transition"
              style={{
                width: "48%",
                minWidth: "400px",
                height: "480px",
                textDecoration: "none",
              }}
            >
              Portfolio
            </a>
            {/* Second tile: Pendulum link with blurred image */}
            <a
              href="/pendulum"
              className="flex flex-col items-center justify-center bg-white rounded-xl font-bold text-2xl shadow-md hover:scale-[1.02] transition overflow-hidden"
              style={{
                width: "48%",
                minWidth: "400px",
                height: "480px",
                textDecoration: "none",
                position: "relative",
              }}
            >
              <img
                src="/assets/pendulum.png"
                alt="Pendulum simulation preview"
                className="absolute inset-0 w-full h-full object-cover blur-sm opacity-80 z-0"
                style={{ filter: "blur(4px)", objectFit: "cover" }}
              />
              <span className="relative z-10 text-white drop-shadow-lg">
                Pendulum Simulation
              </span>
            </a>
            {/* Third and fourth tiles: placeholders */}
            <div
              className="flex items-center justify-center bg-white rounded-xl font-bold text-2xl shadow-md"
              style={{
                width: "48%",
                minWidth: "400px",
                height: "480px",
              }}
            >
              Place holder 3
            </div>
            <div
              className="flex items-center justify-center bg-white rounded-xl font-bold text-2xl shadow-md"
              style={{
                width: "48%",
                minWidth: "400px",
                height: "480px",
              }}
            >
              Place holder 4
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
