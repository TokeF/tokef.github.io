export default function ContactPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-12 bg-gray-50">
      <div className="bg-white rounded-xl shadow p-8 max-w-md w-full flex flex-col items-center gap-4 border border-gray-100">
        <h1 className="text-3xl font-bold mb-2 text-center">Contact</h1>
        <p className="text-gray-700 text-center mb-4">
          Feel free to reach out for freelance work, collaboration, or just to
          connect!
        </p>
        <div className="flex flex-col gap-3 w-full">
          <div className="flex items-center gap-3">
            <span className="inline-block w-6 text-blue-500">📧</span>
            <a
              href="mailto:toke@example.com"
              className="text-blue-700 underline break-all"
            >
              tf.software@outlook.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-block w-6 text-blue-500">💼</span>
            <a
              href="https://www.linkedin.com/in/tokef"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline"
            >
              linkedin.com/in/tokef
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
