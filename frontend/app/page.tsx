export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between border-b border-slate-800 px-8 py-5">
        <div className="text-2xl font-bold">
          Code<span className="text-blue-400">Mentor</span>
        </div>

        <div className="flex gap-4">
          <button className="rounded-lg px-4 py-2 text-slate-300 hover:bg-slate-800">
            Log in
          </button>

          <button className="rounded-lg bg-blue-500 px-4 py-2 font-semibold hover:bg-blue-600">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto flex max-w-5xl flex-col items-center px-6 py-24 text-center">
        <div className="mb-6 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-300">
          AI-powered programming learning
        </div>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
          Learn to code.
          <br />
          <span className="text-blue-400">Understand your mistakes.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          CodeMentor helps you debug code, understand programming concepts,
          study your course materials, and improve your problem-solving skills.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-xl bg-blue-500 px-6 py-3 font-semibold hover:bg-blue-600">
            Start Learning
          </button>

          <button className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-300 hover:bg-slate-800">
            Try Code Debugger
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto grid max-w-5xl gap-6 px-6 pb-24 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <div className="mb-4 text-3xl">🐛</div>
          <h2 className="text-xl font-semibold">Debug Smarter</h2>
          <p className="mt-3 text-slate-400">
            Get guided hints and explanations instead of simply receiving the
            answer.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <div className="mb-4 text-3xl">📚</div>
          <h2 className="text-xl font-semibold">Study Your Materials</h2>
          <p className="mt-3 text-slate-400">
            Ask questions about your uploaded course materials and find the
            information you need.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <div className="mb-4 text-3xl">📈</div>
          <h2 className="text-xl font-semibold">Track Progress</h2>
          <p className="mt-3 text-slate-400">
            See your performance, identify weak topics, and improve over time.
          </p>
        </div>
      </section>
    </main>
  );
}
