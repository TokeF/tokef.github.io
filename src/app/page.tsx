export default function Home() {
  return (
    <div>
      <main>
        <div className="image-container">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/29/14/39/web-1012468_1280.jpg"
            alt="banner image"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "300px",
              zIndex: -1,
            }}
          />
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
        <div
          className="mt-[45px]"
          style={{
            background: "linear-gradient(90deg,#3B617D, #BE3FBC)",
          }}
        >
          <div className="flex flex-wrap justify-center items-center gap-8 py-8 w-full max-w-[1100px] mx-auto">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="flex items-center justify-center bg-white rounded-xl font-bold text-2xl shadow-md"
                style={{
                  width: "48%",
                  minWidth: "400px",
                  height: "480px",
                }}
              >
                {`Place holder ${n}`}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
