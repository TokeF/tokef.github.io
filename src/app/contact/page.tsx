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
            <span className="inline-block w-6 text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
              </svg>
            </span>
            <a
              href="https://www.linkedin.com/in/toke-frederiksen/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
