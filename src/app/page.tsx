import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <div className="image-container">
          <div className="text-white pt-10 sm:pt-24 flex flex-col sm:flex-row">
            <div className="flex-1 flex justify-center px-2 sm:px-0">
              <div>
                <p className="text-base sm:text-xl">Hi I am Toke</p>
                <h1 className="text-xl sm:text-3xl font-bold">
                  Freelance Software Engineer
                </h1>
                <p className="text-lg sm:text-2xl">
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
        <div className="mt-6 sm:mt-[45px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 py-6 sm:py-8 w-full max-w-[1100px] mx-auto px-6 sm:px-10">
            {[
              {
                href: "/portfolio",
                img: "/assets/project/portfolio.png",
                alt: "Portfolio preview",
                label: "Portfolio",
              },
              {
                href: "/pendulum",
                img: "/assets/project/pendulum2.png",
                alt: "Pendulum simulation preview",
                label: "Pendulum Simulation",
              },
              {
                href: "/projects",
                img: "/assets/project/projects.png",
                alt: "Projects preview",
                label: "Projects",
              },
              {
                href: "/contact",
                img: "/assets/project/collaboration.png",
                alt: "Contact preview",
                label: "Reach Out 🤝",
              },
            ].map((tile) => (
              <a
                key={tile.href}
                href={tile.href}
                className="flex flex-col items-center justify-center bg-white rounded-xl font-bold text-lg sm:text-2xl shadow-md hover:scale-[1.02] transition overflow-hidden min-h-[180px] sm:min-h-[320px] aspect-[1/1] relative"
                style={{ textDecoration: "none" }}
              >
                <Image
                  src={tile.img}
                  alt={tile.alt}
                  fill
                  className="absolute inset-0 w-full h-full object-cover blur-sm opacity-80 z-0"
                  style={{ filter: "blur(4px)", objectFit: "cover" }}
                />
                <span className="relative z-10 text-black drop-shadow-lg text-center px-2">
                  {tile.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
