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
                  <span className="bg-gradient-to-r from-[#AE445A] to-[#4B4376] bg-clip-text text-transparent">
                    Scalable robust solutions
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
              href="/portfolio"
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
                src="/assets/portfolio.png"
                alt="Portfolio preview"
                className="absolute inset-0 w-full h-full object-cover blur-sm opacity-80 z-0"
                style={{ filter: "blur(4px)", objectFit: "cover" }}
              />
              <span className="relative z-10 text-black drop-shadow-lg">
                Portfolio
              </span>
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
                src="/assets/pendulum2.png"
                alt="Pendulum simulation preview"
                className="absolute inset-0 w-full h-full object-cover blur-sm opacity-80 z-0"
                style={{ filter: "blur(4px)", objectFit: "cover" }}
              />
              <span className="relative z-10 text-black drop-shadow-lg">
                Pendulum Simulation
              </span>
            </a>
            <a
              href="/projects"
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
                src="/assets/projects.png"
                alt="colab"
                className="absolute inset-0 w-full h-full object-cover blur-sm opacity-80 z-0"
                style={{ filter: "blur(4px)", objectFit: "cover" }}
              />
              <span className="relative z-10 text-black drop-shadow-lg">
                Projects
              </span>
            </a>
            <a
              href="/contact"
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
                src="/assets/collaboration.png"
                alt="colab"
                className="absolute inset-0 w-full h-full object-cover blur-sm opacity-80 z-0"
                style={{ filter: "blur(4px)", objectFit: "cover" }}
              />
              <span className="relative z-10 text-black drop-shadow-lg">
                Reach Out 🤝
              </span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
