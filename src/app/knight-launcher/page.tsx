export default function KnightLauncher() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] w-full relative mx-8">
      <iframe
        src="/assets/knight-launcher/index.html"
        width="1050"
        height="630"
        className="rounded shadow"
        title="Knight Launcher Game"
      ></iframe>
      <p className="mt-4 text-sm text-gray-500 text-center max-w-xl">
        Work in progress. Use UP/DOWN arrow to adjust ballista. Use space to
        launch knight, reset, and bounce (when you have the smash shield item).
      </p>
    </div>
  );
}
